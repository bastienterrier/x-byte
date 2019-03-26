<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div v-if="!connectedUser">
          <CreateAccount />
          <hr />
          <Login />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CreateAccount from './create_account.vue'
import Login from './login.vue'

export default {
  components: { CreateAccount, Login },
  computed: {
    connectedUser() {
      return this.$store.state.connectedUser
    }
  }
}
</script>
