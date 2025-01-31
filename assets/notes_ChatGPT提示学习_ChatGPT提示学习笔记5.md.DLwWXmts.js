import{_ as s,D as i,B as a,ah as n}from"./chunks/framework.kYnPRA0Y.js";const c=JSON.parse('{"title":"推理","description":"","frontmatter":{},"headers":[],"relativePath":"notes/ChatGPT提示学习/ChatGPT提示学习笔记5.md","filePath":"notes/ChatGPT提示学习/ChatGPT提示学习笔记5.md","lastUpdated":1738344267000}'),t={name:"notes/ChatGPT提示学习/ChatGPT提示学习笔记5.md"},l=n(`<ul><li><a href="https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/1/introduction" target="_blank" rel="noreferrer">英文原视频</a></li><li><a href="https://www.bilibili.com/video/BV1No4y1t7Zn" target="_blank" rel="noreferrer">B 站翻译</a></li></ul><h1 id="推理" tabindex="-1">推理 <a class="header-anchor" href="#推理" aria-label="Permalink to &quot;推理&quot;">​</a></h1><ul><li>可以是一些关于文本作为输入并执行某种分析的任务</li><li>如提取标签、名称、情感分析等常见的 NLP 任务</li><li>传统的机器学习针对每一个任务都需要重新训练部署模型</li></ul><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">! pip install </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upgrade openai</span></span></code></pre></div><pre><code>Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
Collecting openai
  Downloading openai-0.27.6-py3-none-any.whl (71 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m71.9/71.9 kB\x1B[0m \x1B[31m3.1 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hRequirement already satisfied: requests&gt;=2.20 in /usr/local/lib/python3.10/dist-packages (from openai) (2.27.1)
Requirement already satisfied: tqdm in /usr/local/lib/python3.10/dist-packages (from openai) (4.65.0)
Collecting aiohttp
  Downloading aiohttp-3.8.4-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.0 MB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m1.0/1.0 MB\x1B[0m \x1B[31m29.9 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hRequirement already satisfied: urllib3&lt;1.27,&gt;=1.21.1 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (1.26.15)
Requirement already satisfied: charset-normalizer~=2.0.0 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (2.0.12)
Requirement already satisfied: certifi&gt;=2017.4.17 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (2022.12.7)
Requirement already satisfied: idna&lt;4,&gt;=2.5 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (3.4)
Collecting frozenlist&gt;=1.1.1
  Downloading frozenlist-1.3.3-cp310-cp310-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl (149 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m149.6/149.6 kB\x1B[0m \x1B[31m18.1 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hCollecting yarl&lt;2.0,&gt;=1.0
  Downloading yarl-1.9.2-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (268 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m268.8/268.8 kB\x1B[0m \x1B[31m24.0 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hCollecting aiosignal&gt;=1.1.2
  Downloading aiosignal-1.3.1-py3-none-any.whl (7.6 kB)
Collecting multidict&lt;7.0,&gt;=4.5
  Downloading multidict-6.0.4-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (114 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m114.5/114.5 kB\x1B[0m \x1B[31m15.1 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hCollecting async-timeout&lt;5.0,&gt;=4.0.0a3
  Downloading async_timeout-4.0.2-py3-none-any.whl (5.8 kB)
Requirement already satisfied: attrs&gt;=17.3.0 in /usr/local/lib/python3.10/dist-packages (from aiohttp-&gt;openai) (23.1.0)
Installing collected packages: multidict, frozenlist, async-timeout, yarl, aiosignal, aiohttp, openai
Successfully installed aiohttp-3.8.4 aiosignal-1.3.1 async-timeout-4.0.2 frozenlist-1.3.3 multidict-6.0.4 openai-0.27.6 yarl-1.9.2
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> os</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">os.environ[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;OPENAI_API_KEY&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;your openai api key&gt;&#39;</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openai</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_completion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prompt, model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gpt-3.5-turbo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  messages </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;role&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: prompt}]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openai.ChatCompletion.create(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      messages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">messages,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      temperature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.choices[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].message[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请虚构一个关于&lt;Justin3go&gt;该网站的评论，总体来说比较中肯，是积极的，但也指出了该网站的某些缺点，大约 100 字</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span></span></code></pre></div><pre><code>&#39;我认为 Justin3go 是一个非常有用的网站，它提供了许多有关编程和技术的信息和资源。该网站的界面简洁明了，易于使用。但是，我认为该网站的搜索功能可以更好地改进，有时候搜索结果并不是很准确。此外，该网站的社区互动也可以更加活跃，增加用户之间的交流和互动。总体来说，Justin3go 是一个值得推荐的网站。&#39;
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请对以下文本进行情感分析，输出 0-1 的情感得分，0 代表消极，1 代表积极：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><pre><code>情感得分：0.8（积极）

分析：该文本中提到了该网站的优点和缺点，但是总体来说，作者认为该网站是非常有用的，并且值得推荐。因此，情感得分为积极。
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请虚构一个关于&lt;Justin3go&gt;为人名的童话故事，大约 500 字</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text)</span></span></code></pre></div><pre><code>从前有一个叫做 Justin3go 的小男孩，他生活在一个美丽的小镇上。他是一个非常聪明、勇敢和善良的孩子，他总是乐于助人，帮助那些需要帮助的人。

有一天，Justin3go 听说了一个关于一个神秘的宝藏的传说。这个宝藏据说被埋藏在一个古老的城堡里，只有最勇敢的人才能找到它。Justin3go 决定要去寻找这个宝藏，他相信自己一定能找到它。

于是，Justin3go 开始了他的冒险之旅。他穿过了茂密的森林，爬过了陡峭的山峰，穿过了危险的河流。在他的旅途中，他遇到了许多困难和挑战，但他从未放弃过。

最终，Justin3go 到达了那个古老的城堡。他发现城堡里面充满了陷阱和危险，但他并没有被吓倒。他勇敢地面对每一个挑战，最终他找到了那个神秘的宝藏。

宝藏里面有许多珍贵的宝石和黄金，但是 Justin3go 并没有把它们带走。相反，他决定把宝藏留在那里，让其他人也有机会来寻找它。他相信，只有那些真正勇敢和善良的人才能找到这个宝藏。

Justin3go 回到了他的家乡，他成为了一个英雄。他的勇气和善良的品质让他成为了人们心中的楷模。他的故事也成为了一个传说，人们会一代一代地讲述他的故事，直到永远。

从此以后，Justin3go 过着幸福的生活，他知道他的冒险之旅让他变得更加勇敢和善良。他也知道，只要他相信自己，他可以做任何事情。
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请对以下文本提取其中的主题：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><pre><code>主题：勇气、善良、冒险、传说、成为楷模、相信自己。
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请对以下文本提取其中的实体标签，并以 JSON 格式输出，键为实体类别，值为提取出来的实体：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><pre><code>{
  &quot;人物&quot;: [&quot;Justin3go&quot;],
  &quot;地点&quot;: [&quot;小镇&quot;, &quot;森林&quot;, &quot;山峰&quot;, &quot;河流&quot;, &quot;城堡&quot;, &quot;家乡&quot;],
  &quot;物品&quot;: [&quot;宝藏&quot;, &quot;宝石&quot;, &quot;黄金&quot;],
  &quot;属性&quot;: [&quot;聪明&quot;, &quot;勇敢&quot;, &quot;善良&quot;, &quot;英雄&quot;]
}
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div>`,19),p=[l];function e(h,k,o,r,d,g){return a(),i("div",null,p)}const E=s(t,[["render",e]]);export{c as __pageData,E as default};
