<template>
  <div class="blog-home-page">
    <blog-home />
  </div>
</template>

<script>
import blogHome from "@/components/blog-home-page/blog-home.vue";

export default {
  name: "blog-home-page",
  components: {
    blogHome,
  },
};
</script>

<style>
.blog-page {
  height: 100%;
}
</style>
