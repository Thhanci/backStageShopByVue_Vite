[Overview 组件总览 | Element Plus](https://element-plus.org/zh-CN/component/overview)

[安装 | Element Plus](https://element-plus.org/zh-CN/guide/installation.html#使用包管理器)





https://windicss.org

[Home | Windi CSS](https://cn.windicss.org/)





[Configuring Vite | Vite](https://vite.dev/config/)







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