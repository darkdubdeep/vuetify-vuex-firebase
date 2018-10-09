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
    <v-layout row wrap>
      <v-flex xs-12>
          <v-carousel>
            <v-carousel-item
            v-for="(item) in meetups"
            :key="item.id"
            :src="item.imageUrl"
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
    data() {
        return {
            meetups: [
                {
                    imageUrl: 'https://get.wallhere.com/photo/new-york-Empire-State-Building-Manhattan-1059865.jpg', 
                    id: 'efwewfeewfwfe',
                    title: 'Meetup in NY'
                },
                {
                    imageUrl: 'http://wallsdesk.com/wp-content/uploads/2017/01/Stockholm-Desktop.jpg', 
                    id: 'asdasdads',
                    title: 'Meetup in Stockholm'
                },
            ]
        }
    }
}
</script>

<style scoped>
    div.title {
        position: absolute;
        bottom: 50px;
        color: white;
        padding-left:25px;
    }
</style>


