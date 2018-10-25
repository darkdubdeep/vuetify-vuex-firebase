<template>
  <v-container>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card>
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
                          <template v-if="true"> 
                            <v-spacer>
                              <app-edit-meetup-details-dialog>
                                 
                              </app-edit-meetup-details-dialog>
                            </v-spacer>
                          </template>
                          </v-flex>
                          </v-layout>
                          </v-container>
                          </v-img>
                          <v-card-title>
                        <div>
                          <span class="grey--text">{{meetup.date | date}}</span><br>
                           <div>{{meetup.time}}</div>
                        </div>
                        <p>{{meetup.location}}</p>
                        </v-card-title>
                        <v-card-actions>
                        <v-btn 
                        flat 
                        color="orange"
                        to=""
                        >Register</v-btn>
                    </v-card-actions>
                </v-card>
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
    }
  }
};
</script>

