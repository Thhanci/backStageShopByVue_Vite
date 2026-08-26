



[Overview 组件总览 | Element Plus](https://element-plus.org/zh-CN/component/overview)

[安装 | Element Plus](https://element-plus.org/zh-CN/guide/installation.html#使用包管理器)





https://windicss.org

[Home | Windi CSS](https://cn.windicss.org/)





[Configuring Vite | Vite](https://vite.dev/config/)



https://element-plus.org/zh-CN/component/notification.html#%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B%E7%9A%84%E9%80%9A%E7%9F%A5

[axios中文网|axios API 中文文档 | axios](http://www.axios-js.com/zh-cn/)



[@vueuse/integrations | VueUse](https://vueuse.org/integrations/README.html)

[useCookies | VueUse](https://vueuse.org/integrations/useCookies/#usecookies)



```text
npm install @element-plus/icons-vue

npm install axios

npm i @vueuse/integrations
npm i universal-cookie@^7

```



```vue
//vue
vue create demoName
npm run server
```

```vite
//vite
npm -v
npm config get registry
npm config set registry=https://registry.npmmirror.com

npm init vite@latest demoName -- --template vue
cd demoName
npm install
npm run dev
```

```git
清空 Git 的代理设置（最推荐）
git config --global --unset http.proxy
git config --global --unset https.proxy

# 查看当前代理设置
git config --global --get http.proxy
git config --global --get https.proxy

# 如果端口不对，重新设置（7897 或你的代理软件实际端口）
git config --global http.proxy http://127.0.0.1:7897
git config --global https.proxy http://127.0.0.1:7897
```











| 属性         | 值           | 排列方式       | 设宽高 | 脱离文档流 | 内部布局  | 典型场景                       |
| :----------- | :----------- | :------------- | :----- | :--------- | :-------- | :----------------------------- |
| **display**  | block        | 独占一行 ✅     | ✅ 能   | ❌ 否       | 默认流    | `<div>`、`<p>`、`<h1>`         |
| **display**  | inline       | 并排 ❌         | ❌ 不能 | ❌ 否       | 默认流    | `<span>`、`<a>`、`<strong>`    |
| **display**  | inline-block | 并排 ❌         | ✅ 能   | ❌ 否       | 默认流    | `<button>`、`<img>`、`<input>` |
| **display**  | flex         | 独占一行 ✅     | ✅ 能   | ❌ 否       | Flex 一维 | 导航栏、居中、组件排列         |
| **display**  | inline-flex  | 并排 ❌         | ✅ 能   | ❌ 否       | Flex 一维 | 按钮组（内部需 flex）          |
| **display**  | grid         | 独占一行 ✅     | ✅ 能   | ❌ 否       | Grid 二维 | 页面大结构、相册               |
| **display**  | inline-grid  | 并排 ❌         | ✅ 能   | ❌ 否       | Grid 二维 | 内联网格（较少用）             |
| **position** | static       | 默认排列       | ✅ 能   | ❌ 否       | 默认流    | 默认值，无需使用               |
| **position** | relative     | 相对自身偏移   | ✅ 能   | ❌ 否       | 默认流    | 微调元素位置                   |
| **position** | absolute     | 相对父元素定位 | ✅ 能   | ✅ 是       | 默认流    | 下拉菜单、角标                 |
| **position** | fixed        | 相对视口定位   | ✅ 能   | ✅ 是       | 默认流    | 弹窗、固定导航                 |
| **position** | sticky       | 滚动到阈值固定 | ✅ 能   | 混合       | 默认流    | 吸顶导航                       |

| 对比       | 默认流                     | Flexbox                              |
| :--------- | :------------------------- | :----------------------------------- |
| **本质**   | 浏览器默认排版方式         | 需要主动设置的弹性布局               |
| **触发**   | 无需设置                   | `display: flex` 或 `inline-flex`     |
| **维度**   | 一维（从上到下或从左到右） | 一维（行或列），但控制力更强         |
| **对齐**   | 简单（text-align、margin） | 强大（justify-content、align-items） |
| **灵活性** | 固定，不自动伸缩           | 弹性，自动分配空间                   |

| 对比项   | 默认流                                   | Flexbox                       |
| :------- | :--------------------------------------- | :---------------------------- |
| 排列方向 | 块级垂直 ↓，行内水平 →                   | 自由控制（`flex-direction`）  |
| 元素宽度 | 块级默认 100%，行内由内容定              | 由 `flex` 属性灵活控制        |
| 水平居中 | `text-align: center` 或 `margin: 0 auto` | `justify-content: center`     |
| 垂直居中 | 困难（需额外技巧）                       | `align-items: center`（轻松） |
| 空间分配 | 无法自动分配剩余空间                     | `flex: 1` 自动占满            |
| 换行控制 | 块级自动换行，行内不换行                 | `flex-wrap: wrap` 控制        |
| 元素顺序 | 按 HTML 顺序                             | `order` 属性可调整            |

| 创建方式               | 启动命令        | 底层工具 |
| :--------------------- | :-------------- | :------- |
| **Vite** 创建的项目    | `npm run dev`   | Vite     |
| **Vue CLI** 创建的项目 | `npm run serve` | Webpack  |

| 对比项           | **Vite** (`npm init vite`)  | **Vue CLI** (`vue create`)        |
| :--------------- | :-------------------------- | :-------------------------------- |
| **底层打包工具** | **Vite**（基于 ES Modules） | **Webpack**（基于 Bundle）        |
| **启动速度**     | ⚡ **极快**（毫秒级）        | 🐢 较慢（秒级，需全量打包）        |
| **热更新速度**   | ⚡ 极快（按需编译）          | 🐢 较慢（全量重编译）              |
| **配置复杂度**   | 简单，默认即可用            | 较复杂，但灵活                    |
| **插件生态**     | 相对新，但增长快            | 非常成熟，生态丰富                |
| **浏览器兼容性** | 现代浏览器（需 polyfill）   | 更广泛（Webpack 自动处理）        |
| **适用场景**     | 现代化新项目、SPA           | 大型企业级项目、复杂配置          |
| **官方态度**     | Vue 官方**现在主推**        | 目前维护状态，但建议新项目用 Vite |





```text
alias: {
  '@': path.resolve(__dirname, "src")
}

目的：把 @ 符号映射到项目根目录下的 src 文件夹。


写法                             实际解析出的路径              是否可靠
path.resolve(__dirname, "src")   E:\project\src（绝对路径）    ✅ 非常可靠，绝对正确
path.resolve("./", "src")        取决于执行命令时的工作目录      ⚠️ 可能出错


./ 和 __dirname 的区别

对比项            ./（相对路径）                    __dirname（绝对路径）
含义              当前终端执行命令时的目录           当前文件本身所在的目录
是否可变          ✅ 会变化（取决于执行位置）        ❌ 不变（始终是文件位置）
可靠性            ⚠️ 不稳定                        ✅ 非常可靠
```





Vue 提供了一系列 `v-` 开头的内置指令，用于在模板中实现各种功能。

| 指令     | 作用                                | 示例                               |
| :------- | :---------------------------------- | :--------------------------------- |
| `v-text` | 更新元素的文本内容                  | `<span v-text="message"></span>`   |
| `v-html` | 更新元素的 HTML 内容（有 XSS 风险） | `<div v-html="htmlContent"></div>` |
| `v-pre`  | 跳过编译，直接显示原始内容          | `<span v-pre>{{ 不编译 }}</span>`  |
| `v-once` | 只渲染一次，后续不更新              | `<span v-once>{{ count }}</span>`  |
| `v-memo` | 缓存模板，条件不变时不重新渲染      | `<div v-memo="[value]"></div>`     |







| 分类     |   指令    | 简写 | 作用                                       | 示例                                                       |
| :------- | :-------: | :--- | :----------------------------------------- | :--------------------------------------------------------- |
| 内容渲染 |  v-text   | -    | 更新元素的文本内容                         | `<span v-text="message"></span>`                           |
| 内容渲染 |  v-html   | -    | 更新元素的 HTML 内容（有 XSS 风险）        | `<div v-html="htmlContent"></div>`                         |
| 内容渲染 |   v-pre   | -    | 跳过编译，直接显示原始内容                 | `<span v-pre>{{ 不编译 }}</span>`                          |
| 内容渲染 |  v-once   | -    | 只渲染一次，后续不更新                     | `<span v-once>{{ count }}</span>`                          |
| 内容渲染 |  v-memo   | -    | 缓存模板，条件不变时不重新渲染（Vue 3.2+） | `<div v-memo="[value]"></div>`                             |
| 属性绑定 |  v-bind   | :    | 动态绑定一个或多个属性                     | `:src="url"` 或 `v-bind="attrs"`                           |
| 事件绑定 |   v-on    | @    | 绑定事件监听器                             | `@click="handleClick"`                                     |
| 条件渲染 |   v-if    | -    | 条件为真时渲染元素                         | `<div v-if="show">显示</div>`                              |
| 条件渲染 |  v-else   | -    | v-if 的否定分支                            | `<div v-else>隐藏</div>`                                   |
| 条件渲染 | v-else-if | -    | v-if 的更多分支                            | `<div v-else-if="condition">中间</div>`                    |
| 条件渲染 |  v-show   | -    | 切换元素的 display 属性                    | `<div v-show="show">显示</div>`                            |
| 列表渲染 |   v-for   | -    | 基于数组/对象循环渲染列表                  | `<li v-for="item in items" :key="item.id">{{ item }}</li>` |
| 表单绑定 |  v-model  | -    | 在表单元素上创建双向数据绑定               | `<input v-model="text">`                                   |
| 插槽     |  v-slot   | #    | 具名插槽或作用域插槽                       | `<template #header="props">`                               |
| 组件     |   v-is    | -    | 动态组件绑定                               | `<component v-is="'MyComponent'" />`                       |

| 对比     | v-if               | v-show             |
| :------- | :----------------- | :----------------- |
| 原理     | 销毁/重建 DOM 元素 | 切换 display: none |
| 初始渲染 | 条件为假时不渲染   | 总是渲染           |
| 切换开销 | 大（适合不常变）   | 小（适合频繁切换） |

| 指令    | 修饰符         | 作用           |
| :------ | :------------- | :------------- |
| v-on    | .stop          | 阻止事件冒泡   |
| v-on    | .prevent       | 阻止默认行为   |
| v-on    | .once          | 事件只触发一次 |
| v-on    | .enter .tab 等 | 特定按键触发   |
| v-on    | .left .right   | 鼠标特定按键   |
| v-model | .lazy          | 失去焦点后同步 |
| v-model | .number        | 转为数字       |
| v-model | .trim          | 去除首尾空格   |
| v-bind  | .prop          | 绑定 DOM 属性  |
| v-bind  | .attr          | 绑定 HTML 特性 |
| v-bind  | .camel         | 转为驼峰命名   |

```javascript
<template>
  <!-- 阻止冒泡 -->
  <button @click.stop="handleClick">点击</button>

  <!-- 阻止表单提交 -->
  <form @submit.prevent="submit">...</form>

  <!-- 回车触发 -->
  <input @keyup.enter="search" />

  <!-- 输入转为数字 -->
  <input v-model.number="age" />

  <!-- 去除空格 -->
  <input v-model.trim="username" />
</template>
```

**`vh` 是 CSS 中的视口单位，全称是 "viewport height"（视口高度）。**

| 对比项         | **rem**                          | **vh**                   |
| :------------- | :------------------------------- | :----------------------- |
| **全称**       | root em                          | viewport height          |
| **基准**       | 根元素（`<html>`）的 `font-size` | 视口（浏览器窗口）的高度 |
| **是否响应式** | ✅ 是（取决于根字体大小）         | ✅ 是（取决于窗口高度）   |
| **适用场景**   | 字体大小、间距、内边距           | 全屏布局、高度控制       |
| **默认值**     | `1rem` = 16px（浏览器默认）      | `1vh` = 视口高度的 1%    |
| **受缩放影响** | ✅ 受浏览器字体缩放影响           | ❌ 不受字体缩放影响       |







`justify-content` 控制的是**子元素之间的排列**，不是子元素自身的内容。

```text
<!-- 1. justify-content: center → 按钮整体居中 -->
<div style="display: flex; justify-content: center;">
  <button>按钮A</button>
  <button>按钮B</button>
</div>

<!-- 2. text-align: center → 按钮里的文字居中 -->
<div>
  <button style="text-align: center;">按钮文字居中</button>
</div>
```

| 缩写  | 全称              | 含义     |
| :---- | :---------------- | :------- |
| `xs`  | **Extra Small**   | 超小     |
| `sm`  | **Small**         | 小       |
| `md`  | **Medium**        | 中       |
| `lg`  | **Large**         | 大       |
| `xl`  | **Extra Large**   | 超大     |
| `2xl` | **2 Extra Large** | 2 倍超大 |
| `3xl` | **3 Extra Large** | 3 倍超大 |
| `4xl` | **4 Extra Large** | 4 倍超大 |
| `5xl` | **5 Extra Large** | 5 倍超大 |

| 缩写 | 全称             | 含义                    |
| :--- | :--------------- | :---------------------- |
| `m`  | Margin           | 所有方向的外边距        |
| `mt` | Margin Top       | 上边距                  |
| `mb` | Margin Bottom    | 下边距                  |
| `ml` | Margin Left      | 左边距                  |
| `mr` | Margin Right     | 右边距                  |
| `mx` | Margin X（水平） | 左右边距（`ml` + `mr`） |
| `my` | Margin Y（垂直） | 上下边距（`mt` + `mb`） |









## Vue 3 所有常用导出 API 完整速查表

| 分类       | 导出名                 | 作用                                                        | 示例                                                         |
| :--------- | :--------------------- | :---------------------------------------------------------- | :----------------------------------------------------------- |
| 响应式     | `ref`                  | 创建一个响应式数据（任意类型）                              | `const count = ref(0)`                                       |
| 响应式     | `reactive`             | 创建一个响应式对象                                          | `const state = reactive({ count: 0 })`                       |
| 响应式     | `computed`             | 创建一个计算属性（依赖其他数据自动更新）                    | `const total = computed(() => price.value * quantity.value)` |
| 响应式     | `watch`                | 监听数据变化并执行副作用                                    | `watch(count, (newVal) => console.log(newVal))`              |
| 响应式     | `watchEffect`          | 自动追踪依赖并执行副作用                                    | `watchEffect(() => console.log(count.value))`                |
| 响应式     | `shallowRef`           | 浅层响应式（只监听 `.value` 的变化）                        | `const state = shallowRef({ count: 0 })`                     |
| 响应式     | `shallowReactive`      | 浅层响应式（只监听第一层属性）                              | `const state = shallowReactive({ user: { name: '张三' } })`  |
| 响应式     | `toRef`                | 将 reactive 对象的属性转为 ref                              | `const name = toRef(form, 'name')`                           |
| 响应式     | `toRefs`               | 将 reactive 对象的所有属性转为 ref                          | `const { name, age } = toRefs(form)`                         |
| 响应式     | `isRef`                | 检查一个值是否是 ref                                        | `if (isRef(count)) { ... }`                                  |
| 响应式     | `isReactive`           | 检查一个值是否是 reactive                                   | `if (isReactive(form)) { ... }`                              |
| 响应式     | `unref`                | 获取 ref 或普通值（如果是 ref 返回 `.value`，否则返回自身） | `const val = unref(maybeRef)`                                |
| 生命周期   | `onMounted`            | 组件挂载完成后                                              | `onMounted(() => fetchData())`                               |
| 生命周期   | `onUpdated`            | 组件更新后                                                  | `onUpdated(() => console.log('更新了'))`                     |
| 生命周期   | `onUnmounted`          | 组件卸载前                                                  | `onUnmounted(() => cleanup())`                               |
| 生命周期   | `onBeforeMount`        | 组件挂载前                                                  | `onBeforeMount(() => {})`                                    |
| 生命周期   | `onBeforeUpdate`       | 组件更新前                                                  | `onBeforeUpdate(() => {})`                                   |
| 生命周期   | `onBeforeUnmount`      | 组件卸载前                                                  | `onBeforeUnmount(() => {})`                                  |
| 生命周期   | `onErrorCaptured`      | 捕获子组件错误时                                            | `onErrorCaptured((err) => console.log(err))`                 |
| 生命周期   | `onRenderTracked`      | 渲染依赖被追踪时（开发用）                                  | `onRenderTracked((e) => console.log(e))`                     |
| 生命周期   | `onRenderTriggered`    | 渲染依赖被触发时（开发用）                                  | `onRenderTriggered((e) => console.log(e))`                   |
| 生命周期   | `onActivated`          | 被 `<KeepAlive>` 缓存的组件激活时                           | `onActivated(() => {})`                                      |
| 生命周期   | `onDeactivated`        | 被 `<KeepAlive>` 缓存的组件失活时                           | `onDeactivated(() => {})`                                    |
| 生命周期   | `onServerPrefetch`     | 服务端渲染时（SSR）                                         | `onServerPrefetch(() => fetchData())`                        |
| 工具函数   | `nextTick`             | 等待 DOM 更新后执行                                         | `await nextTick()`                                           |
| 工具函数   | `defineComponent`      | 定义组件（TypeScript 类型推断）                             | `defineComponent({ setup() { ... } })`                       |
| 工具函数   | `defineAsyncComponent` | 定义异步组件                                                | `defineAsyncComponent(() => import('./Comp.vue'))`           |
| 工具函数   | `defineProps`          | 定义组件 props（`<script setup>` 中）                       | `const props = defineProps(['title'])`                       |
| 工具函数   | `defineEmits`          | 定义组件事件（`<script setup>` 中）                         | `const emit = defineEmits(['change'])`                       |
| 工具函数   | `defineExpose`         | 暴露组件属性/方法给父组件                                   | `defineExpose({ reset })`                                    |
| 工具函数   | `defineOptions`        | 定义组件选项（Vue 3.3+）                                    | `defineOptions({ name: 'MyComp' })`                          |
| 工具函数   | `defineSlots`          | 定义插槽类型（Vue 3.3+）                                    | `defineSlots<{ default: () => any }>()`                      |
| 工具函数   | `getCurrentInstance`   | 获取当前组件实例                                            | `const instance = getCurrentInstance()`                      |
| 工具函数   | `useAttrs`             | 获取组件的 `attrs`（非 props 属性）                         | `const attrs = useAttrs()`                                   |
| 工具函数   | `useSlots`             | 获取组件的插槽                                              | `const slots = useSlots()`                                   |
| 渲染函数   | `h`                    | 创建虚拟 DOM 节点                                           | `h('div', { class: 'box' }, '内容')`                         |
| 渲染函数   | `createVNode`          | 创建虚拟 DOM 节点（类似 `h`）                               | `createVNode('div', null, '内容')`                           |
| 渲染函数   | `createBlock`          | 创建块级虚拟节点（内部使用）                                | -                                                            |
| 渲染函数   | `openBlock`            | 打开块（内部使用）                                          | -                                                            |
| Vue 3 新增 | `provide`              | 提供数据给后代组件                                          | `provide('key', value)`                                      |
| Vue 3 新增 | `inject`               | 接收祖先组件提供的数据                                      | `const data = inject('key')`                                 |
| Vue 3 新增 | `createApp`            | 创建 Vue 应用实例                                           | `createApp(App).mount('#app')`                               |
| Vue 3 新增 | `version`              | Vue 版本号                                                  | `console.log(version)`                                       |

### 快速选择指南

| 需求                         | 用什么                  |
| :--------------------------- | :---------------------- |
| 定义单个数据（数字、字符串） | `ref`                   |
| 定义对象/数组                | `reactive` 或 `ref`     |
| 依赖其他数据自动计算         | `computed`              |
| 监听数据变化                 | `watch` / `watchEffect` |
| 组件挂载后执行               | `onMounted`             |
| 组件卸载前清理               | `onUnmounted`           |
| 定义组件的 props             | `defineProps`           |
| 定义组件的事件               | `defineEmits`           |
| 等待 DOM 更新                | `nextTick`              |







```text
h-[1px] 为什么要加 []？


[] 是任意值语法（Arbitrary Values），用于自定义预设列表中没有的尺寸值。


h-4     → 使用预设值，等于 height: 1rem（16px）
h-[1px] → 使用自定义值，等于 height: 1px


为什么需要 []？

Windi/Tailwind 默认只提供固定预设值（如 h-1、h-2、h-4、h-8...）。
如果需要一个 1px 高度的元素，但预设里没有，就用 [] 自定义。


常见使用场景

固定像素值：  w-[100px] h-[50px]
百分比：      w-[33.333%]
计算值：      h-[calc(100vh-100px)]
自定义颜色：  bg-[#ff6600]
负值：        top-[-10px]


总结

[] = 自定义值，不受预设限制
不加 [] → 使用预设值，不存在则无效
```





```text
为什么 span 会渲染出一条横线？


核心原因：
有宽度 + 有高度 + 有背景色 = 可见的横线


具体拆解：
h-[1px]   → 高度 1 像素
w-16      → 宽度 64 像素
bg-gray-200 → 浅灰色背景


关键点：
一个空元素只要有宽、高、背景色，就会在页面上显示为一个色块。
宽 > 高 时，看起来就是一条横线。


补充说明：
span 默认是 inline 元素，不能设置宽高。
但 Windi/Tailwind 的工具类（如 w-16、h-[1px]）会自动处理 display，
让元素表现得像 block 或 inline-block，使宽高生效。


本质：
这不是什么特殊语法，就是 CSS 最基本的原理：
宽高 + 背景色 = 可见元素
```





| CSS 写法                 | Windi/Tailwind 工具类 |
| :----------------------- | :-------------------- |
| `display: flex;`         | `flex`                |
| `display: inline-flex;`  | `inline-flex`         |
| `display: block;`        | `block`               |
| `display: inline-block;` | `inline-block`        |
| `display: none;`         | `hidden`              |
| `display: grid;`         | `grid`                |





### Element Plus 所有响应式属性

| 属性 | 屏幕宽度   | 适用场景 |
| :--- | :--------- | :------- |
| `xs` | `< 768px`  | 手机     |
| `sm` | `≥ 768px`  | 平板     |
| `md` | `≥ 992px`  | 小桌面   |
| `lg` | `≥ 1200px` | 大桌面   |
| `xl` | `≥ 1920px` | 超大屏   |

> **TypeScript（TS）= JavaScript（JS）+ 类型系统（Type System）**

TS 是 JS 的**超集**，所有合法的 JS 代码在 TS 中都能运行。TS 主要是在 JS 的基础上增加了**静态类型检查**。

```text
//TS 新增的关键语法
// 1. 类型注解
let name: string = "张三";
let age: number = 18;
let isActive: boolean = true;

// 2. 接口（定义对象结构）
interface User {
  id: number;
  name: string;
  email?: string;  // ? 表示可选
}

// 3. 类型别名
type ID = string | number;

// 4. 泛型
function identity<T>(value: T): T {
  return value;
}

// 5. 枚举
enum Status {
  Pending,
  Success,
  Error
}
```

| 属性              | 作用                             | 示例                         |
| :---------------- | :------------------------------- | :--------------------------- |
| **无属性**        | 全局样式                         | `<style>`                    |
| `scoped`          | 样式仅作用于当前组件             | `<style scoped>`             |
| `module`          | CSS Modules，生成哈希类名        | `<style module>`             |
| `lang`            | 指定预处理器（scss/less/stylus） | `<style lang="scss">`        |
| `src`             | 从外部文件导入样式               | `<style src="./style.css">`  |
| `scoped` + `lang` | 组合使用                         | `<style scoped lang="scss">` |
| `module` + `lang` | 组合使用                         | `<style module lang="scss">` |

| 对比     | 传统 `setup()`      | `<script setup>` |
| :------- | :------------------ | :--------------- |
| 代码量   | 多（需要 `return`） | 少（自动暴露）   |
| 性能     | 一般                | 更好（编译优化） |
| 推荐度   | 不推荐（Vue 3.2+）  | ✅ **强烈推荐**   |
| 使用场景 | 旧项目维护          | 所有新项目       |





```text
//ref vs 普通变量

<script setup>
import { ref } from 'vue'

// 普通变量：修改后页面不会更新 ❌
let count = 0
const update = () => {
  count++  // 数据变了，但页面不会变
}

// ref 变量：修改后页面自动更新 ✅
const count2 = ref(0)
const update2 = () => {
  count2.value++  // 数据变，页面自动更新
}
</script>
```

```text
为什么写 <hello-world/> 而不是 <HelloWorld/>？


两种写法都可以，Vue 支持组件在模板中使用两种命名方式。


写法对比：
<HelloWorld />   ✅ 大驼峰（PascalCase）
<hello-world />  ✅ 短横线（kebab-case）


为什么 Vue 支持两种写法？
1. HTML 标签名不区分大小写
2. Vue 编译时会自动将大驼峰转换为短横线形式
3. 短横线是 HTML 自定义标签的官方推荐格式


内部转换过程：
HelloWorld.vue → <HelloWorld /> → 编译后 <hello-world /> → 浏览器识别


推荐写法：
<HelloWorld />   ✅ 更推荐，与组件名一致，便于搜索和识别
<hello-world />  ✅ 也可以，更符合 HTML 标准


总结：
大驼峰短横线，Vue 自动互转换
推荐用大驼峰，清晰明了不混淆
```

| 对比项           | `ref`                               | `reactive`                          |
| :--------------- | :---------------------------------- | :---------------------------------- |
| **适用数据类型** | 任意类型（基本类型 + 对象/数组）    | 仅对象（Object、Array、Map、Set）   |
| **访问方式**     | JS 中需要 `.value`                  | 直接访问属性，不需要 `.value`       |
| **模板中使用**   | 自动解包，不需要 `.value`           | 直接使用                            |
| **重新赋值**     | ✅ 可以整体替换（`count.value = 0`） | ❌ 不能整体替换对象，会丢失响应式    |
| **解构**         | ❌ 解构会丢失响应式                  | ❌ 解构会丢失响应式（需用 `toRefs`） |
| **本质**         | 包装对象 `{ value: ... }`           | 直接代理原始对象                    |
| **适用场景**     | 基本类型数据、需要整体替换的数据    | 复杂对象、表单数据                  |







| 属性        | 作用               | 绑定对象     | 示例             |
| :---------- | :----------------- | :----------- | :--------------- |
| **`model`** | 表单的**数据对象** | 表单数据     | `:model="form"`  |
| **`rules`** | 表单的**验证规则** | 验证规则对象 | `:rules="rules"` |

​        <el-form :rules="rules" :model="form" class="w-[250px] flex flex-col items-center justify-center  ">





```text
v-slot 是什么？ prefix 是什么意思？


一、v-slot 是什么？

v-slot 是 Vue 中用于插槽（Slot）的指令，用来向组件内部传递自定义内容。

一句话理解：v-slot 让你可以把内容插入到组件预先留好的"坑位"里。


基本用法：

子组件预留插槽：
<template>
  <div class="card">
    <header>
      <slot name="header"></slot>    ← 名叫 header 的坑位
    </header>
    <main>
      <slot></slot>                  ← 默认插槽（没名字）
    </main>
    <footer>
      <slot name="footer"></slot>    ← 名叫 footer 的坑位
    </footer>
  </div>
</template>

父组件填充插槽：
<template>
  <Card>
    <template #header>              ← #header = v-slot:header
      <h1>这是标题</h1>
    </template>
    
    <p>这是主体内容</p>              ← 默认插槽
    
    <template #footer>              ← #footer = v-slot:footer
      <span>页脚信息</span>
    </template>
  </Card>
</template>


二、prefix 是什么意思？

prefix 是插槽的名字，意思是"前缀"（前面的位置）。

在 Element Plus 中：
<el-input v-model="text">
  <template #prefix>               ← #prefix = v-slot:prefix
    <el-icon><User /></el-icon>    ← 图标显示在输入框前面
  </template>
</el-input>

含义拆解：
prefix = 插槽名称，表示"前面的位置"
#prefix = v-slot:prefix 的简写
效果 = 图标显示在输入框的左侧/前面


常见插槽名：
default   → 默认位置
prefix    → 前缀（前面/左边）
suffix    → 后缀（后面/右边）
header    → 头部（顶部）
footer    → 底部
prepend   → 前置（最前面）
append    → 后置（最后面）


插槽写法对比：
#prefix          = v-slot:prefix        （具名插槽简写）
#default         = v-slot:default       （默认插槽）
<template #header> = v-slot:header      （完整 vs 简写）


# 不是 id！

CSS 中    #app    = id 选择器
Vue 中    #prefix = v-slot 简写（完全不同！）


总结：
v-slot 是填坑指令，prefix 是前缀插槽名
# 号是简写，往组件里塞内容
prefix 放输入框前面，suffix 放后面
```

```text
回调函数是什么？


一、回调函数是什么？

回调函数：把一个函数当作参数传给另一个函数，让它在合适的时机被调用执行。


二、判断哪个是回调函数？

判断标准：看哪个函数是作为参数传进去的。

function1(function2())  
          ↑
    function2 是作为参数传进去的 → 它是回调函数
    function1 接收了函数参数 → 它是高阶函数，不是回调函数


三、角色对照表

函数         是否作为参数传入          角色名称
function1    ❌ 不是（它接收别人）    高阶函数（不是回调函数）
function2    ✅ 是（被传给 function1） 回调函数


四、生活中的比喻

去餐厅吃饭，点完菜后告诉服务员："菜做好了叫我"。

"叫我" = 回调函数（提前告诉服务员怎么通知我）
服务员 = 高阶函数（接收"怎么叫我"这个指令）
菜做好了 = 触发时机（条件满足时执行"叫我"）


五、常见场景示例

// 1. 点击事件
button.addEventListener('click', function() {
  // ↑ 这个匿名函数是回调函数
  console.log('点击了')
})
// ↑ addEventListener 是接收回调的函数（高阶函数）


// 2. 定时器
setTimeout(function() {
  // ↑ 这个函数是回调函数
  console.log('1秒后执行')
}, 1000)
// ↑ setTimeout 是接收回调的函数（高阶函数）


// 3. 数组遍历
[1, 2, 3].forEach(function(item) {
  // ↑ 这个函数是回调函数
  console.log(item)
})
// ↑ forEach 是接收回调的函数（高阶函数）


// 4. Vue 中的生命周期
onMounted(() => {
  // ↑ 这个箭头函数是回调函数
  console.log('组件挂载完成')
})
// ↑ onMounted 是接收回调的函数（高阶函数）


六、记住

被传进去的那个 → 回调函数
接收别人传进来的那个 → 高阶函数（不是回调函数）
```

| 对比              | Element UI               | Element Plus             |
| :---------------- | :----------------------- | :----------------------- |
| **配套 Vue 版本** | Vue 2                    | Vue 3                    |
| **是否官方**      | ✅ 都是饿了么团队官方维护 | ✅ 都是饿了么团队官方维护 |
| **组件**          | 基本一样（70+ 组件）     | 基本一样（70+ 组件）     |
| **API 风格**      | Options API              | Composition API          |
| **TypeScript**    | 有限支持                 | 完整支持                 |
| **目前状态**      | 维护中，不再新增功能     | 活跃开发，主推版本       |

```md
// 1. JavaScript 对象（你的代码里写的）
const rules = {
  username: [
    { required: true, message: '用户名不能为空' }
  ]
}
// ↑ 这是在 JS 代码中直接声明的对象/数组

// 2. JSON 字符串（网络传输用）
const jsonString = '{"username":[{"required":true,"message":"用户名不能为空"}]}'
// ↑ 这是纯文本，用于发送到服务器或从服务器接收

// 3. 转换
JSON.parse(jsonString)   // JSON → JS 对象
JSON.stringify(rules)    // JS 对象 → JSON 字符串

//JS 对象写代码，属性名不加引号；
//JSON 是字符串，属性名必须双引号。
//长得像但不是，一个在代码一个在传输。

```

| 报文类型                 | 方向            | 内容                                      |
| :----------------------- | :-------------- | :---------------------------------------- |
| **请求报文（Request）**  | 浏览器 → 服务器 | 我要什么数据（请求方法、URL、携带的参数） |
| **响应报文（Response）** | 服务器 → 浏览器 | 我给你的数据（状态码、返回的数据）        |

## 国际单位制（SI）词头完整列表（含中文名称）

| 词头   | 符号 | 10的幂次 | 数值                                      | 中文名称   | 中文简称 |
| :----- | :--- | :------- | :---------------------------------------- | :--------- | :------- |
| quecto | q    | 10⁻³⁰    | 0.000…001（30位小数）                     | **亏科托** | 亏       |
| ronto  | r    | 10⁻²⁷    | 0.000…001（27位小数）                     | **柔托**   | 柔       |
| yocto  | y    | 10⁻²⁴    | 0.000…001（24位小数）                     | **幺科托** | 幺       |
| zepto  | z    | 10⁻²¹    | 0.000…001（21位小数）                     | **介普托** | 介       |
| atto   | a    | 10⁻¹⁸    | 0.000…001（18位小数）                     | **阿托**   | 阿       |
| femto  | f    | 10⁻¹⁵    | 0.000…001（15位小数）                     | **飞母托** | 飞       |
| pico   | p    | 10⁻¹²    | 0.000000000001                            | **皮可**   | 皮       |
| nano   | n    | 10⁻⁹     | 0.000000001                               | **纳诺**   | 纳       |
| micro  | μ    | 10⁻⁶     | 0.000001                                  | **微**     | 微       |
| milli  | m    | 10⁻³     | 0.001                                     | **毫**     | 毫       |
| centi  | c    | 10⁻²     | 0.01                                      | **厘**     | 厘       |
| deci   | d    | 10⁻¹     | 0.1                                       | **分**     | 分       |
| —      | —    | 10⁰      | 1                                         | —          | —        |
| deca   | da   | 10¹      | 10                                        | **十**     | 十       |
| hecto  | h    | 10²      | 100                                       | **百**     | 百       |
| kilo   | k    | 10³      | 1,000                                     | **千**     | 千       |
| mega   | M    | 10⁶      | 1,000,000                                 | **兆**     | 兆       |
| giga   | G    | 10⁹      | 1,000,000,000                             | **吉**     | 吉       |
| tera   | T    | 10¹²     | 1,000,000,000,000                         | **太**     | 太       |
| peta   | P    | 10¹⁵     | 1,000,000,000,000,000                     | **拍**     | 拍       |
| exa    | E    | 10¹⁸     | 1,000,000,000,000,000,000                 | **艾**     | 艾       |
| zetta  | Z    | 10²¹     | 1,000,000,000,000,000,000,000             | **泽**     | 泽       |
| yotta  | Y    | 10²⁴     | 1,000,000,000,000,000,000,000,000         | **尧**     | 尧       |
| ronna  | R    | 10²⁷     | 1,000,000,000,000,000,000,000,000,000     | **柔**     | 柔       |
| quetta | Q    | 10³⁰     | 1,000,000,000,000,000,000,000,000,000,000 | **亏**     | 亏       |

**# 在文档里是分隔符，表示“的”；**
**axios#request 就是“axios 的 request 方法”**





**前端 → 后端** 叫**请求（Request）**，**后端 → 前端** 叫**响应（Response）**。所有 HTTP 通信都是这个模式：前端先“问”，后端再“答”。





**GET 和 POST 都是前端→后端的请求，只是 GET 把数据放在 URL 里，POST 把数据放在请求体（body）里。**

| 对比         | **GET**                    | **POST**               |
| :----------- | :------------------------- | :--------------------- |
| 数据放哪里？ | **URL 地址里**（查询参数） | **请求体（body）里**   |
| 数据可见性   | 网址上直接能看到           | 不在网址上，在请求体里 |
| 数据长度限制 | 有限制（URL 长度限制）     | 无限制                 |
| 典型用途     | 获取数据、查询             | 提交数据、登录、注册   |





前端把数据**发送给**后端，用各种 HTTP 方法：

| 方法       | 作用             | 数据放哪 | 示例                                           |
| :--------- | :--------------- | :------- | :--------------------------------------------- |
| **GET**    | 获取数据         | URL 上   | `axios.get('/users')`                          |
| **POST**   | 提交数据         | 请求体   | `axios.post('/login', { username, password })` |
| **PUT**    | 更新数据（全部） | 请求体   | `axios.put('/user/1', { name: '李四' })`       |
| **PATCH**  | 更新数据（部分） | 请求体   | `axios.patch('/user/1', { age: 18 })`          |
| **DELETE** | 删除数据         | URL 上   | `axios.delete('/user/1')`                      |



```text
1. 用户在浏览器输入用户名密码，点击登录
                    ↓
2. 前端（浏览器）  ── POST /login 请求 ──→  后端（服务器）
                    携带 { username, password }
                    ↓
3. 后端验证用户名密码，生成 token
                    ↓
4. 后端（服务器）  ── 响应 { code: 200, token: 'xxx' } ──→  前端（浏览器）
                    ↓
5. 前端收到响应，把 token 存起来，跳转到首页
                    ↓
6. 用户看到登录成功 ✅
```

前后端通信

```text
前端 → 后端 vs 后端 → 前端


前端 → 后端 = 请求（Request）
后端 → 前端 = 响应（Response）

所有 HTTP 通信都是这个模式：前端先“问”，后端再“答”。


一句话理解：
前端 → 后端 = 发请求（问）
后端 → 前端 = 返回响应（答）


完整流程：
前端（浏览器） ── 请求（Request）──> 后端（服务器）
       ↑                              │
       └── 响应（Response）───────────┘


一、前端 → 后端（请求 Request）

前端把数据发送给后端，用各种 HTTP 方法：

GET     → 获取数据     → 数据放 URL 上      → axios.get('/users')
POST    → 提交数据     → 数据放请求体       → axios.post('/login', { username, password })
PUT     → 更新全部数据  → 数据放请求体       → axios.put('/user/1', { name: '李四' })
PATCH   → 更新部分数据  → 数据放请求体       → axios.patch('/user/1', { age: 18 })
DELETE  → 删除数据     → 数据放 URL 上      → axios.delete('/user/1')


二、后端 → 前端（响应 Response）

后端处理完请求后，把结果返回给前端：

{
  code: 200,           // 状态码
  message: '登录成功',  // 消息
  data: {              // 实际数据
    token: 'xxx',
    user: { id: 1, name: '张三' }
  }
}


后端返回数据的写法（Node.js 示例）：
app.post('/api/login', (req, res) => {
  const { username, password } = req.body
  
  if (username === 'admin' && password === '123') {
    res.json({ code: 200, message: '登录成功', data: { token: 'xxx' } })
  } else {
    res.json({ code: 401, message: '用户名或密码错误' })
  }
})


前端如何处理后端的响应：
const handleLogin = async () => {
  try {
    const response = await axios.post('/api/login', {
      username: 'admin',
      password: '123'
    })
    
    console.log(response.data)  // 后端返回的数据
    
    if (response.data.code === 200) {
      const token = response.data.data.token
      localStorage.setItem('token', token)
    }
  } catch (error) {
    console.error('请求失败', error)
  }
}


完整的请求-响应流程：
1. 用户输入用户名密码，点击登录
2. 前端 → 后端：POST /login 请求，携带 { username, password }
3. 后端验证用户名密码，生成 token
4. 后端 → 前端：响应 { code: 200, token: 'xxx' }
5. 前端收到响应，把 token 存起来，跳转到首页
6. 用户看到登录成功


总结表：
方向           名称      英文       数据方向       谁发起
前端 → 后端    请求      Request   发送数据       前端（主动）
后端 → 前端    响应      Response  返回数据       后端（被动回应）


记忆口诀：
前端发请求（Request），后端回响应（Response）
问的是请求，答的是响应
方向是相反的，顺序是先问后答
```









```javascript
//回调函数

// ============================================================
// 示例1：生活场景 - 妈妈叫你吃饭
// ============================================================

// 你交代的"叫我吃饭"这个动作（回调函数）
function 叫我吃饭() {
  console.log("👩‍🍳 妈妈：吃饭啦！")
  console.log("🧑 你：来了来了！")
}

// 妈妈这个函数，接收一个回调函数作为参数
function 妈妈(回调函数) {
  console.log("开始做饭...")
  
  // 模拟做饭需要5秒
  setTimeout(() => {
    console.log("饭做好了！")
    回调函数()  // ← 执行你交代的事：叫你吃饭
  }, 5000)
}

// 调用：把"叫我吃饭"这个函数传给"妈妈"
妈妈(叫我吃饭)


// ============================================================
// 示例2：数组遍历 - forEach 回调
// ============================================================

const numbers = [1, 2, 3]

// forEach 接收一个回调函数，对数组每个元素执行一次
numbers.forEach(function(item) {
  console.log(item)
})

// 也可以写成箭头函数（更简洁）
numbers.forEach((item) => {
  console.log(item)
})


// ============================================================
// 示例3：DOM 点击事件 - 浏览器中最常见
// ============================================================

// 获取按钮
const btn = document.getElementById('myBtn')

// 添加点击事件，传入回调函数
// 只有用户点击按钮时，这个函数才会执行
btn.addEventListener('click', function() {
  alert('按钮被点击了！')
})

// 也可以用箭头函数
btn.addEventListener('click', () => {
  alert('按钮被点击了！')
})
```







跨域 请求后端api

````text
Vite 代理配置 server.proxy


这个配置是 Vite 开发服务器的代理配置，用来解决前后端分离开发时的跨域问题。


配置代码：
server: {
  server:{
    proxy:{
      '/api': {
        target: 'http://ceshi13.dishait.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
}


配置拆解：
'/api'        → 拦截所有以 /api 开头的请求
target        → 转发到目标服务器地址
changeOrigin  → 把请求头的 Origin 改成目标服务器地址（避免被后端拒绝）
rewrite       → 把路径中的 /api 去掉
```javascript
    server: {
    	proxy:{
          '/api': {                      // ① 匹配以 /api 开头的请求
            target: 'http://ceshi13.dishait.cn',  // ② 转发到目标服务器
            changeOrigin: true,          // ③ 修改请求头中的 Origin
            rewrite: (path) => path.replace(/^\/api/, ''),  // ④ 重写路径
          },
      }
    }
```


实际转发过程：
前端请求：/api/users
    ↓
Vite 代理拦截（匹配 /api）
    ↓
重写路径：去掉 /api → /users
    ↓
转发到：http://ceshi13.dishait.cn/users


为什么需要这个配置？
跨域问题：浏览器限制前端（localhost:5173）直接请求不同域名（ceshi13.dishait.cn）的接口
代理解决：Vite 开发服务器作为"中间人"，前端请求 Vite，Vite 再请求后端，没有跨域限制


请求流程图：
浏览器（前端） → Vite 开发服务器 → 后端服务器
localhost:5173  →  localhost:5173  →  ceshi13.dishait.cn
GET /api/users     代理转发          GET /users


总结：
作用：解决开发时的跨域问题
做了什么：把 /api/xxx 转发到 http://ceshi13.dishait.cn/xxx
生产环境需要吗：不需要，由 Nginx 或后端处理


记忆口诀：
/api 请求被拦截，转发到目标服务器
去掉前缀改路径，跨域问题被解决
````

### 正则表达式拆解

```javascript
/^\/api/
```

| 符号  | 含义                       |
| :---- | :------------------------- |
| `/`   | 正则表达式的开始和结束标记 |
| `^`   | 匹配字符串的**开头**       |
| `\/`  | 匹配斜杠 `/`（需要转义）   |
| `api` | 匹配字符串 `api`           |

**合起来：匹配以 `/api` 开头的路径。**

| 原始路径 `path`    | 匹配结果           | 替换后      |
| :----------------- | :----------------- | :---------- |
| `/api/users`       | ✅ 以 `/api` 开头   | `/users`    |
| `/api/products`    | ✅ 以 `/api` 开头   | `/products` |
| `/api/login`       | ✅ 以 `/api` 开头   | `/login`    |
| `/static/logo.png` | ❌ 不以 `/api` 开头 | 不替换      |











#### HTML / CSS / JS 里的 `type` 是什么意思？

------

### 一、HTML 中

#### 1. `<input>` 标签的 `type`

定义输入框的类型，决定输入框显示什么控件。

| `type` 值    | 效果                         |
| ------------ | ---------------------------- |
| `"text"`     | 普通文本输入框（默认）       |
| `"password"` | 密码框（输入内容显示为圆点） |
| `"email"`    | 邮箱输入框                   |
| `"number"`   | 数字输入框                   |
| `"checkbox"` | 复选框                       |
| `"radio"`    | 单选框                       |
| `"file"`     | 文件上传                     |
| `"date"`     | 日期选择器                   |
| `"submit"`   | 提交按钮                     |
| `"button"`   | 普通按钮                     |
| `"hidden"`   | 隐藏字段                     |
| `"color"`    | 颜色选择器                   |
| `"range"`    | 滑块                         |

```html
<input type="text" placeholder="用户名">
<input type="password" placeholder="密码">
<input type="email" placeholder="邮箱">
<input type="checkbox"> 记住密码
<input type="file">
<input type="date">
<input type="color">
<input type="submit" value="提交">
```

#### 2. `<button>` 标签的 `type`

定义按钮的行为。

| `type` 值  | 作用                 |
| ---------- | -------------------- |
| `"submit"` | 提交表单             |
| `"reset"`  | 重置表单             |
| `"button"` | 普通按钮，无默认行为 |

```html
<form>
  <input type="text">

  <button type="submit">提交</button>
  <button type="reset">重置</button>
  <button type="button">普通按钮</button>
</form>
```

#### 3. `<script>` 标签的 `type`

定义脚本的类型。

| `type` 值           | 说明                            |
| ------------------- | ------------------------------- |
| `"text/javascript"` | JavaScript，默认可以省略        |
| `"text/babel"`      | Babel 编译的 JavaScript         |
| `"text/typescript"` | TypeScript，需经过编译          |
| `"module"`          | ES Module，支持 `import/export` |

```html
<!-- 普通 JavaScript -->
<script>
  console.log('hello')
</script>

<!-- ES Module -->
<script type="module">
  import { foo } from './utils.js'
</script>
```

#### 4. `<link>` 标签的 `type`

定义链接资源的 MIME 类型。

| `type` 值     | 说明       |
| ------------- | ---------- |
| `"text/css"`  | CSS 样式表 |
| `"image/png"` | PNG 图片   |

```html
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="icon" type="image/png" href="favicon.png">
```

#### 5. `<style>` 标签的 `type`

定义样式类型，现在基本不用写，因为默认就是 CSS。

| `type` 值    | 说明     |
| ------------ | -------- |
| `"text/css"` | CSS 样式 |

```html
<style type="text/css">
  body {
    color: red;
  }
</style>
```

------

### 二、CSS 中

#### `type` 在 CSS 中是什么？

CSS 本身没有 `type` 属性，但可以通过**属性选择器**根据 HTML 元素的 `type` 属性来选择元素。

| 写法                     | 作用           |
| ------------------------ | -------------- |
| `input[type="text"]`     | 选择文本输入框 |
| `input[type="password"]` | 选择密码框     |
| `input[type="checkbox"]` | 选择复选框     |

```css
/* 选择 type="password" 的 input */
input[type="password"] {
  background: yellow;
}

/* 选择 type="checkbox" 的 input */
input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
```

------

### 三、JavaScript 中

#### `typeof` 运算符

JavaScript 中不是用 `type`，而是用 `typeof` 来检查数据类型。

| 写法                  | 返回结果      |
| --------------------- | ------------- |
| `typeof 42`           | `"number"`    |
| `typeof 'hello'`      | `"string"`    |
| `typeof true`         | `"boolean"`   |
| `typeof undefined`    | `"undefined"` |
| `typeof null`         | `"object"`    |
| `typeof {}`           | `"object"`    |
| `typeof []`           | `"object"`    |
| `typeof function(){}` | `"function"`  |

```javascript
typeof 42
typeof 'hello'
typeof true
typeof undefined
typeof null
typeof {}
typeof []
typeof function(){}
```

#### 对象的 `type` 属性

JavaScript 对象也可以自己定义 `type` 属性。

| 写法                  | 含义                     |
| --------------------- | ------------------------ |
| `user.type`           | 获取对象中的 `type` 属性 |
| `user.type = 'admin'` | 修改对象中的 `type` 属性 |

```javascript
const user = {
  name: '张三',
  type: 'admin',
  age: 18
}

console.log(user.type)  // 'admin'
```

------

### 四、总结

| 位置        | 写法                      | 含义                     |
| ----------- | ------------------------- | ------------------------ |
| HTML 输入框 | `<input type="password">` | 输入框的类型             |
| HTML 按钮   | `<button type="submit">`  | 按钮的行为               |
| HTML 脚本   | `<script type="module">`  | 脚本的类型               |
| HTML 链接   | `<link type="text/css">`  | 资源的类型               |
| CSS         | `input[type="password"]`  | 根据 `type` 属性选择元素 |
| JavaScript  | `typeof 42`               | 检查数据类型             |
| JavaScript  | `obj.type`                | 对象的 `type` 属性       |

------

### 记忆口诀

> **HTML：type 决定控件类型或行为**
> **CSS：type 用来选择元素**
> **JS：typeof 用来判断数据类型**









```text
<!-- 1. 跳转到另一个页面 -->
<a href="about.html">关于我们</a>

<!-- 2. 跳转到外部网站 -->
<a href="https://www.baidu.com">去百度</a>

<!-- 3. 跳转到页面内的某个锚点 -->
<a href="#section1">跳转到第1节</a>
<!-- 目标位置 -->
<h2 id="section1">第1节</h2>

<!-- 4. 跳转到顶部 -->
<a href="#top">回到顶部</a>

<!-- 5. 发送邮件 -->
<a href="mailto:admin@example.com">发邮件给我们</a>

<!-- 6. 拨打电话（移动端） -->
<a href="tel:13800138000">打电话</a>

<!-- 7. 新窗口打开 -->
<a href="https://example.com" target="_blank">新窗口打开</a>

<!-- 8. 下载文件 -->
<a href="file.pdf" download>下载PDF</a>

<!-- 9. 执行 JavaScript -->
<a href="javascript:alert('点击了')">点击弹出提示</a>

<!-- 10. 什么都不做（占位） -->
<a href="javascript:void(0)">占位链接</a>
```

| 属性                  | 作用                       |
| :-------------------- | :------------------------- |
| `target="_blank"`     | 在新窗口或新标签页打开链接 |
| `target="_self"`      | 在当前窗口打开（默认）     |
| `target="_parent"`    | 在父级框架打开             |
| `target="_top"`       | 在顶层框架打开             |
| `target="自定义名称"` | 在指定名称的窗口打开       |

```html
<!-- 点击后在新标签页打开百度 -->
<a href="https://www.baidu.com" target="_blank">去百度（新窗口）</a>

<!-- 点击后在当前窗口打开（默认行为） -->
<a href="https://www.baidu.com">去百度（当前窗口）</a>

<!-- 点击后在整个页面窗口打开（用于跳出 iframe） -->
<a href="https://www.baidu.com" target="_top">去百度（顶层）</a>
```

| 属性                  | 作用                                         |
| :-------------------- | :------------------------------------------- |
| `download`            | 让浏览器**下载**链接指向的文件，而不是打开它 |
| `download="新文件名"` | 下载时重命名文件                             |

```html
<!-- 下载文件，保持原文件名 -->
<a href="file.pdf" download>下载PDF</a>

<!-- 下载文件，并重命名为 "报告.pdf" -->
<a href="file.pdf" download="报告.pdf">下载PDF</a>

<!-- 下载图片 -->
<a href="photo.jpg" download>下载图片</a>

<!-- 强制下载，而不是在浏览器中打开 -->
<a href="https://example.com/photo.jpg" download>下载图片</a>
```

```text
下载：服务器 → 本地（用 <a download>）
上传：本地 → 服务器（用 <input type="file"> + axios/fetch/表单）
```







| 方法                       | 作用                       | 示例                    |
| :------------------------- | :------------------------- | :---------------------- |
| `router.push('/home')`     | **跳转**到新页面（入栈）   | 从 A → B                |
| `router.replace('/login')` | **替换**当前页面（不入栈） | 从 A 换成 B，不能返回 A |
| `router.back()`            | **后退**一步（出栈）       | 从 B 回到 A             |
| `router.go(-1)`            | **后退**一步               | 同 `back()`             |
| `router.go(-2)`            | **后退**两步               | 从 C 回到 A             |

```javascript
// 你的代码
const cookie = useCookies()
// 可以操作所有 Cookie，包括 token、locale、userInfo 等

// 但如果你只需要操作 locale
const cookies = useCookies(['locale'])
// 更精确，只操作 locale，代码意图更清晰
```







**拦截器（Interceptor）就像是快递的“中转站”或“安检口”——在请求发送前和响应返回后，统一做预处理。**



| 类型           | 触发时机       | 常用场景                             |
| :------------- | :------------- | :----------------------------------- |
| **请求拦截器** | 请求**发出前** | 加 token、显示 loading               |
| **响应拦截器** | 响应**回来后** | 处理错误、隐藏 loading、统一数据格式 |

```text
┌─────────────────────────────────────────────────────────┐
│                     前端发请求                         │
└─────────────────────┬───────────────────────────────────┘
                      ↓
         ┌─────────────────────────┐
         │   请求拦截器（发之前）    │  ← 统一加 token、显示 loading
         └─────────────────────────┘
                      ↓
         ┌─────────────────────────┐
         │     发送请求到后端        │
         └─────────────────────────┘
                      ↓
         ┌─────────────────────────┐
         │     后端返回响应          │
         └─────────────────────────┘
                      ↓
         ┌─────────────────────────┐
         │   响应拦截器（回来后）    │  ← 隐藏 loading、统一处理错误
         └─────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────────┐
│                     页面拿到数据                        │
└─────────────────────────────────────────────────────────┘
```

