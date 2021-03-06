import Main from '@/components/main'

export default [
  {
    path:'/login',
    name:'login',
    meta:{
      title:'Login - 登录',
      hideInMenu:true
    },
    component:()=>import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: false,
      title: '首页',
      notCache: true,
      icon: 'md-home'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: false,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/home'),
      },]
  },
  {
    path: '/',
    name: 'doc',
    component: Main,
    meta: {
      title: 'Demo',
      icon: 'ios-book'
    },
    children: [
      {
        path: '/rules',
        name: 'rules',
        meta: {
          hideInMenu: false,
          title: '校验',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/doc/rules/rules.vue')
      },
    ]
  },
  {
    path: '/',
    name: 'vuex',
    component: Main,
    meta: {
      title: 'vuex',
      icon: 'ios-book'
    },
    children: [
      {
        path: '/vuex-demo1',
        name: 'vuex-demo1',
        meta: {
          hideInMenu: false,
          title: 'vuex-使用命名空间',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/vuex-demo/vuex-demo1.vue')
      },
      {
        path: '/vuex-demo2',
        name: 'vuex-demo2',
        meta: {
          hideInMenu: false,
          title: 'vuex2',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/vuex-demo/vuex-demo2.vue')
      },
    ]
  },
  {
    path: '/',
    name: 'table',
    component: Main,
    meta: {
      title: '动态表单',
      icon: 'ios-book'
    },
    children: [
      {
        path: '/tableArea',
        name: 'tableArea',
        meta: {
          hideInMenu: false,
          title: '动态表单',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/table/table-area/table-area.vue')
      },
      {
        path: '/tableArea2',
        name: 'tableArea2',
        meta: {
          hideInMenu: false,
          title: '动态表单v1.0.1',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/table/table-area2/table-area.vue')
      },
      {
        path: '/tableArea3',
        name: 'tableArea3',
        meta: {
          hideInMenu: false,
          title: '动态表单v1.0.2',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/table/table-area3/table-area.vue')
      },
      {
        path: '/tableArea4',
        name: 'tableArea4',
        meta: {
          hideInMenu: false,
          title: '动态表单v1.0.3',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/table/table-area4/table-area.vue')
      },
      {
        path: '/tableArea5',
        name: 'tableArea5',
        meta: {
          hideInMenu: false,
          title: '动态表单v1.0.4',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/table/table-area5/table-area.vue')
      },
      {
        path: '/tableArea6',
        name: 'tableArea6',
        meta: {
          hideInMenu: false,
          title: '动态表单v1.0.5',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/table/table-area6/table-area.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'customColumnDialog',
    component: Main,
    meta: {
      title: '自定义',
      icon: 'ios-book'
    },
    children: [
      {
        path: '/customColumnDialog',
        name: 'customColumnDialog',
        meta: {
          hideInMenu: false,
          title: '自定义列',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/custom-column-dialog/custom-column-dialog.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'customTableColumn',
    component: Main,
    meta: {
      title: '自定义',
      icon: 'ios-book'
    },
    children: [
      {
        path: '/customTableColumn',
        name: 'customTableColumn',
        meta: {
          hideInMenu: false,
          title: '自定义-elTable-表头',
          notCache: true,
          icon: 'ios-book'
        },
        component: () => import('@/view/custom-table-column/custom-table-column.vue')
      }
    ]
  }
]
