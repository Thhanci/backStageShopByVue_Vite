```text
前端开发面试题：20个常见问题及参考答案

一、JavaScript

1. JavaScript 中 var、let、const 有什么区别？

参考答案：

主要有三个区别：

1. var 存在变量提升，可以重复声明。
2. let 和 const 不能重复声明，并且存在暂时性死区。
3. const 声明的变量不能重新赋值，let 可以。

例如：

let a = 10
a = 20

const b = 10
// b = 20 // 报错

实际开发中一般优先使用 const，需要重新赋值时使用 let，尽量少使用 var。


2. 什么是闭包？你在什么情况下使用过？

参考答案：

闭包就是一个函数能够访问它外部函数作用域中的变量，即使外部函数已经执行结束。

例如：

function outer() {
    let count = 0

    return function () {
        count++
        return count
    }
}

const fn = outer()

console.log(fn()) // 1
console.log(fn()) // 2

这里内部函数一直可以访问 count，所以形成了闭包。

闭包常见的用途有：

- 保存变量
- 实现数据私有
- 防抖和节流
- 柯里化等


3. 什么是 Promise？为什么要使用 Promise？

参考答案：

Promise 是 JavaScript 中处理异步操作的一种方式。

它有三种状态：

- pending：进行中
- fulfilled：成功
- rejected：失败

相比传统的多层回调，Promise 可以让异步代码更加清晰，也方便统一处理成功和失败。

例如：

axios.get('/user')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })


4. async/await 和 Promise 是什么关系？

参考答案：

async/await 是建立在 Promise 之上的语法糖。

Promise 可以使用：

axios.get('/user')
    .then(res => {
        console.log(res)
    })

使用 async/await 后可以写成：

async function getUser() {
    try {
        const res = await axios.get('/user')
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

这样写起来更接近同步代码，可读性比较好。


二、Vue

5. Vue 3 中 ref 和 reactive 有什么区别？

参考答案：

ref 和 reactive 都可以实现响应式。

ref 一般适合基本数据类型，也可以存对象：

const count = ref(0)

count.value++

reactive 一般用于对象：

const user = reactive({
    name: '张三',
    age: 20
})

最大的区别是：

ref 访问和修改数据通常需要 .value，而 reactive 不需要。


6. Vue 中父组件和子组件怎么传递数据？

参考答案：

主要有两种：

父传子：使用 props

<Child :name="name" />

子组件：

const props = defineProps({
    name: String
})

子传父：使用 emit

子组件：

const emit = defineEmits(['change'])

emit('change', 'hello')

父组件监听：

<Child @change="handleChange" />

所以可以简单理解：

props：父传子
emit：子传父


7. Vue Router 是干什么的？你项目中为什么使用它？

参考答案：

Vue Router 是 Vue 官方的路由管理工具。

主要作用是实现单页面应用中的页面切换。

例如：

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    }
]

我的商城后台项目中需要登录页、首页等多个页面，所以使用 Vue Router 管理不同 URL 对应的组件。


8. Vue 项目中为什么需要 Axios？

参考答案：

Axios 是一个 HTTP 请求库，主要用于前端和后端进行数据通信。

比如登录：

axios.post('/login', {
    username: 'admin',
    password: '123456'
})

后端处理之后返回结果，前端再根据结果进行页面跳转或者提示。

我的项目中就是通过 Axios 完成前后端数据通信。


9. Vue 项目中什么是路由守卫？有什么作用？

参考答案：

路由守卫就是在进入某个路由之前进行判断。

比如后台管理系统中，用户没有登录，就不能直接访问首页。

可以判断 Cookie 或 Token：

router.beforeEach((to, from, next) => {
    const token = getToken()

    if (to.path !== '/login' && !token) {
        next('/login')
    } else {
        next()
    }
})

主要用于：

- 登录验证
- 权限控制
- 页面跳转控制

我的项目中使用 JWT 和 Cookie 实现身份认证和权限拦截。


三、HTTP / 网络

10. HTTP 和 HTTPS 有什么区别？

参考答案：

最大的区别是：

HTTPS = HTTP + SSL/TLS 加密。

HTTP 传输的数据没有经过加密，存在被窃取或者篡改的风险。

HTTPS 会对通信内容进行加密，并且可以验证服务器身份，所以安全性更高。

例如登录时，如果直接使用 HTTP，用户名和密码存在被窃取的风险。


11. 常见的 HTTP 状态码有哪些？

参考答案：

比较常见的有：

200：请求成功

301 / 302：重定向

400：请求参数错误

401：没有认证 / 未登录

403：没有权限

404：资源不存在

500：服务器内部错误

面试中如果问到 401 和 403 的区别，可以重点说：

401 一般表示没有通过身份认证；
403 表示身份可能已经认证，但没有访问权限。


12. 什么是跨域？前端一般怎么解决？

参考答案：

跨域是浏览器的同源策略导致的。

当：

协议
域名
端口

三个有一个不一样，就可能产生跨域问题。

常见解决方式：

1. CORS
2. 开发环境代理
3. JSONP（现在主要用于了解）

实际开发中比较常见的是后端配置 CORS，或者前端开发环境配置代理。


四、Java / 后端

13. 你简历里写了了解 Spring Boot，你能简单介绍一下 Spring Boot 吗？

参考答案：

Spring Boot 是基于 Spring 的快速开发框架。

它主要帮助我们：

- 快速创建 Spring 项目
- 自动配置
- 简化依赖配置
- 内置服务器
- 快速开发 RESTful API

我做过一个基于 Spring Boot 的美食网站后端服务，主要使用 Spring Boot 提供 API 接口，并结合 MySQL 实现数据存储。


14. 什么是 MVC？什么是三层架构？

参考答案：

MVC 可以理解为：

M：Model，数据模型
V：View，视图
C：Controller，控制器

三层架构一般是：

Controller
    ↓
Service
    ↓
Mapper / DAO
    ↓
Database

Controller 负责接收请求，Service 负责业务逻辑，Mapper/DAO 负责数据库操作。

我在美食网站后端项目中采用了 MVC 设计模式和三层架构。


15. 什么是 RESTful API？

参考答案：

RESTful API 是一种 API 设计风格，通常使用 HTTP 请求方法表示不同操作。

例如：

GET    /users       查询用户
POST   /users       创建用户
PUT    /users/1     修改用户
DELETE /users/1     删除用户

这样设计以后，接口的含义比较清晰。


五、MySQL / Redis

16. MySQL 中 WHERE 和 HAVING 有什么区别？

参考答案：

WHERE 是在分组之前进行过滤。

HAVING 是在分组之后进行过滤。

例如：

SELECT department, COUNT(*)
FROM employee
WHERE age > 20
GROUP BY department
HAVING COUNT(*) > 5;

这里：

WHERE：先过滤年龄
GROUP BY：进行分组
HAVING：再过滤分组结果


17. MySQL 中什么是索引？为什么使用索引？

参考答案：

索引可以理解成数据库中的“目录”。

如果一张表有很多数据，没有索引的时候，查询可能需要扫描大量数据。

建立索引以后，可以更快找到对应的数据。

例如：

CREATE INDEX idx_username
ON user(username);

但是索引也不是越多越好，因为索引会占用空间，而且增加、修改数据时也需要维护索引。


18. Redis 是干什么的？和 MySQL 有什么区别？

参考答案：

Redis 是一个基于内存的高性能键值数据库。

它的特点是：

- 速度快
- 支持多种数据结构
- 常用于缓存
- 也可以用于计数、排行榜、Session 等场景

MySQL 主要用于持久化存储业务数据。

可以简单理解：

MySQL：主要负责长期保存数据

Redis：主要负责快速读取数据、缓存数据

例如查询商品信息时，可以先查询 Redis，如果 Redis 没有，再查询 MySQL，然后把结果放入 Redis。


六、项目 / 实习经历

19. 你详细介绍一下你的 Vue3 商城后台项目，你主要负责了什么？

参考答案：

这个项目是一个基于 Vue 3 和 Vite 的商城后台管理项目。

主要使用了：

Vue 3
Vite
Vue Router
Vuex
Element Plus
Axios
WindiCSS
JWT
Cookie

其中 Vue Router 负责路由管理，Vuex 负责全局状态管理，Element Plus 负责 UI 组件，Axios 负责前后端通信。

登录认证方面使用 JWT 和 Cookie，并通过路由拦截实现权限控制。

这个项目主要让我熟悉了 Vue 项目的完整开发流程，包括页面开发、路由管理、状态管理、接口请求以及登录认证。


20. 你实习期间遇到过什么问题？是怎么解决的？

参考答案：

实习期间主要负责操作系统的基础功能测试和兼容性测试。

比如在不同硬件环境进行测试时，如果出现设备识别或者驱动加载异常，我会先按照测试步骤复现问题，然后记录具体的测试环境、操作步骤和异常现象，再反馈给相关人员。

问题修复之后，我会重新进行回归测试，确认问题是否真正解决。

通过这段实习，我比较深刻地认识到测试不仅仅是发现问题，还需要准确复现、记录、反馈以及验证问题修复结果。


七、面试官可能继续追问的问题

1. 你说你掌握 Vue3，那 Vue3 为什么比 Vue2 好？

至少需要准备：

Composition API
Proxy 响应式
更好的逻辑复用
更好的 TypeScript 支持


2. 你项目里的 JWT 是怎么实现登录的？

需要能讲清：

用户登录
 ↓
后端验证账号密码
 ↓
生成 JWT
 ↓
返回给前端
 ↓
前端保存 Token
 ↓
后续请求携带 Token
 ↓
后端验证 Token
 ↓
允许访问


3. Cookie 和 JWT 是一回事吗？

不是。

JWT 是一种身份凭证 / Token 格式。

Cookie 是浏览器保存和发送数据的一种机制。

JWT 可以放在 Cookie 里面。


4. Vuex 是干什么的？

一句话：

Vuex 用于集中管理多个组件需要共享的状态。

例如：

用户信息
登录状态
Token
购物车信息


5. 你的项目是你自己写的吗？有没有遇到过不会的问题？

参考答案：

项目过程中肯定会遇到一些自己不熟悉的问题，我一般会先根据报错信息自己分析和定位，然后查官方文档或者搜索资料，最后通过实际测试验证解决方案。

这个过程也让我对 Vue、Axios、路由和前后端交互有了更深入的理解。


八、面试重点

如果准备的是前端开发岗，建议重点复习：

1. JavaScript
   - var、let、const
   - 暂时性死区
   - 闭包
   - Promise
   - async/await
   - 防抖
   - 节流

2. Vue3
   - ref
   - reactive
   - props
   - emit
   - computed
   - watch
   - 生命周期
   - Vue Router
   - Vuex

3. 网络
   - HTTP / HTTPS
   - HTTP 状态码
   - Cookie
   - JWT
   - 跨域
   - Axios

4. 后端基础
   - Spring Boot
   - MVC
   - 三层架构
   - RESTful API

5. 数据库
   - MySQL
   - SQL
   - WHERE / HAVING
   - 索引
   - Redis

6. 项目
   - Vue3 商城后台
   - Spring Boot 美食网站
   - 登录认证
   - JWT + Cookie
   - 前后端交互
   - 项目中遇到的问题及解决方法
```

