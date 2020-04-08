import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/project/:id',
    name: 'project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue')
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: () => import(/* webpackChunkName: "redirect" */ '../views/Redirect.vue'),
    meta: {
      analyticsIgnore: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$cursor.type="blank"
  next()
})

export default router
