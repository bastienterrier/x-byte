<template>
  <div>
    <h1>Chat</h1>
    <div id="chat-messages">
      <div
        v-for="(m, i) in chatMessages"
        :key="`msg-${i}`"
        class="chat-message"
      >
        {{ m }}
      </div>
    </div>

    <v-text-field v-model="msg" label="Regular"></v-text-field>
    <v-btn @click="sendMessage(msg)">add</v-btn>
  </div>
</template>

<script>
// import VueSocketIO from 'vue-socket.io'
// const io = require('socket.io-client')
// const socket = io('http://localhost:3333')

export default {
  data: function() {
    return {
      msg: '',
      connected: false,
      nbReceived: 0
    }
  },
  computed: {
    chatMessages() {
      return this.$store.state.chatMessages
    }
  },
  methods: {
    sendMessage(msg) {
      this.$store.commit('addMessageToStore', msg)
      // socket.emit('message', msg)

      this.msg = ''
    }
  }
}
</script>
