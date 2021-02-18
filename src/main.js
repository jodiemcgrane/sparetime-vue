/**
 * @Date:   2021-02-18T16:01:45+00:00
 * @Last modified time: 2021-02-18T16:16:30+00:00
 */

import Vue from 'vue'
import App from './App.vue'

import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
