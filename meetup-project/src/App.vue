<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon 
        @click="sideNav = !sideNav" 
        class="hidden-sm-and-up toolbar-side-icon">
      </v-toolbar-side-icon>
      <v-toolbar-title>
          <router-link 
          to="/" 
          tag="span" 
          style="cursor: pointer"
          > UmeetPro</router-link> 
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat 
          v-for="item in menuItems" 
          :key="item.menuItems"
          :to="item.link"
          class="navbar-buttons"
          >
          <v-icon left>
            {{item.icon}}
          </v-icon>
          {{item.title}}
          </v-btn>
          <v-btn flat v-if="userIsAuthenticated" @click="onLogout" class="navbar-buttons">
          <v-icon left>exit_to_app </v-icon>
          Logout
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view>
      </router-view>
    </main>

    <v-navigation-drawer 
      v-model="sideNav" 
      width=250 
      temporary
      absolute
    >
      <v-list>
      <v-list-tile 
        v-for="item in menuItems" 
        :key="item.title"
        :to="item.link">
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile  v-if="userIsAuthenticated" @click="onLogout">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false
    };
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logOut");
    }
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "add_circle_outline", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          {
            icon: "supervisor_account",
            title: "View Meetups",
            link: "/meetups"
          },
          {
            icon: "room",
            title: "Organize Meetup",
            link: "/createmeetup"
          }
          // { icon: "person", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  }
};
</script>

<style>
.theme--light.v-navigation-drawer {
  background-color: #fafafa;
}
.v-overlay:before {
  background: transparent;
}

nav {
  height: 70px;
  background-color: #0059b3 !important;
  color: #fff !important;
}
.navbar-buttons {
  color: #fff !important;
}
main {
  background-color: #0080ff;
  height: 100%;
}
.toolbar-side-icon {
  color: #fff !important;
}
</style>

