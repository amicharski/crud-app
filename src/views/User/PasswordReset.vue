<template>
  <div id="PasswordReset">
    <h1>Reset Your Password</h1>
    <p>For your own safety,
      an administrator has prompted you to reset your password.</p>
    <form @submit.prevent="newPassword">
      <label for="password">Password: </label><input type="password" id="password" v-model="password">
      <br>
      <p style="color: red;" v-show="passwordErrorMessage != null">Invalid Password</p>
      <br>
      <label for="passwordconf">Confirm Password: </label><input type="password" id="passwordconf" v-model="passwordConf">
      <br>
      <p style="color: red;" v-show="passwordConfErrorMessage != null">Passwords Do Not Match</p>
      <br>
      <button type="submit">Reset Password</button>
    </form>
  </div>
</template>

<script>
import crypto from 'crypto';

export default {
  name: "PasswordReset",
  data(){
    return {
      password: null,
      passwordConf: null,
      passwordErrorMessage: null,
      passwordConfErrorMessage: null
    }
  },
  methods: {
    async newPassword(){
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
      if(this.passwordErrorMessage == null &&
          this.passwordConfErrorMessage == null){
        //alert("Everything is properly validated");

        // back-end stuff
        // API call
        await this.$store.dispatch("update", {
          "password": crypto.createHash("md5").update(this.password).digest("hex"),
          "require_password_at_login": 0
        });

        await this.$router.push("/user/dashboard");
      }
    }
  }
}
</script>

<style scoped>

</style>