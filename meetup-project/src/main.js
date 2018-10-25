import Vue from "vue";
import App from "./App";
import router from "./router";
import { store } from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import DateFilter from "./filters/date";
import * as firebase from "firebase";
import alertCmp from "./components/shared/Alert.vue";
import EditMeetupDetailsDialog from "./components/meetup/edit/EditMeetupDetailsDialog.vue";

Vue.use(Vuetify);
Vue.filter("date", DateFilter);
Vue.component("app-alert", alertCmp);
Vue.component("app-edit-meetup-details-dialog", EditMeetupDetailsDialog);

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
      storageBucket: "gs://devmeetup-50a11.appspot.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store
          .dispatch("autoSignIn", user)
          .then(this.$store.dispatch("loadMeetups"));
      }
    });
  }
});
