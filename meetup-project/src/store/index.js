import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          "https://get.wallhere.com/photo/new-york-Empire-State-Building-Manhattan-1059865.jpg",
        id: "efwewfeewfwfe",
        title: "Meetup in NY",
        date: "2017-07-17"
      },
      {
        imageUrl:
          "http://wallsdesk.com/wp-content/uploads/2017/01/Stockholm-Desktop.jpg",
        id: "asdasdads",
        title: "Meetup in Stockholm",
        date: "2017-07-17"
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup(state, payload) {
      let newMeetup = payload;
      state.loadedMeetups.push(newMeetup);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        tilte: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        time: payload.time,
        id: "adsasdsas"
      };
      commit("createMeetup", meetup);
    },
    signUserUp({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            registeredMeetup: []
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          coommit("setLoading", false);
          const loggedUser = {
            id: user.uid,
            registeredMeetup: []
          };
          commit("setUser", loggedUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup: state => meetupId => {
      return state.loadedMeetups.find(meetup => {
        return meetup.id === meetupId;
      });
    },
    user(state) {
      return state.user;
    },
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    }
  }
});
