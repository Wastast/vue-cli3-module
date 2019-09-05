import router from './router'
// import store from './store'
import { getToken } from '@/utils/auth' // 获取用户是否登录


// router.beforeEach(async(to, from, next) => {
//   // 判断用户是否登录
//   const hasToken = getToken()
//   if (hasToken) {
//     /* 已登录 */
//     if (to.path === '/login') {
//       // 如果用户已经登录 重定向到主页
//       next({ path: '/' })
//     } else {
//       next()
//     }
//   } else {
//     next(`/login`)
//   }
// })