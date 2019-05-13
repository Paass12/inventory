import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.resultCode !== 0) {
      Message({
        message: res.info || 'error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.info || 'error')
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
