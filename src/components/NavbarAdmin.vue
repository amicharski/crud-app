<template>
  <nav>
    <button @click="dashboard">Dashboard</button> |
    <button @click="logout">Logout</button> |
    <button @click="admin">Admin Console</button>
  </nav>
</template>

<script>
export default {
  name: "NavbarAdmin",
  methods: {
    dashboard(){
      this.$router.push("/user/dashboard");
    },
    logout(){
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    admin(){
      this.$router.push("/admin/console");
    }
  }
}
</script>

<style scoped>

</style>