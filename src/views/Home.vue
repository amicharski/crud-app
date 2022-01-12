<template>
  <div id="home">
    <h1>Profrec</h1>
    <p>A platform for recreational sports like no other</p>
  </div>
</template>

<script>
import { authComputed } from "@/store/helpers";

export default {
  name: "Home",
  computed: {
    ...authComputed
  }
}
</script>

<style scoped>

</style>