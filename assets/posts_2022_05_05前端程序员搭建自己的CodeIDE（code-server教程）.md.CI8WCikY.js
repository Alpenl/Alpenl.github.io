import{_ as e,D as s,B as a,ah as t,Q as i}from"./chunks/framework.kYnPRA0Y.js";const v=JSON.parse('{"title":"前端程序员搭建自己的 CodeIDE（code-server 教程）","description":"","frontmatter":{"title":"前端程序员搭建自己的 CodeIDE（code-server 教程）","date":"2022-05-05T00:00:00.000Z","tags":["CodeIDE","code-server","前端","编程"]},"headers":[],"relativePath":"posts/2022/05/05前端程序员搭建自己的CodeIDE（code-server教程）.md","filePath":"posts/2022/05/05前端程序员搭建自己的CodeIDE（code-server教程）.md","lastUpdated":1738325247000}'),o={name:"posts/2022/05/05前端程序员搭建自己的CodeIDE（code-server教程）.md"},r=t(`<h1 id="前端程序员搭建自己的-codeide-code-server-教程" tabindex="-1">前端程序员搭建自己的 CodeIDE（code-server 教程） <a class="header-anchor" href="#前端程序员搭建自己的-codeide-code-server-教程" aria-label="Permalink to &quot;前端程序员搭建自己的 CodeIDE（code-server 教程）&quot;">​</a></h1><blockquote><p>✨文章摘要（AI生成）</p></blockquote><p>笔者在这篇文章中详细介绍了如何在 Ubuntu 20 上搭建自己的 CodeIDE，使用 code-server 实现浏览器编程的便利。首先，通过官方链接下载 code-server，并在服务器上解压后即可运行。设置时需要注意<code>--port</code>和<code>--host</code>参数，以便允许远程访问。接着，笔者建议配置<code>config.yaml</code>文件以实现 HTTPS 访问，并提供了获取证书的方式。</p><p>为了管理代码服务器进程，笔者使用了 pm2 工具，同时也提到了解析域名的操作。此外，还分享了如何配置 VS Code 的插件和设置同步，甚至介绍了如何安装 JavaScript 版本的 Jupyter（ijavascript），以便在 Jupyter Notebook 中使用 JavaScript。最后，笔者提供了详细的视频教程，方便读者更直观地了解整个搭建过程。</p><hr><blockquote><p>偶尔不能在自己电脑上写代码时，用用浏览器敲代码也挺方便；或者用平板刷刷算法题也挺有趣；测试 JavaScript 某一代码片段也不用在浏览器的控制台上打印输出了；</p></blockquote><h2 id="安装-code-server" tabindex="-1">安装 code-server <a class="header-anchor" href="#安装-code-server" aria-label="Permalink to &quot;安装 code-server&quot;">​</a></h2><p>我这里使用的是 ubuntu20，大家根据自己的系统下载对应的安装包即可，当然最好跟着我的教程来，这样出错了可能都是我踩过的坑，更容易解决，不然就是自己去折腾吧</p><ol><li>首先下载 code-server 官方地址如下：<a href="https://github.com/coder/code-server/releases" target="_blank" rel="noreferrer">https://github.com/coder/code-server/releases</a> 我这边根据我的需求下载的是这个：</li></ol><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221029220158.png" alt=""> 然后两种方式，一种是直接在服务器上下载它，不过我服务器没配 vpn，所以我采取的第二种方式，本地下载然后通过某些 ssh 工具上传服务器即可，都是一样的，结果就是服务器上多了这样一个文件就行，用自己喜欢的方式即可。</p><p>由于买的云服务器都是我一人使用，不用特别在乎一些用户权限等等，所以接下来的操作为了方便我都是在 root 用户下操作的，使用的 ssh 工具是 finalshell。</p><p>不是 root 的话先切换为 root 用户</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> su</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span></span></code></pre></div><p>然后上传(或直接下载)上述的<code>code-server-xxx-linux-amd64.tar.gz</code>文件</p><p>我这里放在了 download 文件夹下面<code>/root/download/code-server</code>根据你自己的习惯存放即可</p><p>解压：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code-server-4.8.1-linux-amd64.tar.gz</span></span></code></pre></div><p>然后其实就已经可以运行了(运行的是【code-server-4.8.1-linux-amd64（解压后的文件）/bin/code-server】)</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./bin/code-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --host</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --auth</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> password</span></span></code></pre></div><p><code>--port</code>：Code Server 运行的端口，可以自己设置</p><p><code>--host 0.0.0.0</code>：允许任意 IP 的访问，必须加该字段，否者默认是 localhost，这样你就不能在本地访问远程运行的 code-server 了</p><p>这里先这样，后续直接在 yaml 文件里配置这些就不用输入后续这些一长串的参数了</p><p>然后在浏览器中打开对应的 ip:port 即可</p><p>当然，如果使用的云厂商的服务记得配置放行端口，并且如果 ubuntu 里配置了防火墙也记得放行端口或者关闭防火墙，否者无法访问（ubuntu 默认是关闭防火墙的，除非你自己之前配置过，这里就不详细介绍相关命令了，大家可以自行去搜搜相关命令）</p><h2 id="额外配置" tabindex="-1">额外配置 <a class="header-anchor" href="#额外配置" aria-label="Permalink to &quot;额外配置&quot;">​</a></h2><p>运行了上述命令之后，会生成一个默认的 config.yaml 文件，你可以通过运行后的输出信息得到；</p><p>修改其中的信息</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">vim ~/.config/code-server/config.yaml // 一般来说都是在对应用户的这个目录下</span></span></code></pre></div><p>这是我的相关配置</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221029224316.png" alt=""></p><p>这里我同时也配置了 https 访问，毕竟有些代码来回传输不加密可不行</p><p>简单说说证书的获取，途径很多，选择自己合适的即可，我这里使用的是阿里云的免费证书：</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221029224839.png" alt=""></p><p>然后下载其中的证书后上传到服务器中对应的文件夹即可</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221029224927.png" alt=""></p><p>你可以从我上面的<code>config.yaml</code>配置中看到我服务器里证书密钥的放置位置，这个完全凭喜好放置。</p><p>此时你就可以直接输入<code>./code-server</code>运行了，使用的就是 config 里面的默认参数了。</p><h2 id="pm2-启动-域名解析" tabindex="-1">pm2 启动&amp;域名解析 <a class="header-anchor" href="#pm2-启动-域名解析" aria-label="Permalink to &quot;pm2 启动&amp;域名解析&quot;">​</a></h2><p>然后我们将其使用 pm2 管理起来，或者你直接<code>nohup &lt;command&gt; &amp;</code>挂起该进程也可以。</p><p>这里简单使用 pm2 管理如下：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pm2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./code-server&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start_code_server.sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start_code_server.sh</span></span></code></pre></div><p>pm2 的其他常用命令和其他操作这里就不一一介绍了<a href="https://pm2.keymetrics.io/docs/usage/quick-start/" target="_blank" rel="noreferrer">官网</a></p><p>运行后输入<code>pm2 list</code>如下</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221029225931.png" alt=""></p><p>之后，你就可以在浏览器中随时访问你的 codeIDE 了，当然，我还解析了个子域名给 ip 地址，这个直接在对应的云服务厂商上操作即可（这里不详细介绍域名解析操作，自己在界面点点试试就可以了）：</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221029230302.png" alt=""></p><p>然后输入 ip:port 或者自己的域名就可以了</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221029230553.png" alt=""></p><h2 id="简单配置-vscode" tabindex="-1">简单配置 vscode <a class="header-anchor" href="#简单配置-vscode" aria-label="Permalink to &quot;简单配置 vscode&quot;">​</a></h2><p>当然，初始不是上述这个界面，还需要对 vscode 进行一定的配置，这个真就看大家习惯了，自己喜欢什么插件就配置什么插件就行了。</p><p>我这里暂时只安装了这些插件：</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221029231614.png" alt=""></p><p>简单摘要几点：</p><p><a href="https://coder.com/docs/code-server/latest/FAQ#how-can-i-reuse-my-vs-code-configuration" target="_blank" rel="noreferrer">官方 FAQ</a></p><h3 id="how-do-i-use-my-own-extensions-marketplace" tabindex="-1">How do I use my own extensions marketplace? <a class="header-anchor" href="#how-do-i-use-my-own-extensions-marketplace" aria-label="Permalink to &quot;How do I use my own extensions marketplace?&quot;">​</a></h3><p>If you own a marketplace that implements the VS Code Extension Gallery API, you can point code-server to it by setting <code>$EXTENSIONS_GALLERY</code>. This corresponds directly with the <code>extensionsGallery</code> entry in in VS Code&#39;s <code>product.json</code>.</p><p>For example, to use the legacy Coder extensions marketplace:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EXTENSIONS_GALLERY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;serviceUrl&quot;: &quot;https://extensions.coder.com/api&quot;}&#39;</span></span></code></pre></div><p>Though you can technically use Microsoft&#39;s marketplace in this manner, we strongly discourage you from doing so since this is <a href="https://coder.com/docs/code-server/latest/FAQ#why-cant-code-server-use-microsofts-extension-marketplace" target="_blank" rel="noreferrer">against their Terms of Use</a>.</p><p>For further information, see <a href="https://github.com/microsoft/vscode/issues/31168#issue-244533026" target="_blank" rel="noreferrer">this discussion</a> regarding the use of the Microsoft URLs in forks, as well as <a href="https://github.com/VSCodium/vscodium/blob/master/DOCS.md#extensions--marketplace" target="_blank" rel="noreferrer">VSCodium&#39;s docs</a>.</p><h3 id="how-can-i-reuse-my-vs-code-configuration" tabindex="-1">How can I reuse my VS Code configuration? <a class="header-anchor" href="#how-can-i-reuse-my-vs-code-configuration" aria-label="Permalink to &quot;How can I reuse my VS Code configuration?&quot;">​</a></h3><p>You can use the <a href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync" target="_blank" rel="noreferrer">Settings Sync</a> extension for this purpose.</p><p>Alternatively, you can also pass <code>--user-data-dir ~/.vscode</code> or copy <code>~/.vscode</code> into <code>~/.local/share/code-server</code> to reuse your existing VS Code extensions and configuration.</p><h2 id="安装-javascript-版的-jupyter-ijavascript" tabindex="-1">安装 JavaScript 版的 jupyter（ijavascript） <a class="header-anchor" href="#安装-javascript-版的-jupyter-ijavascript" aria-label="Permalink to &quot;安装 JavaScript 版的 jupyter（ijavascript）&quot;">​</a></h2><p>为了在 jupyter-notebook 中使用 JavaScript，需要安装对应的 Node.js 内核，这里我使用的是<a href="https://github.com/n-riesco/ijavascript" target="_blank" rel="noreferrer">ijavascript</a></p><p>根据官方文档安装即可，我这里使用的是 ubuntu20，node16 出现了一定问题，通过该 issue 中的回答即可解决：<a href="https://github.com/n-riesco/ijavascript/issues/270" target="_blank" rel="noreferrer">https://github.com/n-riesco/ijavascript/issues/270</a></p><p>主要就是要先安装<code>libzmq3-dev</code></p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221029231956.png" alt=""></p><p>目前我只遇到这一个问题，如果大家有其他问题，自行搜索和查看下 issue 中的其他回答吧</p><p>最后你应该就能得到我上述的页面了</p><p><img src="https://oss.justin3go.com/blogs/demo.gif" alt=""></p><h2 id="详细视频教程" tabindex="-1">详细视频教程 <a class="header-anchor" href="#详细视频教程" aria-label="Permalink to &quot;详细视频教程&quot;">​</a></h2>`,72),p=i("iframe",{src:"//player.bilibili.com/player.html?aid=304716403&bvid=BV1rP411w7YZ&cid=878395274&page=1",scrolling:"no",border:"0",frameborder:"0",framespacing:"0",allowfullscreen:"true",width:"100%",height:"500px",sandbox:"allow-top-navigation allow-same-origin allow-forms allow-scripts"},null,-1),n=[r,p];function c(d,l,h,g,u,m){return a(),s("div",null,n)}const b=e(o,[["render",c]]);export{v as __pageData,b as default};
