import Vue from 'vue'
import VueRouter from 'vue-router'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import HomeView from '../views/User/HomeView.vue'
import ContactView from '../views/User/ContactView.vue'
import Login from '../views/Admin/Login.vue'
import Education from '../views/Admin/Education.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User/AboutView.vue')
  },
  { 
    path: '/contact', 
    name: 'contact',
    component: ContactView
  },
  { 
    path: '/admin/07438345320', 
    name: 'AdminLoginPage',
    component: Login
  },
  {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Admin/Dashboard.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/education',
      name: 'Education',
      component: Education,
      meta: {
        requiresAuth: true,
      },
    },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/admin/07438345320');
  } else {
    next();
  }

  if (currentUser != null && to.name == 'AdminLoginPage') {
    next('/dashboard');
  }
});

export default router
