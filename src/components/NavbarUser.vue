<template>
  <nav>
    <button @click="dashboard">Dashboard</button> |
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
export default {
  name: "NavbarUser",
  methods: {
    dashboard(){
      this.$router.push("/user/dashboard");
    },
    logout(){
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>