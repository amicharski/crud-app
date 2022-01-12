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
import httpCommon from "@/http-common";

// const crypto = require("crypto");

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
      const response = await httpCommon.post("login", {
        "username": this.username,
        "password": this.password
      });
      console.log(response);

      if(!response.data.successful){
        this.loginErrorMessage = response.data.message;
      } else {
        this.loginErrorMessage = null;

        // if(response.data === 0){
        //   await this.$router.push("/suspended");
        // } else {
          // proceed to dashboard

          // const user = {
          //   username: this.username,
          //   password: crypto.createHash("md5").update(this.password).digest("hex"),
          //   accountType: response.data
          // };

          // await this.$store.dispatch("pushUserdata", user);
          localStorage.setItem("token", (await response).data.token);

          await this.$router.push("/user/dashboard");
        // }
      }
    }
  }
}
</script>

<style scoped>

</style>