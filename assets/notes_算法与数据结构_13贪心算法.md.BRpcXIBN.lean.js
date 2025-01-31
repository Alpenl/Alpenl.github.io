import{_ as e,D as s,Q as t,H as Q,ah as a,B as T}from"./chunks/framework.kYnPRA0Y.js";const j2=JSON.parse('{"title":"贪心算法","description":"","frontmatter":{},"headers":[],"relativePath":"notes/算法与数据结构/13贪心算法.md","filePath":"notes/算法与数据结构/13贪心算法.md","lastUpdated":1738327344000}'),l={name:"notes/算法与数据结构/13贪心算法.md"},i=a("",7),n=t("p",null,"基本概念：生成树、最小生成树",-1),o={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.633ex",height:"1.885ex",role:"img",focusable:"false",viewBox:"0 -683 1163.8 833","aria-hidden":"true"},r=a("",1),h=[r],m=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"V"),t("mi",null,"T")])])],-1),p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.139ex",height:"1.885ex",role:"img",focusable:"false",viewBox:"0 -683 3155.2 833","aria-hidden":"true"},c=a("",1),k=[c],H=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"V"),t("mo",null,"−"),t("msub",null,[t("mi",null,"V"),t("mi",null,"T")])])],-1),u={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},w={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.375ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.085ex",height:"1.377ex",role:"img",focusable:"false",viewBox:"0 -443 921.6 608.6","aria-hidden":"true"},y=a("",1),_=[y],x=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"v"),t("mn",null,"0")])])],-1),f={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.998ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4418.9 1000","aria-hidden":"true"},E=a("",1),M=[E],Z=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"V"),t("mi",null,"T")]),t("mo",null,"="),t("mo",{fence:"false",stretchy:"false"},"{"),t("msub",null,[t("mi",null,"v"),t("mn",null,"0")]),t("mo",{fence:"false",stretchy:"false"},"}")])],-1),b={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.139ex",height:"1.885ex",role:"img",focusable:"false",viewBox:"0 -683 3155.2 833","aria-hidden":"true"},v=a("",1),V=[v],C=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"V"),t("mo",null,"−"),t("msub",null,[t("mi",null,"V"),t("mi",null,"T")])])],-1),A={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},j={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.633ex",height:"1.885ex",role:"img",focusable:"false",viewBox:"0 -683 1163.8 833","aria-hidden":"true"},F=a("",1),S=[F],B=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"V"),t("mi",null,"T")])])],-1),P={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},I={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.139ex",height:"1.885ex",role:"img",focusable:"false",viewBox:"0 -683 3155.2 833","aria-hidden":"true"},R=a("",1),O=[R],z=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"V"),t("mo",null,"−"),t("msub",null,[t("mi",null,"V"),t("mi",null,"T")])])],-1),N={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"33.874ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 14972.5 1000","aria-hidden":"true"},J=a("",1),G=[J],$=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"e"),t("mo",null,"∗")]),t("mo",null,"="),t("mo",{stretchy:"false"},"("),t("msup",null,[t("mi",null,"v"),t("mo",null,"∗")]),t("mo",null,","),t("msup",null,[t("mi",null,"u"),t("mo",null,"∗")]),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("msup",null,[t("mi",null,"v"),t("mo",null,"∗")]),t("mo",null,"∈"),t("msub",null,[t("mi",null,"V"),t("mi",null,"T")]),t("mo",null,","),t("msup",null,[t("mi",null,"u"),t("mo",null,"∗")]),t("mo",null,"∈"),t("mi",null,"V"),t("mo",null,"−"),t("msub",null,[t("mi",null,"V"),t("mi",null,"T")])])],-1),K={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},U={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.282ex",height:"1.59ex",role:"img",focusable:"false",viewBox:"0 -691.8 1008.6 702.8","aria-hidden":"true"},X=a("",1),W=[X],Y=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"u"),t("mo",null,"∗")])])],-1),t1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Q1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.633ex",height:"1.885ex",role:"img",focusable:"false",viewBox:"0 -683 1163.8 833","aria-hidden":"true"},a1=a("",1),s1=[a1],T1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"V"),t("mi",null,"T")])])],-1),e1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},l1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.139ex",height:"1.885ex",role:"img",focusable:"false",viewBox:"0 -683 3155.2 833","aria-hidden":"true"},i1=a("",1),n1=[i1],o1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"V"),t("mo",null,"−"),t("msub",null,[t("mi",null,"V"),t("mi",null,"T")])])],-1),d1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},r1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.282ex",height:"1.59ex",role:"img",focusable:"false",viewBox:"0 -691.8 1008.6 702.8","aria-hidden":"true"},h1=a("",1),m1=[h1],p1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mi",null,"u"),t("mo",null,"∗")])])],-1),g1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},c1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.139ex",height:"1.885ex",role:"img",focusable:"false",viewBox:"0 -683 3155.2 833","aria-hidden":"true"},k1=a("",1),H1=[k1],u1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"V"),t("mo",null,"−"),t("msub",null,[t("mi",null,"V"),t("mi",null,"T")])])],-1),w1=a("",4),y1=t("li",null,"按照权重非递减顺序对途中的边 E 进行排序；",-1),_1=t("li",null,"烧苗已排序的列表，如果下一条边加入当前的子图中不导致一个回路，则加入该边到子图中，否则跳过该边；",-1),x1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.564ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.895ex",height:"2.26ex",role:"img",focusable:"false",viewBox:"0 -749.5 3047.4 999","aria-hidden":"true"},L1=a("",1),E1=[L1],M1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"V"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",null,"−"),t("mn",null,"1")])],-1),Z1=a("",8),b1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"19.951ex",height:"2.495ex",role:"img",focusable:"false",viewBox:"0 -750 8818.5 1102.8","aria-hidden":"true"},v1=a("",1),V1=[v1],C1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"w"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"e"),t("mn",null,"1")]),t("mo",{stretchy:"false"},")"),t("mo",null,"≤"),t("mo",null,"."),t("mo",null,"."),t("mo",null,"."),t("mo",null,"≤"),t("mi",null,"w"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"e"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"E"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|")])]),t("mo",{stretchy:"false"},")")])],-1),A1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},j1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.516ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3322 1000","aria-hidden":"true"},F1=a("",1),S1=[F1],B1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f"),t("mi",null,"i"),t("mi",null,"n"),t("mi",null,"d"),t("mo",{stretchy:"false"},"("),t("mi",null,"a"),t("mo",{stretchy:"false"},")")])],-1),P1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},I1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.29ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3222 1000","aria-hidden":"true"},R1=a("",1),O1=[R1],z1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f"),t("mi",null,"i"),t("mi",null,"n"),t("mi",null,"d"),t("mo",{stretchy:"false"},"("),t("mi",null,"b"),t("mo",{stretchy:"false"},")")])],-1),N1=t("h5",{id:"算法效率分析",tabindex:"-1"},[Q("算法效率分析 "),t("a",{class:"header-anchor",href:"#算法效率分析","aria-label":'Permalink to "算法效率分析"'},"​")],-1),q1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},J1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.31ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 5441 1000","aria-hidden":"true"},G1=a("",1),$1=[G1],K1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"E"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"l"),t("mi",null,"o"),t("mi",null,"g"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"E"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",{stretchy:"false"},")")])],-1),U1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.613ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3365 1000","aria-hidden":"true"},W1=a("",1),Y1=[W1],t2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"f"),t("mi",null,"i"),t("mi",null,"n"),t("mi",null,"d"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",{stretchy:"false"},")")])],-1),Q2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},a2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.821ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4782.7 1000","aria-hidden":"true"},s2=a("",1),T2=[s2],e2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"u"),t("mi",null,"n"),t("mi",null,"i"),t("mi",null,"o"),t("mi",null,"n"),t("mo",{stretchy:"false"},"("),t("mi",null,"a"),t("mo",null,","),t("mi",null,"b"),t("mo",{stretchy:"false"},")")])],-1),l2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},i2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"37.359ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 16512.8 1000","aria-hidden":"true"},n2=a("",1),o2=[n2],d2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"T"),t("mo",{stretchy:"false"},"("),t("mi",null,"f"),t("mi",null,"i"),t("mi",null,"n"),t("mi",null,"d"),t("mo",{stretchy:"false"},")"),t("mo",null,"∈"),t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mn",null,"1"),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("mi",null,"T"),t("mo",{stretchy:"false"},"("),t("mi",null,"u"),t("mi",null,"n"),t("mi",null,"i"),t("mi",null,"o"),t("mi",null,"n"),t("mo",{stretchy:"false"},")"),t("mo",null,"∈"),t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"n"),t("mi",null,"l"),t("mi",null,"o"),t("mi",null,"g"),t("mi",null,"n"),t("mo",{stretchy:"false"},")")])],-1),r2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"36.002ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 15912.8 1000","aria-hidden":"true"},m2=a("",1),p2=[m2],g2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"T"),t("mo",{stretchy:"false"},"("),t("mi",null,"f"),t("mi",null,"i"),t("mi",null,"n"),t("mi",null,"d"),t("mo",{stretchy:"false"},")"),t("mo",null,"∈"),t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"l"),t("mi",null,"o"),t("mi",null,"g"),t("mi",null,"n"),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("mi",null,"T"),t("mo",{stretchy:"false"},"("),t("mi",null,"u"),t("mi",null,"n"),t("mi",null,"i"),t("mi",null,"o"),t("mi",null,"n"),t("mo",{stretchy:"false"},")"),t("mo",null,"∈"),t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mn",null,"1"),t("mo",{stretchy:"false"},")")])],-1),c2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"32.16ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 14214.9 1000","aria-hidden":"true"},H2=a("",1),u2=[H2],w2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"E"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"l"),t("mi",null,"o"),t("mi",null,"g"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"E"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",{stretchy:"false"},")"),t("mo",null,"+"),t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"m"),t("mo",null,"+"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"V"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"l"),t("mi",null,"o"),t("mi",null,"g"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"V"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",{stretchy:"false"},")")])],-1),y2={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_2={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"32.16ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 14214.9 1000","aria-hidden":"true"},x2=a("",1),f2=[x2],L2=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"E"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"l"),t("mi",null,"o"),t("mi",null,"g"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"E"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",null,"+"),t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"m"),t("mi",null,"l"),t("mi",null,"o"),t("mi",null,"g"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"V"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",null,"+"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"V"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",{stretchy:"false"},")"),t("mo",{stretchy:"false"},")")])],-1),E2=a("",7);function M2(Z2,b2,D2,v2,V2,C2){return T(),s("div",null,[i,t("blockquote",null,[n,t("p",null,[Q("算法核心：从连通"),t("mjx-container",o,[(T(),s("svg",d,h)),m]),Q("和"),t("mjx-container",p,[(T(),s("svg",g,k)),H]),Q("的边中挑选一条权重最小的边。")])]),t("ul",null,[t("li",null,[Q("任意选一点"),t("mjx-container",u,[(T(),s("svg",w,_)),x]),Q("，集合 V 被分割成两个集合"),t("mjx-container",f,[(T(),s("svg",L,M)),Z]),Q("和"),t("mjx-container",b,[(T(),s("svg",D,V)),C]),Q("；")]),t("li",null,[Q("从连通"),t("mjx-container",A,[(T(),s("svg",j,S)),B]),Q("和"),t("mjx-container",P,[(T(),s("svg",I,O)),z]),Q("的边中挑选一条权重最小的边"),t("mjx-container",N,[(T(),s("svg",q,G)),$]),Q("，将"),t("mjx-container",K,[(T(),s("svg",U,W)),Y]),Q("加入"),t("mjx-container",t1,[(T(),s("svg",Q1,s1)),T1]),Q("中，从"),t("mjx-container",e1,[(T(),s("svg",l1,n1)),o1]),Q("删除"),t("mjx-container",d1,[(T(),s("svg",r1,m1)),p1]),Q(";")]),t("li",null,[Q("重复步骤 2，直到集合"),t("mjx-container",g1,[(T(),s("svg",c1,H1)),u1]),Q("为空；")])]),w1,t("ul",null,[y1,_1,t("li",null,[Q("重复步骤 2，直到子图中有"),t("mjx-container",x1,[(T(),s("svg",f1,E1)),M1]),Q("条边；")])]),Z1,t("ul",null,[t("li",null,[Q("按照权重"),t("mjx-container",b1,[(T(),s("svg",D1,V1)),C1]),Q("的非递增顺序对集合 E 排序；")]),t("li",null,[Q("判断"),t("mjx-container",A1,[(T(),s("svg",j1,S1)),B1]),Q("是否等于"),t("mjx-container",P1,[(T(),s("svg",I1,O1)),z1]),Q("，如果不相等，union(a,b);")])]),N1,t("ul",null,[t("li",null,[Q("第一步的时间复杂度为"),t("mjx-container",q1,[(T(),s("svg",J1,$1)),K1]),Q("（快速排序）;")]),t("li",null,[Q("第二步"),t("mjx-container",U1,[(T(),s("svg",X1,Y1)),t2]),Q("和"),t("mjx-container",Q2,[(T(),s("svg",a2,T2)),e2]),Q("的复杂度取决于实现方式；")]),t("li",null,[Q("快速查找："),t("mjx-container",l2,[(T(),s("svg",i2,o2)),d2]),Q("（所有合并）;")]),t("li",null,[Q("快速求并："),t("mjx-container",r2,[(T(),s("svg",h2,p2)),g2]),Q("；")]),t("li",null,[Q("快速查找下总的效率为"),t("mjx-container",c2,[(T(),s("svg",k2,u2)),w2]),Q("；")]),t("li",null,[Q("快速求并下总的效率为"),t("mjx-container",y2,[(T(),s("svg",_2,f2)),L2]),Q("；")])]),E2])}const F2=e(l,[["render",M2]]);export{j2 as __pageData,F2 as default};
