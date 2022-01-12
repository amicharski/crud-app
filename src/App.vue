<template>
  <div id="app">
    <nav>
      <img alt="Profrec Logo" src="./assets/logo.png" width="100" height="100">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link v-if="!loggedIn" :to="{ name: 'Login' }">Login</router-link>
      <button v-else @click="logout">Logout</button>
      <router-view />
    </nav>
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
    logout(){
      this.$store.dispatch("logout");
    }
  }
}
</script>