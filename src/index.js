import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import indexView from './App.vue';
Vue.component('Icon', Icon);

import Drawer from '@/components/Drawer/Drawer.vue'
Vue.component('Drawer',Drawer)

import Sidebar from '@/components/Sidebar/Sidebar.vue'
Vue.component('Sidebar',Sidebar)

import Switch from "@/components/Switch/Switch.vue"
Vue.component('v-switch',Switch)

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

const vm = new Vue({
	el: '#app',
	render:(h) => h(indexView),
})

import searchFor from '@/views/searchFor/searchFor.vue'
Vue.use(searchFor)



