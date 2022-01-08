<template>
  <div>
    <div v-show="userdata.accountType !== 5">
      Only site admins are allowed to have access to this page
    </div>
    <div v-show="userdata.accountType === 5">
      <h1>Admin Panel</h1>
      <p>You have made it to the admin panel. With great power comes great responsibility.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminPanel",
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