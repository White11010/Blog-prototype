import { createRouter, createWebHistory } from "vue-router";
import blogHomePage from "@/views/blog-home-page.vue";
import blogPostPage from "@/views/blog-post-page.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: blogHomePage,
  },
  {
    path: "/post/:id ",
    name: "Post",
    component: blogPostPage,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
