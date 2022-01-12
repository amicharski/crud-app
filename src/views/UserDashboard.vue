<template>
  <div>
    Welcome {{ getUsername }}
  </div>
</template>

<script>
import { authComputed } from '@/store/helpers.js';
import { mapGetters } from 'vuex';

export default {
  name: "UserDashboard",
  computed: {
    ...authComputed,
    ...mapGetters(["getUsername"])
  }
}
</script>

<style scoped>

</style>