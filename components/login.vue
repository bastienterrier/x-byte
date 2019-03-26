<template>
  <div>
    <h1>Se connecter</h1>

    <v-text-field v-model="pseudo" label="Pseudo" />
    <v-text-field v-model="password" label="Mot de passe" />

    <v-btn @click="login" color="secondary">Let's go</v-btn>

    <div v-html="successOrErrorMessage"></div>
  </div>
</template>

<script>
import * as axios from 'axios'

export default {
  data: function() {
    return {
      pseudo: '',
      password: '',
      successOrErrorMessage: ''
    }
  },
  methods: {
    login() {
      const X_BYTE_API = process.env.X_BYTE_API

      if (this.pseudo === '' || this.password === '') {
        return
      }

      const user = {
        userPseudo: this.pseudo,
        userPassword: this.password
      }

      axios
        .post(`${X_BYTE_API}/login`, user)
        .then(response => {
          this.successOrErrorMessage = response.data[0]

          this.$store.commit('setConnectedUser', response.data[0])
        })
        .catch(err => {
          this.successOrErrorMessage = err
          throw err
        })
    }
  }
}
</script>
