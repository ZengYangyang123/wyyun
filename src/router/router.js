import IndexView from '@/views/index.vue'
import SearchFor from '../views/searchFor.vue'

export default [
    {
        path:'/',
        redirect:'/IndexView'
    },
    {
        path: '/IndexView',
        component: IndexView,
    },
    {
        path:'/SearchFor',
        component: SearchFor,
    }
]