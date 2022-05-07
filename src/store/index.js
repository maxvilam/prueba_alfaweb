import Vue from "vue";
import Vuex from "vuex";
import Authenticated from "./Authenticated.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Authenticated,
  },
});
