<template>
  <div class="blog-modal">
    <div class="blog-modal__mask modal__mask">
      <div class="blog-modal__wrapper modal__wrapper">
        <div class="blog-modal__container">
          <input
            type="text"
            placeholder="title"
            class="blog-modal__title"
            v-model="postData.title"
          />
          <textarea
            class="blog-modal__content"
            placeholder="content"
            v-model="postData.content"
          />
          <div class="blog-modal__buttons">
            <button
              class="blog-modal__cancel-button btn"
              @click="closeModalWindow()"
            >
              Отмена
            </button>
            <button class="blog-modal__save-button btn" @click="savePost()">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "blog-modal",
  data() {
    return {
      postData: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    ...mapActions(["ADD_NEW_POST"]),
    closeModalWindow() {
      this.$emit("closeModalWindow");
    },
    savePost() {
      if (this.title !== "" && this.content !== "") {
        this.ADD_NEW_POST(this.postData);
        this.$emit("closeModalWindow");
      }
    },
  },
};
</script>

<style>
.blog-modal__container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.blog-modal__title {
  width: 100%;
  height: 2rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}
.blog-modal__content {
  width: 100%;
  height: 15rem;
  margin-bottom: 2rem;
  resize: none;
}
.blog-modal__buttons {
  display: flex;
  justify-content: flex-end;
}
.blog-modal__save-button {
  margin-left: 1rem;
}
</style>
