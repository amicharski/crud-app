<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Login' }">Login</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavbarGuest"
}
</script>

<style scoped>

</style>