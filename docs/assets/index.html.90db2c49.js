import{_ as e,o as i,c as t,e as s}from"./app.f17e3b31.js";const n={},l=s(`<h1 id="\u89C6\u9891\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891\u538B\u7F29" aria-hidden="true">#</a> \u89C6\u9891\u538B\u7F29</h1><p>https://ffmpeg.org/ffmpeg-all.html https://blog.csdn.net/ETalien_/article/details/102931065</p><p>\u6D4B\u8BD5\u89C6\u9891145470kb\u7684mkv\u6587\u4EF6</p><p>ffmpeg -i test.mkv-b 400k -vcodec libx264 -y test_video_handle.mkv \u65F6\u95F4\u957F10s\u4EE5\u4E0A\uFF0CCPU\u5360\u7528\u738795%\uFF0C\u538B\u7F29\u540E\u5185\u5B58\u5C0F16152kb\uFF0C\u753B\u8D28\u65E0\u660E\u663E\u53D8\u5316</p><p>ffmpeg -i test.mkv -r 24 -b 400k -vcodec libx264 -preset ultrafast -qp 35 -y test_video_handle.mkv \u65F6\u95F4\u7AEF5s\u5DE6\u53F3\uFF0CCPU\u5360\u7528\u738750%\uFF0C\u538B\u7F29\u540E\u5185\u5B58\u7A0D\u592720321kb\uFF0C\u753B\u8D28\u65E0\u660E\u663E\u53D8\u5316</p><ul><li>\u538B\u7F29\u540EMP4\u89C6\u9891\u6BD4mkv\u5185\u5B58\u7A0D\u5927</li><li>ErgoLAB\u9700\u8981\u5728\u5B89\u88C5\u76EE\u5F55\u4E0Bx64\u6587\u4EF6\u5939\u589E\u52A0ffmpeg.exe</li></ul><p>\u589E\u52A0\u5230\u5BFC\u51FA\u9879\u76EE\u91CC\u9762\uFF0C\u5F02\u5E38\u7ED3\u675F\u540E\uFF0C\u4E0D\u5F71\u54CD\u539F\u6709\u9879\u76EE -b 400k \u6BD4\u7279\u7387\u6309\u5206\u8FA8\u7387\u8BA1\u7B97 \u538B\u7F29\u5F3A\u5EA6\uFF0C\u5206\u4E3A\u5F3A\uFF08\u5206\u8FA8\u7387\u51CF\u534A\uFF09\u4E2D\u3001\u5F31\u3001 \u9884\u4F30\u5904\u7406\u65F6\u95F4\u3001\u9884\u4F30\u5904\u7406\u540E\u5927\u5C0F</p><p>\u6D4B\u8BD5\u89C6\u9891145470kb 1280*720 mkv\u89C6\u9891\u6D4B\u8BD5</p><p>\u547D\u4EE4 | \u5206\u8FA8\u7387 | \u5E27\u7387|\u6BD4\u7279\u7387|\u538B\u7F29\u540E\u5360\u7528\u7A7A\u95F4|\u538B\u7F29\u901F\u7387 :----------- | :----------- | :----------| :----------| :----------| :----------| :---------- ffmpeg -i input.mkv -vcodec libx264 -preset ultrafast -y output.mkv| 1280<em>720| 25|\u539F\u89C6\u9891\u6BD4\u7279\u7387|168.873KB| 44.5x ffmpeg -i input.mkv -vcodec libx264 -y output.mkv| 1280</em>720| 25|\u539F\u89C6\u9891\u6BD4\u7279\u7387|93.198KB| 8.5x CPU100% ffmpeg -i input.mkv -vcodec libx264 -preset ultrafast -qp 35 -y output.mkv| 1280<em>720| 25|\u539F\u89C6\u9891\u6BD4\u7279\u7387|20.837KB| 64x ffmpeg -i input.mkv -vcodec libx264 -preset ultrafast -qp 25 -y output.mkv| 1280</em>720| 25|\u539F\u89C6\u9891\u6BD4\u7279\u7387|97.303KB| 62x ffmpeg -i input.mkv -r 24 -b 400k -vcodec libx264 -y output.mkv| 1280<em>720| 24|400Kbit / s|16.161KB| 17x ffmpeg -i input.mkv -s 640x360 -vcodec libx264 -preset ultrafast -y output.mkv| 640</em>360| 25|\u539F\u89C6\u9891\u6BD4\u7279\u7387|62.866KB| 46.7x ffmpeg -i input.mkv -s 640x360 -vcodec libx264 -y output.mkv| 640<em>360| 25|\u539F\u89C6\u9891\u6BD4\u7279\u7387|19.840KB| 32.3x ffmpeg -i input.mkv -s 640x360 -r 24 -b 400k -vcodec libx264 -y output.mkv| 640</em>360| 24|400Kbit / s|16.071KB| 35x ffmpeg -i input.mkv -s 640x360 -vcodec libx264 -preset ultrafast -qp 35 -y output.mkv| 640*360| 25|\u539F\u89C6\u9891\u6BD4\u7279\u7387|7.153KB| 52x</p><p>\u5F3A\uFF1Affmpeg -i input.mkv -s 640x360 -vcodec libx264 -preset ultrafast -qp 35 -y output.mkv 7MB 51.9x \u4E2D\uFF1Affmpeg -i input.mkv -vcodec libx264 -preset ultrafast -qp 35 -y output.mkv 20MB 64x \u5F31\uFF1Affmpeg -i input.mkv -vcodec libx264 -preset ultrafast -qp 25 -y output.mkv 97MB 62x</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>                // -i \u8BBE\u5B9A\u8F93\u5165\u6D41 
                // -f \u8BBE\u5B9A\u8F93\u51FA\u683C\u5F0F
                // - ss \u5F00\u59CB\u65F6\u95F4
                // - b \u8BBE\u5B9A\u89C6\u9891\u6D41\u91CF(\u7801\u7387)
                // - r \u8BBE\u5B9A\u5E27\u901F\u7387
                // - s \u8BBE\u5B9A\u753B\u9762\u7684\u5BBD\u4E0E\u9AD8
                // - aspect \u8BBE\u5B9A\u753B\u9762\u7684\u6BD4\u4F8B
                // - vn \u4E0D\u5904\u7406\u89C6\u9891
                // - vcodec \u8BBE\u5B9A\u89C6\u9891\u7F16\u89E3\u7801\u5668\uFF0C\u672A\u8BBE\u5B9A\u65F6\u5219\u4F7F\u7528\u4E0E\u8F93\u5165\u6D41\u76F8\u540C\u7684\u7F16\u89E3\u7801\u5668

                // - ar \u8BBE\u5B9A\u91C7\u6837\u7387
                // - ac \u8BBE\u5B9A\u58F0\u97F3\u7684Channel\u6570
                // - acodec \u8BBE\u5B9A\u58F0\u97F3\u7F16\u89E3\u7801\u5668\uFF0C\u672A\u8BBE\u5B9A\u65F6\u5219\u4F7F\u7528\u4E0E\u8F93\u5165\u6D41\u76F8\u540C\u7684\u7F16\u89E3\u7801\u5668
                // - an \u4E0D\u5904\u7406\u97F3\u9891
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),v=[l];function p(m,c){return i(),t("div",null,v)}const a=e(n,[["render",p],["__file","index.html.vue"]]);export{a as default};