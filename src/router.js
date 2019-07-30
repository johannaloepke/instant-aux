import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from './views/LandingPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // this is the default 'home' page
      name: 'home',
      component: LandingPage // this is the view rendered when visiting this path
    },
    {
      path: '/results',
      name: 'results',
      // route level code-splitting
      // this generates a separate chunk (results.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "results" */ './views/Results.vue')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
