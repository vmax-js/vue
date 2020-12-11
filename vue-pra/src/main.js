import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './assets/reset.css'
import axios from './axios.js'
import store from './store.js'

Vue.config.productionTip = false

// 每个组件中都可以用到 this.$axios
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')