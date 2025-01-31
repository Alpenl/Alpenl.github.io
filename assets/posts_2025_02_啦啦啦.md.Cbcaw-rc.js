import{_ as e,D as t,B as o,ah as c}from"./chunks/framework.kYnPRA0Y.js";const m=JSON.parse('{"title":"测试优化后的自动化","description":"","frontmatter":{"title":"测试优化后的自动化","date":"2025-01-31T00:00:00.000Z","tags":["微信小程序","Vue Mini","优化","alpen","test"]},"headers":[],"relativePath":"posts/2025/02/啦啦啦.md","filePath":"posts/2025/02/啦啦啦.md","lastUpdated":1738338356000}'),d={name:"posts/2025/02/啦啦啦.md"},a=c('<h1 id="test" tabindex="-1">Test <a class="header-anchor" href="#test" aria-label="Permalink to &quot;Test&quot;">​</a></h1><p>在这篇文章中，笔者分享了在开发微信小程序时，如何通过CSS技巧实现<code>button</code>和<code>cell</code>组件的协同工作。由于微信小程序出于安全考虑，无法通过JS模拟点击，因此必须在界面上使用<code>button</code>组件来调用开放能力，比如打开意见反馈页面。为了解决样式统一的问题，笔者将<code>button</code>嵌套在<code>cell</code>中，并通过CSS隐藏<code>button</code>的默认样式。</p><p>然而，这样的做法导致<code>cell</code>的点击反馈消失，因为事件被<code>button</code>捕获。经过分析，笔者借助<code>pointer-events</code>属性，使得<code>button</code>不捕获鼠标事件，而其内部的<code>cell</code>组件可以正常响应点击。最终，笔者成功实现了既能打开反馈页面，又保留了<code>cell</code>的点击反馈效果的功能。这种方法有效地结合了样式与功能，为开发者提供了实用的解决方案。</p>',3),s=[a];function n(_,l,r,i,p,u){return o(),t("div",null,s)}const S=e(d,[["render",n]]);export{m as __pageData,S as default};
