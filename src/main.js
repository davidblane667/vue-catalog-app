import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loader from './components/Loader'

import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.component('Loader', Loader)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
