<template>
  <v-container class="relative-positioned-container">
      <v-layout>
        <v-flex xs12 class="text-xs-center preloader-holder" v-if="loading == true">
            <v-progress-circular
              indeterminate
              :width="7"
              :size="70"
              class="preloader-color-white">
            </v-progress-circular>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
          <v-flex xs12>
              <v-card class="info">
                  <v-container fluid v-if="!loading">
                      <v-layout row v-for="meetup in meetups" :key="meetup.id" class="mb-5">
                          <v-flex xs>
                              <v-card>
                                  <v-img
                                    class="white--text"
                                    height="200px"
                                    :src="meetup.imageUrl"
                                  >
                                  <v-container fill-height fluid>
                                  <v-layout fill-height>
                                  <v-flex xs12 align-end flexbox>
                                      <span class="headline">{{meetup.title}}</span>
                                        </v-flex>
                                        </v-layout>
                                        </v-container>
                                        </v-img>
                                        <v-card-title>
                                      <div>
                                        <span class="grey--text">{{meetup.date}}</span><br>
                                        <span>{{meetup.title}}</span><br>
                                        <span>{{meetup.location}}</span><br>
                                      </div>
                                      </v-card-title>
                                      <v-card-actions>
                                      <v-btn 
                                      flat 
                                      color="orange"
                                      :to="'/meetups/' + meetup.id"
                                      >View meetup</v-btn>
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
      console.log(this.$store.getters.loadedMeetups);
      return this.$store.getters.loadedMeetups;
    },
    loading() {
      return this.$store.getters.loading;
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
</style>

