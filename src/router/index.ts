import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    // will match everything
    path: '/:catchAll(.*)',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    layout: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/user-management',
    name: 'User management',
    layout: 'dashboard',
    component: () =>
      import('../views/config/user-management/user-management.vue'),
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    component: () => import('../views/sign-in/Sign-In.vue'),
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    meta: {
      layoutClass: 'layout-sign-up',
    },
    component: () => import('../views/Sign-Up.vue'),
  },
].map((route) => addLayoutToRoute(route));

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute(route: any, parentLayout = null) {
  route.meta = route.meta || {};
  route.meta.layout = route.layout || parentLayout;

  if (route.children) {
    route.children = route.children.map((childRoute: any) =>
      addLayoutToRoute(childRoute, route.meta.layout)
    );
  }
  return route;
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
