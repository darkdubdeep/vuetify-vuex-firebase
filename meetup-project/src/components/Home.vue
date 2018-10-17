<template>
  <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-center">
          <v-btn large router to="/meetups">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-center"> 
          <v-btn large router to="/createmeetup">Organize Meetups</v-btn>
        </v-flex>
      </v-layout>
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
    <v-layout row wrap v-if="!loading">
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
</style>


