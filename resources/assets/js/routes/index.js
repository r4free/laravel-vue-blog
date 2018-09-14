import VueRouter from "vue-router";

import Vue from "vue";

Vue.use(VueRouter);

import store from "../vuex/store";

import back from "./back-routes";
import front from "./front-routes";

const routes = [back, front];

let router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (
    (to.meta.auth && !store.state.auth.authenticated) ||
    (to.matched.some(record => record.meta.auth) &&
      !store.state.auth.authenticated)
  ) {
    return router.push("/login");
  }

  if (to.name == "login" && store.state.auth.authenticated) {
    return router.push({ name: "admin.index" });
  }

  next();
});

export default router;
