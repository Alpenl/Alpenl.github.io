import{_ as e,D as s,B as i,ah as t}from"./chunks/framework.kYnPRA0Y.js";const u=JSON.parse('{"title":"写个 docker+nginx 部 https 的模板","description":"","frontmatter":{"title":"写个 docker+nginx 部 https 的模板","date":"2024-01-12T00:00:00.000Z","tags":["docker","nginx","https","shell","deploy"]},"headers":[],"relativePath":"posts/2024/01/12写个docker+nginx部https的模板.md","filePath":"posts/2024/01/12写个docker+nginx部https的模板.md","lastUpdated":1738325247000}'),o={name:"posts/2024/01/12写个docker+nginx部https的模板.md"},a=t(`<h1 id="写个-docker-nginx-部-https-的模板" tabindex="-1">写个 docker+nginx 部 https 的模板 <a class="header-anchor" href="#写个-docker-nginx-部-https-的模板" aria-label="Permalink to &quot;写个 docker+nginx 部 https 的模板&quot;">​</a></h1><blockquote><p>✨文章摘要（AI生成）</p></blockquote><p>笔者在这篇文章中分享了一个基于<code>nginx + docker</code>的<code>https</code>模板，旨在简化国内用户自建小网站的部署过程。考虑到国内缺乏便捷的免费部署平台，笔者创建了一个易于使用的模板和相应的脚本，以便快速实现<code>https</code>反向代理。</p><p>使用该模板的基本步骤包括：</p><ol><li>克隆模板项目到本地。</li><li>替换证书文件为自己的证书。</li><li>运行脚本以替换域名。</li><li>根据需要修改<code>docker-compose.yml</code>中的根目录。</li><li>启动 Docker 容器。</li></ol><p>最后，笔者建议使用<code>docker ps</code>命令检查容器状态，并查看<code>nginx</code>日志以确保服务正常运行。总的来说，这个模板为用户提供了一个快速、方便的方式来部署<code>https</code>网站。</p><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>有时候想部署一个给国内朋友使用的小网站，但是国内又没有像国外那些免费好用的部署平台，所以就只能自己搭建，自己搭建又每次避开不了 nginx 反代实现 https 这一步，所以就简单写了个模板以及 shell 脚本，方便自己每次快速部署。</p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p><a href="https://github.com/Justin3go/nginx-https-template" target="_blank" rel="noreferrer">模板地址</a>，一个基于<code>nginx + docker</code>的<code>https</code>模板，可以快速部署<code>https</code>网站🚀🚀🚀</p><blockquote><p>你至少并且也只需要拥有 docker 环境，<a href="https://zhuanlan.zhihu.com/p/143156163" target="_blank" rel="noreferrer"># 如何在 Ubuntu 20.04 上安装和使用 Docker</a></p></blockquote><p>基本流程：</p><p><img src="https://oss.justin3go.com/blogs/nginx_https.png" alt=""></p><h2 id="使用该模板" tabindex="-1">使用该模板 <a class="header-anchor" href="#使用该模板" aria-label="Permalink to &quot;使用该模板&quot;">​</a></h2><ol><li>进入你的<code>repos</code>目录，可以为任意目录（不过后续可能要稍做修改），这里以<code>/root/repos/</code>为例，如果没有<code>repos</code>目录，可以创建一个。然后<code>clone</code>本项目</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/repos/</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/Justin3go/nginx-https-template.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx-https-template</span></span></code></pre></div><ol start="2"><li><p>替换<code>cert/</code>下的证书为你的证书，格式为<code>your-domain.key</code>和<code>your-domain.pem</code>，比如我的域名是<code>justin3go.com</code>，那么我的证书就是<code>justin3go.com.key</code>和<code>justin3go.com.pem</code></p></li><li><p>运行脚本<code>./scripts/replace-domain.sh --domain=your-domain</code></p></li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./scripts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 设置脚本权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/replace-domain.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --domain=your-domain</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 运行脚本替换域名</span></span></code></pre></div><blockquote><p>注意：默认<code>https</code>转发的是<code>80</code>端口，如果你的网站不是<code>80</code>端口，需要修改<code>/conf.d/default.conf</code>中的<code>proxy_pass</code>为你的端口</p></blockquote><ol start="4"><li><p>如果在第一步中你使用的自定义目录，则修改<code>docker-compose.yml</code>中的根目录为你的目录，默认为<code>/root/repos/</code></p></li><li><p>启动容器</p></li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/run.sh</span></span></code></pre></div><h2 id="接下来" tabindex="-1">接下来 <a class="header-anchor" href="#接下来" aria-label="Permalink to &quot;接下来&quot;">​</a></h2><ul><li>你可以使用<code>docker ps</code>命令查看容器是否正常运行</li><li>以及使用<code>tail -n 1000 logs/access.log</code>和<code>tail -n 1000 logs/error.log</code>查看<code>nginx</code>运行日志</li></ul>`,24),l=[a];function n(c,d,p,h,r,k){return i(),s("div",null,l)}const m=e(o,[["render",n]]);export{u as __pageData,m as default};
