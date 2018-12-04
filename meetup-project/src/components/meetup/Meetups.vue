<template>
  <v-container class="relative-positioned-container">
    <v-layout>
      <v-flex xs12 class="text-xs-center preloader-holder" v-if="loading == true">
        <v-progress-circular indeterminate :width="7" :size="70" class="preloader-color-white"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout v-if="!meetupsChecker">
      <v-flex xs12 class="text-xs-center">
        <h1 class="whtie-color-text">You didn`t add any meet up
          <br>please add one
        </h1>
        <v-icon class="add-meetup-button" @click="createMeetup">add</v-icon>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around v-if="!loading && meetups && meetupsChecker">
      <v-flex xs12 sm6 md6 lg6 mt-5 v-for="meetup in meetups" :key="meetup.id" class="meetup-card">
        <v-card class="info">
          <v-container fluid>
            <v-layout row class="mb-5">
              <v-flex>
                <v-card>
                  <v-img class="white--text" height="200px" :src="meetup.imageUrl">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end>
                          <span class="headline">{{meetup.title}}</span>
                          <app-delete-meetup :meetup="meetup"></app-delete-meetup>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">{{meetup.date | date}}</span>
                      <br>
                      <span>{{meetup.location}}</span>
                      <br>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="info" :to="'/meetups/' + meetup.id">View meetup</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
    loading() {
      return this.$store.getters.loading;
    },
    meetupsChecker() {
      return this.meetups.length;
    }
  },
  methods: {
    createMeetup() {
      this.$router.push("/createmeetup");
    }
  }
};
</script>

<style>
.preloader-color-white {
  color: #fff;
  margin-top: 200px;
  margin-left: -30px;
}
.preloader-holder {
  height: 100%;
  width: 100%;
  position: absolute !important;
  z-index: 10000;
  background-color: #0080ff;
}
.relative-positioned-container {
  position: relative !important;
}
.whtie-color-text {
  color: #fff;
  font-weight: 400;
  font-size: 40px;
  margin-top: 100px;
}
.add-meetup-button {
  color: #fff !important;
  font-size: 80px;
  margin-top: 50px;
  transition: 0.1s;
  cursor: pointer;
  border: solid 1px #fff;
  border-radius: 100%;
}
.add-meetup-button:hover {
  font-size: 90px;
  border: solid 1px #0080ff;
}
.delete-button {
  float: right;
  margin-top: -2px;
}
.flex.lg6, .flex.sm6, .flex.md6 {
    flex-basis: 49%;
}
.flex.xs12 {
    flex-basis: 100%;
}
</style>

