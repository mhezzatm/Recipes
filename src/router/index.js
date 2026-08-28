import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/recipe/:id",
      name: "recipe",
      component: () => import("@/views/RecipeView.vue"),
    },
    {
      path: "/search/:type/:value/:tagname?",
      name: "search",
      component: () => import("@/views/SearchView.vue"),
    },
    {
      // path: "*",
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
});

export default router;
