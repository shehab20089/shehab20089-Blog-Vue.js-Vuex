import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import routePaths from "./routePaths";

Vue.use(VueRouter);

const routes = [
  //using routedPaths class i easily write the path of every route
  {
    path: routePaths.Home,
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
