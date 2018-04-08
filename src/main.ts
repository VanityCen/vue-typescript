import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'utils/polyfill.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
