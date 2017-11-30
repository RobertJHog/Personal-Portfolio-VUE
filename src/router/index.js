import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Intro from '@/components/Intro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
