import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/register', component: _import('register/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  // {
  //   path: '',
  //   component: Layout,
  //   name: 'singleList',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'singleList',
  //       component: () => import('@/views/manageView/materialManagement/singleMaterialsList')
  //     }
  //   ]
  // },
  // -----------------------------------------------后台菜单-----------------------------------------------
  // 测试
  {
    path: '/person',
    name: 'personCenter',
    component: Layout,
    meta: { icon: 'dashboard' },
    redirect: '/person1',
    children: [
      {
        path: 'personCenter',
        name: 'personCenter',
        component: () => import('@/views/manageView/personCenter'),
        meta: { title: '个人中心', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/userManagement',
    component: Layout,
    redirect: '/userManagement/userAdd',
    name: 'userManagement',
    meta: {
      title: '用户管理',
      icon: 'peoples'
    },
    children: [
      {
        path: 'userAdd',
        name: 'userAdd',
        component: () => import('@/views/manageView/userManagement/userAdd'),
        meta: { title: '新增用户' }
      },
      {
        path: 'userList',
        name: 'userList',
        component: () => import('@/views/manageView/userManagement/userList'),
        meta: { title: '用户列表' }
      }
    ]
  },
  {
    path: '/authorityManagement',
    component: Layout,
    redirect: '/authorityManagement/roleAdd',
    name: 'authorityManagement',
    meta: {
      title: '权限管理',
      icon: 'lock'
    },
    children: [
      {
        path: 'roleAdd',
        name: 'roleAdd',
        component: () => import('@/views/manageView/authorityManagement/roleAdd'),
        meta: { title: '新增角色' }
      },
      {
        path: 'roleList',
        name: 'roleList',
        component: () => import('@/views/manageView/authorityManagement/roleList'),
        meta: { title: '角色列表' }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: '/clientTwoStep',
    name: 'clientManagement',
    meta: {
      title: '客户管理',
      icon: 'form'
    },
    children: [
      {
        path: 'clientAdd',
        name: 'clientAdd',
        component: () => import('@/views/manageView/clientManagement/clientAdd'),
        hidden: true,
        meta: { title: '客户新增' }
      },
      {
        path: 'houseAdd',
        name: 'houseAdd',
        component: () => import('@/views/manageView/clientManagement/houseAdd'),
        hidden: true,
        meta: { title: '房屋信息新增' }
      },
      {
        path: 'clientDetail',
        name: 'clientDetail',
        component: () => import('@/views/manageView/clientManagement/clientDetail'),
        hidden: true,
        meta: { title: '客户房屋装修详情信息' }
      },
      {
        path: 'clientTwoStep',
        name: 'clientTwoStep',
        component: () => import('@/views/manageView/clientManagement/clientTwoStep'),
        meta: { title: '客户房屋信息配置' }
      },
      {
        path: 'clientList',
        name: 'clientList',
        component: () => import('@/views/manageView/clientManagement/clientList'),
        meta: { title: '客户列表' }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: '/engineeringTwoStep',
    name: 'engineeringManagement',
    meta: {
      title: '工程管理',
      icon: 'clipboard'
    },
    children: [
      {
        path: 'engineeringAdd',
        name: 'engineeringAdd',
        component: () => import('@/views/manageView/engineeringManagement/engineeringAdd'),
        hidden: true,
        meta: { title: '新增工程信息' }
      },
      {
        path: 'engineeringMaterials',
        name: 'engineeringMaterials',
        component: () => import('@/views/manageView/engineeringManagement/engineeringMaterials'),
        hidden: true,
        meta: { title: '新增工程材料明细' }
      },
      {
        path: 'engineeringTwoStep',
        name: 'engineeringTwoStep',
        component: () => import('@/views/manageView/engineeringManagement/engineeringTwoStep'),
        meta: { title: '工程材料信息配置' }
      },
      {
        path: 'engineeringList',
        name: 'engineeringList',
        component: () => import('@/views/manageView/engineeringManagement/engineeringList'),
        meta: { title: '工程列表' }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: '/materialsList',
    name: 'materialManagement',
    meta: {
      title: '材料管理',
      icon: 'example'
    },
    children: [
      {
        path: 'materialsList',
        name: 'materialsList',
        component: () => import('@/views/manageView/materialManagement/materialsList'),
        meta: { title: '合作商管理' }
      },
      {
        path: 'supplyMaterialsList',
        name: 'supplyMaterialsList',
        component: () => import('@/views/manageView/materialManagement/supplyMaterialsList'),
        meta: { title: '合作商供应材料明细' }
      },
      {
        path: 'singleList',
        component: () => import('@/views/manageView/materialManagement/singleMaterialsList'),
        name: 'singleList',
        meta: { title: '合作商明细表id' },
        hidden: true
      }
    ]
  },
  {
    path: '/financeManagement',
    component: Layout,
    // redirect: '/financeManagement',
    name: 'financeManagement',
    meta: {
      title: '财务管理',
      icon: 'money'
    },
    children: [
      {
        path: 'orderList',
        name: 'orderList',
        component: () => import('@/views/manageView/financeManagement/orderList'),
        meta: { title: '订单列表' }
      },
      {
        path: 'expendBill',
        name: 'expendBill',
        component: () => import('@/views/manageView/financeManagement/expendBill'),
        meta: { title: '支出账单' }
      }
    ]
  },
  {
    path: '/personSetting',
    component: Layout,
    // redirect: '/personSetting',
    name: 'personSetting',
    meta: {
      title: '个人设置',
      icon: 'theme'
    },
    children: [
      {
        path: 'editPass',
        name: 'editPass',
        component: () => import('@/views/manageView/personSetting/editPass'),
        meta: { title: '重置密码' }
      },
      {
        path: 'editData',
        name: 'editData',
        component: () => import('@/views/manageView/personSetting/editData'),
        meta: { title: '修改资料' }
      }
    ]
  }
  // -----------------------------------------------后台菜单-----------------------------------------------
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/icon',
    component: Layout,
    name: 'icons',
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'iconIndex',
        name: 'iconIndex',
        component: () => import('@/views/svg-icon/index'),
        meta: { title: 'svgicons', icon: 'icon', roles: ['admin'] }
      }
    ]
  },
  // 树形组件
  {
    path: '/treeMen',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: 'treeMen',
      icon: 'TreeMean'
    },
    children: [
      {
        path: 'treeMen',
        name: 'treeMen-demo',
        component: () => import('@/views/tree/index'),
        meta: { title: 'treeMen', icon: 'TreeMean' }
      }
    ]
  },
  // 组件
  {
    path: '/components',
    component: Layout,
    redirect: '/components/dragKanban',
    name: 'Components',
    meta: {
      title: 'Components',
      icon: 'component'
    },
    children: [
      {
        path: 'componentsmixin',
        name: 'mixin',
        component: () => import('@/views/components/backToTop'),
        meta: { title: 'backToTop' }
      },
      {
        path: 'mixin',
        name: 'componentMixin',
        component: () => import('@/views/components/mixin'),
        meta: { title: 'componentMixin' }
      }
    ]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/exportExcel',
    name: 'excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'exportExcel',
        name: 'exportExcel',
        component: () => import('@/views/excel/exportExcel'),
        meta: { title: 'exportExcel', icon: 'excel' }
      }
    ]
  },
  {
    path: '/i18n-demo',
    component: Layout,
    redirect: 'i18n-demo',
    children: [
      {
        path: 'indexLang',
        name: 'indexLang',
        component: () => import('@/views/i18n-demo/indexLang'),
        meta: { title: 'i18n', icon: 'international' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
