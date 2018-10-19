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
    <v-layout v-if="userIsAuthenticated && !meetupsChecker">
      <v-flex xs12 class="text-xs-center">
        <h1 class="whtie-color-text">You didn`t add any meet up <br> please add one</h1>
        <v-icon class="add-meetup-button" @click="createMeetup">add</v-icon>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="!userIsAuthenticated">
        <h1 class="welcome-message-heading">Welcome to your best meetups organiser</h1>
    </v-layout>
    <v-layout row wrap v-if="!userIsAuthenticated">
    <div class="mainDiv">
      <div class="square"></div>
      <div class="square2"></div>
      <div class="square3"></div>
    </div>
    </v-layout>
    
  </v-container>
</template>

<script>
export default {
  computed: {
    meetupsChecker() {
      return this.meetups.length;
    },
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
    loading() {
      // return true;
      return this.$store.getters.loading;
    },
    userIsAuthenticated() {
      if (this.meetupsChecker) {
        this.$router.push("/meetups");
      }
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    createMeetup() {
      this.$router.push("/createmeetup");
    },
    onLoadMeetup: function(id) {
      this.$router.push("/meetups/" + id);
    }
  }
};
</script>

<style scoped>
div.title {
  position: absolute;
  bottom: 50px;
  color: white;
  padding-left: 25px;
}
.welcome-message-heading {
  margin: 70px auto 0;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 1.5px;
  font-size: 35px;
  font-weight: 400;
}
.mainDiv {
  position: relative;
  width: 206px;
  height: 190px;
  margin: 0px auto;
  margin-top: 130px;
}
.square {
  width: 100px;
  height: 100px;
  background: #0073e6;
  border: solid 1px #fff;
  float: left;
  transform: skew(180deg, 210deg);
  position: absolute;
  top: 43px;
}
.square2 {
  width: 100px;
  height: 100px;
  background: #0073e6;
  border: solid 1px #fff;
  float: left;
  transform: skew(180deg, 150deg);
  position: absolute;
  left: 102px;
  top: 43px;
}
.square3 {
  width: 114px;
  height: 100px;
  background: #0073e6;
  border: solid 1px #fff;
  float: left;

  transform: rotate(150deg) translate(-40px, -16px) skew(30deg, 0deg);
  position: absolute;
  left: 0px;
  top: -32px;
}
.whtie-color-text {
  color: #fff;
  font-weight: 400;
  font-size: 40px;
  margin-top: 100px;
}
.add-meetup-button {
  color: #fff;
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
  top: 50px;
  height: 90%;
  background-color: #0080ff;
}
.relative-positioned-container {
  position: relative !important;
}
</style>


