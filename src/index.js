import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import indexView from './index.vue';
Vue.component('Icon', Icon);

import Drawer from '@/components/Drawer.vue'
Vue.component('Drawer',Drawer)

import Sidebar from '@/components/Sidebar.vue'
Vue.component('Sidebar',Sidebar)

import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

const vm = new Vue({
	el: '#app',
	render:(h) => h(indexView),
})

