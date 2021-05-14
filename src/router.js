/**
 * @Date:   2021-02-18T16:10:28+00:00
 * @Last modified time: 2021-03-04T13:58:05+00:00
 */

import Vue from 'vue'
import Router from 'vue-router'

import Welcome from './views/Welcome'
import Register from './views/Register'
import Login from './views/Login'

import Home from './views/Home'
import Events from './views/events/Events'
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
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
     {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/events/show/:id',
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
