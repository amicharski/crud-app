<template>
  <div id="home">
    <h1>Profrec: Create an Account</h1>
    <form @submit.prevent="processRegister">
      <label for="username">Username: </label><input type="textbox" id="username" v-model="username">
      <br>
      <p style="color: red;" v-show="usernameErrorMessage != null">{{ usernameErrorMessage }}</p>
      <br>
      <label for="email">Email Address: </label><input type="textbox" id="email" v-model="email">
      <br>
      <p style="color: red;" v-show="emailErrorMessage != null">{{ emailErrorMessage }}</p>
      <br>
      <label for="password">Password: </label><input type="password" id="password" v-model="password">
      <br>
      <p style="color: red;" v-show="passwordErrorMessage != null">Invalid Password</p>
      <br>
      <label for="passwordconf">Confirm Password: </label><input type="password" id="passwordconf" v-model="passwordConf">
      <br>
      <p style="color: red;" v-show="passwordConfErrorMessage != null">Passwords Do Not Match</p>
      <br>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "Register",
  data(){
    return {
      username: null,
      email: null,
      password: null,
      passwordConf: null,
      usernameErrorMessage: null,
      emailErrorMessage: null,
      passwordErrorMessage: null,
      passwordConfErrorMessage: null
    }
  },
  methods: {
    async processRegister(){
      // validate everything
      if(this.username == null){
        this.usernameErrorMessage = "Username cannot be empty";
      } else if(this.username.length < 3 || this.username.length > 20) {
        this.usernameErrorMessage = "Username must be between 3 and 20 characters long";
      } else if(!this.username.match("^[A-Za-z0-9_-]*$")){
        this.usernameErrorMessage = "Usernames can only contain alphanumeric characters and underscores";
      } else {
        this.usernameErrorMessage = null;
      }
      if(!this.email.match("^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9.]+$")){
        this.emailErrorMessage = "Invalid Email Address";
      } else {
        this.emailErrorMessage = null;
      }
      if(this.password.length < 12){
        this.passwordErrorMessage = "Password must be at least 12 characters long";
      } else {
        this.passwordErrorMessage = null;
      }
      if(this.password !== this.passwordConf){
        this.passwordConfErrorMessage = "Passwords do not match";
      } else {
        this.passwordConfErrorMessage = null;
      }
      if(this.usernameErrorMessage == null &&
        this.emailErrorMessage == null &&
        this.passwordErrorMessage == null &&
        this.passwordConfErrorMessage == null){
        //alert("Everything is properly validated");

        // back-end stuff
        this.$store.dispatch("register", {
          "username": this.username,
          "email": this.email,
          "password": this.password
        });

        await this.$router.push("/login");
      }
    }
  }
}
</script>

<style scoped>

</style>