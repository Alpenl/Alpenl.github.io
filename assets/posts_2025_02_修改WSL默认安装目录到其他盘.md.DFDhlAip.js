import{_ as s,D as i,B as a,ah as l}from"./chunks/framework.kYnPRA0Y.js";const c=JSON.parse('{"title":"安装WSL并修改WSL默认安装目录到其他盘","description":"","frontmatter":{"title":"安装WSL并修改WSL默认安装目录到其他盘","date":"2025-02-19T00:00:00.000Z","tags":["剪贴板","WSL"]},"headers":[],"relativePath":"posts/2025/02/修改WSL默认安装目录到其他盘.md","filePath":"posts/2025/02/修改WSL默认安装目录到其他盘.md","lastUpdated":1739966538000}'),t={name:"posts/2025/02/修改WSL默认安装目录到其他盘.md"},e=l(`<h1 id="安装wsl并修改wsl默认安装目录到其他盘" tabindex="-1">安装WSL并修改WSL默认安装目录到其他盘 <a class="header-anchor" href="#安装wsl并修改wsl默认安装目录到其他盘" aria-label="Permalink to &quot;安装WSL并修改WSL默认安装目录到其他盘&quot;">​</a></h1><blockquote><p>✨文章摘要(AI生成) 本文介绍了如何在Win10/11系统下安装WSL（Windows Subsystem for Linux），并详细说明了如何将WSL的默认&gt; 安装目录修改为其他盘符。</p></blockquote><h2 id="一、安装wsl" tabindex="-1">一、安装WSL <a class="header-anchor" href="#一、安装wsl" aria-label="Permalink to &quot;一、安装WSL&quot;">​</a></h2><h3 id="前提条件" tabindex="-1">前提条件 <a class="header-anchor" href="#前提条件" aria-label="Permalink to &quot;前提条件&quot;">​</a></h3><ul><li>操作系统要求：<strong>Windows 10 版本 2004 及更高版本（内部版本 19041 及更高版本）或 Windows 11</strong></li></ul><h3 id="安装步骤" tabindex="-1">安装步骤 <a class="header-anchor" href="#安装步骤" aria-label="Permalink to &quot;安装步骤&quot;">​</a></h3><ol><li>启用适用于 Linux 的 Windows 子系统</li></ol><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dism.exe</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">online </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">enable-feature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">featurename:Microsoft</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Windows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Subsystem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Linux </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">all </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">norestart</span></span></code></pre></div><ol start="2"><li>启用虚拟化（需要管理员权限）</li></ol><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dism.exe</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">online </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">enable-feature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">featurename:VirtualMachinePlatform </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">all </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">norestart</span></span></code></pre></div><ol start="3"><li>设置WSL默认版本为WSL2（推荐）</li></ol><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set-default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span></code></pre></div><blockquote><p>WSL2.0相比WSL1.0具备完整的Linux内核、托管VM和完全的系统调用兼容性</p></blockquote><h3 id="安装linux发行版" tabindex="-1">安装Linux发行版 <a class="header-anchor" href="#安装linux发行版" aria-label="Permalink to &quot;安装Linux发行版&quot;">​</a></h3><p>有两种安装方式：</p><h4 id="_1-直接安装-推荐" tabindex="-1">1. 直接安装（推荐） <a class="header-anchor" href="#_1-直接安装-推荐" aria-label="Permalink to &quot;1. 直接安装（推荐）&quot;">​</a></h4><p>参考<a href="https://learn.microsoft.com/zh-cn/windows/wsl/install#change-the-default-linux-distribution-installed" target="_blank" rel="noreferrer">官方手册</a>，在管理员模式下运行：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">install</span></span></code></pre></div><p>安装完成后重启计算机。</p><h4 id="_2-指定内核安装" tabindex="-1">2. 指定内核安装 <a class="header-anchor" href="#_2-指定内核安装" aria-label="Permalink to &quot;2. 指定内核安装&quot;">​</a></h4><ul><li>安装指定发行版：</li></ul><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">install </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Distribution Name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><ul><li>查看可用的 Linux 发行版列表：</li></ul><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">online</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">o</span></span></code></pre></div><h2 id="二、修改wsl默认安装目录到其他盘" tabindex="-1">二、修改WSL默认安装目录到其他盘 <a class="header-anchor" href="#二、修改wsl默认安装目录到其他盘" aria-label="Permalink to &quot;二、修改WSL默认安装目录到其他盘&quot;">​</a></h2><p>默认情况下，WSL安装在C盘。为了节省系统盘空间，我们可以将其迁移到其他盘符。</p><h3 id="迁移步骤" tabindex="-1">迁移步骤 <a class="header-anchor" href="#迁移步骤" aria-label="Permalink to &quot;迁移步骤&quot;">​</a></h3><ol><li>查看当前WSL发行版</li></ol><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">all </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v</span></span></code></pre></div><ol start="2"><li>导出分发版为tar文件</li></ol><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20.04</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d:\\wsl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ubuntu20.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">04.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tar</span></span></code></pre></div><blockquote><p>注：将<code>Ubuntu-20.04</code>替换为你的发行版名称</p></blockquote><ol start="3"><li>注销当前分发版</li></ol><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">unregister Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20.04</span></span></code></pre></div><ol start="4"><li>重新导入并安装WSL</li></ol><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wsl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import Ubuntu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20.04</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d:\\wsl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ubuntu20.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">04</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> d:\\wsl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ubuntu20.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">04.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span></code></pre></div><blockquote><p>可以修改为你想要的安装目录</p></blockquote><ol start="5"><li>设置默认登录用户</li></ol><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ubuntu2004 config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user Username</span></span></code></pre></div><ol start="6"><li>删除临时tar文件（可选）</li></ol><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">del d:\\wsl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ubuntu20.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">04.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tar</span></span></code></pre></div><p>完成以上操作后，WSL的根文件系统将被迁移到新的目录（示例中为<code>D:\\wsl-ubuntu20.04</code>）。</p>`,42),h=[e];function n(p,k,d,r,o,E){return a(),i("div",null,h)}const u=s(t,[["render",n]]);export{c as __pageData,u as default};
