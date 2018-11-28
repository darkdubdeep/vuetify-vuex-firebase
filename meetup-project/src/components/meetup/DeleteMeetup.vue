<template>
  <v-dialog v-model="deleteMeetupDialog" max-width="290">
    <v-btn slot="activator" class="delete-button" fab dark small color="primary">
      <i class="material-icons">close</i>
    </v-btn>
    <v-card>
      <v-card-text>Are you realy want to delete this meetup?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="blue-grey lighten-4" @click="deleteMeetupDialog = false">Cancel</v-btn>
        <v-btn color="info" flat="flat" @click="deleteMeetup(meetup)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["meetup"],
  data() {
    return {
      deleteMeetupDialog: false
    };
  },
  methods: {
    deleteMeetup(meetup) {
      this.$store.dispatch("deleteMeetup", meetup);
    }
  }
};
</script>

<style scoped>
.v-dialog__container {
  float: right !important;
  margin-top: -2px !important;
}
.delete-button {
  opacity: 0.7;
}
</style>


