import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

const Home = () => import("@/views/Home.vue");
const Confirm = () => import("@/views/Confirm.vue");
const Login = () => import("@/views/Login.vue");
const Customer = () => import("@/views/Customer.vue");
const Edit = () => import("@/views/Edit.vue");

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/confirm",
      name: "Confirm",
      component: Confirm,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/customer",
      name: "Customer",
      component: Customer,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/edit",
      name: "Edit",
      component: Edit,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const user = sessionStorage.getItem("tokenCovidTracking");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (user == "null" || !user) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    if (to.meta.redirectIfAuth && user) {
      next({ name: to.meta.redirectIfAuth });
    } else {
      next();
    }
  }
});

export default router;
