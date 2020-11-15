import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'catalog',
    meta: {layout: 'main'},
    component: () => import('../views/Catalog')
  },
  {
    path: '/catalog-item/:id',
    name: 'catalog-item',
    meta: {layout: 'main'},
    component: () => import('../views/CatalogItem')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
