import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'hamburgers/dist/hamburgers.min.css'

Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
