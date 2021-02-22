/**
 * @Date:   2021-02-18T16:10:28+00:00
 * @Last modified time: 2021-02-22T10:57:40+00:00
 */

import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Events from './views/Events'
import Productivity from './views/Productivity'

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
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/productivity',
      name: 'productivity',
      component: Productivity
    },
  ]
});
