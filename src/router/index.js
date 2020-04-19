import Vue from 'vue'
import VueRouter from 'vue-router'

import UserList from '@/views/UserList.vue'
import UserPage from '@/views/UserPage.vue'
import NotFoundComponent from '@/views/NotFoundComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'user-list',
    component: UserList
  },
  {
    path: '/user/:username',
    name: 'user-page',
    component: UserPage,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'not-found-component',
    component: NotFoundComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
