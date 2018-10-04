<template>
  <v-app>
    <v-toolbar>
       <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        Dev meetup
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left>
            supervisor_account
          </v-icon>
          View meetups
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer 
      v-model="sideNav" 
      width=250 
      temporary
    >
      <v-list>
      <v-list-tile @click="sideNav = !sideNav">
        <v-list-tile-action>
          <v-icon>supervisor_account</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Dev meetup</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
      
    </v-navigation-drawer>
    <main>
      
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
    }
  },
  name: 'App'
}
</script>

<style>
.theme--light.v-navigation-drawer {
  background-color:#FAFAFA;
}
.v-overlay:before {
  background: transparent;
}
</style>

