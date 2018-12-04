import * as firebase from "firebase";

export default {
  state: {
    loadedMeetups: []
  },
  mutations: {
    setLoadedMeetups(state, payload) {
      state.loadedMeetups = payload;
    },
    createMeetup(state, payload) {
      let newMeetup = payload;
      state.loadedMeetups.push(newMeetup);
    },
    updateMeetupData(state, payload) {
      const meetup = state.loadedMeetups.find(meetup => {
        return meetup.id === payload.id;
      });
      if (payload.title) {
        meetup.title = payload.title;
      }
      if (payload.description) {
        meetup.description = payload.description;
      }
      if (payload.location) {
        meetup.location = payload.location;
      }
      if (payload.date) {
        meetup.date = payload.date;
      }
    },
    deleteMeetup(state, payload) {
      for (var i = 0; i < state.loadedMeetups.length; i++) {
        if (state.loadedMeetups[i].id == payload.id) {
          state.loadedMeetups.splice(i, 1);
          break;
        }
      }
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
          const obj = data.val();
          for (let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId,
              location: obj[key].location
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
        creatorId: getters.user.id
      };
      let imageUrl;
      let key;
      commit("setLoading", true);
      firebase
        .database()
        .ref("meetups")
        .push(meetup)
        .then(data => {
          key = data.key;
          return key;
        })
        .then(key => {
          const filename = payload.image.name;
          const ext = filename.slice(filename.lastIndexOf("."));
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
          commit("setLoading", false);
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteMeetup({ commit }, payload) {
      firebase
        .database()
        .ref("meetups")
        .child(payload.id)
        .remove()
        .then(() => {
          commit("deleteMeetup", payload);
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateMeetupData({ commit }, payload) {
      const updateObj = {};
      if (payload.title) {
        updateObj.title = payload.title;
      }
      if (payload.description) {
        updateObj.description = payload.description;
      }
      if (payload.date) {
        updateObj.date = payload.date;
      }
      if (payload.location) {
        updateObj.location = payload.location;
      }
      firebase
        .database()
        .ref("meetups")
        .child(payload.id)
        .update(updateObj)
        .then(() => {
          commit("updateMeetupData", payload);
        })
        .catch(error => {
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
    }
  }
};
