import{_ as n,c as s}from"./app.00be45a4.js";var a="/assets/image-20220530160721681.9e081089.png",e="/assets/image-20220530162004673.dfaff8e8.png";const i={},c=s('<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> \u{1F419} docker-compose</h2><h3 id="\u90E8\u7F72-django-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72-django-\u9879\u76EE" aria-hidden="true">#</a> \u90E8\u7F72 Django \u9879\u76EE</h3><h4 id="\u9879\u76EE\u6811" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u6811" aria-hidden="true">#</a> \u{1F33F} \u9879\u76EE\u6811</h4><p><img src="'+a+`" alt="image-20220530160721681"></p><h4 id="dockerfile-\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#dockerfile-\u7F16\u5199" aria-hidden="true">#</a> \u{1F4DD} Dockerfile \u7F16\u5199</h4><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token comment"># \u4ECE\u955C\u50CF\u4ED3\u5E93\u83B7\u53D6\u6700\u65B0 python \u955C\u50CF</span>
<span class="token instruction"><span class="token keyword">FROM</span> python:latest</span>

<span class="token comment"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</span>
<span class="token instruction"><span class="token keyword">ENV</span> PYTHONUNBUFFERED 1</span>

<span class="token comment"># \u5728\u6839\u76EE\u5F55\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir /code</span>

<span class="token comment"># \u8BBE\u7F6E\u4E3A\u5DE5\u4F5C\u76EE\u5F55</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /code</span>

<span class="token comment"># \u4ECE\u672C\u5730\u5F53\u524D\u76EE\u5F55\u62F7\u8D1D requirements \u6587\u4EF6</span>
<span class="token instruction"><span class="token keyword">COPY</span> requirements.txt /code/</span>

<span class="token comment"># \u5B89\u88C5 \u9879\u76EE\u6240\u9700\u7684 pip \u5305</span>
<span class="token instruction"><span class="token keyword">RUN</span> pip install -r requirements.txt</span>

<span class="token comment"># </span>
<span class="token instruction"><span class="token keyword">COPY</span> . /code/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docker-compose-\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#docker-compose-\u7F16\u5199" aria-hidden="true">#</a> \u{1F4DD} docker-compose \u7F16\u5199</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>

  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">command</span><span class="token punctuation">:</span> python manage.py runserver 0.0.0.0<span class="token punctuation">:</span><span class="token number">8888</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/code
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8888:8888&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8FD0\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u{1F38A} \u8FD0\u884C\u547D\u4EE4</h4><p>\u76F4\u63A5\u8FD0\u884C\uFF1A<code>docker-compose up</code></p><p>\u53C2\u6570\uFF1A</p><ul><li>-f\uFF1A\u6307\u5B9A\u4F7F\u7528 docker-compose.yml \u6A21\u7248\u6587\u4EF6\u8FD0\u884C</li><li>-d\uFF1A\u540E\u53F0\u8FD0\u884C</li></ul><p>\u8FD0\u884C\u6210\u529F\uFF1A</p><p><img src="`+e+'" alt="image-20220530162004673"></p>',15);function l(d,r){return c}var o=n(i,[["render",l],["__file","Docker.html.vue"]]);export{o as default};
