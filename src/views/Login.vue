<template>
  <div id="home">
    <h1>Profrec: Login</h1>
    <form @submit.prevent="validateLogin">
      <p style="color: red;" v-show="loginErrorMessage != null">{{ loginErrorMessage }}</p>
      <br>
      <label for="username">Username: </label><input type="textbox" id="username" v-model="username">
      <br>
      <label for="password">Password: </label><input type="password" id="password" v-model="password">
      <br>
      <button type="submit">Login</button>
    </form>
    <p>New to this site?</p>
    <br>
    <router-link :to="{ name: 'Register' }">Register</router-link>
  </div>
</template>

<script>

export default {
  name: "Login",
  components: {},
  data(){
    return {
      username: null,
      password: null,
      loginErrorMessage: null
    }
  },
  methods: {
    async validateLogin(){
      // check database for matching password
      const response = await this.$store.dispatch("login", {
        "username": this.username,
        "password": this.password
      });

      if(!response.successful){
        this.loginErrorMessage = response.message;
      } else {
        this.loginErrorMessage = null;

        localStorage.setItem("token", response.token);

        await this.$router.push("/user/dashboard");
      }
    }
  }
}
</script>

<style scoped>

</style>