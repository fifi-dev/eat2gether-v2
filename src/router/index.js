import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NewCourse from '../views/NewCourse.vue';
// login
import SignIn from '../views/SignIn.vue';
// Register
import SignUp from '../views/SignUp.vue';

import { supabase } from '../supabase';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/account',
    name: 'account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/new-course',
    name: 'newCourse',
    component: NewCourse,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/update/:id',
    name: 'updateCourse',
    component: NewCourse,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: '/sign-in',
    name: 'signIn',
    component: SignIn,
    meta: {
      requireAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  let user = await supabase.auth.user();
  store.dispatch('setUser', user);
  if (user) {
    next();
  } else if (to.meta.requireAuth && !user) {
    next({ name: 'signIn' });
  } else {
    next();
  }
});

export default router;
