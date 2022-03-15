import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import PostIdPage from "@/pages/PostIdPage";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: MainPage },
  { path: "/posts", component: PostPage },
  { path: "/about", component: AboutPage },
  { path: "/posts/:id", component: PostIdPage },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
