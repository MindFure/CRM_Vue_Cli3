import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path:'/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/login.vue')
  },
  {
    path:'/categories',
    name: 'categories',
    meta: {layout: 'main'},
    component: () => import('../views/categories.vue')
  },
  
  {
    path:'/history',
    name: 'history',
    meta: {layout: 'main'},
    component: () => import('../views/history.vue')
  },

  {
    path:'/detail',
    name: 'detail',
    meta: {layout: 'main'},
    component: () => import('../views/detail.vue')
  },

  {
    path:'/planning',
    name: 'planning',
    meta: {layout: 'main'},
    component: () => import('../views/planning.vue')
  },

  {
    path:'/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import('../views/profile.vue')
  },

  {
    path:'/record',
    name: 'record',
    meta: {layout: 'main'},
    component: () => import('../views/record.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
