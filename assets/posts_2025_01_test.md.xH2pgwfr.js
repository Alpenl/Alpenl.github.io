import{_ as t,c as o,as as c,o as d}from"./chunks/framework.CsiIftoR.js";const u=JSON.parse('{"title":"Test1","description":"","frontmatter":{"title":"Test1","date":"2025-01-30T00:00:00.000Z","tags":["微信小程序","Vue Mini","开放能力","CSS","事件处理"]},"headers":[],"relativePath":"posts/2025/01/test.md","filePath":"posts/2025/01/test.md","lastUpdated":1738327344000}'),s={name:"posts/2025/01/test.md"};function a(n,e,l,r,_,p){return d(),o("div",null,e[0]||(e[0]=[c('<h1 id="test" tabindex="-1">Test <a class="header-anchor" href="#test" aria-label="Permalink to &quot;Test&quot;">​</a></h1><p>在这篇文章中，笔者分享了在开发微信小程序时，如何通过CSS技巧实现<code>button</code>和<code>cell</code>组件的协同工作。由于微信小程序出于安全考虑，无法通过JS模拟点击，因此必须在界面上使用<code>button</code>组件来调用开放能力，比如打开意见反馈页面。为了解决样式统一的问题，笔者将<code>button</code>嵌套在<code>cell</code>中，并通过CSS隐藏<code>button</code>的默认样式。</p><p>然而，这样的做法导致<code>cell</code>的点击反馈消失，因为事件被<code>button</code>捕获。经过分析，笔者借助<code>pointer-events</code>属性，使得<code>button</code>不捕获鼠标事件，而其内部的<code>cell</code>组件可以正常响应点击。最终，笔者成功实现了既能打开反馈页面，又保留了<code>cell</code>的点击反馈效果的功能。这种方法有效地结合了样式与功能，为开发者提供了实用的解决方案。</p>',3)]))}const S=t(s,[["render",a]]);export{u as __pageData,S as default};
