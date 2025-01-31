import{_ as t,D as a,Q as s,ah as i,H as h,B as n}from"./chunks/framework.kYnPRA0Y.js";const O=JSON.parse('{"title":"栈和队列","description":"","frontmatter":{},"headers":[],"relativePath":"notes/算法与数据结构/03栈和队列.md","filePath":"notes/算法与数据结构/03栈和队列.md","lastUpdated":1738327344000}'),k={name:"notes/算法与数据结构/03栈和队列.md"},l=i("",7),p={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},e={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"39.49ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 17454.6 1000","aria-hidden":"true"},E=i("",1),r=[E],d=s("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mi",null,"P"),s("mi",null,"U"),s("mi",null,"S"),s("mi",null,"H"),s("mo",null,":"),s("mi",null,"s"),s("mo",null,"−"),s("mo",null,">"),s("mi",null,"e"),s("mi",null,"l"),s("mi",null,"e"),s("mo",{stretchy:"false"},"["),s("mi",null,"s"),s("mo",null,"−"),s("mo",null,">"),s("mi",null,"t"),s("mi",null,"o"),s("mi",null,"p"),s("mo",null,"+"),s("mo",null,"+"),s("mo",{stretchy:"false"},"]"),s("mo",null,"="),s("msub",null,[s("mi",null,"a"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"1")])])])],-1),g={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"46.034ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 20346.9 1000","aria-hidden":"true"},F=i("",1),o=[F],c=s("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mi",null,"P"),s("mi",null,"O"),s("mi",null,"P"),s("mo",null,":"),s("mo",{stretchy:"false"},"("),s("mi",null,"s"),s("mo",null,"−"),s("mo",null,">"),s("mi",null,"t"),s("mi",null,"o"),s("mi",null,"p"),s("mo",{stretchy:"false"},")"),s("mo",null,"−"),s("mo",null,"−"),s("mo",null,","),s("mi",null,"e"),s("mo",null,"="),s("mi",null,"s"),s("mo",null,"−"),s("mo",null,">"),s("mi",null,"e"),s("mi",null,"l"),s("mi",null,"e"),s("mo",{stretchy:"false"},"["),s("mi",null,"s"),s("mo",null,"−"),s("mo",null,">"),s("mi",null,"t"),s("mi",null,"o"),s("mi",null,"p"),s("mo",{stretchy:"false"},"]")])],-1),Q=i("",31),T=s("li",null,[s("p",null,"解决问题时，可把一个问题转化为一个新的问题。")],-1),C=s("li",null,[s("p",null,"这个新问题的解法与原问题的解法相同，只是所处理的对象不同。")],-1),D=s("li",null,[s("p",null,"必须有结束递归的条件，否则递归将无休止地进行，导致耗尽系统资源。")],-1),m=s("li",null,[s("p",null,[s("strong",null,"数据结构"),h("是递归的，如二叉树。")])],-1),A=s("p",null,[s("strong",null,"问题的解法"),h("是递归的，如汉诺塔、地图四染色、走迷宫等。")],-1),u=s("li",null,[s("p",null,"大问题转换为几个小问题，小问题进一步分解为更小的小问题，直到递归出口为止。")],-1),B=s("p",null,"递归模型由递归出口和递归体两部分组成，前者确定递归合适为止，后者确定递归的方式。",-1),f={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.148ex"},xmlns:"http://www.w3.org/2000/svg",width:"28.273ex",height:"5.428ex",role:"img",focusable:"false",viewBox:"0 -1449.5 12496.7 2399","aria-hidden":"true"},H=i("",1),b=[H],x=s("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mi",null,"n"),s("mo",null,"!"),s("mo",null,"="),s("mrow",{"data-mjx-texclass":"INNER"},[s("mo",{"data-mjx-texclass":"OPEN"},"{"),s("mtable",{columnalign:"left left",columnspacing:"1em",rowspacing:".2em"},[s("mtr",null,[s("mtd"),s("mtd",null,[s("mtext",null,"1"),s("mo",null,","),s("mi",null,"n"),s("mo",null,"="),s("mn",null,"0")])]),s("mtr",null,[s("mtd"),s("mtd",null,[s("mtext",null,"n"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"!"),s("mo",null,","),s("mi",null,"n"),s("mo",null,">="),s("mn",null,"1")])])]),s("mo",{"data-mjx-texclass":"CLOSE",fence:"true",stretchy:"true",symmetric:"true"})])])],-1),_=i("",47);function w(v,L,M,Z,V,P){return n(),a("div",null,[l,s("mjx-container",p,[(n(),a("svg",e,r)),d]),s("mjx-container",g,[(n(),a("svg",y,o)),c]),Q,s("ul",null,[T,C,D,m,s("li",null,[A,s("ul",null,[u,s("li",null,[B,s("mjx-container",f,[(n(),a("svg",q,b)),x])])])])]),_])}const N=t(k,[["render",w]]);export{O as __pageData,N as default};
