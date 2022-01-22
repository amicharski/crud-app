<template>
  <div id="ChangeAccountType">
    <form @submit.prevent="changeAccountType">
      | <label for="accountType">Account Type </label>
      <input type="text" id="accountType" v-model="accountType"
             :value="currentAccountType">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ChangeAccountType",
  props: {
    ID: {
      type: Number,
      required: true
    },
    currentAccountType: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      accountType: this.currentAccountType
    };
  },
  methods: {
    changeAccountType(){
      alert("Account type for user: " + this.ID + " is now: " + this.accountType);
    }
  }
}
</script>

<style scoped>

</style>