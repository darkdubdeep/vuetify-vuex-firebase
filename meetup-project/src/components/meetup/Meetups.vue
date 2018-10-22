<template>
  <v-container>
      <v-layout row wrap>
          <v-flex xs12>
              <v-card class="info">
                  <v-container fluid>
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
    }
  }
};
</script>
