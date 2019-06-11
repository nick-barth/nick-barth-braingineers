import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Day from "./views/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/day/:date",
      name: "day",
      component: Day
    }
  ]
});
