import{_ as e,c as t,as as i,o as l}from"./chunks/framework.CsiIftoR.js";const u=JSON.parse('{"title":"微前端原则","description":"","frontmatter":{},"headers":[],"relativePath":"notes/微前端设计与实现/02微前端原则.md","filePath":"notes/微前端设计与实现/02微前端原则.md","lastUpdated":1738327344000}'),o={name:"notes/微前端设计与实现/02微前端原则.md"};function r(h,a,n,s,d,p){return l(),t("div",null,a[0]||(a[0]=[i('<h1 id="微前端原则" tabindex="-1">微前端原则 <a class="header-anchor" href="#微前端原则" aria-label="Permalink to &quot;微前端原则&quot;">​</a></h1><blockquote><p>该笔记学习自书籍《微前端设计与实现》--卢卡.梅扎利拉</p></blockquote><h2 id="从单体到微服务" tabindex="-1">从单体到微服务 <a class="header-anchor" href="#从单体到微服务" aria-label="Permalink to &quot;从单体到微服务&quot;">​</a></h2><h3 id="单体架构的缺点" tabindex="-1">单体架构的缺点 <a class="header-anchor" href="#单体架构的缺点" aria-label="Permalink to &quot;单体架构的缺点&quot;">​</a></h3><ol><li>如果想在一个单体应用里让大量代码和谐地运行，根据我的经验，需要针对程序逻辑进行预先的优化和复杂的工程化设计，但是对可复用代码的抽象化会导致代码库更加复杂。从长远看，维护复杂代码逻辑的努力是不会有什么回报的。更不幸的是，有些在当时看起来简单直接的东西，几个月后会变得笨重不堪。</li><li>单体应用无法单独伸缩某一块业务，必须全量实施。如果系统代码的编写质量不高，或者模块化不足，就会让人非常头疼。</li><li>分散的团队和协同的团队一起维护单体应用代码库是有挑战性的，特别是在团队规模达到中大型以后，这种挑战更加明显，因为沟通成本会很高，少数人要替所有人做决定。</li><li>对于单体应用，我们必须每次都部署整个代码库，这就增加了在生产环境中破坏 API、引入新 bug 和犯更多错误的可能性</li></ol><h3 id="采用微服务也有一些缺点" tabindex="-1">采用微服务也有一些缺点 <a class="header-anchor" href="#采用微服务也有一些缺点" aria-label="Permalink to &quot;采用微服务也有一些缺点&quot;">​</a></h3><ol><li>我们必须在自动化、可观察性以及监控性方面有所投入，才能实现一个可控的分布式系统。</li><li>容易对微服务边界做出错误的界定，比如在一个依赖其他微服务的系统中存在一个不足以完成一项操作的过小微服务，它造成了<strong>服务之间的强耦合</strong>，这使得开发人员不得不每次都将它们一起部署。</li></ol><p>软件开发可选的架构有很多种，我们应该只在必要的时候选用微服务，而不是仅仅因为它是最新的、最好的实现方式而草率地选用它。</p><h3 id="什么是最小可行产品" tabindex="-1">什么是最小可行产品 <a class="header-anchor" href="#什么是最小可行产品" aria-label="Permalink to &quot;什么是最小可行产品&quot;">​</a></h3><p>当我们开始一个新项目或者一个提供在线服务的新业务时，第一轮迭代应该用来验证我们的业务能够成功。通常情况下，我们会先设定一个技术栈，即团队所熟悉的用于建立和运行单个应用的技术服务列表。通过最大限度地减少系统外的干扰和专注于最基本的内容，我们能够直接从用户那里收集到有关业务理念的反馈信息。这也被称为最小可行产品（minimum viable product，MVP）。</p><p>这也是为什么对于新项目来说，单体架构往往是一个很好的选择。我们可以更加专注于业务逻辑，而不是把精力放在如何解决自动化等其他问题上。</p><h3 id="什么时候进行微服务的迁移" tabindex="-1">什么时候进行微服务的迁移 <a class="header-anchor" href="#什么时候进行微服务的迁移" aria-label="Permalink to &quot;什么时候进行微服务的迁移&quot;">​</a></h3><p>因为内部人员扩充，我们对系统的工作原理有了更深刻的理解，所以在这个时候拆分单体应用变得更有意义。</p><p>每个团队负责一组微服务。团队成员可以自行决定选择哪种适合的数据库，定义什么样的数据库结构，采用什么缓存策略以及选择哪种编程语言来完成工作。总体来说，我们正在进入这样一个状态：每个团队都有权做出决策，并对在生产环境中运行的服务负责。除了日志、监控这样的关键性决策，每个团队不再需要遵循整个系统的统一解决方案</p><p>但是当业务不断增长且需要扩展前端团队时会出现什么情况呢？</p><h3 id="引入微前端" tabindex="-1">引入微前端 <a class="header-anchor" href="#引入微前端" aria-label="Permalink to &quot;引入微前端&quot;">​</a></h3><p>当我们拥有一个大型或中型的开发团队时，所有应用于代码库的规则往往都是一次性决定的，然后团队会坚持这个决定长达几个月，甚至几年，因为改变任何一项规则都需要团队在整个代码库上付出大量的心血，这对组织来说是一笔巨大的投入。而且，可能由于时间不够、在系统一致性方面过于理想化，或者仅仅是为了便捷，在开发过程中所做的很多决策往往是折中方案。我们不得不承认，业务就像技术，都以一定的节奏变化和发展，这是不可避免的。</p><p>代码抽象化也不是万能灵药。为了复用而过早地对代码抽象化往往弊大于利。我经常看到代码抽象化使得代码复杂了几千倍，而它仅仅在项目中复用了一两次（抽象的代码虽然可以减少开发者的使用难度，但增加了开发者的理解难度，者应该是成反比关系的）</p><p>我们是否有机会使用一个广为人知的模式或架构，这种模式或架构具有快速扩充新功能的能力，而且随着业务发展，不需要大规模发布就能交付部分应用功能？</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020230903122130.png" alt=""></p><h2 id="微服务原则" tabindex="-1">微服务原则 <a class="header-anchor" href="#微服务原则" aria-label="Permalink to &quot;微服务原则&quot;">​</a></h2><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020230903122201.png" alt=""></p><ul><li>围绕业务领域建模是领域驱动设计（domain-driven design，DDD）提出的一个重要原则。</li><li>领域驱动设计告诉我们如何将服务封装在同一个业务域内，通过 API 只暴露需要对外暴露的部分，而<strong>隐藏其余的实现部分</strong>。这样一来，我们就可以按照自己的节奏改变内部逻辑，而不影响系统的其他部分。</li><li>分布式治理使开发人员能够在正确的阶段做出正确的决策，从而解决问题</li><li>对于单体应用，我们每次都要部署整个系统，出现问题的风险更大，部署和回滚需要的时间也较长。</li><li>微服务有多种优雅的服务降级模式，其独立部署和独立发布的特性有效地实现了故障隔离。</li></ul><h2 id="在微前端中实践这些原则" tabindex="-1">在微前端中实践这些原则 <a class="header-anchor" href="#在微前端中实践这些原则" aria-label="Permalink to &quot;在微前端中实践这些原则&quot;">​</a></h2><h3 id="围绕业务领域建模" tabindex="-1">围绕业务领域建模 <a class="header-anchor" href="#围绕业务领域建模" aria-label="Permalink to &quot;围绕业务领域建模&quot;">​</a></h3><p>遵照领域驱动设计原则为微前端应用建模不仅是可行的，而且是有价值的。项目之初，花些时间确定不同的业务领域，弄清如何分治应用有利于后期添加新功能，或对应用进行改版。驱动设计原则可以为管理后端项目提供明确的方向，同时，相关的一些技术也可以应用到前端。特别是在授权产品团队与技术团队通力合作时，让不同团队完全掌控自己的业务领域会产生强大的效能。</p><h3 id="自动化文化" tabindex="-1">自动化文化 <a class="header-anchor" href="#自动化文化" aria-label="Permalink to &quot;自动化文化&quot;">​</a></h3><p>就微服务架构而言，我们的组织绝不能有糟糕的自动化文化。否则，任何想采用的微前端方案最终都会变成所有团队的噩梦。考虑到每一个微前端项目都包含几十个或几百个组成部分，我们在采用这种架构时必须确保稳固的持续集成、流水线部署以及快速的反馈循环。在正确的自动化方面花些时间能够促成微前端的顺利采用。</p><h3 id="隐藏实现细节" tabindex="-1">隐藏实现细节 <a class="header-anchor" href="#隐藏实现细节" aria-label="Permalink to &quot;隐藏实现细节&quot;">​</a></h3><p>隐藏实现细节和按协议工作是两个重要做法，特别是在应用的各个部分需要相互通信时。在团队之间预先制定一个协议，并让各方在整个开发过程中遵守这个协议是至关重要的。除非 API 协议有变化，否则采用这种方式就可以确保每个团队在不影响其他团队的情况下更改实现细节。这些做法能够让团队专注于内部的实现细节，而不会干扰其他团队的工作。每个团队不需要依赖外部，而是按照自己的节奏开展工作，创建更加有效的集成。</p><h3 id="隐藏实现细节-1" tabindex="-1">隐藏实现细节 <a class="header-anchor" href="#隐藏实现细节-1" aria-label="Permalink to &quot;隐藏实现细节&quot;">​</a></h3><p>隐藏实现细节和按协议工作是两个重要做法，特别是在应用的各个部分需要相互通信时。在团队之间预先制定一个协议，并让各方在整个开发过程中遵守这个协议是至关重要的。除非 API 协议有变化，否则采用这种方式就可以确保每个团队在不影响其他团队的情况下更改实现细节。这些做法能够让团队专注于内部的实现细节，而不会干扰其他团队的工作。每个团队不需要依赖外部，而是按照自己的节奏开展工作，创建更加有效的集成。</p><h3 id="高度可观察性" tabindex="-1">高度可观察性 <a class="header-anchor" href="#高度可观察性" aria-label="Permalink to &quot;高度可观察性&quot;">​</a></h3><p>前端监控变得日益重要，Sentry 和 LogRocket 这样的工具为每个开发人员提供了丰富的可视化功能。使用这些工具对于了解应用在哪里失败以及为什么失败至关重要。就微服务而言，故障随时随地都可能发生，能够快速解决问题远比预防问题更重要。这让我们迈向了一种模式：投入更多资源准备随时解决系统故障，而非试图完全预防故障。与其他微服务原则一样，这也适用于前端</p><h2 id="微前端不是万能灵药" tabindex="-1">微前端不是万能灵药 <a class="header-anchor" href="#微前端不是万能灵药" aria-label="Permalink to &quot;微前端不是万能灵药&quot;">​</a></h2><p>在工作中使用正确的工具非常重要。我经常看到由于错误的架构决策导致了项目失败或大幅延期的情况。</p><p>由于微前端的本质特性，以及微前端可能会在技术及组织层面增加复杂性，因此它并不适用于所有应用。</p><p>当软件需要不断迭代和长期维护时，当需要多个团队共同开发一个应用时，当我们想以迭代的方式迁移一个旧项目时，微前端是一个明智的选择。但是，微前端对某些应用并不适用，比如服务器端渲染、单页应用或者单 HTML 页面应用。微前端有许多优点，但也有很多缺点和问题。如果对于一个项目来说，其缺点多于优点，那么微前端就不是一个正确的方案。后文将继续探讨这种架构的利弊</p>',38)]))}const b=e(o,[["render",r]]);export{u as __pageData,b as default};
