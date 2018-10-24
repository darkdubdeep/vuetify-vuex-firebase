import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedMeetups(state, payload) {
      state.loadedMeetups = payload;
    },
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
    loadMeetups({ commit, getters }) {
      commit("setLoading", true);
      firebase
        .database()
        .ref("meetups")
        .orderByChild("creatorId")
        .equalTo(getters.user.id)
        .once("value")
        .then(data => {
          const meetups = [];
          console.log(data.val());
          const obj = data.val();
          for (let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId
            });
          }
          commit("setLoading", false);
          commit("setLoadedMeetups", meetups);
        })
        .catch(error => {
          console.log(error);
          commit("setLoading", false);
        });
    },
    createMeetup({ commit, getters }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date,
        time: payload.time,
        creatorId: getters.user.id
      };
      let imageUrl;
      let key;

      firebase
        .database()
        .ref("meetups")
        .push(meetup)
        .then(data => {
          console.log(data);
          key = data.key;
          return key;
        })
        .then(key => {
          console.log(payload);
          const filename = payload.image.name;
          const ext = filename.slice(filename.lastIndexOf("."));
          console.log(key);
          return firebase
            .storage()
            .ref("meetups/" + key + "." + ext)
            .put(payload.image);
        })
        .then(fileData => {
          let imagePath = fileData.metadata.fullPath;
          return firebase
            .storage()
            .ref()
            .child(imagePath)
            .getDownloadURL()
            .then(url => {
              imageUrl = url;
              console.log("File available at", url);
              return firebase
                .database()
                .ref("meetups")
                .child(key)
                .update({ imageUrl: imageUrl });
            });
        })
        .catch(error => {
          console.log(error);
        })
        .then(() => {
          commit("createMeetup", {
            ...meetup,
            imageUrl: imageUrl,
            id: key
          });
        })
        .catch(error => {
          console.log(error);
        });
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
          commit("setLoading", false);
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
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", { id: payload.uid, registeredMeetup: [] });
    },
    logOut({ commit }) {
      firebase.auth().signOut().then(location.reload());
      commit("setUser", null);
    },
    clearError({ commit }) {
      commit("clearError");
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
