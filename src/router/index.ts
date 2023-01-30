// Composables
import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import { isUserLoggedIn } from './utils'
import ability from '@/plugins/casl/ability'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    // meta: {
    //   requiresAuth:true
    // },
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
      redirectIfLoggedIn: true,
      action: 'read',
      subject:'Auth'
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
      redirectIfLoggedIn: true,
      action: 'read',
      subject:'Auth'
    }
  },
  {
    path: '/not-authorized',
    name: 'Not-authorized',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/NotAuthorized.vue'),
    meta: {
      redirectIfLoggedIn: true,
      action: 'read',
      subject:'Auth'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


const canNavigate = (to: RouteLocationNormalized) => {
  // @ts-expect-error We should allow passing string | undefined to can because for admin ability we omit defining action & subject
  return to.matched.some(route => ability.can(route.meta.action, route.meta.subject))
}


router.beforeEach((to) => {
  const isLoggedIn = isUserLoggedIn()
  
  // if (to.meta.requiresAuth && !isLoggedIn) {    
  //   return { name: 'Login', query: { to: to.fullPath } }
  // }

  // if (to.meta.redirectIfLoggedIn && isLoggedIn) {
  //   return { name: 'Home'}
  if (canNavigate(to)) {
    if (to.meta.redirectIfLoggedIn && isLoggedIn) {
      return { name: 'Home'}   
    }
  }
  else {
    if (isLoggedIn) {
      return { name:'Not-authorized' }
    }
    else {
      return {name:'Login', query:{to:to.fullPath}}
    }
  }
  // }
})
export default router
