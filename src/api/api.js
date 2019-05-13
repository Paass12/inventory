import request from '@/utils/request'
import qs from 'qs'

export default {
  login (data) {
    return request.post('/bulb-0.0.1-SNAPSHOT/login', qs.stringify(data))
  },

  logout () {
    return request.post('/bulb-0.0.1-SNAPSHOT/logout')
  }
}
