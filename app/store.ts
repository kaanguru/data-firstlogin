import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userID: Number,

  },
  mutations: {
    setUserID: (state, payload) => {
      state.userID = payload;
    }
  },
  actions: {

  }
});
