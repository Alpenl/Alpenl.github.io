import{_ as s,D as n,B as a,ah as p}from"./chunks/framework.kYnPRA0Y.js";const g=JSON.parse('{"title":"Frp 0.61 docker(toml配置)新手指北","description":"","frontmatter":{"title":"Frp 0.61 docker(toml配置)新手指北","date":"2025-02-17T00:00:00.000Z","tags":["教程","Frp"]},"headers":[],"relativePath":"posts/2025/02/frp 0.61 docker(toml配置)新手指北.md","filePath":"posts/2025/02/frp 0.61 docker(toml配置)新手指北.md","lastUpdated":1739795493000}'),l={name:"posts/2025/02/frp 0.61 docker(toml配置)新手指北.md"},e=p(`<blockquote><p>✨文章摘要（AI生成） 本文介绍了frp内网穿透的配置，适用于将必要服务映射到公网使用。文中详细阐述了frps（服务端）和frpc（客户端）的配置，包括TCP和HTTP流量转发、docker-compose设置及相关鉴权、安全与日志配置。</p></blockquote><h1 id="frp-0-61-docker-toml配置-新手指北" tabindex="-1">Frp 0.61 docker(toml配置)新手指北 <a class="header-anchor" href="#frp-0-61-docker-toml配置-新手指北" aria-label="Permalink to &quot;Frp 0.61 docker(toml配置)新手指北&quot;">​</a></h1><h2 id="引" tabindex="-1">引 <a class="header-anchor" href="#引" aria-label="Permalink to &quot;引&quot;">​</a></h2><p>由于寒假开学，家中PVE虚拟机中的服务器无法在学校使用，研究后发现学校不支持ipv，故折腾内网穿透将fnOS，ubuntu等资源映射在公网服务器以便使用，苦学三天后终于入门，将这些配置记录便于之后再次配置使用。</p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p><a href="https://github.com/fatedier/frp" target="_blank" rel="noreferrer">frp</a>分为frps和frpc，前者是服务端，后者是客户端，frp可以转发多种流量，但本文章仅说明最常用的两种流量转发，即TCP和HTTP。</p><p>TCP可以近似看做端口转发，直接将端口的流量进行透明数据转发，而HTTP则近似于nginx反向代理，所以服务端可以只用一个端口根据域名将不同的网站转发到不同的后端</p><h2 id="frps配置" tabindex="-1">Frps配置 <a class="header-anchor" href="#frps配置" aria-label="Permalink to &quot;Frps配置&quot;">​</a></h2><p><strong>docker-compose配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &quot;3.3&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  frps:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    image: snowdreamtech/frps:0.61</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container_name: frps</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    hostname: frps</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    network_mode: host</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - /etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - ./conf/frps.toml:/etc/frp/frps.toml:ro</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - ./logs:/frp/logs</span></span></code></pre></div><p><strong>Frps.toml配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 监听地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bindAddr = &quot;0.0.0.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 监听端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bindPort = 7000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 监听 KCP 协议端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kcpBindPort = 7000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 监听 HTTP 协议端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vhostHTTPPort = 8080</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 监听 HTTPS 协议端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vhostHTTPSPort = 4443</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 允许代理绑定的服务端端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>allowPorts = [</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  { start = 2000, end = 3000 },</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  { single = 3001 },</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  { single = 3003 },</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  { start = 4000, end = 50000 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 鉴权配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 鉴权方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>auth.method = &quot;token&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Token</span></span>
<span class="line"><span></span></span>
<span class="line"><span>auth.token = &quot;xxxxxxxxxx&quot; #自行修改</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>log.to = &quot;/frp/logs/frps.log&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>log.level = &quot;debug&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>log.maxDays = 180</span></span>
<span class="line"><span></span></span>
<span class="line"><span>log.disablePrintColor = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span>subdomainHost = &quot;abc.com&quot;  #自行修改</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 仪表盘配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>webServer.addr = &quot;0.0.0.0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>webServer.port = 7500</span></span>
<span class="line"><span></span></span>
<span class="line"><span>webServer.user = &quot;admin&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>webServer.password = &quot;xxxxxxxxx&quot;  #自行修改</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否提供 Prometheus 监控接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>enablePrometheus = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 允许客户端设置的最大连接池大小</span></span>
<span class="line"><span></span></span>
<span class="line"><span>transport.maxPoolCount = 1000</span></span></code></pre></div><p>以上配置中token、域名和password需要自行修改，域名填一级域名即可，后面HTTP反向代理会用到此域名的二级域名用于区分不同的网站</p><h2 id="frpc配置" tabindex="-1">Frpc配置 <a class="header-anchor" href="#frpc配置" aria-label="Permalink to &quot;Frpc配置&quot;">​</a></h2><p><strong>docker-compose配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &#39;3.3&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  frpc:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    image: snowdreamtech/frpc:0.61</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container_name: frpc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    network_mode: host</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - /etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - ./conf:/etc/frp:ro</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - ./logs:/frp/logs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - /root/.acme.sh/xxxxxx:/etc/ssl #证书路径自行配置</span></span></code></pre></div><p><strong>frpc.toml配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 连接配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 连接服务端的地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>serverAddr = &quot;x.x.x.x&quot; #服务端IP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 连接服务端的端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>serverPort = 7000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 鉴权配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 鉴权方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>auth.method = &quot;token&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Token</span></span>
<span class="line"><span></span></span>
<span class="line"><span>auth.token = &quot;xxxxxxxxx&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志日志</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 日志路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>log.to = &quot;/frp/logs/frpc.log&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 日志级别</span></span>
<span class="line"><span></span></span>
<span class="line"><span>log.level = &quot;info&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 日志文件最多保留天数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>log.maxDays = 30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 禁用标准输出中的日志颜色</span></span>
<span class="line"><span></span></span>
<span class="line"><span>log.disablePrintColor = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span>includes = [&quot;/etc/frp/confd/*.toml&quot;]</span></span></code></pre></div><p>自行修改配置，与服务端对应，然后在/etc/frp中新建/confd文件夹，以后需要添加配置在此文件夹内新建xxx.toml即可，以下给出TCP和HTTP的toml示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[[proxies]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 连接名称</span></span>
<span class="line"><span></span></span>
<span class="line"><span>name = &quot;Home Assistant&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 连接类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type = &quot;tcp&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>localIP = &quot;192.168.101.194&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>localPort = 8123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>remotePort = 8122</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 是否启用加密功能，启用后该代理和服务端之间的通信内容都会被加密传输</span></span>
<span class="line"><span></span></span>
<span class="line"><span>transport.useEncryption = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 是否启用压缩功能，启用后该代理和服务端之间的通信内容都会被压缩传输</span></span>
<span class="line"><span></span></span>
<span class="line"><span>transport.useCompression = false</span></span></code></pre></div><ul><li>localIP表示本地局域网IP</li><li>localPort表示本地端口</li><li>remotePort表示远程端口，按以上示例即访问服务端IP:8122</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## HTTP 连接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[proxies]]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 连接名称</span></span>
<span class="line"><span></span></span>
<span class="line"><span>name = &quot;EMBY&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 连接类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type = &quot;https&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 子域名列表，用户访问服务端此域名的流量会被转发到对应的本地服务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>subdomain = &quot;emby&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 是否启用加密功能，启用后该代理和服务端之间的通信内容都会被加密传输</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#transport.useEncryption = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 是否启用压缩功能，启用后该代理和服务端之间的通信内容都会被压缩传输</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#transport.useCompression = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span>[proxies.plugin]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type = &quot;https2http&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>localAddr = &quot;192.168.101.236:8091&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTPS 证书相关的配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>crtPath = &quot;/etc/ssl/*.abc.com.cer&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>keyPath = &quot;/etc/ssl/*.abc.com.key&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hostHeaderRewrite = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>requestHeaders.set.x-from-where = &quot;frp&quot;</span></span></code></pre></div><p>此类型为https，subdomain表示二级域名，如示例即emby.abc.com，localAddr即局域网中需要反代的ip:端口，下面证书按照自己映射的填写，建议申请通配符域名证书，最后浏览器输入emby.abc.com:4443即可成功访问（注意服务端中http和https的端口不同）</p><p><a href="https://blog.shattered.top/archives/410" target="_blank" rel="noreferrer">本文大部分参考网络文章地址附上</a></p>`,24),c=[e];function i(t,o,r,d,u,h){return a(),n("div",null,c)}const f=s(l,[["render",i]]);export{g as __pageData,f as default};
