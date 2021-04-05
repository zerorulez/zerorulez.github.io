import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
import VueFullPage from 'vue-fullpage.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'hamburgers/dist/hamburgers.min.css'

Vue.use(VueFullPage);
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
