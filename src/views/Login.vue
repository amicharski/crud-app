<template>
  <div id="home">
    <h1>Profrec: Login</h1>
    <form @submit.prevent="validateLogin">
      <label for="username">Username: </label><input type="textbox" id="username" v-bind="username">
      <br>
      <label for="password">Password: </label><input type="password" id="password" v-bind="password">
      <br>
      <button type="submit">Login</button>
    </form>
    <p>New to this site?</p>
    <br>
    <router-link :to="{ name: 'Register' }">Register</router-link>
  </div>
</template>

<script>
import UserDataService from "@/services/UserDataService";

export default {
  name: "Login",
  components: {},

  data(){
    return {
      username: null,
      password: null
    }
  },
  methods: {
    validateLogin(){
      UserDataService.authenticateLogin({
        username: this.username,
        password: this.password
      });
      // check database for matching username and password
    }
  }
}
</script>

<style scoped>

</style>