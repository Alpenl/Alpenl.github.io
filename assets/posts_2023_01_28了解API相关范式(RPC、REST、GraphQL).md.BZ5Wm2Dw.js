import{_ as s,c as t,as as i,o as e}from"./chunks/framework.CsiIftoR.js";const c=JSON.parse('{"title":"了解 API 相关范式(RPC、REST、GraphQL)","description":"","frontmatter":{"title":"了解 API 相关范式(RPC、REST、GraphQL)","date":"2023-01-28T00:00:00.000Z","tags":["API","RPC","REST","GraphQL","Web"]},"headers":[],"relativePath":"posts/2023/01/28了解API相关范式(RPC、REST、GraphQL).md","filePath":"posts/2023/01/28了解API相关范式(RPC、REST、GraphQL).md","lastUpdated":1738327344000}'),r={name:"posts/2023/01/28了解API相关范式(RPC、REST、GraphQL).md"};function n(l,a,p,h,o,k){return e(),t("div",null,a[0]||(a[0]=[i(`<h1 id="了解-api-相关范式-rpc、rest、graphql" tabindex="-1">了解 API 相关范式(RPC、REST、GraphQL) <a class="header-anchor" href="#了解-api-相关范式-rpc、rest、graphql" aria-label="Permalink to &quot;了解 API 相关范式(RPC、REST、GraphQL)&quot;">​</a></h1><blockquote><p>✨文章摘要（AI生成）</p></blockquote><p>笔者在本文中探讨了三种常见的 API 范式：RPC、REST 和 GraphQL。</p><ul><li>RPC 允许开发者像调用本地方法一样调用远程方法，具有高效低延迟的优点，但与底层系统紧密耦合，降低了可重用性。</li><li>REST 则是一种面向资源的风格，强调客户端与服务器的解耦，支持多种数据格式，便于缓存，但在实践中缺乏统一结构，可能导致高负载和数据过度获取。</li><li>GraphQL 作为一种查询语言，允许客户端灵活请求所需数据，减少了请求次数，但存在性能问题和学习成本。</li></ul><p>总体而言，RPC 适合内部微服务，REST 适用于标准 API 建模，而 GraphQL 在数据获取的灵活性上占优势，开发者应根据具体需求选择合适的 API 范式。</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>两个独立的应用程序经常需要相互访问交谈，或则可以是同一个应用程序，但部署在不同的服务器，或者现在常用的前后端分离式架构等等需要经常相互访问交谈，因此开发人员经常搭建桥梁 API(Application Programming Interfaces)</p><blockquote><p>关于 API 的定义，你可以简单看看这篇文章-- <a href="https://www.altexsoft.com/blog/engineering/what-is-api-definition-types-specifications-documentation/" target="_blank" rel="noreferrer">What is an API: Definition, Types, Specifications, Documentation</a></p></blockquote><p>关于历史出现的 API 范式，我们可以参考 <a href="https://twitter.com/robdcrowley?lang=en" target="_blank" rel="noreferrer">Rob Crowley</a>的这张图：</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020230127165636.png" alt=""></p><p>目前使用的较多的就是 RPC、REST、GraphQL，接下来将会对这三种范式进行优缺点的讨论...</p><h2 id="rpc-remote-procedure-call" tabindex="-1">RPC(Remote Procedure Call) <a class="header-anchor" href="#rpc-remote-procedure-call" aria-label="Permalink to &quot;RPC(Remote Procedure Call)&quot;">​</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>RPC 出现的最初目的，就是<strong>为了让计算机能够跟调用本地方法一样去调用远程方法</strong>，我们可以简单理解为一个本地方法调用+网络通信</p><h3 id="工作过程" tabindex="-1">工作过程 <a class="header-anchor" href="#工作过程" aria-label="Permalink to &quot;工作过程&quot;">​</a></h3><p>客户端调用远程过程，将参数和附加信息序列化为消息，并将消息发送到服务器。收到消息后，服务器反序列化其内容，执行请求的操作，并将结果发送回客户端。</p><p><img src="https://oss.justin3go.com/blogs/RPC%E5%B7%A5%E4%BD%9C%E8%BF%87%E7%A8%8B.png" alt=""></p><h3 id="相关规范" tabindex="-1">相关规范 <a class="header-anchor" href="#相关规范" aria-label="Permalink to &quot;相关规范&quot;">​</a></h3><p><strong>RPC 只是一个概念，但是这个概念有很多规范，都有具体的实现</strong>，如：RMI（Sun/Oracle）、Thrift（Facebook/Apache）、Dubbo（阿里巴巴/Apache）、gRPC（Google）、Motan1/2（新浪）、Finagle（Twitter）、brpc（百度/Apache）、.NET Remoting（微软）、Arvo（Hadoop）、JSON-RPC 2.0（公开规范，JSON-RPC 工作组）</p><p>参考<a href="http://icyfenix.cn/architect-perspective/general-architecture/api-style/rpc.html" target="_blank" rel="noreferrer">《凤凰架构》</a>：</p><blockquote><ul><li>朝着<strong>面向对象</strong>发展，不满足于 RPC 将面向过程的编码方式带到分布式，希望在分布式系统中也能够进行跨进程的面向对象编程，代表为 RMI、.NET Remoting，之前的 CORBA 和 DCOM 也可以归入这类，这条线有一个别名叫做<a href="https://en.wikipedia.org/wiki/Distributed_object" target="_blank" rel="noreferrer">分布式对象</a>（Distributed Object）。</li><li>朝着<strong>性能</strong>发展，代表为 gRPC 和 Thrift。决定 RPC 性能的主要就两个因素：序列化效率和信息密度。序列化效率很好理解，序列化输出结果的容量越小，速度越快，效率自然越高；信息密度则取决于协议中有效荷载（Payload）所占总传输数据的比例大小，使用传输协议的层次越高，信息密度就越低，SOAP 使用 XML 拙劣的性能表现就是前车之鉴。gRPC 和 Thrift 都有自己优秀的专有序列化器，而传输协议方面，gRPC 是基于 HTTP/2 的，支持多路复用和 Header 压缩，Thrift 则直接基于传输层的 TCP 协议来实现，省去了额外应用层协议的开销。</li><li>朝着<strong>简化</strong>发展，代表为 JSON-RPC，说要选功能最强、速度最快的 RPC 可能会很有争议，但选功能弱的、速度慢的，JSON-RPC 肯定会候选人中之一。牺牲了功能和效率，换来的是协议的简单轻便，接口与格式都更为通用，尤其适合用于 Web 浏览器这类一般不会有额外协议支持、额外客户端支持的应用场合。</li></ul></blockquote><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><blockquote><p>实现 RPC 的可以传输协议可以直接建立在 TCP 之上，也可以建立在 HTTP 协议之上。<strong>大部分 RPC 框架都是使用的 TCP 连接（gRPC 使用了 HTTP2）。</strong></p></blockquote><ul><li>调用简单，清晰，透明，不用像 rest 一样复杂，就像调用本地方法一样简单（同样也是缺点，就是后续提到的耦合度强）</li><li>高效低延迟，性能高</li><li><strong>使用自定义 TCP 协议进行传输可以极大地减轻了传输数据的开销。</strong> 这也就是为什么通常会采用自定义 TCP 协议的 RPC 来进行进行服务调用的真正原因。</li><li>成熟的 RPC 框架还提供好了“服务自动注册与发现”、&quot;智能负载均衡&quot;、“可视化的服务治理和运维”、“运行期流量调度”等等功能减轻开发者心智负担</li></ul><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li><strong>与底层系统紧密耦合</strong>：API 的抽象级别有助于其可重用性。它对底层系统越紧密，对其他系统的可重用性就越低。RPC 与底层系统的紧密耦合不允许在系统功能和外部 API 之间存在抽象层。这会引发安全问题，因为很容易将有关底层系统的实现细节泄露到 API 中。RPC 的紧耦合使得可扩展性需求和松耦合团队难以实现。因此，客户端要么担心调用特定端点的任何可能的副作用，要么尝试找出要调用的端点，因为它不了解服务器如何命名其功能。</li><li><strong>各个函数可能复用率低</strong>：创建新功能非常容易（这也可以算作优点之一）。因此，可能经常没有编辑现有的，而是创建了新的，最终得到了大量难以理解的重叠功能。</li></ul><h2 id="rest-representational-state-transfer" tabindex="-1">REST(Representational state transfer) <a class="header-anchor" href="#rest-representational-state-transfer" aria-label="Permalink to &quot;REST(Representational state transfer)&quot;">​</a></h2><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><p>REST – REpresentational State Transfer</p><blockquote><p>RESTful 实例可以查看我之前写的 Django<a href="https://justin3go.com/%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%90%8E%E7%AB%AF%E5%82%A8%E5%A4%87/02DRF%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html#restful%E4%BB%8B%E7%BB%8D" target="_blank" rel="noreferrer">这个笔记</a>或者 NestJS<a href="https://justin3go.com/%E7%9F%A5%E8%AF%86%E5%BA%93/NestJS/01controller.html" target="_blank" rel="noreferrer">这个笔记</a>，如果你使用过 REST，可以直接忽略这段话，继续下面的阅读。</p></blockquote><p>下面谈谈偏理论的东西，如何理解 REST：</p><p>REST 本质上是面向资源编程，这也是与 RPC 面向过程编程最主要的区别，需要注意的是，REST 只是一种风格，不遵循它编译器也不会报错，只是不能享受到对应的一些好处罢了，需要设计者灵活考虑。</p><p>既然是面向资源编程，所以我们可以这样理解一个符合 RESTful 的接口：</p><ul><li>看 URL 就知道我们的目标是什么资源</li><li>看方法就知道我们需要对该资源进行什么样的操作</li><li>看返回码就知道操作的结果如何</li></ul><p>比如我们要获取这个编号的咖啡信息</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://api.justin3go.com/coffees/1</span></span></code></pre></div><h3 id="rest-的指导原则" tabindex="-1">REST 的指导原则 <a class="header-anchor" href="#rest-的指导原则" aria-label="Permalink to &quot;REST 的指导原则&quot;">​</a></h3><p>REST 的指导原则部分内容引用<a href="https://restfulapi.net/" target="_blank" rel="noreferrer">该篇文档</a>的机翻：</p><ul><li><p><strong>统一接口</strong></p><p>通过将 <a href="https://www.d.umn.edu/~gshute/softeng/principles.html" target="_blank" rel="noreferrer">通用性原则</a>应用于 组件接口，我们可以简化整体系统架构并提高交互的可见性。</p><p>多个体系结构约束有助于获得统一的接口并指导组件的行为。</p><p>以下四个约束可以实现统一的 REST 接口：</p><ul><li><strong>资源标识</strong> ——接口必须唯一标识客户端和服务器之间交互中涉及的每个资源。</li><li><strong>通过表示操作资源</strong> ——资源在服务器响应中应该有统一的表示。API 消费者应该使用这些表示来修改服务器中的资源状态。</li><li><strong>自描述消息</strong> ——每个资源表示都应该携带足够的信息来描述如何处理消息。它还应提供有关客户端可以对资源执行的其他操作的信息。</li><li><strong>超媒体作为应用程序状态的引擎</strong> ——客户端应该只有应用程序的初始 URI。客户端应用程序应使用超链接动态驱动所有其他资源和交互。</li></ul></li><li><p><strong>客户端服务器</strong></p><p>客户端-服务器设计模式强制 <strong>关注点分离</strong>，这有助于客户端和服务器组件独立发展。</p><p>通过将用户界面问题（客户端）与数据存储问题（服务器）分开，我们提高了跨多个平台的用户界面的可移植性，并通过简化服务器组件提高了可扩展性。</p><p>随着客户端和服务器的发展，我们必须确保客户端和服务器之间的接口/契约不会中断。</p></li><li><p><strong>无状态</strong></p><p><a href="https://restfulapi.net/statelessness/" target="_blank" rel="noreferrer">无状态</a> 要求从客户端到服务器的每个请求都必须包含理解和完成请求所需的所有信息。</p><p>服务器无法利用服务器上任何先前存储的上下文信息。</p><p>为此，客户端应用程序必须完全保持会话状态。</p></li><li><p><strong>可缓存</strong></p><p>可 <a href="https://restfulapi.net/caching/" target="_blank" rel="noreferrer">缓存约束</a> 要求响应应隐式或显式将自身标记为可缓存或不可缓存。</p><p>如果响应是可缓存的，则客户端应用程序有权在以后的等效请求和指定时间段内重用响应数据。</p><p>分层系统</p><p>分层系统风格允许架构通过约束组件行为由分层层组成。</p><p>例如，在分层系统中，每个组件都无法看到与其交互的直接层之外的信息。</p></li><li><p>按需代码（<em>可选</em>）</p><p>REST 还允许通过下载和执行小程序或脚本形式的代码来扩展客户端功能。</p><p>下载的代码通过减少需要预先实现的功能数量来简化客户端。服务端可以将部分特性以代码的形式交付给客户端，客户端只需要执行代码即可。</p></li></ul><h3 id="优点-1" tabindex="-1">优点 <a class="header-anchor" href="#优点-1" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li><strong>解耦客户端和服务器</strong>：耦合性低，兼容性好，提高开发效率</li><li>不用关心接口实现细节，相对更规范，更标准，更通用，跨语言支持</li><li><strong>缓存友好</strong>：重用大量 HTTP 工具，REST 是唯一允许在 HTTP 级别缓存数据的样式。相比之下，任何其他 API 上的缓存实现都需要配置额外的缓存模块。</li><li><strong>多种格式支持</strong>：支持多种格式来存储和交换数据</li></ul><h3 id="缺点-1" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-1" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li><strong>没有统一的 REST 结构</strong>：正如之前所说，只是一种风格，有一些指导原则，所以构建 REST API 没有完全正确的方法。如何建模资源以及建模哪些资源仍灵活多变，取决于业务场景。<strong>这使得 REST 理论上很简单但实践中较为困难</strong>。</li><li><strong>高负载</strong>：REST API 会返回大量丰富的元数据，方便客户端仅从响应中就可以了解有关应用程序状态的所有必要信息，随之而来的就是一定的性能问题（高负载）。这个缺点和下面一个缺点也是后续 GraphQL 被提出的主要原因。</li><li><strong>过度获取和获取不足</strong>：无法预估后续业务场景会如何变化，这导致了最初设计的 API 很难根据业务场景不断变化并且不能影响到之前的业务。</li></ul><h2 id="graphql-graph-query-language" tabindex="-1">GraphQL(Graph query language) <a class="header-anchor" href="#graphql-graph-query-language" aria-label="Permalink to &quot;GraphQL(Graph query language)&quot;">​</a></h2><h3 id="介绍-1" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-1" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><blockquote><p>如果你熟悉 REST，但不熟悉 GraphQL，推荐阅读这篇文章--<a href="https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/" target="_blank" rel="noreferrer">GraphQL vs. REST</a>，里面有较为详细的对比与介绍</p></blockquote><p>首先来说，它是一种查询语言，具有一定的语法规则（即学习成本--有编程基础的话较小），可以解决上述 REST 中的一些问题。</p><p>引用<a href="https://graphql.org/" target="_blank" rel="noreferrer">官网</a>的介绍：</p><blockquote><p>GraphQL 是一种用于 API 的查询语言，也是使用现有数据完成这些查询的运行时。GraphQL 为您的 API 中的数据提供了完整且易于理解的描述，使客户能够准确地询问他们需要什么，仅此而已，随着时间的推移更容易发展 API，并启用强大的开发人员工具。</p></blockquote><h3 id="q-a" tabindex="-1">Q&amp;A <a class="header-anchor" href="#q-a" aria-label="Permalink to &quot;Q&amp;A&quot;">​</a></h3><p>这里引用一下<a href="https://graphql.org/faq/#how-does-graphql-affect-my-product-s-performance" target="_blank" rel="noreferrer">官网的 FAQ</a></p><p><strong>ls GraphQL a database language like SQL?</strong></p><blockquote><p>No, but this is a common misconception.</p><p>GraphQL is a specification typically used for remote client-server communications. Unlike SQL, GraphQL is agnostic to the data source(s) used to retrieve data and persist changes. Accessing and manipulating data is performed with arbitrary functions called <a href="https://graphql.org/learn/execution/" target="_blank" rel="noreferrer">resolvers</a>. GraphQL coordinates and aggregates the data from these resolver functions, then returns the result to the client. Generally, these resolver functions should delegate to a <a href="https://graphql.org/learn/thinking-in-graphs/#business-logic-layer" target="_blank" rel="noreferrer">business logic layer</a> responsible for communicating with the various underlying data sources. These data sources could be remote APIs, databases, <a href="https://graphql.org/learn/caching/" target="_blank" rel="noreferrer">local cache</a>, and nearly anything else your programming language can access.</p><p>For more information on how to get GraphQL to interact with your database, check out our <a href="https://graphql.org/learn/execution/#root-fields-resolvers" target="_blank" rel="noreferrer">documentation on resolvers</a>.</p></blockquote><p><strong>Does GraphQL replace REST?</strong></p><blockquote><p>No, not necessarily. They both handle APIs and can <a href="https://graphql.org/learn/thinking-in-graphs/#business-logic-layer" target="_blank" rel="noreferrer">serve similar purposes</a> from a business perspective. GraphQL is often considered an alternative to REST, but it’s not a definitive replacement.</p><p>GraphQL and REST can actually co-exist in your stack. For example, you can abstract REST APIs behind a <a href="https://www.howtographql.com/advanced/1-server/" target="_blank" rel="noreferrer">GraphQL server</a>. This can be done by masking your REST endpoint into a GraphQL endpoint using <a href="https://graphql.org/learn/execution/#root-fields-resolvers" target="_blank" rel="noreferrer">root resolvers</a>.</p><p>For an opinionated perspective on how GraphQL compares to REST, check out <a href="https://www.howtographql.com/basics/1-graphql-is-the-better-rest/" target="_blank" rel="noreferrer">How To GraphQL</a>.</p></blockquote><p>看到上述两个 FAQ 我自己蹦出了这样的想法：</p><p>首先我想到的是一个比较荒谬的问题：既然 GraphQL 是一种查询语言，SQL 也是一种查询语言，那为什么不直接前端传入 sql 直接拿数据呢？</p><blockquote><p>显然这是有很多问题的，最主要的问题就是这相当于无后端，全部逻辑都集中在了客户端，这对于客户端的压力是非常大的，并且也是非常不安全的，就类似于破解单机游戏一样...</p><p>高耦合的话我理解前端程序也可以进行多层抽象来解耦，比如 MVC 这类。但这又要重新经历一次类似的 web 架构演变，对现有的生态也是极大的破坏...</p><p>上述只是一些胡乱猜想，不必当真，回到这里的话 GraphQL 就是对后端提供的 GraphQL 运行时查询的语言，官方语法为 SDL。而这个运行时是应用程序业务逻辑外面的一层接口暴露，我们开发人员需要对每一个接口业务字段</p></blockquote><p>然后与 REST 的区别我理解就是：二者本质都可以理解为面向资源编程</p><ul><li>GraphQL 通过一个运行时，使用规定的语法可以更加精准灵活地操作资源（灵活度也是有一定限度的，只是相对来说）</li><li>而 REST 就能根据提前定义好地 URL，通过不同的方法操作资源</li></ul><p>这部分可能各有各的想法思考，欢迎友善讨论~</p><h3 id="工作过程-1" tabindex="-1">工作过程 <a class="header-anchor" href="#工作过程-1" aria-label="Permalink to &quot;工作过程&quot;">​</a></h3><blockquote><p>在查询之前需要 schema，客户端可以验证他们的查询以确保服务器能够响应它。在到达后端应用程序时，GraphQL 操作将针对整个 schema 进行解释，并使用前端应用程序的数据进行解析。向服务器发送大量查询后，API 会返回一个 JSON 响应，其中的数据形状与我们请求的数据完全相同。</p></blockquote><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020230128011150.png" alt=""></p><p>参考：_<a href="https://www.apollographql.com/blog/graphql-explained-5844742f195e" target="_blank" rel="noreferrer"><em>Jonas Helfer</em></a></p><p>除了 RESTful CRUD 操作之外，GraphQL 还具有允许来自服务器的实时通知的<a href="https://docs.nestjs.com/graphql/subscriptions" target="_blank" rel="noreferrer">订阅</a>。</p><p>GraphQL 需要我们对暴露出去的每一个字段规定一个函数进行处理，比如一个简单的 node 搭建的应用程序如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> express </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;express&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> graphqlHTTP </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;express-graphql&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { buildSchema } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;graph&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 构建 schema，这里定义查询的语句和类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> schema </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> buildSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	typr Account {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		name: String</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		age: Int</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		sex: String</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		department: String</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	type Query {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		hello: String</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		accountName: String</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		age: Int</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		account: Account</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义查所对应的 resolver，也就是查询对应的处理器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	accountName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;justin3go&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	account</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		sex: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		department: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> express</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/graphql&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">graphqlHTTP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	schema: schema,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	rootValue: root,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	graphiql:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>本篇文章不做其实战介绍，可直接参考<a href="https://docs.nestjs.com/graphql/quick-start" target="_blank" rel="noreferrer">NestJS 官网搭建 GraphQL 教程</a>以及其仓库有非常丰富并值得参考的相关代码：</p><ul><li><a href="https://github.com/nestjs/nest/tree/master/sample/22-graphql-prisma" target="_blank" rel="noreferrer">22-graphql-prisma</a></li><li><a href="https://github.com/nestjs/nest/tree/master/sample/23-graphql-code-first" target="_blank" rel="noreferrer">23-graphql-code-first</a></li></ul><blockquote><p>Nest 提供了两种构建 GraphQL 应用程序的方法，<strong>代码优先</strong>和<strong>模式优先</strong>方法。您应该选择最适合您的。这个 GraphQL 部分的大部分章节分为两个主要部分：一个是如果你<strong>先采用代码</strong>，你应该遵循，另一个是如果你先采用<strong>模式</strong>，则应该使用。</p><p>在<strong>代码优先</strong>方法中，您使用装饰器和 TypeScript 类来生成相应的 GraphQL 模式。如果您更喜欢专门使用 TypeScript 并避免在语言语法之间切换上下文，则此方法很有用。</p><p>在<strong>模式优先</strong>方法中，事实来源是 GraphQL SDL（模式定义语言）文件。SDL 是一种在不同平台之间共享模式文件的与语言无关的方式。Nest 基于 GraphQL 模式自动生成您的 TypeScript 定义（使用类或接口），以减少编写冗余样板代码的需要。</p><p><a href="https://docs.nestjs.com/graphql/quick-start#overview" target="_blank" rel="noreferrer">https://docs.nestjs.com/graphql/quick-start#overview</a></p></blockquote><h3 id="优点-2" tabindex="-1">优点 <a class="header-anchor" href="#优点-2" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li><strong>非常适合图形数据</strong>：深入链接关系但不适合平面数据的数据</li><li>请求的数据不多不少，按需请求，非常灵活</li><li>获取多个资源，只用一个请求</li><li>描述所有可能类型的系统。便于维护，根据需求平滑演进，添加或者隐藏字段（无需版本控制）</li></ul><h3 id="缺点-2" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-2" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li><strong>性能问题</strong>：GraphQL 以复杂性换取其强大功能。一个请求中包含太多嵌套字段会导致系统过载。因此，REST 仍然是复杂查询的更好选择。</li><li><strong>缓存复杂性</strong>：由于 GraphQL 没有重用 HTTP 缓存语义，因此它需要自定义缓存工作。</li><li><strong>一定的学习成本</strong>：没有足够的时间弄清楚 GraphQL 生态和 SDL，许多项目决定遵循众所周知的 REST 路径。</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><table tabindex="0"><thead><tr><th></th><th>RPC</th><th>REST</th><th>GraphQL</th></tr></thead><tbody><tr><td>组成</td><td>本地过程调用</td><td>6 项指导原则</td><td>SDL</td></tr><tr><td>格式</td><td>JSON、XML、Protobuf、Thrift、FlatBuffers、</td><td>XML、JSON、HTML、plain text</td><td>JSON</td></tr><tr><td>学习成本</td><td>低</td><td>低</td><td>中</td></tr><tr><td>社区生态</td><td>丰富</td><td>丰富</td><td>正在丰富中</td></tr></tbody></table><ul><li>RPC 适用于内部微服务，IO 密集的服务调用用 RPC，服务调用过于密集与复杂，RPC 就比较适用</li><li>REST 具有 API 的最高抽象和最佳建模。但它在网络上往往更重、更固定（通常为了兼容会有冗余字段）</li><li>GraphQL 在灵活获取数据上优势很大，但具有一定的学习成本。</li></ul><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>具体的 API 范式体会起来可能也是因人而异，上述的总结也可能有所偏差，欢迎友善讨论提出一些建议或者纠正一些错误</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://su29029.github.io/2020/08/28/%E7%A9%B6%E7%AB%9F%E6%80%8E%E4%B9%88%E7%90%86%E8%A7%A3restful%E8%AE%BE%E8%AE%A1%E9%A3%8E%E6%A0%BC%EF%BC%9F%E6%88%91%E5%96%9C%E6%AC%A2%E8%BF%99%E4%B8%AA%E6%AF%94%E5%96%BB/" target="_blank" rel="noreferrer">究竟怎么理解 restful 设计风格？我喜欢这个比喻</a></li><li><a href="https://apisyouwonthate.com/blog/understanding-rpc-rest-and-graphql" target="_blank" rel="noreferrer">Understanding RPC, REST and GraphQL</a></li><li><a href="http://icyfenix.cn/architect-perspective/general-architecture/api-style/rpc.html" target="_blank" rel="noreferrer">凤凰架构-RPC 与 REST</a></li><li><a href="https://www.altexsoft.com/blog/soap-vs-rest-vs-graphql-vs-rpc/" target="_blank" rel="noreferrer">Comparing API Architectural Styles: SOAP vs REST vs GraphQL vs RPC</a></li><li><a href="https://herbertograca.com/2017/07/28/architectural-styles-vs-architectural-patterns-vs-design-patterns/" target="_blank" rel="noreferrer">Architectural Styles vs. Architectural Patterns vs. Design Patterns</a></li><li><a href="https://zhuanlan.zhihu.com/p/102760613" target="_blank" rel="noreferrer">RPC 和 REST 的优缺点、区别、如何选择</a></li><li><a href="https://restfulapi.net/" target="_blank" rel="noreferrer">Guiding Principles of REST</a></li><li><a href="https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/" target="_blank" rel="noreferrer">GraphQL vs. REST</a></li><li><a href="https://github.com/nestjs/nest/tree/master/sample" target="_blank" rel="noreferrer">NestJS 应用例子</a></li></ul>`,82)]))}const d=s(r,[["render",n]]);export{c as __pageData,d as default};
