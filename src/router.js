/**
 * @Date:   2021-02-18T16:10:28+00:00
 * @Last modified time: 2021-02-18T16:24:32+00:00
 */

import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //arrays of routes
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
});
