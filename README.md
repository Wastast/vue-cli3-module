## vue-cli-module (基于 vue-router,vuex,babel,css 预处理器创建的模板)

### 已下载的模块包

- **axios** 进行了基础的拦截器配置
- **qs** axios 发送 post 请求所需要的序列化数据
- **vuescroll** 基于 vue 所使用的滚动条插件,详细配置参考[官网](https://vuescrolljs.yvescoding.org/zh/guide/)
- **babel-polyfill** 更好的兼容浏览器版本,详细配置参考[babel 官网](https://www.babeljs.cn/docs/babel-polyfill)
- **ESlint** [配置参考](https://cloud.tencent.com/developer/chapter/12618)
- **Prettierrc** [配置参考](https://prettier.io/docs/en/options.html)

### 下载该项目的模块依赖包

```js
npm install
```

### 启动 vue-cli3 的服务

```js
npm run serve
```

### 将项目进行打包，并发布

```js
npm run build
```

### 启用 esLint 进行代码审查

```js
npm run lint
```

### 项目目录结构

```js
├── public                     // 构建相关
│   ├── favicon.ico            // 项目图标
│   ├── index.html             // 模板html
├── src                        // 源代码
│   ├── assets                 // 图片,等静态资源
│   ├── components             // 全局公用组件
│   ├── api                    // 请求资源文件夹
│   ├── ├── http.js            // axios的请求配置，请求拦截器，响应拦截器等
│   ├── store                  // vuex仓库
│   ├── ├── modules            // vuex仓库数据存放地址，可以根据板块需要自行分文件存储
│   ├── ├── index.js           // vuex仓库入口文件，收集modules中的文件数据进行整合
│   ├── ├── getters.js         // 对modules中的数据进行一个计算属性式的监听，state.文件名.属性名的方式可以访问到数据
│   ├── styles                 // 全局样式
│   ├── ├── reset.css          // 全局重置样式
│   ├── ├── index.scss         // 全局scss文件入口
│   ├── router                 // 路由配置
│   ├── mixin                  // 全局混入mixin
│   ├── filter                 // vue过滤数据
│   ├── ├── modules            // 全局过滤器存放地址，可以根据板块需要自行分文件存储
│   ├── ├── index.js           // 全局过滤器入口文件
│   ├── icons                  // 文字图标导入处
│   ├── ├── iconfont           // iconfont 文字图标存放地
│   ├── utils                  // 全局js
│   ├── ├── auth.js            // 用户授权js, getToken,setToken,removeToken
│   ├── ├── esresize.js        // echarts自适应js, 缩小浏览器时，echarts图标自适应
│   ├── ├── event-bus.js       // vue 事件总线js
│   ├── ├── variables.js       // 该js的用处在于，将 globle 对象中的变量进行导出,导出为全局变量
│   ├── views                  // 页面书写处
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   ├── permission.js          // 检测用户是否登录，以及token,全局路由守卫配置
├── .gitignore                 // git 忽略项
├── .browserslistrc            // 浏览器兼容的配置
├── .babel.config.js           // 使用babel代码转码器时的配置
├── .env.development           // 开发环境请求路径配置
├── .env.production            // 生产环境请求路径配置
├── .eslintrc                  // eslint的配置文件
├── .editorconfig              // 简单的编码规范设置
├── .prettierrc.js             // 项目代码格式化规范
├── package-lock.json          // 项目所依赖项的详细信息
├── package.json               // package.json
├── README.md                  // 项目自述文件
└── vue.config.js              // 项目打包配置
```
