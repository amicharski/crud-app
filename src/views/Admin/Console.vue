<template>
  <div id="Console">
    <h1>Admin Console</h1>
    <table>
      <tbody>
        <tr>
          <th>User Account Management</th>
        </tr>
        <UserRow v-for="user in users" v-bind:key="user.ID" :username="user.username"
                 :account-type="parseInt(user.account_type)"
                 :userID="parseInt(user.ID)">
        </UserRow>
      </tbody>
    </table>
  </div>
</template>

<script>
import uds from "@/services/UserDataService.js";
import UserRow from "@/components/AdminConsole/UserRow";

export default {
  name: "Console.vue",
  components: {
    UserRow
  },
  data(){
    return {
      users: null
    }
  },
  async created(){
    const { data } = await uds.getAll();
    console.log("data: ", data);
    this.users = data;
  }
}
</script>

<style scoped>

</style>

<!--        <UserRow username="alex" account-type="5"></UserRow>-->
<!--        <UserRow username="phil_swift" account-type="1"></UserRow>-->
<!--        <UserRow username="mickey_mouse" account-type="1"></UserRow>-->
<!--        <UserRow username="cornpop" account-type="0"></UserRow>-->