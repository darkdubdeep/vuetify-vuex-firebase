import Vue from "vue";
import Vuex from "vuex";

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
    user: {
      id: "asdadas",
      registeredMeetups: ["fefwefeweewf"]
    }
  },
  mutations: {
    createMeetup(state, payload) {
      let newMeetup = payload;
      state.loadedMeetups.push(newMeetup);
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        tilte: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        id: "adsasdsas"
      };
      commit("createMeetup", meetup);
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
});
