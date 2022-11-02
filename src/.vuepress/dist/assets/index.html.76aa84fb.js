import{_ as e,o as n,c as a,f as t}from"./app.a16336e2.js";const s={};function o(h,l){return n(),a("div",null,[t(` ## \u4EC0\u4E48\u662FHash\uFF1F
   > Hash \u7FFB\u8BD1\u505A\u201C\u6563\u5217\u201D\uFF0C\u4E5F\u53EF\u76F4\u8BD1\u4E3A\u201C\u54C8\u5E0C\u201D\uFF0C\u5C31\u662F\u628A\u4EFB\u610F\u957F\u5EA6\u7684\u503C\u8F93\u5165\uFF0C\u901A\u8FC7hash()\u51FD\u6570\u8F93\u51FA\u56FA\u5B9A\u957F\u5EA6\u7684\u6D88\u606F\u6458\u8981\u3002 Hash\u51FD\u6570\u4E5F\u6709\u5F88\u591A\u79CD\uFF0C\u5305\u62EC\uFF1A\u76F4\u63A5\u53D6\u4F59\u6CD5\uFF0C\u4E58\u6CD5\u53D6\u6574\u6CD5\uFF0C\u5E73\u65B9\u53D6\u4E2D\u6CD5\uFF0C\u6682\u65F6\u5148\u4E86\u89E3\u6709\u8FD9\u4E9B\u65B9\u6CD5\u5373\u53EF\u3002\u5B83\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u7B97\u6CD5\uFF0C\u6700\u7B80\u5355\u7684\u7B97\u6CD5\u5C31\u662F\u52A0\u51CF\u4E58\u9664\uFF0C\u6BD4\u65B9\uFF0C\u6211\u8BBE\u8BA1\u4E2A\u6570\u5B57\u7B97\u6CD5\uFF0C\u8F93\u5165+7=\u8F93\u51FA\uFF0C\u6BD4\u5982\u6211\u8F93\u51651\uFF0C\u8F93\u51FA\u4E3A8\uFF1B\u8F93\u51652\uFF0C\u8F93\u51FA\u4E3A9\u3002

### Hash\u7279\u6027
  - \u4E0D\u53EF\u9006\uFF1A
    \u5728\u5177\u5907\u7F16\u7801\u529F\u80FD\u7684\u540C\u65F6\uFF0C\u54C8\u5E0C\u7B97\u6CD5\u4E5F\u4F5C\u4E3A\u4E00\u79CD\u52A0\u5BC6\u7B97\u6CD5\u5B58\u5728\u3002\u5373\uFF0C\u4F60\u65E0\u6CD5\u901A\u8FC7\u5206\u6790\u54C8\u5E0C\u503C\u8BA1\u7B97\u51FA\u6E90\u6587\u4EF6\u7684\u6837\u5B50\uFF0C\u6362\u53E5\u8BDD\u8BF4\uFF1A\u4F60\u4E0D\u53EF\u80FD\u901A\u8FC7\u89C2\u5BDF\u9999\u80A0\u7684\u7EB9\u7406\u63A8\u6D4B\u51FA\u732A\u539F\u6765\u7684\u6837\u5B50\u3002
  - \u8BA1\u7B97\u6781\u5FEB\uFF1A
    20G\u9AD8\u6E05\u7535\u5F71\u548C\u4E00\u4E2A5K\u6587\u672C\u6587\u4EF6\u590D\u6742\u5EA6\u76F8\u540C\uFF0C\u8BA1\u7B97\u91CF\u90FD\u6781\u5C0F\uFF0C\u53EF\u4EE5\u57280.1\u79D2\u5185\u5F97\u51FA\u7ED3\u679C\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u7BA1\u732A\u6709\u591A\u80A5\uFF0C\u9AA8\u5934\u591A\u786C\uFF0C\u505A\u6210\u9999\u80A0\u90FD\u53EA\u8981\u7728\u7728\u773C\u7684\u65F6\u95F4\u3002

## HashCode\u7684\u4F5C\u7528\uFF1F
-  HashCode\u7684\u5B58\u5728\u4E3B\u8981\u662F\u4E3A\u4E86\u67E5\u627E\u7684\u5FEB\u6377\u6027\uFF0CHashCode\u662F\u7528\u6765\u5728\u6563\u5217\u5B58\u50A8\u7ED3\u6784\u4E2D\u786E\u5B9A\u5BF9\u8C61\u7684\u5B58\u50A8\u5730\u5740\u7684
- \u5982\u679C\u4E24\u4E2A\u5BF9\u8C61equals\u76F8\u7B49\uFF0C\u90A3\u4E48\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u7684HashCode\u4E00\u5B9A\u4E5F\u76F8\u540C
- \u5982\u679C\u5BF9\u8C61\u7684equals\u65B9\u6CD5\u88AB\u91CD\u5199\uFF0C\u90A3\u4E48\u5BF9\u8C61\u7684HashCode\u65B9\u6CD5\u4E5F\u5C3D\u91CF\u91CD\u5199
- \u5982\u679C\u4E24\u4E2A\u5BF9\u8C61\u7684HashCode\u76F8\u540C\uFF0C\u4E0D\u4EE3\u8868\u4E24\u4E2A\u5BF9\u8C61\u5C31\u76F8\u540C\uFF0C\u53EA\u80FD\u8BF4\u660E\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u5728\u6563\u5217\u5B58\u50A8\u7ED3\u6784\u4E2D\uFF0C\u5B58\u653E\u4E8E\u540C\u4E00\u4E2A\u4F4D\u7F6E

### Hashcode\u548CEquals
 \u4F8B\u5982\u5185\u5B58\u4E2D\u6709\u8FD9\u6837\u7684\u4F4D\u7F6E
 0 1 2 3 4 5 6 7
    \u800C\u6211\u6709\u4E2A\u7C7B\uFF0C\u8FD9\u4E2A\u7C7B\u6709\u4E2A\u5B57\u6BB5\u53EBID,\u6211\u8981\u628A\u8FD9\u4E2A\u7C7B\u5B58\u653E\u5728\u4EE5\u4E0A8\u4E2A\u4F4D\u7F6E\u4E4B\u4E00\uFF0C\u5982\u679C\u4E0D\u7528Hashcode\u800C\u4EFB\u610F\u5B58\u653E\uFF0C\u90A3\u4E48\u5F53\u67E5\u627E\u65F6\u5C31\u9700\u8981\u5230\u8FD9\u516B\u4E2A\u4F4D\u7F6E\u91CC\u6328\u4E2A\u53BB\u627E\uFF0C\u6216\u8005\u7528\u4E8C\u5206\u6CD5\u4E00\u7C7B\u7684\u7B97\u6CD5\u3002
    \u4F46\u5982\u679C\u7528Hashcode\u90A3\u5C31\u4F1A\u4F7F\u6548\u7387\u63D0\u9AD8\u5F88\u591A\u3002
    \u6211\u4EEC\u8FD9\u4E2A\u7C7B\u4E2D\u6709\u4E2A\u5B57\u6BB5\u53EBID,\u90A3\u4E48\u6211\u4EEC\u5C31\u5B9A\u4E49\u6211\u4EEC\u7684Hashcode\u4E3AID\uFF058\uFF0C\u7136\u540E\u628A\u6211\u4EEC\u7684\u7C7B\u5B58\u653E\u5728\u53D6\u5F97\u5F97\u4F59\u6570\u90A3\u4E2A\u4F4D\u7F6E\u3002\u6BD4\u5982\u6211\u4EEC\u7684ID\u4E3A9\uFF0C9\u96648\u7684\u4F59\u6570\u4E3A1\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u628A\u8BE5\u7C7B\u5B58\u57281\u8FD9\u4E2A\u4F4D\u7F6E\uFF0C\u5982\u679CID\u662F       13\uFF0C\u6C42\u5F97\u7684\u4F59\u6570\u662F5\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u628A\u8BE5\u7C7B\u653E\u57285\u8FD9\u4E2A\u4F4D\u7F6E\u3002\u8FD9\u6837\uFF0C\u4EE5\u540E\u5728\u67E5\u627E\u8BE5\u7C7B\u65F6\u5C31\u53EF\u4EE5\u901A\u8FC7ID\u9664 8\u6C42\u4F59\u6570\u76F4\u63A5\u627E\u5230\u5B58\u653E\u7684\u4F4D\u7F6E\u4E86\u3002

   \u4F46\u662F\u5982\u679C\u4E24\u4E2A\u7C7B\u6709\u76F8\u540C\u7684Hashcode\u600E\u4E48\u529E\u5462\uFF08\u6211\u4EEC\u5047\u8BBE\u4E0A\u9762\u7684\u7C7B\u7684ID\u4E0D\u662F\u552F\u4E00\u7684\uFF09\uFF0C\u4F8B\u59829\u9664\u4EE58\u548C17\u9664\u4EE58\u7684\u4F59\u6570\u90FD\u662F1\uFF0C\u90A3\u4E48\u8FD9\u662F\u4E0D\u662F\u5408\u6CD5\u7684\uFF0C\u56DE\u7B54\u662F\uFF1A\u53EF\u4EE5\u8FD9\u6837\u3002\u90A3\u4E48\u5982\u4F55\u5224\u65AD\u5462\uFF1F\u5728\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u5B9A\u4E49 equals\u4E86\u3002
    \u4E5F\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC\u5148\u901A\u8FC7 Hashcode\u6765\u5224\u65AD\u4E24\u4E2A\u7C7B\u662F\u5426\u5B58\u653E\u67D0\u4E2A\u6876\u91CC\uFF0C\u4F46\u8FD9\u4E2A\u6876\u91CC\u53EF\u80FD\u6709\u5F88\u591A\u7C7B\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u9700\u8981\u518D\u901A\u8FC7 Equals \u6765\u5728\u8FD9\u4E2A\u6876\u91CC\u627E\u5230\u6211\u4EEC\u8981\u7684\u7C7B\u3002
    \u90A3\u4E48\u3002\u91CD\u5199\u4E86equals()\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u8981\u91CD\u5199hashCode()\u5462\uFF1F
    \u60F3\u60F3\uFF0C\u4F60\u8981\u5728\u4E00\u4E2A\u6876\u91CC\u627E\u4E1C\u897F\uFF0C\u4F60\u5FC5\u987B\u5148\u8981\u627E\u5230\u8FD9\u4E2A\u6876\u554A\uFF0C\u4F60\u4E0D\u901A\u8FC7\u91CD\u5199Hashcode()\u6765\u627E\u5230\u6876\uFF0C\u5149\u91CD\u5199Equals()\u6709\u4EC0\u4E48\u7528\u554A

## HashSet\u662F\u4EC0\u4E48?

 \u6240\u8C13\u7684HashSet\uFF0C\u6307\u7684\u5C31\u662F System.Collections.Generic \u547D\u540D\u7A7A\u95F4\u4E0B\u7684 HashSet<T> \u7C7B\uFF0C\u5B83\u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\uFF0C\u65E0\u5E8F\u7684\u96C6\u5408\uFF0C\u56E0\u6B64HashSet\u5B83\u5E76\u4E0D\u80FD\u505A\u6392\u5E8F\u64CD\u4F5C\uFF0C\u4E5F\u4E0D\u80FD\u5305\u542B\u4EFB\u4F55\u91CD\u590D\u7684\u5143\u7D20\uFF0CHashset \u4E5F\u4E0D\u80FD\u50CF\u6570\u7EC4\u90A3\u6837\u4F7F\u7528\u7D22\u5F15\uFF0C\u6240\u4EE5\u5728 HashSet \u4E0A\u4F60\u65E0\u6CD5\u4F7F\u7528 for \u5FAA\u73AF\uFF0C\u53EA\u80FD\u4F7F\u7528 foreach \u8FDB\u884C\u8FED\u4EE3\uFF0CHashSet \u901A\u5E38\u7528\u5728\u5904\u7406\u5143\u7D20\u7684\u552F\u4E00\u6027\u4E0A\u6709\u7740\u8D85\u9AD8\u7684\u6027\u80FD\u3002

HashSet \u53EA\u80FD\u5305\u542B\u552F\u4E00\u7684\u5143\u7D20\uFF0C\u5B83\u7684\u5185\u90E8\u7ED3\u6784\u4E5F\u4E3A\u6B64\u505A\u4E86\u4E13\u95E8\u7684\u4F18\u5316\uFF0C\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0CHashSet \u4E5F\u53EF\u4EE5\u5B58\u653E\u5355\u4E2A\u7684 null \u503C\uFF0C\u53EF\u4EE5\u5F97\u51FA\u8FD9\u4E48\u4E00\u4E2A\u7ED3\u8BBA\uFF1A\u5982\u4F55\u4F60\u60F3\u62E5\u6709\u4E00\u4E2A\u5177\u6709\u552F\u4E00\u503C\u7684\u96C6\u5408\uFF0C\u90A3\u4E48 HashSet \u5C31\u662F\u4F60\u6700\u597D\u7684\u9009\u62E9\uFF0C\u4F55\u51B5\u5B83\u8FD8\u5177\u6709\u8D85\u9AD8\u7684\u68C0\u7D22\u6027\u80FD\u3002

HashSet<T> \u7C7B \u4E3B\u8981\u88AB\u8BBE\u8BA1\u7528\u6765\u5B58\u50A8\u96C6\u5408\uFF0C\u505A\u9AD8\u6027\u80FD\u96C6\u8FD0\u7B97\uFF0C\u4F8B\u5982\u4E24\u4E2A\u96C6\u5408\u6C42\u4EA4\u96C6\u3001\u5E76\u96C6\u3001\u5DEE\u96C6\u7B49\u3002\u4ECE\u540D\u79F0\u53EF\u4EE5\u770B\u51FA\uFF0C\u5B83\u662F\u57FA\u4E8EHash\u7684\uFF0C\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A\u6CA1\u6709Value \u7684 Dictionary\u3002

\u4F18\u52BF\u5728\u4E8E\u96C6\u5408\u8FD0\u7B97\u5FEB\uFF0C\u4F5C\u4E3A\u4E00\u79CD\u5B58\u653E\u5728\u5185\u5B58\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u5F88\u5FEB\u7684\u8FDB\u884C\u8BBE\u7F6E\u548C\u53D6\u503C\u7684\u64CD\u4F5C\u3002

### HashSet \u7279\u6027
- HashSet<T> \u7684\u5BB9\u91CF\u6307\u7684\u662F\u53EF\u4EE5\u5BB9\u7EB3\u7684\u5143\u7D20\u603B\u6570\uFF0C\u589E\u51CF\u5143\u7D20\u65F6\uFF0C\u5BB9\u91CF\u4F1A\u81EA\u52A8\u589E\u52A0\uFF0C\u4F46\u4E0D\u4F1A\u81EA\u52A8\u51CF\u5C11\u3002
- HashSet<T> \u4E0D\u81EA\u5E26\u6392\u5E8F\u65B9\u6CD5\uFF0C\u5982\u679C\u9700\u8981\u6392\u5E8F\u7684\u53EF\u4EE5\u53C2\u8003\u4F7F\u7528 List \u96C6\u5408\u914D\u5408 Sort \u65B9\u6CD5\u3002
- HashSet<T> \u5143\u7D20\u662F\u552F\u4E00\u7684\uFF0C\u4E0D\u53EF\u91CD\u590D\uFF0C\u540C\u65F6\u533A\u5206\u5927\u5C0F\u5199\u3002
- HashSet<T> \u4E0D\u80FD\u4F7F\u7528\u4E0B\u6807\u6765\u8BBF\u95EE\u5143\u7D20\u3002

#638  HashSet\u4F7F\u7528\u6848\u4F8B

### HashSet<T> \u7684\u4F18\u52BF\u548C\u4E0E List<T> \u7684\u6BD4\u8F83

HashSet<T> \u6700\u5927\u7684\u4F18\u52BF\u662F\u68C0\u7D22\u7684\u6027\u80FD\uFF0C\u7B80\u5355\u7684\u8BF4\u5B83\u7684 Contains \u65B9\u6CD5\u7684\u6027\u80FD\u5728\u5927\u6570\u636E\u91CF\u65F6\u6BD4 List<T> \u597D\u5F97\u591A\u3002

\u5728\u5185\u90E8\u7B97\u6CD5\u5B9E\u73B0\u4E0A\uFF0CHashSet<T> \u7684 Contains \u65B9\u6CD5\u590D\u6742\u5EA6\u662F O(1)\uFF0CList<T> \u7684 Contains \u65B9\u6CD5\u590D\u6742\u5EA6\u662F O(n)\uFF0C\u540E\u8005\u6570\u636E\u91CF\u8D8A\u5927\u901F\u5EA6\u8D8A\u6162\uFF0C\u800C HashSet<T> \u4E0D\u53D7\u6570\u636E\u91CF\u7684\u5F71\u54CD\u3002
> \u8FD9\u91CC\u7684\u65B9\u6CD5\u590D\u6742\u5EA6\u5C31\u662F \u65F6\u95F4\u590D\u6742\u5EA6 \u548C \u7A7A\u95F4\u590D\u6742\u5EA6 \u7684\u7EFC\u5408\u8BC4\u5B9A\u3002
\u65F6\u95F4\u590D\u6742\u5EA6\u548C\u7A7A\u95F4\u590D\u6742\u5EA6\u8BE6\u89E3\uFF1A
https://blog.csdn.net/qq_47897078/article/details/124646714
https://blog.csdn.net/qq_49613557/article/details/115301174


\u6240\u4EE5\u5728\u96C6\u5408\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u68C0\u7D22\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u4F7F\u7528 HashSet<T> \u4EE3\u66FF List<T> \u3002\u6BD4\u5982\u4E00\u4E2A\u5B58\u50A8\u5173\u952E\u5B57\u7684\u96C6\u5408\uFF0C\u8FD0\u884C\u7684\u65F6\u5019\u901A\u8FC7\u5176 Contains \u65B9\u6CD5\u68C0\u67E5\u8F93\u5165\u5B57\u7B26\u4E32\u662F\u5426\u5173\u952E\u5B57\u3002

\u5982\u679C\u4F60\u5FC5\u987B\u5EFA\u7ACB\u65B0\u7684\u8BBE\u5B9A\uFF0C\u6216\u8005\u5982\u679C\u5E94\u7528\u7A0B\u5E8F\u53EA\u9700\u8981\u5B58\u53D6\u63D0\u4F9B\u7684\u4EFB\u52A1\uFF0C\u90A3\u4E48\u4F7F\u7528\u4EFB\u4F55\u7684IEnumerable\u96C6\u5408\u90FD\u5DF2\u7ECF\u8DB3\u591F\u4E86\u3002\u4F46\u662F\uFF0C\u5982\u679C\u5E94\u7528\u7A0B\u5E8F\u9700\u8981\u5B58\u53D6\u5176\u4ED6\u503C\uFF0C\u6216\u5219\u4E0D\u5EFA\u8BAE\u4E0D\u9700\u8981\u5EFA\u7ACB\u65B0\u7684\u96C6\u5408\uFF0C\u8FD9\u65F6\u53EF\u4F7F\u7528HashSet

### HashSet<T> \u7C7B\u7684\u65B9\u6CD5\u548C\u5C5E\u6027

- HashSet<T> \u7C7B\u7684\u4E00\u4E9B\u5E38\u7528\u7684 \u5C5E\u6027\uFF1A

\u5C5E\u6027 | \u63CF\u8FF0 
:----------- | :-----------: 
 Count  |     \u83B7\u53D6\u96C6\u5408\u4E2D\u73B0\u6709\u5143\u7D20\u7684\u603B\u6570

- HashSet<T> \u7C7B\u7684\u4E00\u4E9B\u5E38\u7528\u7684 \u65B9\u6CD5\uFF1A

\u65B9\u6CD5  | \u63CF\u8FF0 
:----------- | :-----------: 
bool Add (T item);      |   \u6DFB\u52A0\u6307\u5B9A\u5143\u7D20\uFF0C\u8FD4\u56DEbool\u503C\u6307\u793A\u662F\u5426\u6267\u884C\u6210\u529F
bool Remove (T item); | \u79FB\u9664\u6307\u5B9A\u5143\u7D20\uFF0C\u8FD4\u56DEbool\u503C\u8868\u793A\u662F\u5426\u6267\u884C\u6210\u529F
void Clear ();    |  \u79FB\u9664\u6240\u6709\u5143\u7D20
bool Contains (T item);  |  \u5224\u65AD\u662F\u5426\u5305\u542B\u6307\u5B9A\u5143\u7D20
void CopyTo (T[] array);  |  \u590D\u5236\u5143\u7D20\u5230\u6570\u7EC4\u4E2D
void ExceptWith (IEnumerable\u300AT\u300B other);  |  \u79FB\u9664\u5F53\u524D\u96C6\u5408\u4E2D\u6307\u5B9A\u5B50\u96C6\u7684\u5143\u7D20
void IntersectWith (IEnumerable\u300AT\u300B other);  |  \u4FEE\u6539\u5F53\u524D\u96C6\u5408\u5143\u7D20\u4E3A\u5F53\u524D\u96C6\u5408\u4E0E\u6307\u5B9A\u96C6\u5408\u7684\u4EA4\u96C6
void UnionWith (IEnumerable other);  |  \u4FEE\u6539\u5F53\u524D\u96C6\u5408\u5143\u7D20\u4E3A\u5F53\u524D\u96C6\u5408\u4E0E\u6307\u5B9A\u96C6\u5408\u7684\u5E76\u96C6
bool IsProperSubsetOf (IEnumerable other);   |  \u5224\u65AD\u5F53\u524D\u96C6\u5408\u662F\u5426\u4E3A\u6307\u5B9A\u96C6\u5408\u7684\u771F\u5B50\u96C6
bool IsProperSupersetOf (IEnumerable other);  |  \u5224\u65AD\u5F53\u524D\u96C6\u5408\u662F\u5426\u4E3A\u6307\u5B9A\u96C6\u5408\u7684\u771F\u8D85\u96C6
bool IsSubsetOf (IEnumerable other);   |  \u5224\u65AD\u5F53\u524D\u96C6\u5408\u662F\u5426\u4E3A\u6307\u5B9A\u96C6\u5408\u7684\u5B50\u96C6
bool IsSupersetOf (IEnumerable other); |  \u5224\u65AD\u5F53\u524D\u96C6\u5408\u662F\u5426\u4E3A\u6307\u5B9A\u96C6\u5408\u7684\u8D85\u96C6
bool Overlaps (IEnumerable other);  | \u5224\u65AD\u5F53\u524D\u96C6\u5408\u662F\u5426\u4E0E\u6307\u5B9A\u96C6\u5408\u81F3\u5C11\u6709\u4E00\u4E2A\u516C\u5171\u5143\u7D20
bool SetEquals (IEnumerable other); | \u5224\u65AD\u5F53\u524D\u96C6\u5408\u662F\u5426\u4E0E\u6307\u5B9A\u96C6\u5408\u5305\u542B\u76F8\u540C\u7684\u5143\u7D20
bool TryGetValue (T equalValue, out T actualValue); |  \u641C\u7D22\u7ED9\u5B9A\u503C\uFF0C\u5E76\u8FD4\u56DE\u6240\u627E\u5230\u7684\u76F8\u7B49\u503C
void TrimExcess ();   |  \u5C06\u5F53\u524D\u96C6\u5408\u7684\u5BB9\u91CF\u8BBE\u7F6E\u4E3A\u5B83\u5305\u542B\u7684\u5B9E\u9645\u5143\u7D20\u6570

## HashTable\u7B80\u8FF0

>\u5728.NET Framework\u4E2D\uFF0CHashtable\u662FSystem.Collections\u547D\u540D\u7A7A\u95F4\u63D0\u4F9B\u7684\u4E00\u4E2A\u5BB9\u5668\uFF0C\u7528\u4E8E\u5904\u7406\u548C\u8868\u73B0\u7C7B\u4F3Ckeyvalue\u7684\u952E\u503C\u5BF9\uFF0C\u5176\u4E2Dkey\u901A\u5E38\u53EF\u7528\u6765\u5FEB\u901F\u67E5\u627E\uFF0C\u540C\u65F6key\u662F\u533A\u5206\u5927\u5C0F\u5199\uFF1Bvalue\u7528\u4E8E\u5B58\u50A8\u5BF9\u5E94\u4E8Ekey\u7684\u503C\u3002Hashtable\u4E2Dkeyvalue\u952E\u503C\u5BF9\u5747\u4E3Aobject\u7C7B\u578B\uFF0C\u6240\u4EE5Hashtable\u53EF\u4EE5\u652F\u6301\u4EFB\u4F55\u7C7B\u578B\u7684keyvalue\u952E\u503C\u5BF9.

#639  HashTable\u4F7F\u7528\u6848\u4F8B

## HashSet\u6E90\u7801\u6BD4\u8F83
> HashSet\u7684\u5185\u90E8\u5B9E\u73B0\u8DDFDictionary\u51E0\u4E4E\u662F\u4E00\u6A21\u4E00\u6837\u7684\uFF0C\u5DEE\u522B\u4EC5\u5728\u4E8EHashSet\u6CA1\u6709key\uFF0C\u53EA\u6709value\uFF0C\u6240\u4EE5\u5B58\u50A8\u7684\u65F6\u5019\u662F\u7528value\u7684HashCode\u503C\u8FDB\u884C\u5224\u65AD\u3002

HashSet\u6E90\u7801\uFF1Ahttps://source.dot.net/#System.Private.CoreLib/HashSet.cs
Dictionary\u6E90\u7801\uFF1Ahttps://source.dot.net/#System.Private.CoreLib/Dictionary.cs `)])}const H=e(s,[["render",o],["__file","index.html.vue"]]);export{H as default};
