<template>
  <v-container>
    <v-layout row>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm10 md10 lg8 offset-sm1 offset-md1 offset-lg2>
        <v-card class="create-meetup-form">
        <v-card-text>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                :rules="titleRules"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <img :src="imageUrl" height="150">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="description"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row class="data-time-picker-container">
            <v-flex xs12 class="data-picker-holder">
               <v-date-picker 
                  v-model="date"
                  color="green lighten-1" 
                  header-color="primary"
                  class="centered-data-time-picker"
               ></v-date-picker>
            </v-flex>
            <v-flex xs12 class="time-picker-holder">
               <v-time-picker 
                  v-model="time" 
                  format = "24hr"
                  color="green lighten-1" 
                  header-color="primary"
                  class="centered-data-time-picker"
               ></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-btn
                class="primary submit-from-button-centered"
                :disabled="!formIsValid"
                type="submit"
                >Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
        </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
      titleRules: [
        v => !!v || "Title is required",
        v => v.length > 10 || "Title must be less than 10 characters"
      ],
      date: null,
      time: null
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    },
    submitableDatetime() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        let hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    }
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.date,
        time: this.time
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    }
  }
};
</script>

<style>
.v-picker.v-card.v-picker--date.centered-data-time-picker.theme--light {
  margin: auto;
  width: 290px;
  display: flex;
}
.v-picker.v-card.v-picker--date.centered-data-time-picker.theme--light
  .v-picker__title {
  height: 101px;
}

.v-picker.v-card.v-picker--time.centered-data-time-picker.theme--light {
  margin: auto;
  width: 290px;
  display: flex;
}

.v-date-picker-table {
  height: 246px;
}
.create-meetup-form {
  margin-top: 10px;
  background-color: #e6f2ff !important;
}

.submit-from-button-centered {
  margin: 20px auto 0;
  display: block;
}

@media screen and (max-width: 776px) {
  .data-time-picker-container {
    flex-direction: column !important;
  }
  .centered-data-time-picker {
    margin-top: 15px !important;
  }
}

@media screen and (max-width: 322px) {
  .v-picker.v-card.v-picker--time.centered-data-time-picker.theme--light,
  .v-picker.v-card.v-picker--date.centered-data-time-picker.theme--light {
    margin-left: -17px;
  }
}
</style>
