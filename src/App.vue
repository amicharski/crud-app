<template>
  <div id="app">
    <img alt="Profrec Logo" src="./assets/logo.png" width="100" height="100">
    <NavbarGuest v-if="!loggedIn"></NavbarGuest>
    <NavbarAdmin v-else-if="loggedIn && getAccountType === 5"></NavbarAdmin>
    <NavbarUser v-else></NavbarUser>
    <router-view />
  </div>
</template>

<script>
import NavbarGuest from "@/components/NavbarGuest.vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import NavbarUser from "@/components/NavbarUser.vue";
import { authComputed } from "@/store/helpers.js";
import { mapGetters } from 'vuex';

export default {
  name: "App",
  components: {
    NavbarGuest,
    NavbarUser,
    NavbarAdmin
  },
  computed: {
    ...authComputed,
    ...mapGetters(["getAccountType", "getUser"])
  }
}
</script>