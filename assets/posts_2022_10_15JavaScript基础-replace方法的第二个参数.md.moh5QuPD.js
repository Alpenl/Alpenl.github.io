import{_ as s,D as i,B as a,ah as t}from"./chunks/framework.kYnPRA0Y.js";const c=JSON.parse('{"title":"JavaScript 基础-replace 方法的第二个参数","description":"","frontmatter":{"title":"JavaScript 基础-replace 方法的第二个参数","date":"2022-10-15T00:00:00.000Z","tags":["JavaScript","replace","字符串"]},"headers":[],"relativePath":"posts/2022/10/15JavaScript基础-replace方法的第二个参数.md","filePath":"posts/2022/10/15JavaScript基础-replace方法的第二个参数.md","lastUpdated":1738325247000}'),h={name:"posts/2022/10/15JavaScript基础-replace方法的第二个参数.md"},l=t(`<h1 id="javascript-基础-replace-方法的第二个参数" tabindex="-1">JavaScript 基础-replace 方法的第二个参数 <a class="header-anchor" href="#javascript-基础-replace-方法的第二个参数" aria-label="Permalink to &quot;JavaScript 基础-replace 方法的第二个参数&quot;">​</a></h1><blockquote><p>✨文章摘要（AI生成）</p></blockquote><p>笔者在重新阅读《JavaScript 高级程序设计》第四版时，对<code>replace</code>方法的第二个参数有了更深的理解。</p><p>该方法的第一个参数可以是字符串或正则表达式，而第二个参数则可以是字符串或回调函数。作为字符串时，第二个参数可以使用以<code>$</code>符号开头的特殊字符进行更复杂的替换，例如<code>$&amp;</code>用于重复匹配的字符，<code>$&#39;</code>和<code>$&#39;</code>用于获取匹配字符串的前后部分，<code>$n</code>用于交换匹配组。</p><p>更进一步，回调函数的使用使得自定义替换变得灵活，通过传入函数，可以根据需要动态生成替换内容，笔者举了实现模板字符串的例子，展示了如何将模板中的变量替换为实际值。这种灵活性使得<code>replace</code>方法在字符串处理上非常强大与实用。</p><hr><blockquote><p>最近又重新看了下高程 4，又是不同的收获，其中对<code>replace</code>方法印象较深，因为之前做的一个小功能可以用这个方法的第二个参数很轻松轻松地实现，这里简单记录一下。</p></blockquote><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>一般来说，用得最多的可能就是<code>&#39;some string&#39;.replace(/s/gi, &#39;target&#39;)</code>这样的了</p><p>其中，第一个参数可以是一个字符串<code>&#39;some string&#39;.replace(&#39;s&#39;, &#39;target&#39;)</code>，也可以是刚才提到的正则表达式，有人讨厌正则表达式，说当你认为这个问题可以用正则表达式来解决的时候，那么你就陷入了另外一个问题，不过我确挺喜欢正则的，几乎所有的字符串处理都可以用其方便地处理，这里地第一个参数没什么可讨论的，接下来就直接讨论第二个参数吧。</p><p>第二个参数的第一种用法就是刚才使用的也是一个字符串，作用就是替换参数一匹配的字符串，比如刚才的运行结果就是这样，平常这样使用也完全足够了：</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221201164355.png" alt=""></p><p>其实，第二个参数作为字符串还有一些高阶的用法，就是字符序列，在作为字符串的第二个参数中，<code>$</code>符号开头的某些特殊字符会被替换成其它字符，MDN 上的表格是这样:</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221201164712.png" alt=""> 第一个变量名<code>$$</code>很好理解，就是用来转义的，当我们真正想插入一个<code>$</code>字符时，就需要使用<code>$$</code>来标识，接下来分别对下面集中变量名进行尝试，都是很好理解的，看看代码就懂了：</p><ol><li><code>$&amp;</code>例子：匹配<code>.com</code>字符并将其替换为 10 个一样的，相当于增加了 9 个<code>.com</code></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;justin3go.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$&amp;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span></code></pre></div><pre><code>	justin3go.com.com.com.com.com.com.com.com.com.com
</code></pre><ol start="2"><li>三四例子（基本一致）：将目标匹配字符串替换为其左边或右边部分，直接看例子吧:</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;justin3go.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$\`&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;justin3go.com/demo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><pre><code>	justin3gojustin3go
	justin3go/demo/demo
</code></pre><ol start="3"><li><code>$n</code>，第一个匹配的组和第二个匹配的组进行交换</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;justin3go.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$2.$1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><pre><code>	com.justin3go
</code></pre><h2 id="当第二个参数为回调函数时" tabindex="-1">当第二个参数为回调函数时 <a class="header-anchor" href="#当第二个参数为回调函数时" aria-label="Permalink to &quot;当第二个参数为回调函数时&quot;">​</a></h2><p>回调函数在 JavaScript 中广泛使用，对于用户自定以一些功能来说特别有用，比如基本的数组迭代方法都是通过回调函数进行处理的<code>[1,2,3].map(item =&gt; item.toString())</code>等等，还有比如<code>[2,1,3].sort((a, b) =&gt; a-b)</code>这类</p><p>这里使用的 replace 方法同样支持传递一个函数进行自定义操作，基本用法如下：</p><p>MDN 中介绍的参数为：</p><p><img src="https://oss.justin3go.com/blogs/Pasted%20image%2020221201171454.png" alt=""> 而函数的返回值就是替换后的值</p><p>举个例子，自实现模板字符串，我们有如下输入:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tpl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;欢迎参观我的博客\${website}，博客的作者为\${writer}，哈哈哈哈哈😀&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> var2str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	website: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;justin3go.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	writer: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;justin3go&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>我们需要实现一个转换函数将<code>tpl</code>中的变量转换为我们对应的字符串，比如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> renderTpl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tpl, var2str);</span></span></code></pre></div><p>这时候用<code>replace</code>的回调函数就非常方便了，具体实现如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> renderTpl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">tpl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">var2str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tpl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">gi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> match.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, match.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> var2str)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> var2str[item]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`未找到可匹配的标识符: [\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">item</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}]\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">renderTpl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tpl, var2str));</span></span></code></pre></div><pre><code>	欢迎参观我的博客 justin3go.com，博客的作者为 justin3go，哈哈哈哈哈😀
</code></pre><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li>《JavaScript》高级程序设计第 4 版</li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions</a></li></ul>`,37),e=[l];function p(n,k,r,d,o,g){return a(),i("div",null,e)}const F=s(h,[["render",p]]);export{c as __pageData,F as default};
