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
    <v-layout
      row
      wrap
      v-bind:justify-center="meetups.length == 1"
      v-bind:justify-space-between="meetups.length > 1"
      v-if="!loading && meetups && meetupsChecker"
    >
      <v-flex
        md6
        lg6
        sm12
        xs12
        mt-3
        v-for="meetup in meetups"
        :key="meetup.id"
        class="meetup-v-flex-card-holder"
      >
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex>
                <v-card>
                  <v-img class="white--text" height="230px" :src="meetup.imageUrl">
                    <v-container fill-height fluid>
                      <v-layout row fill-height>
                        <v-flex xs10>
                          <span class="headline meetup-tittle">{{meetup.title}}</span>
                        </v-flex>
                        <v-flex xs2>
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
.meetup-v-flex-card-holder {
  flex-basis: 48.5% !important;
}
@media screen and (max-width: 992px) {
  .meetup-v-flex-card-holder {
    flex-basis: 100% !important;
  }
  .meetup-v-flex-card-holder .meetup-tittle {
    font-size: 18px !important;
  }
}
</style>

