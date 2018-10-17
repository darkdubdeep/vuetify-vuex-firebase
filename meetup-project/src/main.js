// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { store } from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import DateFilter from "./filters/date";
import * as firebase from "firebase";

Vue.use(Vuetify);
Vue.filter("date", DateFilter);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBdGHuDXiaQQVbm8JDHkZpf8gXwFOXOGJA",
      authDomain: "devmeetup-50a11.firebaseapp.com",
      databaseURL: "https://devmeetup-50a11.firebaseio.com",
      projectId: "devmeetup-50a11",
      storageBucket: ""
    });
  }
});
