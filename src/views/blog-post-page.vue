<template>
  <div class="blog-post-page">
    <blog-post :post_id="$route.params.id" />
  </div>
</template>

<script>
import blogPost from "@/components/blog-post-page/blog-post.vue";

export default {
  name: "blog-post-page",
  components: {
    blogPost,
  },
};
</script>
