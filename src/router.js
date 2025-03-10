import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Game from "@/components/Game.vue";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/radio",
      name: "radio",
      component: () => import("./views/Radio.vue")
    },
    {
      path: "/game/:id",
      name: "Id",
      component: Game,
      props: true
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
