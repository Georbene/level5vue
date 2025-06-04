import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import path from 'path'
import HelloWorld from '@/components/HelloWorld.vue'
import HomeComponent from '@/views/HomeComponent.vue'
import SignUpComponent from '@/views/SignUp.vue'
import LoginComponent from '@/views/Login.vue'
import ComputedProperty from '@/views/ComputedProperties.vue'
import DashboardComponent from '@/views/Dashboard.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import DynamicRoute from '@/views/DynamicRoute.vue'
import BlogView from '@/views/BlogView.vue'
import ParentView from '@/views/ParentView.vue'
import LogView from '@/views/LogView.vue'
import SignView from '@/views/SignView.vue'
import DashView from '@/views/DashView.vue'
import EventParent from '@/views/EventParent.vue'
import CounterView from '@/views/CounterView.vue'
import RegisTer from '@/views/RegisTer.vue'
import Vuelidate from '@/views/Vuelidate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/signup',
      component: SignUpComponent
    }, 
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/home',
      component: HomeComponent
    },
    {
      path:'/dashboard',
      component: DashboardComponent
    },
    {
      path:'/computed',
      component: ComputedProperty
    },
    {
      path: '/blog',
      component: DynamicRoute,
      name: 'blog',
    },
    {
      path: '/parent',
      component: ParentView,
      name: 'parent'
    },
    {
      path: '/log',
      component: LogView,
      name: 'log'
    },
    {
      path:'/sign',
      component: SignView,
      name: 'sign'  
    },
    {
      path: '/dash/:username',
      component: DashView,
      name: 'dashview'
    },
    {
      path:'/register',
      component:RegisTer,
      namer: 'register'
    },
    {
      path: '/blog/:id/:title',
      component: BlogView,
      name: 'blogview',
    },
    {
      path:'/event',
      component: EventParent,
      name: 'eventparent',
    },
    {
      path:'/counter',
      component: CounterView,
      name: 'counter'
    },
    {
      path:'/vuelidate',
      component:Vuelidate,
      name: 'vuelidate'
    },
    {
      path: '/:catchAll(.*)*',
      component: PageNotFound
    }
    
  ],
})

export default router
