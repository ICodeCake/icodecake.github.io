import{_ as n,o as a,c as s,e as t}from"./app.a16336e2.js";const e="/assets/01.e28041bc.png",i="/assets/02.efab6cf6.png",l="/assets/03.2a0768f6.png",o={},p=t('<h1 id="\u4E2D\u82F1\u6587\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u82F1\u6587\u5207\u6362" aria-hidden="true">#</a> \u4E2D\u82F1\u6587\u5207\u6362</h1><h2 id="resxmanager\u5DE5\u5177\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#resxmanager\u5DE5\u5177\u8BF4\u660E" aria-hidden="true">#</a> ResxManager\u5DE5\u5177\u8BF4\u660E</h2><ol><li>\u7528\u4E8E\u5728\u4E24\u4E2A\u751A\u81F3\u66F4\u591A\u8D44\u6E90\u6587\u4EF6\u4E2D\u6DFB\u52A0\u3001\u5220\u9664\u3001\u5BF9\u6BD4\u3001\u68C0\u67E5</li><li>\u5B89\u88C5\u65B9\u5F0F: Visual Studio\u7684\u6269\u5C55\u4E2D\u641C\u7D22ResxManager</li><li>\u6253\u5F00\u65B9\u5F0F: \u53F3\u952Eresx\u6587\u4EF6-&gt;\u5728ResxManager\u4E2D\u6253\u5F00 <img src="'+e+'" alt="\u56FE\u7247"></li><li>\u754C\u9762\u4ECB\u7ECD <img src="'+i+'" alt="\u56FE\u7247"></li><li>\u914D\u7F6E: \u4E3B\u8981\u7F16\u8F91 .cs \u548C .xmal \u6269\u5C55\u540D\u7684\u6A21\u5F0F <img src="'+l+`" alt="\u56FE\u7247"></li></ol><h2 id="\u5F15\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u5F15\u7528\u65B9\u5F0F</h2><ol><li>\u5728\u6BCF\u4E2A\u6A21\u5757\u4E2D\u65B0\u5EFA\u6587\u4EF6\u5939Languages\u5E76\u521B\u5EFA\u76F8\u5E94\u7684 .resx\u6587\u4EF6\u548C .zh-Hans.resx \u5176\u4ED6\u8BED\u8A00\u540C\u7406\uFF0C\u4E5F\u53EF\u5728resxManager\u4E2D\u6DFB\u52A0</li><li>\u4F7F\u7528resxManager\u6253\u5F00 .resx\u6587\u4EF6\uFF0C\u5E76\u6DFB\u52A0\u9879(\u53EF\u5BFC\u51FAexcel\u586B\u5199\u5B8C\u6210\u540E\u518D\u5BFC\u5165)</li><li>\u5728resxManager\u4E2D\u53F3\u952E .resx\u6587\u4EF6\uFF0C\u4FEE\u6539\u4F5C\u7528\u57DF\u4E3A\u516C\u5171\u8BBF\u95EE</li><li>xaml\u5F15\u7528: \u5728\u6587\u4EF6\u9876\u90E8\u5F15\u5165\u547D\u540D\u7A7A\u95F4\uFF0C\u4E4B\u540E\u628A\u9700\u8981\u4E2D\u82F1\u6587\u5207\u6362\u7684\u6587\u5B57\u66FF\u6362</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//xaml \u5F15\u7528
xmlns:resx=&quot;clr-namespace:ErgoLAB.Design.Languages&quot;
//Text=&quot;{x:Static resx:AOI.WebpageAOISettings}&quot;  resx\u7684\u4F7F\u7528
  &lt;TextBlock Margin=&quot;8 0 0 0&quot; Style=&quot;{StaticResource GroupBoxTitleStyle}&quot;
      Text=&quot;{x:Static resx:AOI.WebpageAOISettings}&quot; Visibility=&quot;{c:Binding IsWebpageStimuli,FalseToVisibility=Collapsed}&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u5728xaml\u9875\u4E2D\u5982\u679C\u6709\u9700\u8981\u4E2D\u82F1\u6587\u66FF\u6362\u7684\u5B57\u6BB5\uFF0C\u53EF\u4EE5\u9009\u4E2D\u8BE5\u5B57\u6BB5\uFF0C\u53F3\u952E\u79FB\u52A8\u5230\u8D44\u6E90\uFF0C\u5F39\u51FAResxManager\u754C\u9762\uFF0C\u4E4B\u540E\u518DResxManager\u4E2D\u586B\u5199\u4E2D\u6587\u5B57\u6BB5\u5373\u53EF\uFF0C\u5982\u679C\u5F39\u4E0D\u51FA\u8FD9\u4E2A\u754C\u9762\u91CD\u542FVs\u53EF\u89E3\u51B3</li><li>cs\u6587\u4EF6\u5F15\u7528\uFF1Ausing ErgoLAB.StartPage.Languages;\u4E4B\u540E\u4F7F\u7528Common.Version\u83B7\u53D6\u540D\u79F0</li></ol><h2 id="\u547D\u540D\u53CA\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u53CA\u89C4\u8303" aria-hidden="true">#</a> \u547D\u540D\u53CA\u89C4\u8303</h2><ol><li>\u5168\u5C40\u591A\u51FA\u7528\u5230\u7684\u6587\u672C\u7EDF\u4E00\u5199\u5728AppFoundation.Languages\u4E0B\u7684\u76F8\u5E94\u6587\u4EF6\u4E2D Common-&gt;\u901A\u7528\u8BCD\u6C47\u7FFB\u8BD1\uFF0CSegment\uFF0CEvent\uFF0CSegmentType, etc. Window-&gt;\u4E3B\u7A97\u4F53\uFF0CTab\uFF0CBackgroundTask\uFF0CUpgrade\uFF0CSetting\uFF0Cetc. Dialog-&gt;\u5F39\u6846\u7684\u6309\u94AE,OK\u3001Cancel\u3001Save\u3001Export\u3001Yes\u3001No etc. Overview-&gt;\u603B\u89C8\u754C\u9762\u901A\u7528\uFF0CName\uFF0CCreateDate\uFF0CSubject\uFF0CDefaultSetting\uFF0Cetc. NamePrefix-&gt;\u540D\u79F0\u524D\u7F00\uFF0CBehaviorGroup\uFF0CGroup\uFF0CInstruction\uFF0CTimeline\uFF0Cetc.</li><li>\u6BCF\u4E2A\u529F\u80FD\u6A21\u5757\u4E0B\u65B0\u5EFACommon.resx\u7528\u4E8E\u6DFB\u52A0\u8BE5\u6A21\u5757\u4E0B\u6BD4\u8F83\u901A\u7528\u7684\u8BCD\u6C47\uFF0C\u5176\u4ED6\u5355\u72EC\u754C\u9762\u6216\u6A21\u5757\u53EF\u5355\u72EC\u65B0\u5EFA\u5206\u6587\u4EF6[\u6A21\u5757\u540D].resx</li><li>\u90E8\u5206\u7279\u6B8A\u8BCD\u6C47\u4E0D\u7528\u7FFB\u8BD1\uFF0C\u4F8B\uFF1AErgoLAB\u3001EMG\u3001EDA\u3001HRV\u3001RESP\u3001EEG...</li><li>\u5B57\u6BB5\u540D\u79F0\u9996\u5B57\u6BCD\u5927\u5199\uFF0C\u53EF\u4EE5\u6E05\u695A\u7684\u7406\u89E3\u5B57\u6BB5\u610F\u4E49\uFF0C\u5BF9\u4E8E\u6BB5\u843D\u7C7B\u6587\u672C\u7684\u547D\u540D\u4E0D\u8981\u5168\u6587\u672C\u7FFB\u8BD1</li><li>xaml\u5F15\u5165\u6587\u4EF6\u547D\u540D\uFF1B\u672C\u6A21\u5757\u4E0B\u9ED8\u8BA4\u547D\u540D\u4E3Aresx\uFF0C\u5F15\u7528AppFoundation\u4E0B\u7684\u6587\u4EF6\u547D\u540D\u4E3AappResx</li></ol><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><ol><li>\u5728.cs\u6587\u4EF6\u4E2D\u5E38\u91CF\u9700\u8981\u5F15\u7528\u5B57\u6BB5\u65F6 \u5C06\u5E38\u91CF\u6539\u4E3A\u53EA\u8BFB</li><li>MessageBox\u6D88\u606F\u5185\u5BB9\u547D\u540D\uFF1A...Msg,\u4F8B\u5982CreateInstractionFailedMsg</li><li>Enum\u7684\u5904\u7406\uFF0CDescription\u91CC\u7684\u5185\u5BB9\u5BF9\u5E94ResxManager\u7684key\uFF0C\u679A\u4E3E\u7684\u4E2D\u82F1\u6587\u653E\u5728 ErgoLAB.Common.Languages.Enum\u4E2D</li></ol><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//Description\u5BF9\u5E94ResxManager\u7684key</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ParamViewModelType</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Description</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Behavior&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    Behavior<span class="token punctuation">,</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Description</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Eyetracking&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    Eyetracking<span class="token punctuation">,</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Description</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Biometrics&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    Biometrics
<span class="token punctuation">}</span>

<span class="token comment">//\u679A\u4E3E\u63CF\u8FF0\u7684\u4F7F\u7528</span>
Title <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ErgoLAB<span class="token punctuation">.</span>Statistics<span class="token punctuation">.</span>Languages<span class="token punctuation">.</span>Common<span class="token punctuation">.</span>TitleSelect</span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ParamViewModelType<span class="token punctuation">.</span><span class="token function">GetDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ErgoLAB<span class="token punctuation">.</span>Statistics<span class="token punctuation">.</span>Languages<span class="token punctuation">.</span>Common<span class="token punctuation">.</span>TitleConditionParameter</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u9A8C\u8BC1\u63D0\u793A\u6216ToolTip\u5185\u5BB9\u547D\u540D\uFF1A...Tip</li><li>\u5207\u6362\u9879\u76EE\u5206\u652F\u4F1A\u5BFC\u81F4\u79FB\u52A8\u5230\u8D44\u6E90\u5931\u8D25\uFF0C\u91CD\u542FVS\u5373\u53EF</li><li>\u5DEE\u503C\u5904\u7406</li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextBlock</span>  <span class="token attr-name">Style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{StaticResource TextBlockCenterDescriptionStyle}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Run</span> <span class="token attr-name">Text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{x:Static resx:ProcessAnalyze.SegmentsLimitPart1}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Run</span> <span class="token attr-name">Text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Binding CurrentBioParam.MinValidDuration.TotalSeconds,Mode=OneTime}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Run</span> <span class="token attr-name">Text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{x:Static resx:ProcessAnalyze.SegmentLimitPart2}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TextBlock</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>\u6807\u70B9\u7B26\u53F7\u5904\u7406</li><li>\u5B57\u4F53\u5904\u7406 \u96C5\u9ED1\u5B57\u4F53FontWeight\u6CA1\u6709Medium\u7684\u6548\u679C Theme.TextBlock.xaml\uFF08Application.Current.Resources.MergedDictionaries\uFF09 \u53EF\u4EE5\u91C7\u7528Dark Mode\u7C7B\u4F3C\u7684\u65B9\u6CD5\uFF0C\u52A8\u6001\u66FF\u6362TextBlock\u7684Style\uFF0C\u5982\u679C\u662F\u4E2D\u6587Medium\u6539\u4E3ABold</li><li>\u5BFC\u5165\u5BFC\u51FA\u6587\u4EF6\u6C49\u5316\u5904\u7406(\u4F18\u5148\u5EA6\u4F4E)</li></ol><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ol><li>https://www.cnblogs.com/wpinfo/p/wpf_localization.html</li><li>https://www.cnblogs.com/dino623/p/LocalizationWPF.html</li><li>https://yq.aliyun.com/articles/544377</li></ol>`,17),c=[p];function u(r,d){return a(),s("div",null,c)}const g=n(o,[["render",u],["__file","index.html.vue"]]);export{g as default};
