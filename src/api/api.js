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
  // getAllProduct () {
  //   return request.get('/bulb-0.0.1-SNAPSHOT/getAllProducts')
  // },
  // 获取产品信息
  getAllProducts () {
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
  // 登陆日志列表
  getLoginLog () {
    return request.get('/bulb-0.0.1-SNAPSHOT/log/loginLogs')
  },
  // 入库列表
  getInboundList () {
    return request.get('/bulb-0.0.1-SNAPSHOT/getInboundList')
  },
  // 订单表
  getOrderList () {
    return request.get('/bulb-0.0.1-SNAPSHOT/getOrderList')
  },
  // 出库列表
  getOutboundList () {
    return request.get('/bulb-0.0.1-SNAPSHOT/getOutboundList')
  },
  // 删除入库单
  deleteInbound (data) {
    return request.delete('/bulb-0.0.1-SNAPSHOT/deleteInbound?' + qs.stringify(data))
  },
  // 删除出库单
  deleteOutbound (data) {
    return request.delete('/bulb-0.0.1-SNAPSHOT/deleteOutbound?' + qs.stringify(data))
  },
  // 添加入库单
  addInbound (data) {
    return request.post('/bulb-0.0.1-SNAPSHOT/addInbound', qs.stringify(data))
  },
  // 添加出库单
  addOutbound (data) {
    return request.post('/bulb-0.0.1-SNAPSHOT/addOutbound', qs.stringify(data))
  },
  // 获取订单表
  getStock (data) {
    return request.get('/bulb-0.0.1-SNAPSHOT/getStock?' + qs.stringify(data))
  },
  // 获取产品信息
  getProductInfo (data) {
    return request.get('/bulb-0.0.1-SNAPSHOT/getProductInfo?' + qs.stringify(data))
  },
  // 盘存表
  inventory (data) {
    return request.post('/bulb-0.0.1-SNAPSHOT/inventory?' + qs.stringify(data))
  },
  // 盘存信息
  getInventorys () {
    return request.post('/bulb-0.0.1-SNAPSHOT/getInventorys')
  }
}
