<template>
  <div class="blog-item">
    <h2 class="blog-item__title">{{ item_data.title }}</h2>
    <div class="blog-item__content-container">
      <div class="blog-item__content">
        {{ item_data.content }}
      </div>
    </div>
    <router-link
      class="blog-item__button btn"
      tag="button"
      :to="{ name: 'Post', params: { id: item_data.id } }"
    >
      перейти
    </router-link>
  </div>
</template>

<script>
export default {
  name: "blog-item",
  props: {
    item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.blog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog-item__title {
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
}
.blog-item__content-container {
  width: 100%;
  height: 7.1em;
  box-sizing: border-box;
  padding: 0.5em;
  border: 1px solid black;
  background-color: #fff;
  margin-bottom: 0.5rem;
}
.blog-item__content {
  width: 100%;
  height: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
.blog-item__button {
  text-decoration: none;
  width: 100%;
  height: 2rem;
}
</style>
