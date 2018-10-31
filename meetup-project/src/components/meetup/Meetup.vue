<template>
  <v-container>
    <v-layout row wrap>
        <v-flex xs12 class="text-xs-center preloader-holder" v-if="loading == true">
            <v-progress-circular
              indeterminate
              :width="7"
              :size="70"
              class="preloader-color-white">
            </v-progress-circular>
        </v-flex>
      </v-layout>
    <v-layout row wrap v-if="meetup.title && meetup.description">
        <v-flex xs12>
            <v-card>
              <v-layout fill-height row wrap>
                 <v-flex xs12 sm7>
                  <v-img
                      class="white--text meetup-image"
                      height="400px"
                      :src="meetup.imageUrl"
                      xs5
                    >
                    <v-flex align-end flexbox>
                      <span class="headline meetup-title">{{meetup.title}}</span>
                    </v-flex>
                  </v-img>
                </v-flex>
                   <v-flex xs12 sm5>
                      <v-card-title>
                          <div>
                            <span class="grey--text">{{meetup.date | date}}</span><br>
                            <div>{{meetup.time}}</div>
                          </div>
                        <template v-if="meetup" > 
                          <v-layout row wrap align-center justify-end  fill-height>
                            <app-edit-meetup-details-dialog :meetup="meetup">
                            </app-edit-meetup-details-dialog>
                          </v-layout>
                        </template>
                      </v-card-title>
                      <v-card-text>

                          <h2>Location</h2>
                          <p>{{meetup.location}}</p>

                          <h2>Description</h2>
                          <p>{{meetup.description}}</p>

                      </v-card-text>
                   </v-flex>
              </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>   
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style>
.meetup-title {
  display: block;
  padding: 25px 0 0 25px;
}

@media screen and (max-width: 992px) {
  .meetup-image {
    height: 280px !important;
  }
}
</style>


