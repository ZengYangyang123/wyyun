import searchFor from '@/components/searchFor.vue';

export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/HomeView',
  },
  {
    path: '/searchFor/:id',
    component: searchFor,
  },
];