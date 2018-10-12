import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Meetups from "@/components/meetup/Meetups";
import CreateMeetup from "@/components/meetup/CreateMeetup";
import Profile from "@/components/user/Profile";
import Signin from "@/components/user/Signin";
import Signup from "@/components/user/Signup";
import Meetup from "@/components/Meetup/Meetup";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/meetups",
      name: "Meetups",
      component: Meetups
    },
    {
      path: "/createmeetup",
      name: "CreateMeetup",
      component: CreateMeetup
    },
    {
      path: "/meetups/:id",
      name: "Meetup",
      props: true,
      component: Meetup
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    }
  ],
  mode: "history"
});
