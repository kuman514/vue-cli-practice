import Vue from 'vue'
import VueRouter from 'vue-router'
import WriteMemo from '../views/WriteMemo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Write A Memo',
    component: WriteMemo
  },
  {
    path: '/memolist',
    name: 'Memo List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MemoList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
