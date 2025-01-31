import{_ as l,D as n,Q as s,H as i,ah as a,B as h}from"./chunks/framework.kYnPRA0Y.js";const q=JSON.parse('{"title":"一文梳理 Vue3 核心原理","description":"","frontmatter":{"title":"一文梳理 Vue3 核心原理","date":"2023-02-04T00:00:00.000Z","tags":["Vue3","前端","虚拟 DOM","响应式","Diff 算法","编译优化","依赖收集"]},"headers":[],"relativePath":"posts/2023/02/04Vue3相关原理梳理.md","filePath":"posts/2023/02/04Vue3相关原理梳理.md","lastUpdated":1738327344000}'),t={name:"posts/2023/02/04Vue3相关原理梳理.md"},k=a("",112),p=s("code",null,"newIndexToOldIndexMap",-1),e={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},r={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.832ex",height:"2.452ex",role:"img",focusable:"false",viewBox:"0 -833.9 2577.6 1083.9","aria-hidden":"true"},E=a("",1),d=[E],g=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")])],-1),o=s("strong",null,"空间换时间",-1),y=s("code",null,"keyToNewIndexMap",-1),c=a("",1),F=s("code",null,"O(1)",-1),C=s("code",null,"newIndexToOldIndexMap",-1),u={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},B={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000","aria-hidden":"true"},A=a("",1),D=[A],m=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")])],-1),b=a("",65);function f(v,_,T,x,w,P){return h(),n("div",null,[k,s("p",null,[i("值得注意的是：同样这里也是通过遍历这两个数组来填充"),p,i("，即暴力解法的算法复杂度为: "),s("mjx-container",e,[(h(),n("svg",r,d)),g]),i(" 所以为了优化这里利用了"),o,i("思想。使用"),y,i("先存储了新节点数组的关键信息：")]),c,s("p",null,[i("之后在遍历旧结点数组时，就可以在"),F,i("的复杂度通过旧结点的 key 直接获取新结点的位置，而非每次都在内部嵌套循环遍历新结点数组去重新获取对应新节点位置，最终构造"),C,i("的算法复杂度降到了 "),s("mjx-container",u,[(h(),n("svg",B,D)),m])]),b])}const j=l(t,[["render",f]]);export{q as __pageData,j as default};
