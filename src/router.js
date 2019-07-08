import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // 采用路由懒加载方式
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
  ]
})
