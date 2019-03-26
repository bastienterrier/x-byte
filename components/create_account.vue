<template>
  <div>
    <h1>Rejoignez-nous !</h1>

    <v-text-field v-model="pseudo" label="Pseudo" />
    <v-text-field v-model="password" label="Mot de passe" />
    <v-text-field
      v-model="password_confirm"
      label="Confirmer le mot de passe"
    />

    <v-btn @click="createAccount" color="secondary">S'inscire</v-btn>

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
      password_confirm: '',
      successOrErrorMessage: ''
    }
  },
  methods: {
    createAccount() {
      this.pseudo = this.pseudo.replace(/\s/g, '')
      this.password = this.password.replace(/\s/g, '')
      this.password_confirm = this.password_confirm.replace(/\s/g, '')

      if (
        this.pseudo === '' ||
        this.password === '' ||
        this.password_confirm === ''
      ) {
        this.successOrErrorMessage =
          '<span color="error">Le pseudo et le mot de passe ne peuvent pas être nuls.</span>'
        return
      }
      if (this.password !== this.password_confirm) {
        this.successOrErrorMessage =
          '<span color="error">Les mots de passe sont différents.</span>'
        return
      }

      const user = {
        userPseudo: this.pseudo,
        userPassword: this.password
      }
      const X_BYTE_API = process.env.X_BYTE_API

      axios
        .post(`${X_BYTE_API}/users`, user)
        .then(response => {
          this.successOrErrorMessage = response
        })
        .catch(err => {
          this.successOrErrorMessage = err
          throw err
        })
    }
  }
}
</script>
