<template>
  <v-layout row wrap>
    <v-flex v-if="even" xs2>
      <div class="comment-writer">{{ writer.userPseudo }}</div>
    </v-flex>
    <v-flex xs10>
      <div class="comment-content">{{ item.comment }} | {{ even }}</div>
    </v-flex>
    <v-flex v-if="!even" xs2>
      <div class="comment-writer">{{ writer.userPseudo }}</div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['item', 'even'], // item as comment
  computed: {
    writer() {
      return this.$store.state.users.find(
        u => u.userId === this.item.commentWriter
      )
    }
  }
}
</script>
