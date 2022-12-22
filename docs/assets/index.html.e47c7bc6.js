import{_ as p,r as o,o as c,c as i,a as n,d as a,b as t,e}from"./app.cbfe9412.js";const l="/assets/01.d6b0ea6d.png",u={},k=e('<h1 id="\u8BED\u97F3\u8BC6\u522B" tabindex="-1"><a class="header-anchor" href="#\u8BED\u97F3\u8BC6\u522B" aria-hidden="true">#</a> \u8BED\u97F3\u8BC6\u522B</h1><h2 id="microsoft-speech" tabindex="-1"><a class="header-anchor" href="#microsoft-speech" aria-hidden="true">#</a> Microsoft.Speech</h2><h3 id="\u73AF\u5883\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u5B89\u88C5" aria-hidden="true">#</a> \u73AF\u5883\u5B89\u88C5</h3>',3),r={href:"https://download.microsoft.com/download/4/0/D/40D6347A-AFA5-417D-A9BB-173D937BEED4/MSSpeech_TTS_zh-CN_HuiHui.msi",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.microsoft.com/en-us/download/details.aspx?id=27226",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,[n("p",null,"\u5B89\u88C5 runtime"),n("p",null,"\u5728 speech sdk \u5B89\u88C5\u76EE\u5F55\u4E0B\u9762 Microsoft SDKs\\Speech\\v11.0\\Redist\\SpeechPlatformRuntime.msi")],-1),m=e(`<h3 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u793A\u4F8B\u4EE3\u7801</h3><p>\u5F15\u5165 Microsoft.Speech \u5E93</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition</span><span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>SpeechRecognitionEngine</span> _microsoftSpeech<span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">StartMicrosoftSpeech</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> wakeUpWords<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">CultureInfo</span> cultureInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CultureInfo</span><span class="token punctuation">(</span><span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>SpeechRecognitionEngine</span><span class="token punctuation">(</span>cultureInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span><span class="token function">SetInputToDefaultAudioDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>Choices</span> choices <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>Choices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	choices<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>wakeUpWords<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>GrammarBuilder</span> gb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>GrammarBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	gb<span class="token punctuation">.</span>Culture <span class="token operator">=</span> cultureInfo<span class="token punctuation">;</span>
	gb<span class="token punctuation">.</span><span class="token function">Append</span><span class="token punctuation">(</span>choices<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>Grammar</span> g <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>Grammar</span><span class="token punctuation">(</span>gb<span class="token punctuation">)</span><span class="token punctuation">;</span>
	g<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span><span class="token function">LoadGrammar</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span>SpeechRecognized <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MicrosoftSpeech_SpeechRecognized<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span>SpeechRecognitionRejected <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MicrosoftSpeech_SpeechRecognitionRejected<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span>SpeechDetected <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MicrosoftSpeech_SpeechDetected<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span><span class="token function">RecognizeAsync</span><span class="token punctuation">(</span>Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>RecognizeMode<span class="token punctuation">.</span>Multiple<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">StopMicrosoftSpeech</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span><span class="token function">RecognizeAsyncStop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span><span class="token function">UnloadAllGrammars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span>SpeechRecognized <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MicrosoftSpeech_SpeechRecognized<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span>SpeechRecognitionRejected <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MicrosoftSpeech_SpeechRecognitionRejected<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span>SpeechDetected <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MicrosoftSpeech_SpeechDetected<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MicrosoftSpeech_SpeechDetected</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>SpeechDetectedEventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;MicrosoftSpeech_SpeechDetected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MicrosoftSpeech_SpeechRecognized</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>SpeechRecognizedEventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Yes </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">e<span class="token punctuation">.</span>Result<span class="token punctuation">.</span>Text</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MicrosoftSpeech_SpeechRecognitionRejected</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">Microsoft<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>SpeechRecognitionRejectedEventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;No </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">e<span class="token punctuation">.</span>Result<span class="token punctuation">.</span>Text</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="system-speech" tabindex="-1"><a class="header-anchor" href="#system-speech" aria-hidden="true">#</a> System.Speech</h2><h3 id="\u793A\u4F8B\u4EE3\u7801-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801-1" aria-hidden="true">#</a> \u793A\u4F8B\u4EE3\u7801</h3><p>\u5F15\u5165 System.Speech \u5E93</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition</span><span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>SpeechRecognitionEngine</span> _systemSpeech<span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">StartSystemSpeech</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> wakeUpWords<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>SpeechRecognitionEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span><span class="token function">SetInputToDefaultAudioDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>Choices</span> choices <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>Choices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	choices<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>wakeUpWords<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>GrammarBuilder</span> gb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>GrammarBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	gb<span class="token punctuation">.</span><span class="token function">Append</span><span class="token punctuation">(</span>choices<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>Grammar</span> gr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>Grammar</span><span class="token punctuation">(</span>gb<span class="token punctuation">)</span><span class="token punctuation">;</span>
	gr<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;System&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span><span class="token function">LoadGrammar</span><span class="token punctuation">(</span>gr<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span>SpeechRecognized <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>SystemSpeech_SpeechRecognized<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span>SpeechRecognitionRejected <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>SystemSpeech_SpeechRecognitionRejected<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span>SpeechDetected <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>SystemSpeech_SpeechDetected<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span><span class="token function">RecognizeAsync</span><span class="token punctuation">(</span>System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>RecognizeMode<span class="token punctuation">.</span>Multiple<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">StopSystemSpeech</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span><span class="token function">RecognizeAsyncStop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span><span class="token function">UnloadAllGrammars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span>SpeechRecognized <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>SystemSpeech_SpeechRecognized<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span>SpeechRecognitionRejected <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>SystemSpeech_SpeechRecognitionRejected<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span>SpeechDetected <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>SystemSpeech_SpeechDetected<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ButtonStop_Click</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">RoutedEventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span><span class="token function">RecognizeAsyncStop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span><span class="token function">UnloadAllGrammars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span>SpeechRecognized <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MicrosoftSpeech_SpeechRecognized<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span>SpeechRecognitionRejected <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MicrosoftSpeech_SpeechRecognitionRejected<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_microsoftSpeech<span class="token punctuation">.</span>SpeechDetected <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MicrosoftSpeech_SpeechDetected<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span><span class="token function">RecognizeAsyncStop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span><span class="token function">UnloadAllGrammars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span>SpeechRecognized <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>SystemSpeech_SpeechRecognized<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span>SpeechRecognitionRejected <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>SystemSpeech_SpeechRecognitionRejected<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>_systemSpeech<span class="token punctuation">.</span>SpeechDetected <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>SystemSpeech_SpeechDetected<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>BtnStart<span class="token punctuation">.</span>IsEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>BtnStop<span class="token punctuation">.</span>IsEnabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>txtTarget<span class="token punctuation">.</span>IsEnabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SystemSpeech_SpeechDetected</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>SpeechDetectedEventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;SystemSpeech_SpeechDetected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SystemSpeech_SpeechRecognized</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>SpeechRecognizedEventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Yes </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">e<span class="token punctuation">.</span>Result<span class="token punctuation">.</span>Text</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SystemSpeech_SpeechRecognitionRejected</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> sender<span class="token punctuation">,</span> <span class="token class-name">System<span class="token punctuation">.</span>Speech<span class="token punctuation">.</span>Recognition<span class="token punctuation">.</span>SpeechRecognitionRejectedEventArgs</span> e<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;No </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">e<span class="token punctuation">.</span>Result<span class="token punctuation">.</span>Text</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="microsoft-speech-vs-system-speech" tabindex="-1"><a class="header-anchor" href="#microsoft-speech-vs-system-speech" aria-hidden="true">#</a> Microsoft.Speech vs System.Speech</h2><p><img src="`+l+'" alt="image"></p><h3 id="\u6548\u679C\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u5BF9\u6BD4" aria-hidden="true">#</a> \u6548\u679C\u5BF9\u6BD4</h3><table><thead><tr><th style="text-align:left;">\u8BC6\u522B\u8BCD</th><th style="text-align:center;">System Speech</th><th style="text-align:right;">Micosoft Speech</th><th>\u5B9E\u9645\u4E2A\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">\u5F00\u59CB</td><td style="text-align:center;">56</td><td style="text-align:right;">22</td><td>4</td></tr><tr><td style="text-align:left;">\u8BAD\u7EC3</td><td style="text-align:center;">90</td><td style="text-align:right;">33</td><td>4</td></tr><tr><td style="text-align:left;">\u6CE8\u610F\u529B</td><td style="text-align:center;">25</td><td style="text-align:right;">5</td><td>10</td></tr></tbody></table><ul><li>System.Speech \u8BC6\u522B\u901F\u5EA6\u5FEB</li><li>Microsoft.Speech \u51C6\u786E\u7387\u9AD8\uFF08\u65B9\u8A00\u4E5F\u53EF\u4EE5\u8BC6\u522B\uFF09</li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',13),v={href:"https://learn.microsoft.com/en-us/previous-versions/office/developer/speech-technologies/dd147134(v=office.14)",target:"_blank",rel:"noopener noreferrer"},S={href:"https://learn.microsoft.com/en-us/dotnet/api/system.speech.recognition.speechrecognizer?view=netframework-4.8",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.microsoft.com/en-us/archive/msdn-magazine/2014/december/voice-recognition-speech-recognition-with-net-desktop-applications",target:"_blank",rel:"noopener noreferrer"};function g(b,f){const s=o("ExternalLinkIcon");return c(),i("div",null,[k,n("ul",null,[n("li",null,[n("p",null,[n("a",r,[a("\u5B89\u88C5\u8BED\u97F3\u5305"),t(s)])])]),n("li",null,[n("p",null,[n("a",d,[a("\u5B89\u88C5 speech sdk"),t(s)])])]),h]),m,n("ul",null,[n("li",null,[n("a",v,[a("SpeechRecognitionEngine Class"),t(s)])]),n("li",null,[n("a",S,[a("SpeechRecognizer Class"),t(s)])]),n("li",null,[n("a",y,[a("Voice Recognition : Speech Recognition with .NET Desktop Applications"),t(s)])])])])}const _=p(u,[["render",g],["__file","index.html.vue"]]);export{_ as default};