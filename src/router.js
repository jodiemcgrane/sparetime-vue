/**
 * @Date:   2021-02-18T16:10:28+00:00
 * @Last modified time: 2021-02-24T16:31:32+00:00
 */

import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Events from './views/Events'
import EventsShow from './views/events/Show'
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
      path: '/events/show',
      name: 'events_show',
      component: EventsShow
    },
    {
      path: '/productivity',
      name: 'productivity',
      component: Productivity
    },
  ]
});
