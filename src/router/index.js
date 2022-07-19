import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'basic'
    },
    component: HomeView
  },
  {
    path: '/auth',
    name: 'login',
    meta: {
      layout: 'empty'
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginRegistation.vue')
  },
  // {
  //   path: '/registration',
  //   name: 'registration',
  //   meta: {
  //     layout: 'empty'
  //   },
  //   component: () => import(/* webpackChunkName: "registration" */ '@/views/LoginRegistation.vue')
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    meta: {
      layout: 'empty'
    },
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFoundPage')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      layout: 'admin'
    },
    component: () => import(/* webpackChunkName: "admin" */ '@/views/AdminView.vue')
  },
  {
    path: '/student-create',
    name: 'student-create',
    meta: {
      layout: 'admin-info'
    },
    component: () => import(/* webpackChunkName: "student-create" */ '@/views/StudentCreateView.vue')
  },
  {
    path: '/admin-info',
    name: 'admin-info',
    meta: {
      layout: 'admin-info'
    },
    component: () => import(/* webpackChunkName: "admin-info" */ '@/views/AdminInfoView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
