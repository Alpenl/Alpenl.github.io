import{_ as s,D as i,B as a,ah as n}from"./chunks/framework.kYnPRA0Y.js";const y=JSON.parse('{"title":"扩展","description":"","frontmatter":{},"headers":[],"relativePath":"notes/ChatGPT提示学习/ChatGPT提示学习笔记7.md","filePath":"notes/ChatGPT提示学习/ChatGPT提示学习笔记7.md","lastUpdated":1738344267000}'),t={name:"notes/ChatGPT提示学习/ChatGPT提示学习笔记7.md"},p=n(`<ul><li><a href="https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/1/introduction" target="_blank" rel="noreferrer">英文原视频</a></li><li><a href="https://www.bilibili.com/video/BV1No4y1t7Zn" target="_blank" rel="noreferrer">B 站翻译</a></li></ul><h1 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h1><p>温度参数介绍：</p><p>它允许我们改变模型的多样性</p><ul><li>一般来说使用 0 就可以了</li><li>当我们需要得到创意时，就可以增加其多样性</li></ul><p><img src="https://oss.justin3go.com/blogs/20230503112223.png" alt="温度参数介绍"></p><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">! pip install </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upgrade openai</span></span></code></pre></div><pre><code>Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
Collecting openai
  Downloading openai-0.27.6-py3-none-any.whl (71 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m71.9/71.9 kB\x1B[0m \x1B[31m2.4 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hCollecting aiohttp
  Downloading aiohttp-3.8.4-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.0 MB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m1.0/1.0 MB\x1B[0m \x1B[31m20.1 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hRequirement already satisfied: tqdm in /usr/local/lib/python3.10/dist-packages (from openai) (4.65.0)
Requirement already satisfied: requests&gt;=2.20 in /usr/local/lib/python3.10/dist-packages (from openai) (2.27.1)
Requirement already satisfied: urllib3&lt;1.27,&gt;=1.21.1 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (1.26.15)
Requirement already satisfied: certifi&gt;=2017.4.17 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (2022.12.7)
Requirement already satisfied: charset-normalizer~=2.0.0 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (2.0.12)
Requirement already satisfied: idna&lt;4,&gt;=2.5 in /usr/local/lib/python3.10/dist-packages (from requests&gt;=2.20-&gt;openai) (3.4)
Collecting async-timeout&lt;5.0,&gt;=4.0.0a3
  Downloading async_timeout-4.0.2-py3-none-any.whl (5.8 kB)
Collecting frozenlist&gt;=1.1.1
  Downloading frozenlist-1.3.3-cp310-cp310-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl (149 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m149.6/149.6 kB\x1B[0m \x1B[31m9.2 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hCollecting multidict&lt;7.0,&gt;=4.5
  Downloading multidict-6.0.4-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (114 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m114.5/114.5 kB\x1B[0m \x1B[31m983.0 kB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hCollecting yarl&lt;2.0,&gt;=1.0
  Downloading yarl-1.9.2-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (268 kB)
\x1B[2K     \x1B[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1B[0m \x1B[32m268.8/268.8 kB\x1B[0m \x1B[31m6.9 MB/s\x1B[0m eta \x1B[36m0:00:00\x1B[0m
\x1B[?25hRequirement already satisfied: attrs&gt;=17.3.0 in /usr/local/lib/python3.10/dist-packages (from aiohttp-&gt;openai) (23.1.0)
Collecting aiosignal&gt;=1.1.2
  Downloading aiosignal-1.3.1-py3-none-any.whl (7.6 kB)
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
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.choices[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].message[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;任意生成一封 200 字的产品评价邮件，总体来说是积极评价，但也说了一些缺点&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text)</span></span></code></pre></div><pre><code>尊敬的客服：

我购买了贵公司的产品，使用了一段时间后，我想给您写一封评价邮件。

首先，我要说的是，这款产品的质量非常好，使用起来非常方便，功能也非常强大。我非常喜欢它的外观设计，非常时尚，非常符合我的口味。同时，它的性能也非常出色，让我非常满意。

但是，我也发现了一些缺点。首先，它的价格有点高，对于一些消费者来说可能会有些贵。其次，它的使用说明书有些简略，对于一些不太懂电子产品的消费者来说可能会有些困难。

总的来说，我非常喜欢这款产品，它的质量和性能都非常出色。但是，如果能够降低一下价格，并且提供更详细的使用说明书，那么它将会更加完美。希望贵公司能够不断改进，为消费者提供更好的产品和服务。

谢谢！

此致

敬礼

XXX
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请对下面的邮件进行比较官方正式的邮件回复，在对每一句进行分析中，如果是积极的评价，请表示感谢，如果是消极的评价，请表示道歉：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><pre><code>尊敬的客户，

感谢您购买我们公司的产品，并且抽出时间给我们写一封评价邮件。我们非常重视您的反馈，也非常感谢您对我们产品的积极评价。

我们很高兴听到您对我们产品的质量、方便性和功能的赞扬。我们一直致力于为客户提供高质量的产品和服务，您的肯定是我们最大的鼓励。

同时，我们也非常抱歉您对产品的价格和使用说明书有所不满。我们会认真考虑您的建议，并且努力改进我们的产品和服务，以满足客户的需求。

再次感谢您的反馈和支持，我们期待为您提供更好的产品和服务。

此致

敬礼

XXX
</code></pre><h2 id="调整-temperature-参数" tabindex="-1">调整 temperature 参数 <a class="header-anchor" href="#调整-temperature-参数" aria-label="Permalink to &quot;调整 temperature 参数&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_completion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prompt, temperature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gpt-3.5-turbo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  messages </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;role&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: prompt}]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openai.ChatCompletion.create(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      messages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">messages,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      temperature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">temperature</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.choices[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].message[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请对下面的邮件进行比较官方正式的邮件回复，在对每一句进行分析中，如果是积极的评价，请表示感谢，如果是消极的评价，请表示道歉：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">temperature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><pre><code>尊敬的客户，

感谢您购买我们公司的产品，并对其进行评价。我们非常感激您对我们产品质量和性能的积极评价，同时也非常抱歉您在使用说明书和价格方面遇到了一些问题。

对于价格方面，我们会认真考虑您的反馈并进行合理调整，以满足更多消费者的需求。同时，我们也会加强使用说明书的编写，让消费者更加轻松地使用我们的产品。

再次感谢您对我们产品的支持和反馈，我们会持续改进，为您提供更好的产品和服务。

此致

敬礼

XXX
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">我需要写前端技术博客的题材</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">temperature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><pre><code>1. 最新的前端框架和库介绍及使用体验分享。
2. 前端开发中常见的性能优化技巧及实践。
3. 前端设计模式的深入探讨和实际应用。
4. 前端常用工具或插件的使用和比较评价。
5. 前端对于搜索引擎优化的探索与实践。
6. 前端对于 Web 安全的理解和实践。
7. 机器学习和人工智能在前端开发中的应用。
8. 移动端前端开发的技术难点和最佳实践。
9. 前端开发中的可访问性设计和实现。
10. 对于 Web 前端未来的发展趋势和技术预测。
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">我需要写前端技术博客的题材</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_completion(prompt, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">temperature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span></code></pre></div><pre><code>1. 最新的前端开发趋势和技术
2. 前端框架的比较和选择
3. 前端性能优化技巧
4. 前端安全性和防范措施
5. 前端设计模式和架构
6. 前端工具和插件的使用和优化
7. 前端测试和调试技巧
8. 前端跨平台开发技术
9. 前端数据可视化和交互设计
10. 前端 SEO 和搜索引擎优化技巧
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div>`,24),e=[p];function l(h,k,r,o,d,E){return a(),i("div",null,e)}const c=s(t,[["render",l]]);export{y as __pageData,c as default};
