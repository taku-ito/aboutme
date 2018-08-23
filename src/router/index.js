import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: about
    }
  ]
})
