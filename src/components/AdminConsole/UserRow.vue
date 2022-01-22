<template>
  <tr>
    <td>{{ userID }}</td> |
    <td>{{ username }}</td> |
    <td><button @click="requirePasswordOnNextLogin">Require Password on Next Login</button></td> |
    <td><button @click="changeAccountType">Change Account Type</button></td>
    <ChangeAccountType v-show="changeAccountTypeID"
                       :ID="userID"
                       :currentAccountType="accountType"></ChangeAccountType>
  </tr>
</template>

<script>
import ChangeAccountType from "@/components/AdminConsole/ChangeAccountType";
import httpCommon from "@/http-common";

export default {
  name: "UserRow",
  components: {
    ChangeAccountType
  },
  props: {
    username: {
      type: String,
      required: true
    },
    userID: {
      type: Number,
      required: true
    },
    accountType: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      changeAccountTypeID: false
    };
  },
  created(){
    //console.log("AC: ", this.accountType);
  },
  methods: {
    changeAccountType(){
      this.changeAccountTypeID = !this.changeAccountTypeID;
    },
    requirePasswordOnNextLogin(){
      httpCommon.put("/users/" + this.userID, {
        "require_password_at_login": 1
      });
    }
  }
}
</script>

<style scoped>

</style>