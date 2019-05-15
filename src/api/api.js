import request from '@/utils/request'
import qs from 'qs'

export default {
  // 登陆
  login (data) {
    return request.post('/bulb-0.0.1-SNAPSHOT/login', qs.stringify(data))
  },
  // 退出登陆
  logout () {
    return request.post('/bulb-0.0.1-SNAPSHOT/logout')
  },
  // 用户查找
  users () {
    return request.get('/bulb-0.0.1-SNAPSHOT/admin/findAll')
  },
  // 添加管理员
  addAdmins (data) {
    return request.post('/bulb-0.0.1-SNAPSHOT/admin/add', qs.stringify(data))
  },
  // 删除管理员
  deleteAdmins (data) {
    return request.delete('/bulb-0.0.1-SNAPSHOT/admin/delete?' + qs.stringify(data))
  },
  // 产品信息
  getAllProduct () {
    return request.get('/bulb-0.0.1-SNAPSHOT/getAllProducts')
  },
  // 库存列表
  getStockList () {
    return request.get('/bulb-0.0.1-SNAPSHOT/getStockList')
  },
  // 操作日志列表
  getLogList () {
    return request.get('/bulb-0.0.1-SNAPSHOT/log/operationLogs')
  },
  // 登陆日志
  getLoginLog () {
    return request.get('/bulb-0.0.1-SNAPSHOT/log/loginLogs')
  },
  // 入库列表
  getInBoundList () {
    return request.get('/bulb-0.0.1-SNAPSHOT/getInboundList')
  },
  // 订单表
  getOrderList () {
    return request.get('/bulb-0.0.1-SNAPSHOT/getOrderList')
  },
  // 出库列表
  getOutboundList () {
    return request.get('/bulb-0.0.1-SNAPSHOT/getOutboundList')
  }
}
