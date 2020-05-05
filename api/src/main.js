import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { store } from './store'
import router from './routers/route'
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json'

new Vue({
  el: '#app',
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
