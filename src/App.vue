<template>
  <div id="app">
    <nav v-if="!loggedIn">
      <img alt="Profrec Logo" src="./assets/logo.png" width="100" height="100">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </nav>
    <nav v-else>
      <img alt="Profrec Logo" src="./assets/logo.png" width="100" height="100">
      <button @click="dashboard">Dashboard</button> |
      <button @click="logout">Logout</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { authComputed } from "@/store/helpers.js";

export default {
  name: "App",
  computed: {
    ...authComputed
  },
  methods: {
    dashboard(){
      this.$router.push("/user/dashboard");
    },
    logout(){
      this.$store.dispatch("logout");
    }
  }
}
</script>