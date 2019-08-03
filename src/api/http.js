import axios from 'axios'
import qs from 'qs'

// 添加axios 根据环境进行判断添加请求端口  process.env.NODE_ENV === 'production' 判断请求环境是否在生产环境
axios.defaults.baseURL = process.env.NODE_ENV === 'production'?'':'';
// 
window.req = process.env.NODE_ENV === 'production'?'':'';
// 添加axios在请求时默认的配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 当请求超过20s就会告知当前请求超时，请刷新
axios.defaults.timeout = 200000;

// 请求拦截器
axios.interceptors.request.use( config => {
  // 在每次请求的时候拦截请求的头部,在此时可以添加token以及一些后台所需要的令牌
  return config;
},error => {
  return Promise.error(error);
})

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
    // 否则的话抛出错误
    if (response.status === 200) {            
      return Promise.resolve(response);        
    } else {            
      return Promise.reject(response);        
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {            
    if (error.response.status) {            
      // switch (error.response.status) {                
      //   // 401: 未登录
      //   // 未登录则跳转登录页面，并携带当前页面的路径
      //   // 在登录成功后返回当前页面，这一步需要在登录页操作。                
      //   case 401:
      //     router.replace({                        
      //       path: '/login',                        
      //       query: { 
      //         redirect: router.currentRoute.fullPath 
      //       }
      //     });
      //     break;
      //   // 403 token过期
      //   // 登录过期对用户进行提示
      //   // 清除本地token和清空vuex中token对象
      //   // 跳转登录页面                
      //   case 403:
      //     break; 
      //   // 404请求不存在
      //   case 404:
      //     Toast({
      //       message: '网络请求不存在',
      //       duration: 1500,
      //       forbidClick: true
      //     });
      //     break;
      //   // 其他错误，直接抛出错误提示
      //   default:
      //     Toast({
      //       message: error.response.data.message,
      //       duration: 1500,
      //       forbidClick: true
      //     });
      // }
      return Promise.reject(error.response);
    }
  }    
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get ( url, params ) { 
  // url = 
  return new Promise( (resolve, reject) =>{        
    axios.get(url, {            
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)        
  })    
})}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post ( url, params ) {
  return new Promise( (resolve, reject) => {
    axios.post(url, qs.stringify(params))
    .then(res => {
      resolve(res.data);
    })
    .catch(err =>{
      reject(err.data)
    })
  });
}