import CelebrityList from "./pages/CelebrityList.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/celebrityList",
      name: "celebrityList",
      component: CelebrityList,
    },
  ],
});

export default router;
