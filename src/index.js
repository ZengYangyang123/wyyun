import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import Drawer from '@/components/Drawer';
import Switch from '@/components/Switch';
import Sidebar from '@/components/Sidebar';
import Current from '@/components/Current';
import { Swipe, SwipeItem } from 'vant';
import { Circle } from 'vant';

import Player from './components/Player/player';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

Vue.component('VueSlider', VueSlider)
Vue.use(Player)


Vue.use(Circle);
Vue.use(Switch);
Vue.component('Icon', Icon);
Vue.use(Drawer);
Vue.use(Sidebar)
Vue.use(Current)
Vue.use(Swipe);
Vue.use(SwipeItem);
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>',
});



// import Vuex from '@/vuex'
// Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     const:123
//   }
// })