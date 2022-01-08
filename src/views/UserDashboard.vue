<template>
  <div>
    <div v-show="userdata === null">
      You need to be logged in to be able to visit this page
    </div>
    <div v-show="userdata !== null">
      <h1>User Dashboard</h1>
      <p>Welcome {{ userdata.username }}</p>
      <div v-show="userdata.accountType === 5">
        <router-link :to="{ name: 'AdminPanel' }">Admin Panel</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDashboard",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    userdata: {
      get(){
        return this.$store.state.userdata;
      }
    }
  }
}
</script>

<style scoped>

</style>