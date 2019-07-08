# vue-cli-module (基于vue-router,vuex,babel,css预处理器创建的模板，无ESLint,已安装axios,qs)

## 下载该项目的模块依赖包
```
npm install
```

### 启动vue-cli3的服务
```
npm run serve
```

### 将项目进行打包，并发布
```
npm run build
```

### 启动单元测试
```
npm run test
```

### 启用esLint进行代码审查
```
npm run lint
```
### 项目目录结构
```
├── public                     // 构建相关
│   ├── favicon.ico            // 项目图标
│   ├── index.html             // 模板html
├── src                        // 源代码
│   ├── assets                 // 图片,等静态资源
│   ├── components             // 全局公用组件
│   ├── store                  // vuex仓库
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局共有方法
│   ├── views                  // 页面书写处
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   ├── router.js              // 路由配置
├── .browserslistrc            // 浏览器兼容性的配置
├── .gitignore                 // git 忽略项
├── .babel.config.js           // 使用babel代码转码器时的配置
├── package-lock.json          // 项目所依赖项的详细信息
├── package.json               // package.json
├── postcss.config.js          // Autoprefixer插件的配置,该插件可以自动添加各大浏览器产商的前缀
├── README.md                  // 项目自述文件
└── vue.config.js              // 项目打包配置
```
