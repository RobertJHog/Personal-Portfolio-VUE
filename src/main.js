// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import Vuex from 'vuex'
import VueParticles from 'vue-particles'
import vueAnimate from 'vue2-animate/dist/vue2-animate.min.css'
import 'buefy/lib/buefy.css'
import App from './App'
import router from './router'
import store from './vuex/store.js'

Vue.use(Vuex)
Vue.use(Buefy)
Vue.use(VueParticles)
Vue.use(vueAnimate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
