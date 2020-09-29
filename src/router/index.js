import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/controller/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    }
  ]
})
