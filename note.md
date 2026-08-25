



[Overview 组件总览 | Element Plus](https://element-plus.org/zh-CN/component/overview)

[安装 | Element Plus](https://element-plus.org/zh-CN/guide/installation.html#使用包管理器)





https://windicss.org

[Home | Windi CSS](https://cn.windicss.org/)





[Configuring Vite | Vite](https://vite.dev/config/)



```text
npm install @element-plus/icons-vue

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

