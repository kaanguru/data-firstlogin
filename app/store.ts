import Vue from 'vue';
import Vuex from 'vuex';
import * as ApplicationSettings from "tns-core-modules/application-settings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userID: ApplicationSettings.getNumber("userID"),

  },
  mutations: {
    setUserID: (state, payload) => {
      state.userID = payload;
    }
  },
  actions: {

  }
});
