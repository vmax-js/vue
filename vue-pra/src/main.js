import Vue from 'vue'
import App from './App.vue'

// 在生产环境中有无提示 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
