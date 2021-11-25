<template>
  <div class="blog-post">
    <div class="blog-post__wrapper">
      <router-link :to="'/'" tag="button" class="blog-post__cancel-button btn">
        Назад
      </router-link>
      <h1 class="blog-post__title">Запись {{ postData.title }}</h1>
      <input
        type="text"
        class="blog-post__title-input"
        v-model="postData.title"
      />
      <textarea
        class="blog-post__content-input"
        v-model="postData.content"
      ></textarea>
      <div class="blog-post__buttons">
        <button class="blog-post__delete-button btn" @click="deletePost()">
          Удалить
        </button>
        <button class="blog-post__save-button btn" @click="updatePost()">
          Сохранить
        </button>
      </div>
      <post-modal
        v-if="isAlertWindowVisible"
        @closeAlertWindow="closeAlertWindow"
        @submitDeletion="submitDeletion"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "@/router/index.js";
import postModal from "@/components/blog-post-page/post-modal.vue";

export default {
  name: "blog-post",
  components: {
    postModal,
  },
  data() {
    return {
      isAlertWindowVisible: false,
      postData: {},
    };
  },
  props: {
    post_id: {
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(["BLOG_POSTS"]),
  },
  methods: {
    ...mapActions(["UPDATE_POST", "DELETE_POST"]),
    getPostById() {
      this.BLOG_POSTS.forEach((post) => {
        if (post.id == this.post_id) {
          this.postData.title = post.title;
          this.postData.content = post.content;
          this.postData.id = post.id;
        }
      });
    },
    updatePost() {
      this.UPDATE_POST(this.postData);
      router.push("/");
    },
    submitDeletion() {
      this.DELETE_POST(this.post_id);
      router.push("/");
    },
    deletePost() {
      this.isAlertWindowVisible = true;
    },
    closeAlertWindow() {
      this.isAlertWindowVisible = false;
    },
  },
  mounted() {
    this.getPostById();
  },
};
</script>

.
<style>
.blog-post {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog-post__wrapper {
  width: 1000px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  background-color: rgb(230, 230, 230);
  box-sizing: border-box;
  padding: 1rem 2rem;
}
.blog-post__cancel-button {
  margin: 2rem 0;
  text-decoration: none;
}
.blog-post__title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.blog-post__title-input {
  width: 100%;
  height: 2rem;
  margin-bottom: 1.5rem;
}
.blog-post__content-input {
  width: 100%;
  resize: none;
  height: 15rem;
  margin-bottom: 2rem;
}
.blog-post__buttons {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.blog-post__delete-button {
  background-color: rgb(247, 206, 204) !important;
  border-color: rgb(128, 66, 62) !important;
}
.blog-post__delete-button:hover {
  background-color: rgb(207, 122, 118) !important;
}
.blog-post__save-button {
  margin-left: 1rem;
}
</style>
