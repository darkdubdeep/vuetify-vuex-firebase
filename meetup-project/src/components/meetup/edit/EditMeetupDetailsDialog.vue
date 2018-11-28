<template>
  <v-dialog width="320px" persistent v-model="editDialog">
    <v-btn class="blue darken-3 edit-information-button" dark slot="activator">Edit information</v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit meetup</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-layout row>
              <v-flex xs12>
                <v-text-field name="title" label="Title" id="title" v-model="editedTitle" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  name="location"
                  label="Location"
                  id="location"
                  multi-line
                  v-model="editedLocation"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  name="description"
                  label="Description"
                  id="description"
                  multi-line
                  v-model="editedDescription"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-actions>
                  <v-btn flat class="blue--text darken-1" @click="editDialog = false">Close</v-btn>
                  <v-btn flat class="blue--text darken-1" @click="onSaveChanges">Save</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["meetup"],
  data() {
    return {
      editDialog: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description,
      editedLocation: this.meetup.location
    };
  },
  methods: {
    onSaveChanges() {
      if (this.editedTitle && this.editedDescription) {
        this.editDialog = false;
        this.$store.dispatch("updateMeetupData", {
          id: this.meetup.id,
          title: this.editedTitle,
          description: this.editedDescription,
          location: this.editedLocation
        });
      } else {
        return;
      }
    }
  }
};
</script>

<style>
</style>


