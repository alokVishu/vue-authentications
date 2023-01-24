// Composables
import { createRouter, createWebHistory } from 'vue-router'
import {isUserLoggedIn} from './utils'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    meta: {
      requiresAuth:true
    },
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        // meta: {
        //   requiresAuth:true
        // }
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/About.vue'),
        //  meta: {
        //   requiresAuth:true
        // }
      },
      {
        path: '/service',
        name: 'Service',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Service.vue'),
        //  meta: {
        //   requiresAuth:true
        // }
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
    meta: {
      redirectIfLoggedIn:true
    }
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Register.vue'),
    meta: {
      redirectIfLoggedIn:true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  const isLoggedIn = isUserLoggedIn()
  
  if (to.meta.requiresAuth && !isLoggedIn) {    
    return { name: 'Login', query: { to: to.fullPath } }
  }

  if (to.meta.redirectIfLoggedIn && isLoggedIn) {    
    return { name: 'Home'}
  }
})
export default router
