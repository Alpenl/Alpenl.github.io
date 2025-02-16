import{_ as e,D as s,B as a,ah as i}from"./chunks/framework.kYnPRA0Y.js";const u=JSON.parse('{"title":"常用docker镜像","description":"","frontmatter":{"title":"常用docker镜像","date":"2025-02-16T00:00:00.000Z","tags":["教程","docker","mysql","redis"]},"headers":[],"relativePath":"posts/2025/01/常用docker镜像.md","filePath":"posts/2025/01/常用docker镜像.md","lastUpdated":1739715828000}'),d={name:"posts/2025/01/常用docker镜像.md"},l=i(`<h1 id="常用docker镜像" tabindex="-1">常用docker镜像 <a class="header-anchor" href="#常用docker镜像" aria-label="Permalink to &quot;常用docker镜像&quot;">​</a></h1><blockquote><p>✨文章摘要 本文是一个剪贴板，存放常用docker镜像的命令方便复制粘贴，并附上详细的解释以供新手快速搭建数据库环境</p></blockquote><h2 id="mysql" tabindex="-1">Mysql <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;Mysql&quot;">​</a></h2><h3 id="mysql-5-7-镜像" tabindex="-1">mysql:5.7 镜像 <a class="header-anchor" href="#mysql-5-7-镜像" aria-label="Permalink to &quot;mysql:5.7 镜像&quot;">​</a></h3><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker run -p 3306:3306 --name Mysql -v Mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root --restart=always -d mysql:5.7</span></span></code></pre></div><ul><li><code>-p 3306:3306</code>：将容器的3306端口映射到主机的3306端口，方便外部连接。</li><li><code>--name Mysql</code>：为容器指定一个名称，这里为 <code>Mysql</code>。</li><li><code>-v Mysql:/var/lib/mysql</code>：将宿主机的 <code>Mysql</code> 目录挂载到容器内的 <code>/var/lib/mysql</code> 目录，持久化数据。</li><li><code>-e MYSQL_ROOT_PASSWORD=root</code>：设置MySQL的root用户密码为 <code>root</code>，可以根据需求修改。</li><li><code>--restart=always</code>：容器异常退出后会自动重启。</li><li><code>-d mysql:5.7</code>：使用 <code>mysql:5.7</code> 镜像并在后台运行容器。</li></ul><h3 id="mysql-8-0-20-镜像" tabindex="-1">mysql:8.0.20 镜像 <a class="header-anchor" href="#mysql-8-0-20-镜像" aria-label="Permalink to &quot;mysql:8.0.20 镜像&quot;">​</a></h3><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker run -p 3306:3306 --name Mysql -v Mysql:/var/lib/mysql8 -e MYSQL_ROOT_PASSWORD=root --restart=always -d mysql:8.0.20</span></span></code></pre></div><p>与上面的命令类似，但这次使用的是 <code>mysql:8.0.20</code> 镜像。如果你需要其他版本，可以调整镜像版本。</p><h3 id="进入docker容器内部" tabindex="-1">进入docker容器内部 <a class="header-anchor" href="#进入docker容器内部" aria-label="Permalink to &quot;进入docker容器内部&quot;">​</a></h3><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker exec -it Mysql bash</span></span></code></pre></div><ul><li><code>docker exec -it</code>：进入正在运行的容器。</li><li><code>Mysql</code>：容器的名称。</li><li><code>bash</code>：启动 bash shell 进入容器内部，方便后续操作。</li></ul><h3 id="查看mysql用户列表" tabindex="-1">查看MySQL用户列表 <a class="header-anchor" href="#查看mysql用户列表" aria-label="Permalink to &quot;查看MySQL用户列表&quot;">​</a></h3><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SELECT user, host FROM mysql.user;</span></span></code></pre></div><ul><li>通过该命令查看MySQL数据库中所有用户及其主机名，方便检查权限配置。</li></ul><h3 id="忽略mysql表名大小写" tabindex="-1">忽略MySQL表名大小写 <a class="header-anchor" href="#忽略mysql表名大小写" aria-label="Permalink to &quot;忽略MySQL表名大小写&quot;">​</a></h3><ol><li><p>进入 MySQL 容器内部</p><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker exec -it Mysql bash</span></span></code></pre></div></li><li><p>使用 <code>echo</code> 命令编辑 MySQL 配置文件 <code>my.cnf</code></p><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[mysqld]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt;&gt; /etc/mysql/my.cnf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">echo </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lower_case_table_names=1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt;&gt; /etc/mysql/my.cnf</span></span></code></pre></div><ul><li>第一个命令将 <code>[mysqld]</code> 配置段添加到 <code>my.cnf</code> 配置文件中。</li><li>第二个命令设置 <code>lower_case_table_names=1</code>，这意味着MySQL将不区分表名大小写，避免在不同操作系统之间迁移数据时出现问题。</li></ul></li><li><p>退出容器并重新启动 MySQL 服务</p><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">exit</span></span></code></pre></div></li><li><p>重启MySQL容器</p><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker restart Mysql</span></span></code></pre></div><ul><li>重启容器使得新的配置生效。</li></ul></li></ol><h2 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h2><h3 id="创建docker容器-redis-镜像并绑定自定义配置文件和数据存储路径" tabindex="-1">创建docker容器 redis 镜像并绑定自定义配置文件和数据存储路径 <a class="header-anchor" href="#创建docker容器-redis-镜像并绑定自定义配置文件和数据存储路径" aria-label="Permalink to &quot;创建docker容器 redis 镜像并绑定自定义配置文件和数据存储路径&quot;">​</a></h3><div class="language-docker vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docker run --restart=always -p 6379:6379 --name redis -v /home/dj/redis/redis.conf:/etc/redis/redis.conf -v /home/dj/redis/data:/data -d redis:latest redis-server /etc/redis/redis.conf</span></span></code></pre></div><ul><li><code>--restart=always</code>：容器异常退出后会自动重启。</li><li><code>-p 6379:6379</code>：将容器的6379端口映射到主机的6379端口，方便外部连接。</li><li><code>--name redis</code>：为容器指定一个名称，这里为 <code>redis</code>。</li><li><code>-v /home/dj/redis/redis.conf:/etc/redis/redis.conf</code>：将宿主机的 <code>redis.conf</code> 配置文件挂载到容器内的 <code>/etc/redis/redis.conf</code>，自定义配置。</li><li><code>-v /home/dj/redis/data:/data</code>：将宿主机的 <code>data</code> 目录挂载到容器内的 <code>/data</code> 目录，持久化Redis数据。</li><li><code>-d redis:latest</code>：使用 <code>redis:latest</code> 镜像并在后台运行容器。</li><li><code>redis-server /etc/redis/redis.conf</code>：指定Redis使用容器内的自定义配置文件进行启动。</li></ul>`,21),o=[l];function t(c,r,n,h,p,k){return a(),s("div",null,o)}const m=e(d,[["render",t]]);export{u as __pageData,m as default};
