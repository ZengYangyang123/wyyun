import IndexView from '../views/Index.vue';
import SearchFor from '../views/SearchFor.vue';
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

];