<template>
  <div class="blog-home">
    <div class="blog-home__wrapper">
      <h1 class="blog-home__title">Блог</h1>
      <p class="blog-home__placeholder" v-if="BLOG_POSTS.length === 0">
        Нет записей
      </p>
      <div class="blog-home__items-list">
        <blog-item
          v-for="(item, index) in BLOG_POSTS"
          :key="index"
          :item_data="item"
        />
      </div>
      <div class="blog-home__button-wrapper">
        <button
          class="blog-home__add-button btn"
          @click="isModalWindowVisivle = true"
        >
          + Добавить
        </button>
      </div>
      <blog-modal
        v-if="isModalWindowVisivle"
        @closeModalWindow="closeModalWindow"
      />
    </div>
  </div>
</template>

<script>
import blogItem from "@/components/blog-home-page/blog-item.vue";
import blogModal from "@/components/blog-home-page/blog-modal.vue";
import { mapGetters } from "vuex";

export default {
  name: "blog-home",
  components: {
    blogItem,
    blogModal,
  },
  data() {
    return {
      isModalWindowVisivle: false,
    };
  },
  computed: {
    ...mapGetters(["BLOG_POSTS"]),
  },
  methods: {
    closeModalWindow() {
      this.isModalWindowVisivle = false;
    },
  },
};
</script>

<style>
.blog-home {
  height: 100%;
}
.blog-home__wrapper {
  width: 1000px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: rgb(230, 230, 230);
  box-sizing: border-box;
  padding: 0 4rem;
}
.blog-home__title {
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2rem 0;
}
.blog-home__placeholder {
  font-size: 1.2rem;
  font-weight: 600;
}
.blog-home__items-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  gap: 3rem 5%;
  box-sizing: border-box;
  padding: 0 1rem;
}
.blog-home__button-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 3rem 1rem;
  margin-top: 8rem;
}
</style>
