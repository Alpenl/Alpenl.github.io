import{_ as r,c as e,as as a,o as l}from"./chunks/framework.CsiIftoR.js";const u=JSON.parse('{"title":"两个多月捣鼓了一个健康类小程序","description":"","frontmatter":{"title":"两个多月捣鼓了一个健康类小程序","date":"2023-05-07T00:00:00.000Z","tags":["小程序","心理健康","互联网+","问卷调查","AI","Vue.js","Nest.js"]},"headers":[],"relativePath":"posts/2023/05/07两个多月捣鼓了一个健康类小程序.md","filePath":"posts/2023/05/07两个多月捣鼓了一个健康类小程序.md","lastUpdated":1738327344000}'),s={name:"posts/2023/05/07两个多月捣鼓了一个健康类小程序.md"};function o(i,t,p,n,h,g){return l(),e("div",null,t[0]||(t[0]=[a('<h1 id="两个多月捣鼓了一个健康类小程序" tabindex="-1">两个多月捣鼓了一个健康类小程序 <a class="header-anchor" href="#两个多月捣鼓了一个健康类小程序" aria-label="Permalink to &quot;两个多月捣鼓了一个健康类小程序&quot;">​</a></h1><blockquote><p>✨文章摘要（AI生成）</p></blockquote><p>笔者在两个月的时间里成功开发了一个以心理健康为主题的小程序，主要功能已完成，虽然仍有待改进，但整体体验令人满意。项目旨在通过“互联网+心理健康”的方式，解决青少年面临的心理健康问题，特别是普及、发现和解决三大痛点。小程序的创新之处在于通过朋友间互相填写问卷的方式，结合自身与他人的评价，帮助用户更好地认识自己的心理状态。</p><p>在技术实现上，笔者采用了现代化的前后端技术栈，包括 Vue.js、Nest.js 等，此外还引入了 AI 智能问答功能，形成发现与解决问题的闭环。尽管项目仍处于迭代阶段，笔者对未来的商业化和功能扩展充满期待，计划引入更多的心理咨询资源和社交功能，以提升用户体验和价值。</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>我的心理健康小程序终于完工了🎉🎉🎉，至少主要功能基本做完了，瑕疵肯定还有，不过就后面有机会再慢慢迭代吧。</p><p>从项目开题到现在，已经两月有余，从需求文档到后端技术文档，再到 UI 设计稿以及前端技术文档，虽然文档很多地方都不规范，但好在是自己一个人看，就没有在意一些文档上的细节，只要自己以后能看懂就行了。</p><p>做这个项目更多也是以学习为主，所以采用了许多以前可能经常在别人文章上看到的但没有真正尝试过的有意思的技术，但整个项目开发下来体验是拉满的，完全满足了我的好奇心或者说是探索欲。</p><p>在开发过程中，也顺便写了几篇实践性的文章，当然由于挺忙的（挺懒的😅），所以更多也只是贴了下代码，没有细细道来，如下是在项目开发过程中写的几篇文章，感兴趣的可以瞧瞧：</p><ul><li><a href="https://justin3go.com/%E5%8D%9A%E5%AE%A2/2023/03/29%E5%89%8D%E7%AB%AF%E8%87%AA%E7%BB%99%E8%87%AA%E8%B6%B3UI%E8%AE%BE%E8%AE%A1%E7%A8%BF.html" target="_blank" rel="noreferrer">前端自给自足 UI 设计稿?(Midjourney+MasterGo)</a></li><li><a href="https://justin3go.com/%E5%8D%9A%E5%AE%A2/2023/04/05%E5%AE%9E%E7%8E%B0%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F(uniapp)%E4%B8%8A%E4%BC%A0%E5%A4%B4%E5%83%8F%E8%87%B3%E9%98%BF%E9%87%8C%E4%BA%91oss.html" target="_blank" rel="noreferrer">小程序(uniapp)上传头像至 OSS(阿里云)--保姆级</a></li><li><a href="https://justin3go.com/%E5%8D%9A%E5%AE%A2/2023/04/17%E6%88%91%E7%BB%88%E4%BA%8E%E4%BC%9A%E7%94%A8Docker%E4%BA%86(nest+prisma+psotgresql+nginx+https).html" target="_blank" rel="noreferrer">我终于会用 Docker 了(nest+prisma+psotgresql+nginx+https)</a></li><li><a href="https://justin3go.com/%E5%8D%9A%E5%AE%A2/2023/04/20Vue3+TS(uniapp)%E6%89%8B%E6%92%B8%E4%B8%80%E4%B8%AA%E8%81%8A%E5%A4%A9%E9%A1%B5%E9%9D%A2.html" target="_blank" rel="noreferrer">Vue3+TS(uniapp)手撸一个聊天页面</a></li><li><a href="https://justin3go.com/%E5%8D%9A%E5%AE%A2/2023/04/23Nest%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%B8%A6%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E7%9A%84GraphQL%E8%AE%A2%E9%98%85Subscription.html" target="_blank" rel="noreferrer">Nest 如何实现带身份验证的 GraphQL 订阅 Subscription</a></li><li><a href="https://justin3go.com/%E5%8D%9A%E5%AE%A2/2023/04/26%E8%AF%95%E4%B8%8B%E5%BE%AE%E8%B0%83GPT-3%E5%81%9A%E4%B8%80%E4%B8%AA%E5%BF%83%E7%90%86%E9%97%AE%E7%AD%94%E6%9C%BA%E5%99%A8%E4%BA%BA.html" target="_blank" rel="noreferrer">试下微调 GPT-3 做一个心理问答机器人</a></li><li><a href="https://justin3go.com/%E5%8D%9A%E5%AE%A2/2023/05/01Nest%E7%9A%84test%E4%B8%AD%E7%9A%84best%E6%98%AFJest%E6%A1%86%E6%9E%B6.html" target="_blank" rel="noreferrer">Nest 的 test 中的 best 是 Jest 框架</a></li></ul><p>回到这里，下面开始介绍我做的这个项目。</p><h2 id="背景简述" tabindex="-1">背景简述 <a class="header-anchor" href="#背景简述" aria-label="Permalink to &quot;背景简述&quot;">​</a></h2><p>无论是随时间出现的互联网、新冠疫情、短视频、网络社交媒体，还是长期以往存在的如高考、宿舍氛围、人际交往、就业压力等都无时无刻考验着青少年的心理健康，据相关研究表明，出现心理健康问题的青少年不在少数，并且一些心智成熟的成年人同样也面临着心理健康问题的煎熬。</p><p>心理健康问题危害极大，国家高度重视，出台了相关政策完善心理健康体系。</p><p>但目前的情况仍然有 3 个痛点。分别是普及难、发现难、解决难。而“互联网+心理健康系统”被多篇论文及文章指出是解决心理健康问题的重要途径之一。</p><ul><li><strong>痛点 1：如何普及心理健康教育，让每一位家长、老师、学生自己都重视起来</strong>。当所有人都能正视并重视心理健康教育的时候，这个问题就能迎刃而解。目前普遍存在的问题就是父母家长教育水平偏低，不够重视心理健康教育，更加关注孩子的学业、就业情况，忽略其本身的发展。学校虽然响应国家政策，实施了一系列活动，如心理班会，心理测评、心理咨询等，但总归趣味性较低，学生参与感较少，积极度不高，即效果较差。让每一个人都重视心理健康教育是一条漫长的道路，需要坚持，不过我们仍然可以通过发现+解决的途径来加强心理健康教育，但由此又引入了痛点 2 和痛点 3 两个新的问题。</li><li><strong>痛点 2：如何发现心理健康问题</strong>。学生在填写相关心理调查问卷等时，填写时可能具有片面性和欺骗性。片面性是指由于学生本身缺少相关的心理专业知识，一些心理有问题的学生对于自身的真实情况了解程度也不高，误认为自己心理并没有任何问题；欺骗性本质上也是学生并不重视这方面的调查，认为填写它并不能帮助自己，或者以为自身最近出现的问题是暂时的，并且担心其他人知道自己“有病”，所以填写的结果也就敷衍了事，往好的方向填写。最终调查结果虽然令人满意，但学生的真实问题并没有被发现。</li><li><strong>痛点 3：解决心理健康问题。优质心理健康咨询资源不足</strong>，部分落后地区甚至根本无法享受到对应的心理健康咨询资源。心理咨询师通常需要较强的专业能力，丰富的阅历与人生经验，厚积而薄发，培养一个优秀的（能解决问题的）心理咨询师成本较高，即优秀的心理咨询师资源缺乏；并且在心理咨询过程中，<strong>可能会出现线下尴尬的情况</strong>，过度暴露隐私的情况。目前对于已经发现存在心理问题的学生，大多数是沟通能力并不突出，甚至并不愿意沟通交流，所以在对其进行心理辅导时，难以了解真实情况从而对症下药，整个心理辅导过程难以开展。</li></ul><h2 id="创新点简述" tabindex="-1">创新点简述 <a class="header-anchor" href="#创新点简述" aria-label="Permalink to &quot;创新点简述&quot;">​</a></h2><p>针对如上 3 个痛点，笔者开发的产品以<strong>换位思考</strong>为主要创新，能在一定程度上解决这几个痛点。</p><p>总的来说：</p><ul><li>笔者开发的小程序是一个基于朋友之间相互填写问卷的理念，</li><li>并通过计算其相似度和性格倾向雷达图及时反馈给用户自己，</li><li>最后提供一系列后续心理服务帮助用户解决自身可能存在的问题。</li></ul><p>具体来说，当一位用户给自己填写了一份心理问卷之后，他可以将这份问卷分享给好友，而<strong>好友则以该名用户的视角填写这份问卷</strong>，即通过了自身评价与他人评价相结合的手段判断该名用户是否可能产生了一定的心理健康问题。</p><p>在此基础上，我们添加了如他人与自身评价最相似的排行榜，以及性格倾向雷达图等可视化手段及时反馈，增加用户填写问卷的自愿性。</p><p><img src="https://oss.justin3go.com/blogs/%E7%AC%91%E5%8F%8B%E4%B8%BB%E8%A6%81%E5%88%9B%E6%96%B0%E7%82%B9%E5%8F%8A%E5%8A%9F%E8%83%BD%E5%B1%95%E7%A4%BA.png" alt=""></p><p>最后，结合现在 AI 热的特点，笔者又在最后增加了&quot;心理问题智能问答&quot;的 AI 咨询功能，以形成发现问题=&gt;解决问题的功能闭环。</p><p>并且，有心理问题的人可能并不愿意与真人进行交流，所以 AI 咨询有能起很多作用。</p><h2 id="技术栈描述" tabindex="-1">技术栈描述 <a class="header-anchor" href="#技术栈描述" aria-label="Permalink to &quot;技术栈描述&quot;">​</a></h2><h3 id="前端技术栈" tabindex="-1">前端技术栈 <a class="header-anchor" href="#前端技术栈" aria-label="Permalink to &quot;前端技术栈&quot;">​</a></h3><ul><li><a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noreferrer">Vue.js 3</a></li><li><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">Typescript</a></li><li><a href="https://pinia.vuejs.org/zh/core-concepts/actions.html" target="_blank" rel="noreferrer">Pinia</a></li><li><a href="https://vitejs.dev/guide/why.html#slow-updates" target="_blank" rel="noreferrer">Vite</a></li><li><a href="https://uniapp.dcloud.net.cn/" target="_blank" rel="noreferrer">Uniapp</a></li><li><a href="https://www.ucharts.cn/v2" target="_blank" rel="noreferrer">UCharts</a></li><li><a href="https://villus.logaretm.com/" target="_blank" rel="noreferrer">Villus</a></li></ul><h3 id="后端技术栈" tabindex="-1">后端技术栈 <a class="header-anchor" href="#后端技术栈" aria-label="Permalink to &quot;后端技术栈&quot;">​</a></h3><p><a href="#前言">07 两个多月捣鼓了一个健康类小程序</a></p><ul><li><a href="https://docs.nestjs.com/" target="_blank" rel="noreferrer">Nest.js</a></li><li><a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a></li><li><a href="https://graphql.org/" target="_blank" rel="noreferrer">GraphQL</a></li><li><a href="https://jwt.io/" target="_blank" rel="noreferrer">JWT</a></li><li><a href="https://www.prisma.io/" target="_blank" rel="noreferrer">Prisma</a></li><li><a href="https://jestjs.io/" target="_blank" rel="noreferrer">Jest</a></li><li><a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker</a></li></ul><h3 id="智能问答" tabindex="-1">智能问答 <a class="header-anchor" href="#智能问答" aria-label="Permalink to &quot;智能问答&quot;">​</a></h3><ul><li>GPT-3-Turbo（API）</li></ul><p>最近笔者也学习了吴恩达的提示工程师课程，做了一些笔记，感兴趣的可以查看如下链接：</p><p><a href="https://justin3go.com/%E7%AC%94%E8%AE%B0/ChatGPT%E6%8F%90%E7%A4%BA%E5%AD%A6%E4%B9%A0/ChatGPT%E6%8F%90%E7%A4%BA%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B01_2.html" target="_blank" rel="noreferrer">ChatGPT 提示工程师-吴恩达</a></p><h3 id="致谢" tabindex="-1">致谢 <a class="header-anchor" href="#致谢" aria-label="Permalink to &quot;致谢&quot;">​</a></h3><p>非常感谢对应开源框架及社区的贡献，让我使用起来如此方便🎉🎉🎉</p><h2 id="功能及页面演示" tabindex="-1">功能及页面演示 <a class="header-anchor" href="#功能及页面演示" aria-label="Permalink to &quot;功能及页面演示&quot;">​</a></h2><p><strong>1）四个 Tab 页展示</strong></p><p><img src="https://oss.justin3go.com/blogs/1.png" alt=""></p><p><strong>2）用户登录演示</strong></p><p><img src="https://oss.justin3go.com/blogs/2.png" alt=""></p><p><strong>3）用户主要信息修改演示</strong></p><p><img src="https://oss.justin3go.com/blogs/3.png" alt=""></p><p><strong>4）用户扩展信息修改演示</strong></p><p><img src="https://oss.justin3go.com/blogs/4.png" alt=""></p><p><strong>5）问卷填写演示</strong></p><p><img src="https://oss.justin3go.com/blogs/5.png" alt=""></p><p><strong>6）问卷分享演示</strong></p><p><img src="https://oss.justin3go.com/blogs/6.png" alt=""></p><p><strong>7）问卷可视化演示</strong></p><p><img src="https://oss.justin3go.com/blogs/7.png" alt=""></p><p><strong>8）排行榜功能演示</strong></p><p><img src="https://oss.justin3go.com/blogs/8.png" alt=""></p><p><strong>9）智能客服演示</strong></p><p><img src="https://oss.justin3go.com/blogs/9.png" alt=""></p><p><strong>10）心理问答演示</strong></p><p><img src="https://oss.justin3go.com/blogs/10.png" alt=""><img src="https://oss.justin3go.com/blogs/11.png" alt=""></p><h2 id="开源相关" tabindex="-1">开源相关 <a class="header-anchor" href="#开源相关" aria-label="Permalink to &quot;开源相关&quot;">​</a></h2><p>这是我今年的毕业设计，所以目前仅开源了前端的部分分支，后端暂不开源，后续等毕业设计答辩结束后可能会整理并开源，前端代码也没有怎么整理(太懒了😂)，感兴趣的可以瞧瞧：</p><p><a href="https://github.com/Justin3go/xiaoyou-mp" target="_blank" rel="noreferrer">笑友小程序前端开源地址</a></p><blockquote><p>需要注意的是，开源协议为 GPL，因为这也不是什么轮子，确确实实是一个产品</p></blockquote><p>在这里，你应该可以参考到如下的解决方案：</p><ol><li>如何在 uniapp 中使用 villus（graphql）</li><li>uniapp 中 JWT 双 token 刷新的解决方案</li><li>微信小程序头像上传 OSS 实现方案</li><li>如何手写一个聊天页面</li><li>各种技术栈（Vue\\uniapp\\villus......）的使用</li></ol><p>当然，我也在&quot;代码能跑&quot;与&quot;代码漂亮&quot;之间尽量做平衡，肯定会有部分有问题的地方🥲</p><h2 id="体验" tabindex="-1">体验 <a class="header-anchor" href="#体验" aria-label="Permalink to &quot;体验&quot;">​</a></h2><p>由于 GPT 的接口确实是&quot;一字千金&quot;，线上正式版本还没有心理问答功能，只有体验版有，感兴趣的可以私聊我，将你加入体验名额。并且，笔者暂时没有考虑商业化，微信支付接口接入也比较麻烦（要有营业执照去申请），所以该功能可能不会正式上线，上线了也会商业化。</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020230507152319.png" alt=""></p><p>然后，希望不要有 BUG 吧，我好懒得修啊😆，也烦请别做压测和恶意攻击！</p><h2 id="最后-总结与展望" tabindex="-1">最后(总结与展望) <a class="header-anchor" href="#最后-总结与展望" aria-label="Permalink to &quot;最后(总结与展望)&quot;">​</a></h2><p>该小程序以<strong>换位思考填写问卷</strong>为主要创新点，结合“互联网+心理健康+AI”形成该产品。</p><p>后期如果继续做下去，有非常多的方向进行发展，并且商业化也不是不可能，比如刚才提到的心理问答进行付费，还比如：</p><ul><li>提供付费问卷测评填写（毕竟需要请心理方面专家来设计问卷）</li><li>轻社区，没啥说的，就简化的知乎</li><li>心理专家入驻，让用户既可以选择 AI 咨询，也可以选择专家咨询</li><li>广告等等常规手段</li></ul>',73)]))}const A=r(s,[["render",o]]);export{u as __pageData,A as default};
