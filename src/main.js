/**
 * @Date:   2021-02-18T16:01:45+00:00
 * @Last modified time: 2021-02-22T11:29:35+00:00
 */

import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'


import vuetify from '@/plugins/vuetify' // path to vuetify export

import router from './router'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
