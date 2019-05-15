import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
import Layout_sock from '@/layout_sock'
import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'
import Page404 from './views/page404/Page404.vue'
import LayoutFinance from '@/layout_finance'
import About from './views/about/About.vue'
import Information from './views/information/Information.vue'
import More from './views/more/More.vue'
Vue.use(Router)

export const constantRoutes = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/login',
  name: 'login',
  component: Login
},

{
  path: '/404',
  name: '404',
  component: Page404
},

{
  path: '/systemAdmin',
  component: Layout,
  redirect: '/systemAdmin/user',
  name: 'systemAdmin',
  meta: {
    title: '系统管理',
    icon: 'el-icon-location'
  },
  children: [{
    path: 'user',
    name: 'user',
    component: () => import('@/views/systemAdmin/User.vue'),
    meta: {
      title: '用户管理'
    }
  },
  {
    path: 'institution',
    name: 'institution',
    component: () => import('@/views/systemAdmin/Institution.vue'),
    meta: {
      title: '库存管理'
    }
  },
  {
    path: 'menu',
    name: 'menu',
    component: () => import('@/views/systemAdmin/Menu.vue'),
    meta: {
      title: '订单管理'
    }
  },
  {
    path: 'log',
    name: 'log',
    component: () => import('@/views/systemAdmin/Log.vue'),
    meta: {
      title: '日志管理'
    }
  }
  ]
},

{
  path: '/Monitor',
  component: Layout,
  children: [{
    path: '',
    name: 'monitor',
    component: () => import('@/views/monitor/Monitor.vue'),
    meta: {
      title: '安全警报',
      icon: 'el-icon-s-platform'
    }
  }]
},
{
  path: '/about',
  name: 'about',
  component: About
},
{
  path: '/information',
  name: 'information',
  component: Information
},
{
  path: '/more',
  name: 'more',
  component: More
},
{
  path: '/financial',
  component: LayoutFinance,
  children: [{
    path: '/financial/order',
    name: 'financial',
    component: () => import('@/views/financial/Order.vue'),
    meta: {
      title: '客户账单',
      icon: 'el-icon-s-custom'
    }
  }]
},
{
  path: '/inventoryReport',
  component: LayoutFinance,
  children: [{
    path: '/inventoryReport/table',
    name: 'inventoryReport',
    component: () => import('@/views/financial/InventoryReport.vue'),
    meta: {
      title: '库存报表',
      icon: 'el-icon-house'
    }
  }]
},
{
  path: '/depository',
  component: LayoutFinance,
  redirect: '/depository/user',
  name: 'depository',
  meta: {
    title: '入出管理',
    icon: 'el-icon-house'
  },
  children: [{
    path: 'inBound',
    name: 'inBound',
    component: () => import('@/views/financial/InBound.vue'),
    meta: {
      title: '入库单',
      icon: 'el-icon-house'
    }
  },
  {
    path: 'outBound',
    name: 'outBound',
    component: () => import('@/views/financial/OutBound.vue'),
    meta: {
      title: '出库单',
      icon: 'el-icon-house'
    }
  }]
},
{
  path: '/sold',
  component: LayoutFinance,
  children: [{
    path: '/sold/sales',
    name: 'sold',
    component: () => import('@/views/financial/Sold.vue'),
    meta: {
      title: '销售额',
      icon: 'el-icon-coin'
    }
  }]
},
// 5-13仓库管理员
{
  path: '/storekeeper',
  component: Layout_sock,
  redirect: '/storekeeper/inventoryRecords',
  name: 'storekeeper',
  meta: {
    title: '仓库管理',
    icon: 'el-icon-location'
  },
  children: [
    {
      path: 'inventoryRecords',
      name: 'inventoryRecords',
      component: () => import('@/views/storekeeper/InventoryRecords.vue'),
      meta: {
        title: '入库流水账'
      }
    },
    {
      path: 'OutboundRecords',
      name: 'outboundRecords',
      component: () => import('@/views/storekeeper/OutboundRecords.vue'),
      meta: {
        title: '出库流水账'
      }
    },
    {
      path: 'StockList',
      name: 'stockList',
      component: () => import('@/views/storekeeper/StockList.vue'),
      meta: {
        title: '产品信息及库存量'
      }
    }
  ]
}
]

const createRouter = () => new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
