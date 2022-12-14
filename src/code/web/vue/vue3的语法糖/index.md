# vue3 setup 语法糖汇总

> 在 Vue3.0 中变量必须 return 出来， template 中才能使用；而在 Vue3.2 中只需要在 script 标签上加上 setup 属性，无需 return ， template 便可直接使用，非常的香啊！

#### 1、如何使用 setup 语法糖

[参考地址](https://mp.weixin.qq.com/s/yTfkQnT_BQFvXbVqsgFprg)
只需要在 script 中使用 setup 即可

```html
<template> </template>
<script setup></script>
<style scoped lang="less"></style>
```

#### 2、data 数据的使用

由于 setup 不需写 return ，所以直接声明数据即可

```html
<script setup>
  import { ref, reactive, toRefs } from "vue";

  const data = reactive({
    patternVisible: false,
    debugVisible: false,
    aboutExeVisible: false,
  });

  const content = ref("content");
  //使用toRefs解构
  const { patternVisible, debugVisible, aboutExeVisible } = toRefs(data);
</script>
```

#### 3、method 方法的使用

```html
<template>
  <button @click="onClickHelp">系统帮助</button>
</template>
<script setup>
  import { reactive } from "vue";

  const data = reactive({
    aboutExeVisible: false,
  });
  // 点击帮助
  const onClickHelp = () => {
    console.log(`系统帮助`);
    data.aboutExeVisible = true;
  };
</script>
```

#### 4、watchEffect

```html
<script setup>
  import { ref, watchEffect } from "vue";

  let sum = ref(0);

  watchEffect(() => {
    const x1 = sum.value;
    console.log("watchEffect所指定的回调执行了");
  });
</script>
```

#### 5、watch 的使用

```html
<script setup>
  import { reactive, watch } from "vue";
  //数据
  let sum = ref(0);
  let msg = ref("你好啊");
  let person = reactive({
    name: "张三",
    age: 18,
    job: {
      j1: {
        salary: 20,
      },
    },
  });
  // 两种监听格式
  watch(
    [sum, msg],
    (newValue, oldValue) => {
      console.log("sum或msg变了", newValue, oldValue);
    },
    { immediate: true }
  );

  watch(
    () => person.job,
    (newValue, oldValue) => {
      console.log("person的job变化了", newValue, oldValue);
    },
    { deep: true }
  );
</script>
```

#### 6、computed 计算属性的使用

computed 计算属性有两种写法(简写和考虑读写的完整写法)
代码如下（示例）：

```html
<script setup>
  import { reactive, computed } from "vue";

  //数据
  let person = reactive({
    firstName: "小",
    lastName: "叮当",
  });
  // 计算属性简写
  person.fullName = computed(() => {
    return person.firstName + "-" + person.lastName;
  });
  // 完整写法
  person.fullName = computed({
    get() {
      return person.firstName + "-" + person.lastName;
    },
    set(value) {
      const nameArr = value.split("-");
      person.firstName = nameArr[0];
      person.lastName = nameArr[1];
    },
  });
</script>
```

#### 7、props 父子传值的使用

子组件代码如下

```html
<template>
  <span>{{props.name}}</span>
</template>

<script setup>
  import { defineProps } from "vue";
  // 声明props
  const props = defineProps({
    name: {
      type: String,
      default: "11",
    },
  });
  // 或者
  //const props = defineProps(['name'])
</script>
```

父组件代码如下（示例）：

```html
<template>
  <child :name="name" />
</template>

<script setup>
  import { ref } from "vue";
  // 引入子组件
  import child from "./child.vue";
  let name = ref("小叮当");
</script>
```

#### 8、emit 子父传值的使用

子组件代码如下（示例）：

```html
<template>
  <a-button @click="isOk"> 确定 </a-button>
</template>
<script setup>
  import { defineEmits } from "vue";

  // emit
  const emit = defineEmits(["aboutExeVisible"]);
  /**
   * 方法
   */
  // 点击确定按钮
  const isOk = () => {
    emit("aboutExeVisible");
  };
</script>
```

父组件代码如下（示例）：

```html
<template>
  <AdoutExe @aboutExeVisible="aboutExeHandleCancel" />
</template>
<script setup>
  import { reactive } from "vue";
  // 导入子组件
  import AdoutExe from "../components/AdoutExeCom";

  const data = reactive({
    aboutExeVisible: false,
  });
  // content组件ref

  // 关于系统隐藏
  const aboutExeHandleCancel = () => {
    data.aboutExeVisible = false;
  };
</script>
```

#### 9、获取子组件 ref 变量和 defineExpose 暴漏

即 vue2 中的获取子组件的 ref ，直接在父组件中控制子组件方法和变量的方法
子组件代码如下（示例）

```html
<template>
  <p>{{data }}</p>
</template>

<script setup>
  import { reactive, toRefs } from "vue";

  /**
   * 数据部分
   * */
  const data = reactive({
    modelVisible: false,
    historyVisible: false,
    reportVisible: false,
  });
  defineExpose({
    ...toRefs(data),
  });
</script>
```

父组件代码如下（示例）：

```html
<template>
  <button @click="onClickSetUp">点击</button>
  <content ref="content" />
</template>

<script setup>
  import { ref } from "vue";

  // content组件ref
  const content = ref("content");
  // 点击设置
  const onClickSetUp = ({ key }) => {
    content.value.modelVisible = true;
  };
</script>
<style scoped lang="less"></style>
```

#### 10、路由 useRoute 和 us eRouter 的使用

```html
<script setup>
  import { useRoute, useRouter } from "vue-router";

  // 声明
  const route = useRoute();
  const router = useRouter();

  // 获取query
  console.log(route.query);
  // 获取params
  console.log(route.params);

  // 路由跳转
  router.push({
    path: `/index`,
  });
</script>
```

#### 11、store 仓库的使用

```html
<script setup>
  import { useStore } from "vuex";
  import { num } from "../store/index";

  const store = useStore(num);

  // 获取Vuex的state
  console.log(store.state.number);
  // 获取Vuex的getters
  console.log(store.state.getNumber);

  // 提交mutations
  store.commit("fnName");

  // 分发actions的方法
  store.dispatch("fnName");
</script>
```

#### 12、await 的支持

setup 语法糖中可直接使用 await ，不需要写 async ， setup 会自动变成 async setup

```html
<script setup>
  import api from '../api/Api'
  const data = await Api.getData()
  console.log(data)
</script>
```

#### 13、provide 和 inject 祖孙传值 父组件代码如下（示例）：

```html
<template>
  <AdoutExe />
</template>

<script setup>
  import { ref, provide } from "vue";
  import AdoutExe from "@/components/AdoutExeCom";

  let name = ref("Jerry");
  // 使用provide
  provide("provideState", {
    name,
    changeName: () => {
      name.value = "小叮当";
    },
  });
</script>
```

子组件代码如下（示例）：

```html
<script setup>
  import { inject } from "vue";
  const provideState = inject("provideState");

  provideState.changeName();
</script>
```
