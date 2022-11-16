import{_ as s,r as a,o as d,c as i,a as t,d as l,b as n,e as c}from"./app.223aa7f2.js";const o={},f=c(`<h1 id="\u89C6\u9891\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891\u538B\u7F29" aria-hidden="true">#</a> \u89C6\u9891\u538B\u7F29</h1><h2 id="\u538B\u7F29\u811A\u672C\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u538B\u7F29\u811A\u672C\u5BF9\u6BD4" aria-hidden="true">#</a> \u538B\u7F29\u811A\u672C\u5BF9\u6BD4</h2><p><strong>\u6D4B\u8BD5\u89C6\u9891 145470kb \u7684 mkv \u6587\u4EF6</strong></p><p><code>ffmpeg -i test.mkv-b 400k -vcodec libx264 -y test_video_handle.mkv</code></p><blockquote><p>\u65F6\u95F4\u957F 10s \u4EE5\u4E0A\uFF0CCPU \u5360\u7528\u7387 95%\uFF0C\u538B\u7F29\u540E\u5185\u5B58\u5C0F 16152kb\uFF0C\u753B\u8D28\u65E0\u660E\u663E\u53D8\u5316</p></blockquote><p><code>ffmpeg -i test.mkv -r 24 -b 400k -vcodec libx264 -preset ultrafast -qp 35 -y test_video_handle.mkv</code></p><blockquote><p>\u65F6\u95F4\u7AEF 5s \u5DE6\u53F3\uFF0CCPU \u5360\u7528\u7387 50%\uFF0C\u538B\u7F29\u540E\u5185\u5B58\u7A0D\u5927 20321kb\uFF0C\u753B\u8D28\u65E0\u660E\u663E\u53D8\u5316</p></blockquote><ul><li>\u538B\u7F29\u540E MP4 \u89C6\u9891\u6BD4 mkv \u5185\u5B58\u7A0D\u5927</li><li>\u9700\u8981\u5728\u5B89\u88C5\u76EE\u5F55\u4E0B x64 \u6587\u4EF6\u5939\u589E\u52A0 ffmpeg.exe</li></ul><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u5206\u8FA8\u7387</th><th style="text-align:left;">\u5E27\u7387</th><th style="text-align:left;">\u6BD4\u7279\u7387</th><th style="text-align:left;">\u538B\u7F29\u540E\u5360\u7528\u7A7A\u95F4</th><th style="text-align:left;">\u538B\u7F29\u901F\u7387</th></tr></thead><tbody><tr><td style="text-align:left;">ffmpeg -i input.mkv -vcodec libx264 -preset ultrafast -y output.mkv</td><td style="text-align:left;">1280*720</td><td style="text-align:left;">25</td><td style="text-align:left;">\u539F\u89C6\u9891\u6BD4\u7279\u7387</td><td style="text-align:left;">168.873KB</td><td style="text-align:left;">44.5x</td></tr><tr><td style="text-align:left;">ffmpeg -i input.mkv -vcodec libx264 -y output.mkv</td><td style="text-align:left;">1280*720</td><td style="text-align:left;">25</td><td style="text-align:left;">\u539F\u89C6\u9891\u6BD4\u7279\u7387</td><td style="text-align:left;">93.198KB</td><td style="text-align:left;">8.5x CPU100%</td></tr><tr><td style="text-align:left;">ffmpeg -i input.mkv -vcodec libx264 -preset ultrafast -qp 35 -y output.mkv</td><td style="text-align:left;">1280*720</td><td style="text-align:left;">25</td><td style="text-align:left;">\u539F\u89C6\u9891\u6BD4\u7279\u7387</td><td style="text-align:left;">20.837KB</td><td style="text-align:left;">64x</td></tr><tr><td style="text-align:left;">ffmpeg -i input.mkv -vcodec libx264 -preset ultrafast -qp 25 -y output.mkv</td><td style="text-align:left;">1280*720</td><td style="text-align:left;">25</td><td style="text-align:left;">\u539F\u89C6\u9891\u6BD4\u7279\u7387</td><td style="text-align:left;">97.303KB</td><td style="text-align:left;">62x</td></tr><tr><td style="text-align:left;">ffmpeg -i input.mkv -r 24 -b 400k -vcodec libx264 -y output.mkv</td><td style="text-align:left;">1280*720</td><td style="text-align:left;">24</td><td style="text-align:left;">400Kbit / s</td><td style="text-align:left;">16.161KB</td><td style="text-align:left;">17x</td></tr><tr><td style="text-align:left;">ffmpeg -i input.mkv -s 640x360 -vcodec libx264 -preset ultrafast -y output.mkv</td><td style="text-align:left;">640*360</td><td style="text-align:left;">25</td><td style="text-align:left;">\u539F\u89C6\u9891\u6BD4\u7279\u7387</td><td style="text-align:left;">62.866KB</td><td style="text-align:left;">46.7x</td></tr><tr><td style="text-align:left;">ffmpeg -i input.mkv -s 640x360 -vcodec libx264 -y output.mkv</td><td style="text-align:left;">640*360</td><td style="text-align:left;">25</td><td style="text-align:left;">\u539F\u89C6\u9891\u6BD4\u7279\u7387</td><td style="text-align:left;">19.840KB</td><td style="text-align:left;">32.3x</td></tr><tr><td style="text-align:left;">ffmpeg -i input.mkv -s 640x360 -r 24 -b 400k -vcodec libx264 -y output.mkv</td><td style="text-align:left;">640*360</td><td style="text-align:left;">24</td><td style="text-align:left;">400Kbit / s</td><td style="text-align:left;">16.071KB</td><td style="text-align:left;">35x</td></tr><tr><td style="text-align:left;">ffmpeg -i input.mkv -s 640x360 -vcodec libx264 -preset ultrafast -qp 35 -y output.mkv</td><td style="text-align:left;">640*360</td><td style="text-align:left;">25</td><td style="text-align:left;">\u539F\u89C6\u9891\u6BD4\u7279\u7387</td><td style="text-align:left;">7.153KB</td><td style="text-align:left;">52x</td></tr></tbody></table><ul><li>\u5F3A\uFF1A<code>ffmpeg -i input.mkv -s 640x360 -vcodec libx264 -preset ultrafast -qp 35 -y output.mkv 7MB 51.9x</code></li><li>\u4E2D\uFF1A<code>ffmpeg -i input.mkv -vcodec libx264 -preset ultrafast -qp 35 -y output.mkv 20MB 64x</code></li><li>\u5F31\uFF1A<code>ffmpeg -i input.mkv -vcodec libx264 -preset ultrafast -qp 25 -y output.mkv 97MB 62x</code></li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">// -i \u8BBE\u5B9A\u8F93\u5165\u6D41</span>
<span class="token comment">// -f \u8BBE\u5B9A\u8F93\u51FA\u683C\u5F0F</span>
<span class="token comment">// - ss \u5F00\u59CB\u65F6\u95F4</span>
<span class="token comment">// - b \u8BBE\u5B9A\u89C6\u9891\u6D41\u91CF(\u7801\u7387)</span>
<span class="token comment">// - r \u8BBE\u5B9A\u5E27\u901F\u7387</span>
<span class="token comment">// - s \u8BBE\u5B9A\u753B\u9762\u7684\u5BBD\u4E0E\u9AD8</span>
<span class="token comment">// - aspect \u8BBE\u5B9A\u753B\u9762\u7684\u6BD4\u4F8B</span>
<span class="token comment">// - vn \u4E0D\u5904\u7406\u89C6\u9891</span>
<span class="token comment">// - vcodec \u8BBE\u5B9A\u89C6\u9891\u7F16\u89E3\u7801\u5668\uFF0C\u672A\u8BBE\u5B9A\u65F6\u5219\u4F7F\u7528\u4E0E\u8F93\u5165\u6D41\u76F8\u540C\u7684\u7F16\u89E3\u7801\u5668</span>

<span class="token comment">// - ar \u8BBE\u5B9A\u91C7\u6837\u7387</span>
<span class="token comment">// - ac \u8BBE\u5B9A\u58F0\u97F3\u7684Channel\u6570</span>
<span class="token comment">// - acodec \u8BBE\u5B9A\u58F0\u97F3\u7F16\u89E3\u7801\u5668\uFF0C\u672A\u8BBE\u5B9A\u65F6\u5219\u4F7F\u7528\u4E0E\u8F93\u5165\u6D41\u76F8\u540C\u7684\u7F16\u89E3\u7801\u5668</span>
<span class="token comment">// - an \u4E0D\u5904\u7406\u97F3\u9891</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,12),r={href:"https://ffmpeg.org/ffmpeg-all.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://blog.csdn.net/ETalien_/article/details/102931065",target:"_blank",rel:"noopener noreferrer"};function x(m,g){const e=a("ExternalLinkIcon");return d(),i("div",null,[f,t("ul",null,[t("li",null,[t("a",r,[l("ffmpeg Documentation"),n(e)])]),t("li",null,[t("a",p,[l("ffmpeg\uFF1A\u7801\u7387\u63A7\u5236\u6A21\u5F0F\u3001\u7F16\u7801\u65B9\u5F0F"),n(e)])])])])}const v=s(o,[["render",x],["__file","index.html.vue"]]);export{v as default};
