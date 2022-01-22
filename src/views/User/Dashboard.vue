<template>
  <div v-if="getUsername">
    Welcome {{ getUsername }}
  </div>
</template>

<script>
import { authComputed } from '@/store/helpers.js';
import { mapGetters } from 'vuex';

export default {
  name: "Dashboard",
  computed: {
    ...authComputed,
    ...mapGetters(["getUsername", "getAccountType"])
  }
}
</script>

<style scoped>

</style>