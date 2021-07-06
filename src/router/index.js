import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/what-is-biomimicry',
    name: 'what-is-biomimicry',
    component: () => import(/* webpackChunkName: "about" */ '../views/What-is-Biomimicry.vue')
  },
  {
    path: '/vision',
    name: 'Vision',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vision.vue')
  },
  {
    path: '/founders',
    name: 'Founders',
    component: () => import(/* webpackChunkName: "about" */ '../views/Founders.vue')
  },
 {
    path: '/training',
    name: 'Training',
    component: () => import(/* webpackChunkName: "about" */ '../views/Training.vue')
  },
  {
    path: '/consulting',
    name: 'Consulting',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulting.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
