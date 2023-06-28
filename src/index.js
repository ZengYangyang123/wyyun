import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import indexView from './index.vue';
Vue.component('Icon', Icon);


import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

const vm = new Vue({
	el: '#app',
	render:(h) => h(indexView),
})

