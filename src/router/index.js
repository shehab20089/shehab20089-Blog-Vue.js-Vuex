import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
import routePaths from "./routePaths";

Vue.use(VueRouter);

const routes = [
  //using routePaths class to easily write the path of every route
  {
    //the path to the home page
    path: routePaths.Home,
    component: Home
  },
  {
    //the path to the post page while sending the id of the post as a parmeter
    path: routePaths.Post + "/:id",
    component: Post
  }
];

//router instance
const router = new VueRouter({
  routes,
  //this will allow us to  rest scroll to the top when navigate to new page
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;
