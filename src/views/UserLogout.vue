<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "UserLogout",
  created(){
    this.$store.dispatch("nullUserdata").then(() => {
      this.$router.push("/login");
    });
  }
}
</script>

<style scoped>

</style>