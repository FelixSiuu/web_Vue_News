import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

// use vue-router
Vue.use(VueRouter)

// router rules
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/user', component: User }
]

// create router object
const router = new VueRouter({
  routes
})

export default router
