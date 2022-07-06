import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Properties from '../views/Properties.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/properties',
    name: 'properties',
    component: Properties
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/properties/:id',
    name: 'single',
    component: ()=> import('../views/Single.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
