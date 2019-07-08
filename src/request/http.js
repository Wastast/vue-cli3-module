import axios from 'axios'
import qs from 'qs'

// 添加axios
axios.defaults.baseURL = ''
// 添加axios在请求时默认的配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 当请求超过20s就会告知当前请求超时，请刷新
axios.defaults.timeout = 200000;

// 请求拦截器
axios.interceptors.request.use( config => {
  // 每次发送请求之前判断vuex中是否存在token
  // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
  // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
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
    // if (error.response.status) {            
    //   switch (error.response.status) {                
    //     // 401: 未登录
    //     // 未登录则跳转登录页面，并携带当前页面的路径
    //     // 在登录成功后返回当前页面，这一步需要在登录页操作。                
    //     case 401:
    //       router.replace({                        
    //         path: '/login',                        
    //         query: { 
    //           redirect: router.currentRoute.fullPath 
    //         }
    //       });
    //       break;
    //     // 403 token过期
    //     // 登录过期对用户进行提示
    //     // 清除本地token和清空vuex中token对象
    //     // 跳转登录页面                
    //     case 403:
    //       break; 
    //     // 404请求不存在
    //     case 404:
    //       Toast({
    //         message: '网络请求不存在',
    //         duration: 1500,
    //         forbidClick: true
    //       });
    //       break;
    //     // 其他错误，直接抛出错误提示
    //     default:
    //       Toast({
    //         message: error.response.data.message,
    //         duration: 1500,
    //         forbidClick: true
    //       });
    //   }
    //   return Promise.reject(error.response);
    // }
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