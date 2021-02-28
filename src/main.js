/**
 * @Date:   2021-02-18T16:01:45+00:00
 * @Last modified time: 2021-02-28T18:12:45+00:00
 */

import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'

Vue.use(BootstrapVue)
Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
