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
        'css': path.resolve('src/assets/css'),
        'img': path.resolve('src/assets/img'),
        'js': path.resolve('src/assets/js'),
      }
    },
  },
  // webpack-devServer 的配置
  devServer:{
    port: 7700, // 端口号
    open: true, // 是否在启动成功后直接打开页面
  }
}