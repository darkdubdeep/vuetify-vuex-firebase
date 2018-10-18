<template>
  <v-container>
      <!-- <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-center">
          <v-btn large router to="/meetups">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-center"> 
          <v-btn large router to="/createmeetup">Organize Meetups</v-btn>
        </v-flex>
      </v-layout> -->
      <v-layout>
        <v-flex xs12 class="text-xs-center">
          <v-progress-circular
            indeterminate
            class="primary--text"
            :width="7"
            :size="70"
            v-if="loading"></v-progress-circular>
        </v-flex>
      </v-layout>
    <v-layout row wrap v-if="!loading && userIsAuthenticated">
      <v-flex xs-12>
          <v-carousel>
            <v-carousel-item
            v-for="(item) in meetups"
            :key="item.id"
            :src="item.imageUrl"
            @click="onLoadMeetup(item.id)"
            >
            <div class="title">
                {{item.title}}
            </div>
            </v-carousel-item>
          </v-carousel>
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
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
    loading() {
      return this.$store.getters.loading;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
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
</style>


