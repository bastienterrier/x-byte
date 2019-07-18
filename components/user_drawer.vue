<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div v-if="!connectedUser">
          <CreateAccount />
          <hr />
          <Login />
        </div>
        <div v-else>
          <AccountOverview />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CreateAccount from './create_account.vue'
import Login from './login.vue'
import AccountOverview from './account_overview'

export default {
  components: { CreateAccount, Login, AccountOverview },
  computed: {
    connectedUser() {
      return this.$store.state.connectedUser
    }
  }
}
</script>
