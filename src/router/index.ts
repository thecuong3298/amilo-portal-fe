import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    // will match everything
    path: '/:catchAll(.*)',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/sign-in/SignIn.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
