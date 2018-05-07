import Vue from 'vue'
import Router from 'vue-router'
import VuexTest from '@/components/VuexTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VuexTest',
      component: VuexTest
    }
  ]
})
