import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'
import Page404 from './views/page404/Page404.vue'

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
      title: '角色管理'
    }
  },
  {
    path: 'institution',
    name: 'institution',
    component: () => import('@/views/systemAdmin/Institution.vue'),
    meta: {
      title: '仓库管理'
    }
  },
  {
    path: 'role',
    name: 'role',
    component: () => import('@/views/systemAdmin/Role.vue'),
    meta: {
      title: '权限管理'
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
