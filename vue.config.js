const path = require('path')
module.exports = {
  // 打包后文件的引用路径
  publicPath: './',
  // webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'assets': path.resolve('src/assets'),  // 配置静态资源请求路径
        'css': path.resolve('src/styles'),  // 配置全局css请求路径
        'api': path.resolve('src/api'), // 配置请求接口的请求路径
        'js': path.resolve('src/utils'),  // 配置全局js方法请求路径
        'cop': path.resolve('src/components'), // 配置全局组件的请求路径
      }
    },
  },
  // webpack-devServer 的配置
  devServer:{
    port: 7700, // 端口号
    open: true, // 是否在启动成功后直接打开页面
  }
}