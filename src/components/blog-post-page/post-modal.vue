<template>
  <div class="post-modal">
    <div class="post-modal__mask modal__mask">
      <div class="post-modal__wrapper modal__wrapper">
        <div class="post-modal__container">
          <h3 class="post-modal__title">Удалить запись?</h3>
          <div class="post-modal__buttons">
            <button
              class="post-modal__cancel-button btn"
              @click="closeAlertWindow()"
            >
              Отмена
            </button>
            <button
              class="post-modal__submit-button btn"
              @click="submitDeletion()"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-modal",
  methods: {
    closeAlertWindow() {
      this.$emit("closeAlertWindow");
    },
    submitDeletion() {
      this.$emit("submitDeletion");
    },
  },
};
</script>

<style>
.post-modal__container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.post-modal__title {
  width: 100%;
  height: 2rem;
  margin-bottom: 2rem;
}
.post-modal__buttons {
  display: flex;
  justify-content: center;
}
.post-modal__cancel-button {
  margin: 0 1rem;
}
.post-modal__submit-button {
  margin: 0 1rem;
  background-color: rgb(247, 206, 204) !important;
  border-color: rgb(128, 66, 62) !important;
}
.post-modal__submit-button:hover {
  background-color: rgb(207, 122, 118) !important;
}
</style>
