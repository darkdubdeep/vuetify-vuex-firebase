<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <form @submit.prevent="onSignup">
                    <v-text-field
                    name="email"
                    label="mail"
                    id="email"
                    v-model="email"
                    type="email"
                    >
                    </v-text-field>
                    <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    >
                    </v-text-field>
                     <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    >
                    </v-text-field>
                    <v-btn type="submit">Sign Up</v-btn>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Password do not match"
        : "";
    },
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onSignup() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
