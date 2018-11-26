import Vue from "vue";
import Vuex from "vuex";
import meetups from "./modules/meetups";
import user from "./modules/user";
import shared from "./modules/shared";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    meetups: meetups,
    user: user,
    shared: shared
  }
});
