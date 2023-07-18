import IndexView from '../views/Index.vue';
import SearchFor from '../views/SearchFor.vue';
import Refresh from '../views/Refresh.vue'

export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/IndexView',
  },
  {
    path: '/IndexView',
    component: IndexView,
  },
  {
    path: '/SearchFor',
    component: SearchFor,
  },
  {
    path: '/Refresh/:id',
    component: Refresh,
  },
  // 懒加载组件
  {
    path:'/JSX',
    component:() => import (/* webpackChunkName:'jsx' */'@/views/JSX')
  },
  {
    path:'/Login',
    component:() => import('@/views/Login.vue')
  },
  {
    path:'/PersonalData',
    component:() => import('@/views/PersonalData.vue')
  },
];