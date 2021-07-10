import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
Vue.config.productionTip = false
 
Vue.use(VueScrollTo)
 
// You can also pass in the default options


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
