<template>
  <div>
    <div v-show="user === null">
      You need to be logged in to be able to visit this page
    </div>
    <div v-show="user !== null">
      <h1>User Dashboard</h1>
      <p>Welcome {{ user.username }}</p>
      <div v-show="user.accountType === 5">
        <router-link :to="{ name: 'AdminPanel' }">Admin Panel</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserDashboard",
  computed: {
    user: {
      get(){
        return this.$store.state.userdata;
      }
    }
  },
  async created(){
    const response = await axios.get("user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    });
    console.log(response);
  }
  // data(){
  //   return { events: "Loading events..." };
  // },
  // created(){
  //   axios.get("http://localhost:8080/api/jwtauth").then(({ data }) => {
  //     this.events = data.events.events;
  //   });
  // }
}
</script>

<style scoped>

</style>