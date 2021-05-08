// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router'
import common from '@/libs/units.js'
import md5 from 'js-md5';
import store from './store/index.js'
import VueScroller from 'vue-scroller'
import VueTouch from 'vue-touch'
import 'lib-flexible/flexible' // px自动转rem
import toastRegistry from '@/libs/index'
Vue.use(toastRegistry)
Vue.use(VueTouch, {name: 'v-touch'});
Vue.use(VueScroller);
Vue.config.productionTip = false;
Vue.prototype.common = common
Vue.prototype.$md5 = md5;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
});
