import { createStore } from "vuex";

export default createStore({
  state: {
    blogPosts: [],
  },
  mutations: {
    ADD_POST_TO_STATE: (state, post) => {
      //Каждому объекту с записью добавляем уникальное свойство - id (автоинкримент)
      if (state.blogPosts.length !== 0) {
        post.id = state.blogPosts[state.blogPosts.length - 1].id + 1;
      } else {
        post.id = 0;
      }
      state.blogPosts.push(post);
    },
    UPDATE_POST: (state, post) => {
      state.blogPosts[post.id] = post;
    },
    DELETE_POST_FROM_STATE: (state, postID) => {
      state.blogPosts = state.blogPosts.filter((post) => post.id != postID);
    },
  },
  actions: {
    ADD_NEW_POST({ commit }, post) {
      commit("ADD_POST_TO_STATE", post);
    },
    UPDATE_POST({ commit }, post) {
      commit("UPDATE_POST", post);
    },
    DELETE_POST({ commit }, postID) {
      commit("DELETE_POST_FROM_STATE", postID);
    },
  },
  modules: {},
  getters: {
    BLOG_POSTS(state) {
      return state.blogPosts;
    },
  },
});
