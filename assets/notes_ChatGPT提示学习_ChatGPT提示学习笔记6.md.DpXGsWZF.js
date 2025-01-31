import{_ as i,c as t,as as a,o as n}from"./chunks/framework.CsiIftoR.js";const g=JSON.parse('{"title":"转换","description":"","frontmatter":{},"headers":[],"relativePath":"notes/ChatGPT提示学习/ChatGPT提示学习笔记6.md","filePath":"notes/ChatGPT提示学习/ChatGPT提示学习笔记6.md","lastUpdated":1738327344000}'),l={name:"notes/ChatGPT提示学习/ChatGPT提示学习笔记6.md"};function e(p,s,h,k,o,r){return n(),t("div",null,s[0]||(s[0]=[a(`<ul><li><a href="https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/1/introduction" target="_blank" rel="noreferrer">英文原视频</a></li><li><a href="https://www.bilibili.com/video/BV1No4y1t7Zn" target="_blank" rel="noreferrer">B 站翻译</a></li></ul><h1 id="转换" tabindex="-1">转换 <a class="header-anchor" href="#转换" aria-label="Permalink to &quot;转换&quot;">​</a></h1><ul><li>语言翻译工作</li><li>语法修正工作</li><li>格式转换：HTML、JSON</li></ul><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">! pip install </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upgrade openai</span></span></code></pre></div><pre><code>Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
Collecting openai
  Downloading openai-0.27.6-py3-none-any.whl (71 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m71.9/71.9 kB\x1B[0m \x1B[31m2.4 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hCollecting aiohttp
  Downloading aiohttp-3.8.4-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.0 MB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m1.0/1.0 MB\x1B[0m \x1B[31m18.6 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hRequirement already satisfied: tqdm in /usr/local/lib/python3.10/dist-packages (from openai) (4.65.0)
Requirement already satisfied: requests&gt;=2.20 in /usr/local/lib/python3.10/dist-packages (from openai) (2.27.1)
Requirement already satisfied: certifi&gt;=2017.4.17 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (2022.12.7)
Requirement already satisfied: urllib3&lt;1.27,&gt;=1.21.1 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (1.26.15)
Requirement already satisfied: charset-normalizer~=2.0.0 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (2.0.12)
Requirement already satisfied: idna&lt;4,&gt;=2.5 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (3.4)
Collecting yarl&lt;2.0,&gt;=1.0
  Downloading yarl-1.9.2-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (268 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m268.8/268.8 kB\x1B[0m \x1B[31m10.5 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hCollecting multidict&lt;7.0,&gt;=4.5
  Downloading multidict-6.0.4-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (114 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m114.5/114.5 kB\x1B[0m \x1B[31m988.5 kB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hCollecting async-timeout&lt;5.0,&gt;=4.0.0a3
  Downloading async_timeout-4.0.2-py3-none-any.whl (5.8 kB)
Collecting aiosignal&gt;=1.1.2
  Downloading aiosignal-1.3.1-py3-none-any.whl (7.6 kB)
Requirement already satisfied: attrs&gt;=17.3.0 in /usr/local/lib/python3.10/dist-packages (from aiohttp-&gt;openai) (23.1.0)
Collecting frozenlist&gt;=1.1.1
  Downloading frozenlist-1.3.3-cp310-cp310-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl (149 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m149.6/149.6 kB\x1B[0m \x1B[31m5.6 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hInstalling collected packages: multidict, frozenlist, async-timeout, yarl, aiosignal, aiohttp, openai
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
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.choices[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].message[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="翻译" tabindex="-1">翻译 <a class="header-anchor" href="#翻译" aria-label="Permalink to &quot;翻译&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ChatGPT 正在影响人类社会&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请翻译下面的文本：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res</span></span></code></pre></div><pre><code>&#39;ChatGPT is influencing human society.&#39;
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;任意生成一个 100 字的小故事&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请翻译下面的文本：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res</span></span></code></pre></div><pre><code>从前有一个小男孩，他非常喜欢探险。一天，他决定去探索一座神秘的山洞。他带上了一些食物和水，然后开始了他的冒险之旅。当他到达山洞时，他发现洞口非常狭窄，他必须爬进去。他爬了很长时间，终于到达了一个巨大的洞穴。在洞穴里，他发现了一些奇怪的生物和宝藏。他非常兴奋，但也非常累。他决定在洞穴里休息一下，然后再回家。当他醒来时，他发现自己被困在了洞穴里。他必须想办法逃脱。他开始寻找出路，最终他找到了一条通往外面的路。他成功逃脱了洞穴，回到了家。从那以后，他再也没有去探险了。





&#39;Once upon a time, there was a little boy who loved to explore. One day, he decided to explore a mysterious cave. He brought some food and water and began his adventure. When he arrived at the cave, he found that the entrance was very narrow and he had to crawl inside. He crawled for a long time and finally reached a huge cave. In the cave, he found some strange creatures and treasures. He was very excited but also very tired. He decided to rest in the cave and then go home. When he woke up, he found himself trapped in the cave. He had to find a way to escape. He began to look for a way out and finally found a path leading outside. He successfully escaped the cave and returned home. Since then, he never went exploring again.&#39;
</code></pre><h2 id="润色" tabindex="-1">润色 <a class="header-anchor" href="#润色" aria-label="Permalink to &quot;润色&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;我可以和你一起出去游泳吗？&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请使用正式和非正式的语气用英文翻译下面的文本：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><pre><code>正式语气：May I accompany you for a swim?

非正式语气：Can I come with you for a swim?
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;我可以和你一起出去游泳吗？&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请使用商业邮件的语气用润色下面的文本：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><pre><code>尊敬的 XXX，

我想询问一下，是否有可能和您一起出去游泳呢？如果您有时间和兴趣，我非常期待能够和您一起享受这个美好的活动。

谢谢您的时间和耐心等待我的回复。

祝好，

XXX
</code></pre><h2 id="格式的转换" tabindex="-1">格式的转换 <a class="header-anchor" href="#格式的转换" aria-label="Permalink to &quot;格式的转换&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;任意生成一段 JSON 格式的文本&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请将下面的 JSON 格式转换为 HTML 中的表格:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><pre><code>{
  &quot;name&quot;: &quot;John Doe&quot;,
  &quot;age&quot;: 30,
  &quot;email&quot;: &quot;johndoe@example.com&quot;,
  &quot;address&quot;: {
    &quot;street&quot;: &quot;123 Main St&quot;,
    &quot;city&quot;: &quot;Anytown&quot;,
    &quot;state&quot;: &quot;CA&quot;,
    &quot;zip&quot;: &quot;12345&quot;
  },
  &quot;phoneNumbers&quot;: [
    {
      &quot;type&quot;: &quot;home&quot;,
      &quot;number&quot;: &quot;555-555-1234&quot;
    },
    {
      &quot;type&quot;: &quot;work&quot;,
      &quot;number&quot;: &quot;555-555-5678&quot;
    }
  ],
  &quot;isActive&quot;: true,
  &quot;balance&quot;: 1000.50,
  &quot;tags&quot;: [
    &quot;sports&quot;,
    &quot;music&quot;,
    &quot;travel&quot;
  ]
}
&lt;table&gt;
  &lt;tr&gt;
    &lt;td&gt;Name:&lt;/td&gt;
    &lt;td&gt;John Doe&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Age:&lt;/td&gt;
    &lt;td&gt;30&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Email:&lt;/td&gt;
    &lt;td&gt;johndoe@example.com&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Address:&lt;/td&gt;
    &lt;td&gt;
      &lt;ul&gt;
        &lt;li&gt;Street: 123 Main St&lt;/li&gt;
        &lt;li&gt;City: Anytown&lt;/li&gt;
        &lt;li&gt;State: CA&lt;/li&gt;
        &lt;li&gt;Zip: 12345&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Phone Numbers:&lt;/td&gt;
    &lt;td&gt;
      &lt;ul&gt;
        &lt;li&gt;Type: home, Number: 555-555-1234&lt;/li&gt;
        &lt;li&gt;Type: work, Number: 555-555-5678&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Is Active:&lt;/td&gt;
    &lt;td&gt;true&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Balance:&lt;/td&gt;
    &lt;td&gt;1000.50&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Tags:&lt;/td&gt;
    &lt;td&gt;
      &lt;ul&gt;
        &lt;li&gt;sports&lt;/li&gt;
        &lt;li&gt;music&lt;/li&gt;
        &lt;li&gt;travel&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IPython.display </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> display, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTML</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">display(HTML(res))</span></span></code></pre></div><table><tr><td>Name:</td><td>John Doe</td></tr><tr><td>Age:</td><td>30</td></tr><tr><td>Email:</td><td>johndoe@example.com</td></tr><tr><td>Address:</td><td><ul><li>Street: 123 Main St</li><li>City: Anytown</li><li>State: CA</li><li>Zip: 12345</li></ul></td></tr><tr><td>Phone Numbers:</td><td><ul><li>Type: home, Number: 555-555-1234</li><li>Type: work, Number: 555-555-5678</li></ul></td></tr><tr><td>Is Active:</td><td>true</td></tr><tr><td>Balance:</td><td>1000.50</td></tr><tr><td>Tags:</td><td><ul><li>sports</li><li>music</li><li>travel</li></ul></td></tr></table><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div>`,24)]))}const u=i(l,[["render",e]]);export{g as __pageData,u as default};
