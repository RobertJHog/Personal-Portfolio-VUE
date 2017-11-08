import Vue from 'vue'
import Router from 'vue-router'
import MainPageDev from '@/components/MainPageDev'
import MainPageSales from '@/components/MainPageSales'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dev',
      name: 'MainPageDev',
      component: MainPageDev
    },
    {
      path: '/sales',
      name: 'MainPageSales',
      component: MainPageSales
    }
  ]
})
