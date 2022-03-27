import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NewCourse from '../views/NewCourse.vue';
// login
import SignIn from '../views/SignIn.vue';
// Register
import SignUp from '../views/SignUp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/new-course',
    name: 'newCourse',
    component: NewCourse,
  },
  {
    path: '/update/:id',
    name: 'updateCourse',
    component: NewCourse,
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp,
  },
  {
    path: '/sign-in',
    name: 'signIn',
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
