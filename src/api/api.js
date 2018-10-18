import axios from 'axios'
// import { Loading } from 'element-ui'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// axios.defaults.timeout = 5000
// axios.defaults.baseURL =''

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在将每个页面header都添加token
    // const token = getCookie('名称')
    // if(token){
    //   config.params = {'token': token}
    // }

    // 请求前到请求到数据这段时间用加载动画来代替，以服务方式调用
    // let loading = Loading.service({
    //   fullscreen: true,
    //   text: '拼命加载中...'
    // })

    // config.data = JSON.stringify(config.data)
    // config.headers = {
    //   'Content-Type':'application/x-www-form-urlencoded'
    // }
    return config
  },
  error => {
    // let loading = Loading.service({})
    // loading.close()    //关闭加载前，记得重新定义实例

    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // let loading = Loading.service({})
    // loading.close()

    // if(response.data.errCode === 2){
    //   router.push({
    //     path: '/',
    //     querry: { redirect: router.currentRoute.fullPath } // 从哪个页面跳转
    //   })
    // }
    return response
  },
  error => {
    // let loading = Loading.service({})
    // loading.close()

    return Promise.reject(error)
  }
)

// function checkStatus (response) {
//   // loading
//   // 如果http状态码正常，则直接返回数据
//   if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
//     return response
//     // 如果不需要除了data之外的数据，可以直接 return response.data
//   }
//   // 异常状态下，把错误信息返回去
//   return {
//     status: -404,
//     msg: '网络异常'
//   }
// }

// function checkCode (res) {
//   // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
//   if (res.status === -404) {
//     alert(res.msg)
//   }
//   if (res.data && (!res.data.success)) {
//     alert(res.data.error_msg)
//   }
//   return res
// }

// export default {
//   post (url, data) {
//     return axios({
//       method: 'post',
//       baseURL: 'https://cnodejs.org/api/v1',
//       url,
//       data: qs.stringify(data),
//       timeout: 10000,
//       headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//       }
//     }).then(
//       (response) => {
//         return checkStatus(response)
//       }
//     ).then(
//       (res) => {
//         return checkCode(res)
//       }
//     )
//   },
//   get (url, params) {
//     return axios({
//       method: 'get',
//       baseURL: 'https://cnodejs.org/api/v1',
//       url,
//       params, // get 请求时带的参数
//       timeout: 10000,
//       headers: {
//         'X-Requested-With': 'XMLHttpRequest'
//       }
//     }).then(
//       (response) => {
//         return checkStatus(response)
//       }
//     ).then(
//       (res) => {
//         return checkCode(res)
//       }
//     )
//   }
// }

// 封装axios的get请求
export function fetchGet (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 封装axios的post请求
export function fetchPost (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  getNewsLists (url, params) {
    return fetchGet(url, params)
  },
  getBrief (url, params) {
    return fetchGet(url, params)
  }
}
