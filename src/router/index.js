import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BaseLayout from '@/layout/BaseLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BaseLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>import('@/views/Home')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
