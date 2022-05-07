import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signin",
    name: "signin",
    components: () => import("../views/SigninView.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/signout",
    name: "signout",
    components: () => import("../views/SignoutView.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/cursos",
    name: "cursos",
    components: () => import("../views/CursosView.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  }
  next();
});

export default router;
