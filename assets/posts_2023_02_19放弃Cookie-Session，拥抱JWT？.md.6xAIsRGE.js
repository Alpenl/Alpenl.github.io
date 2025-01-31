import{_ as e,D as t,B as o,ah as i}from"./chunks/framework.kYnPRA0Y.js";const f=JSON.parse('{"title":"放弃 Cookie-Session，拥抱 JWT？","description":"","frontmatter":{"title":"放弃 Cookie-Session，拥抱 JWT？","date":"2023-02-19T00:00:00.000Z","tags":["JWT","Cookie","Session","安全","分布式","HTTPS"]},"headers":[],"relativePath":"posts/2023/02/19放弃Cookie-Session，拥抱JWT？.md","filePath":"posts/2023/02/19放弃Cookie-Session，拥抱JWT？.md","lastUpdated":1738327344000}'),r={name:"posts/2023/02/19放弃Cookie-Session，拥抱JWT？.md"},a=i('<h1 id="放弃-cookie-session-拥抱-jwt" tabindex="-1">放弃 Cookie-Session，拥抱 JWT？ <a class="header-anchor" href="#放弃-cookie-session-拥抱-jwt" aria-label="Permalink to &quot;放弃 Cookie-Session，拥抱 JWT？&quot;">​</a></h1><blockquote><p>✨文章摘要（AI生成）</p></blockquote><p>笔者在这篇博客中深入探讨了 JWT（JSON Web Token）与传统的 Cookie-Session 的比较及其各自的优缺点。首先，JWT 是一种自包含令牌，用户信息存储在客户端，而 Cookie-Session 则是引用令牌，用户信息由服务器统一管理。通过一个简单的登录流程，笔者展示了 JWT 的基本使用方式，并阐述了它如何解决 Cookie-Session 的一些痛点，比如在分布式系统中的适用性。</p><p>尽管 JWT 在管理用户状态方面具有灵活性，但笔者也指出了其缺点，例如一旦令牌被发放，服务器对其控制能力下降，且在未使用 HTTPS 的情况下更易受到重放攻击。此外，笔者提到双 token 机制（access token 与 refresh token）的使用，以平衡安全性与用户体验。最终，笔者强调技术选择应基于项目需求，而非一味追求新技术，提醒读者 JWT 并不完全取代 Cookie-Session。</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>皮一下🐒，只是觉得这类标题挺“有趣的”，社区好多这样的标题：<code>放弃 XXX，拥抱 XXX......</code>😶甚至更皮一下还可以试试将<code>?</code>换成<code>!</code></p><p>接下来，请忽略标题的扭转事实，本文主要介绍 JWT 相关的知识</p><p>很早前写过一个搜索引擎 demo，其中的登录系统包含了 JWT 这项技术（仅使用，未深入研究），于是乎心中埋下了一个种子。随着互联网上文章的熏陶，逐渐对其的探索欲增加，想着怎么和我之前的理解有出入。终于水过堤坝，来瞧瞧 JWT 到底是啥样，写下了这篇博文...</p><h2 id="安全的软件架构" tabindex="-1">安全的软件架构 <a class="header-anchor" href="#安全的软件架构" aria-label="Permalink to &quot;安全的软件架构&quot;">​</a></h2><p><a href="https://icyfenix.cn/architect-perspective/general-architecture/system-security/" target="_blank" rel="noreferrer">凤凰架构</a>在架构安全性这章节中这样写道：</p><blockquote><p>即使只限定在“软件架构设计”这个语境下，系统安全仍然是一个很大的话题。我们谈论的计算机系统安全，不仅仅是指“防御系统被黑客攻击”这样狭隘的安全,，还至少应包括（不限于）以下这些问题的具体解决方案：</p><ul><li><a href="https://icyfenix.cn/architect-perspective/general-architecture/system-security/authentication" target="_blank" rel="noreferrer"><strong>认证</strong></a>（Authentication）：系统如何正确分辨出操作用户的真实身份？</li><li><a href="https://icyfenix.cn/architect-perspective/general-architecture/system-security/authorization" target="_blank" rel="noreferrer"><strong>授权</strong></a>（ Authorization）：系统如何控制一个用户该看到哪些数据、能操作哪些功能？</li><li><a href="https://icyfenix.cn/architect-perspective/general-architecture/system-security/credentials" target="_blank" rel="noreferrer"><strong>凭证</strong></a>（Credential）：系统如何保证它与用户之间的承诺是双方当时真实意图的体现，是准确、完整且不可抵赖的？</li><li><a href="https://icyfenix.cn/architect-perspective/general-architecture/system-security/confidentiality" target="_blank" rel="noreferrer"><strong>保密</strong></a>（Confidentiality）：系统如何保证敏感数据无法被包括系统管理员在内的内外部人员所窃取、滥用？</li><li><a href="https://icyfenix.cn/architect-perspective/general-architecture/system-security/transport-security" target="_blank" rel="noreferrer"><strong>传输</strong></a>（Transport Security）：系统如何保证通过网络传输的信息无法被第三方窃听、篡改和冒充？</li><li><a href="https://icyfenix.cn/architect-perspective/general-architecture/system-security/verification" target="_blank" rel="noreferrer"><strong>验证</strong></a>（Verification）：系统如何确保提交到每项服务中的数据是合乎规则的，不会对系统稳定性、数据一致性、正确性产生风险？</li></ul></blockquote><ul><li>在这里，假设我们需要实现一个带有用户系统的大型软件系统，无论其中的登录注册流程多么的复杂，我们都需要在每次操作资源的时候表明自己的身份，这样服务端才能识别该用户究竟是谁；</li><li>当然比较简单的方式是每次用户都将自己的账号密码传递，服务端验证一下就知道了你的身份，显然这是一种方式，但来回传输较为敏感的信息且让用户频繁登录并不是一个明智的选择；</li><li>我们可能更希望一种 ID，key，凭证一样的产物，既可以证明我们的身份，又不至于类似账号密码一样“拥有它就拥有全世界~”，比如直接修改密码等等</li></ul><p>其中，JWT 和 Cookie-Session 在这里面扮演的就是一个凭证的角色，它们只是一个令牌，由用户所在系统分发，持有这个令牌可以拥有该用户身份的特定权限。比如校园学生持有学校分发的校园卡，就拥有了进出校园的权限，出入寝室的权限，食堂购买食物的权限等等。</p><h2 id="基本登录流程" tabindex="-1">基本登录流程 <a class="header-anchor" href="#基本登录流程" aria-label="Permalink to &quot;基本登录流程&quot;">​</a></h2><p>为了更直观的查看凭证的作用，下面介绍一个简单的登录流程：</p><ol><li>当用户请求用户资料页时，发现没有令牌，不知道你是哪个用户</li><li>跳转登录页，用户输入账号密码或者其他登录方式</li><li>服务端验证用户身份，如果成功，返回响应分发该用户一个令牌</li><li>前端页面以某种方式保存该令牌</li><li>接下来每次请求携带该令牌，比如我们出入都要携带门禁卡一样</li><li>服务器验证该令牌，确认是否为正确的身份</li></ol><p>如下用一个时序图来表示：</p><p><img src="https://oss.justin3go.com/blogs/%E9%82%93%E4%B8%BD%E8%BF%87%E7%A8%8B%E6%97%B6%E5%BA%8F%E5%9B%BE.png" alt=""></p><p>这个过程有所简化，并不复杂，就两点：</p><ul><li>没有令牌时，输入账号密码获取令牌，保持登录态</li><li>有令牌时，每次请求都携带令牌请求资源，表明自己的身份</li></ul><h2 id="令牌方案概述" tabindex="-1">令牌方案概述 <a class="header-anchor" href="#令牌方案概述" aria-label="Permalink to &quot;令牌方案概述&quot;">​</a></h2><p>到这里为止，你应该至少明白凭证（令牌）扮演着什么样的角色，有什么作用；</p><p>接下来，我们就来瞧瞧庐山真面目，就目前来说，令牌的方案主要也就分为了标题中所描述的两种，它们的主要区别是用户信息的存放位置不同：</p><ul><li>Cookie-Session 方式（引用令牌）：用户信息由服务器统一管理，令牌为一个随机字符串可以唯一指向详细的用户信息，这个指向关系当然也是由服务器保留</li><li>JWT 方式（自包含令牌）：用户信息经过处理直接作为令牌，相当于用户信息是保留在客户端的</li></ul><blockquote><p>如果这里你对上述描述一知半解，不用慌张，只需有一个印象即可，接下来展开介绍这两种方式，请移步下一小节...</p></blockquote><h2 id="cookie-session-简述" tabindex="-1">Cookie-Session 简述 <a class="header-anchor" href="#cookie-session-简述" aria-label="Permalink to &quot;Cookie-Session 简述&quot;">​</a></h2><p>通过 Cookie-Session 方式的认证流程这里就不赘述了，和上述介绍的基本登录流程小节是差不多的，只不过其中的凭证具体化了，是 Cookie-Session 方式。</p><h3 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>刚才提到，Cookie-Session 是属于引用令牌，理解“引用”这个词的意思，和我们引用对象是一个意思，其中的变量名只是一个指针，真正的对象保留在堆栈当中；</p><p>回到这里，这种令牌方案对用户状态信息的存储是保留在服务器中统一管理的，其中会有一个随机字符串比如叫做 SessionId 是指向对应的用户信息的，而分发给用户的令牌就是这个 SessionId。</p><p>之后用户每次发送请求的时候携带这个 SessionId 令牌，服务器就可以检查到该令牌对应的用户信息是啥，是否有某些操作权限；或者没有携带这个令牌，就执行相关的保护逻辑或者跳转登录</p><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><blockquote><p>基本上相关优点都是围绕“引用令牌”的特性--用户相关的状态信息存储在服务器上，这一点展开的。</p></blockquote><ul><li>可以非常方便的管理在线用户：因为用户相关的状态信息都是存储在服务器的，比如统计实时在线人数，强制某些违规用户下线等等</li><li>相对于在网络和客户端机器传递用户信息，一个没有任何含义的随机字符串 SessionId 被泄露所造成的影响更小</li></ul><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><blockquote><p>随着时代的进步，比如移动互联网时代的到来，分布式系统时代的到来等等，这种方式面临着以下缺点：</p></blockquote><ul><li>只能在 web 场景下使用，如果是 APP 的情况，不能使用 cookie 的情况下就不能用了；</li><li>如果是分布式服务，需要考虑 Session 同步问题，一般在<a href="https://en.wikipedia.org/wiki/CAP_theorem" target="_blank" rel="noreferrer">CAP</a>这三角进行权衡，如下参考自<a href="https://icyfenix.cn/architect-perspective/general-architecture/system-security/credentials.html" target="_blank" rel="noreferrer">凤凰架构</a></li></ul><blockquote><ul><li>牺牲集群的一致性（Consistency），让均衡器采用亲和式的负载均衡算法，譬如根据用户 IP 或者 Session 来分配节点，每一个特定用户发出的所有请求都一直被分配到其中某一个节点来提供服务，每个节点都不重复地保存着一部分用户的状态，如果这个节点崩溃了，里面的用户状态便完全丢失。</li><li>牺牲集群的可用性（Availability），让各个节点之间采用复制式的 Session，每一个节点中的 Session 变动都会发送到组播地址的其他服务器上，这样某个节点崩溃了，不会中断都某个用户的服务，但 Session 之间组播复制的同步代价高昂，节点越多时，同步成本越高。</li><li>牺牲集群的分区容忍性（Partition Tolerance），让普通的服务节点中不再保留状态，将上下文集中放在一个所有服务节点都能访问到的数据节点中进行存储。此时的矛盾是数据节点就成为了单点，一旦数据节点损坏或出现网络分区，整个集群都不再能提供服务。</li></ul></blockquote><h2 id="jwt-详谈" tabindex="-1">JWT 详谈 <a class="header-anchor" href="#jwt-详谈" aria-label="Permalink to &quot;JWT 详谈&quot;">​</a></h2><h3 id="认识一下" tabindex="-1">认识一下 <a class="header-anchor" href="#认识一下" aria-label="Permalink to &quot;认识一下&quot;">​</a></h3><p>无论是认识人还是认识物，外观几乎都是我们最开始接触到的，所以我们可以先看看 JWT 长啥样：</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020230219205428.png" alt=""></p><p>可以看到，JWT 分为三个部分：标头、负载、签名；详细介绍我这里就不过多赘述了，可以参考<a href="https://jwt.io/introduction" target="_blank" rel="noreferrer">这里</a> ，这里仅简单描述一下：</p><ul><li>标头：描述类型和加密算法</li><li>负载：经过 base64 编码的数据，如用户信息</li><li>签名：用于验证消息没有被更改</li></ul><p>所以，可以看到，JWT 里面中包含了数据如用户信息，而非前述方式引用令牌不包含用户信息，这也是后续描述 JWT 是如何解决 Cookie-Session 方式中的痛点，以及产生新的问题的主要原因，请记住这一点。</p><h3 id="优点介绍" tabindex="-1">优点介绍 <a class="header-anchor" href="#优点介绍" aria-label="Permalink to &quot;优点介绍&quot;">​</a></h3><p>主要解决了上述 Cookie-Session 方式的两个痛点：</p><ul><li>并不特定依赖于 Cookie 方式存储</li><li>用户信息包含在客户机，分布式服务中多台机器都可以认识，认证它</li></ul><hr><p>关于让多台机器验证分发下来的 JWT，这里值得详细说一下，为了保证摘要不被修改，我们一般会对其进行加密，而加密算法可以分为<a href="https://zh.wikipedia.org/zh-hans/%E5%B0%8D%E7%A8%B1%E5%AF%86%E9%91%B0%E5%8A%A0%E5%AF%86" target="_blank" rel="noreferrer">对称加密</a>与<a href="https://zh.wikipedia.org/wiki/%E5%85%AC%E5%BC%80%E5%AF%86%E9%92%A5%E5%8A%A0%E5%AF%86" target="_blank" rel="noreferrer">非对称加密</a>：</p><ul><li>对称加密密钥一旦泄漏，会让整个服务的基础设施遭受安全威胁</li><li>而使用非对称加密方式，我们可以将其中一台服务器作为授权服务器，就是分发令牌的，由它持有私钥，而其他服务器持有公钥，这样所有服务器都可以验证请求传递过来的令牌，而最重要的私钥也仅由一台服务器持有</li></ul><p>这里提到加密，还有一点值得注意：JWT 中包含的信息(payload)并不是加密的，仅仅是为了方便网络传输进行了 Base64 编码。</p><p>上述加密的是摘要信息，<strong>所以 JWT 仅仅保证的是其中包含的信息不会被篡改，并知道是否是己方服务分发的令牌，并不保证信息的泄露</strong>。</p><h3 id="说说缺点" tabindex="-1">说说缺点 <a class="header-anchor" href="#说说缺点" aria-label="Permalink to &quot;说说缺点&quot;">​</a></h3><p>JWT 的特点既是它的优点，也是它的缺点</p><ul><li><strong>令牌分发之后，不受服务器控制</strong>： <ul><li>之前 Cookie-Session 方式由于所有用户信息统一管理在了服务端，虽然有一定的管理成本，特别是在分布式服务中成本更大，但相对来说更容易控制。</li><li>而 JWT 是直接将用户信息经过处理： <ul><li>通过摘要保证数据不可被修改，一旦修改，后续验证就会失效；</li><li>通过(非)对称加密保证这是己方服务器分发的令牌，是不可抵赖的</li><li>而相关用户信息是存储在四面八方的客户机上的</li><li>所以我们服务器很难控制相关用户登录状态，比如让某个用户强制下线，在线用户实时统计等等</li></ul></li></ul></li><li><strong>如果不使用 HTTPS，更加容易遭到重放攻击</strong>：HTTPS 可以保证网络传输过程中令牌不会被泄露，但如果没有使用 HTTPS 或者以其他方式泄露令牌，拿到令牌的攻击方并不需要修改令牌，就可以很容易地冒充用户欺骗服务器。Cookie-Session 也是有重放攻击问题的，只是因为 Session 中的数据控制在服务端手上，应对重放攻击会相对主动一些。</li></ul><hr><p>其他的一些缺点，这些与 JWT 本身的特性无关，仅存在于该场景中，就要遵守该场景的规则，或者说如果该场景本来就有些问题，那么 JWT 也会存在一些问题：</p><ul><li><strong>携带的数据有限</strong>：JWT 在请求过程中一般是存放在<code>Authorization Header</code>中的，而其数据的长度受限于各种服务器、浏览器的限制；就好比 GET 请求的长度限制首先于浏览器对 URL 的长度限制一样</li><li><strong>令牌存储</strong>：存储在客户端意味着有多种选择：Cookie？Local Storage？如果放在 Cookie 中，为了安全，一般会给 Cookie 设置 <code>http-only</code> 和 <code>secure</code> 的属性。但这也会带来一定的不便性，比如客户端要读取 JWT Payload 的内容只能借助服务端 API 接口。如果将 JWT 存储至浏览器 Local Storage，虽然方便了客户端读取，但可能会带来 XSS 攻击的威胁，又需要去设置 CSP 来防御这种威胁；</li></ul><h3 id="双-token-作用" tabindex="-1">双 token 作用 <a class="header-anchor" href="#双-token-作用" aria-label="Permalink to &quot;双 token 作用&quot;">​</a></h3><p>简单来说也是为了减轻 JWT 被泄露而造成的影响，具体来说分为<code>refresh token</code>和<code>access token</code></p><table><thead><tr><th></th><th>access token</th><th>refresh token</th></tr></thead><tbody><tr><td>有效时长</td><td>较短(如半小时)</td><td>较长(如一天)</td></tr><tr><td>作用</td><td>验证用户是否有操作权限</td><td>获取 access token</td></tr><tr><td>什么时候使用</td><td>每次需要用户登录态时传递该 token</td><td>access token 失效时使用</td></tr></tbody></table><p>这样做的好处就是：</p><ol><li><code>access token</code>频繁传输，泄露风险较大，所以将其有效期设为较短可以有效降低泄露而造成的影响，比如此时攻击方最多伪装你半个小时;</li><li><code>access token</code>存在时间较短，需要频繁获取新的，为了降低用户登录次数，提高用户体验，使用<code>refresh token</code>调用相关接口获取最新的<code>access token</code>。</li><li><code>refresh token</code>存在时间长，泄露后影响较大，所以只有在<code>access token</code>失效时才传递，所以并不会频繁传输，即泄露风险较小</li></ol><p>主要就是兼顾泄露 token 的风险与泄露 token 的影响</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>技术更应该是客观理性的，这也是我最开始写那个搜索引擎的误区，认为 JWT 是后续出现的，更加先进，所以登录技术栈就选用了它，但似乎想想，这个小系统既没有分布式，也不是 APP，也许选用 Cookie-Session 方式更加合适，当然没有绝对~</p><blockquote><p>JWT 令牌与 Cookie-Session 并不是完全对等的解决方案，它只用来处理认证授权问题，充其量能携带少量非敏感的信息，只是 Cookie-Session 在认证授权问题上的替代品，而不能说 JWT 要比 Cookie-Session 更加先进，更不可能全面取代 Cookie-Session 机制。</p></blockquote><p>如有错误，希望各位不吝赐教，友善指出...</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://icyfenix.cn/architect-perspective/general-architecture/system-security/" target="_blank" rel="noreferrer">凤凰架构-架构安全性</a></li><li><a href="https://www.zhihu.com/question/25400195" target="_blank" rel="noreferrer">大型网站的用户登录系统是如何设计的？</a></li><li><a href="https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html" target="_blank" rel="noreferrer">JSON Web Token 入门教程</a></li><li><a href="https://jwt.io/introduction" target="_blank" rel="noreferrer">JSON Web Token 简介</a></li><li><a href="https://supertokens.com/blog/what-is-jwt" target="_blank" rel="noreferrer">What is a JWT? Understanding JSON Web Tokens</a></li><li><a href="https://cloud.tencent.com/developer/article/1080808" target="_blank" rel="noreferrer">说一说几种常用的登录认证方式，你用的哪种</a></li><li><a href="https://www.liaoxuefeng.com/wiki/1252599548343744/1328768897515553" target="_blank" rel="noreferrer">使用 Session 和 Cookie</a></li></ul>',71),l=[a];function s(n,c,h,p,d,k){return o(),t("div",null,l)}const b=e(r,[["render",s]]);export{f as __pageData,b as default};
