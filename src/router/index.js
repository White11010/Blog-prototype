import { createRouter, createWebHistory } from "vue-router";
import blogPage from "@/views/blog-page.vue";
import blogPostPage from "@/views/blog-post-page.vue";

const routes = [
  {
    path: "/",
    name: "Blog",
    component: blogPage,
  },
  {
    path: "/post/:id ",
    name: "Post",
    component: blogPostPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
