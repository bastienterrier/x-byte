<template>
  <div>
    <h1>
      {{ connectedUser.userPseudo }}
      <span>{{ connectedUser.userStatus }} {{ connectedUser.userRole }}</span>
      <v-btn @click="disconnect" icon>
        <v-icon>logout</v-icon>
      </v-btn>
    </h1>

    <div>
      <UserCourses
        :item="connectedUser"
        v-if="connectedUser.userRole !== 'reader'"
      />
      <UserArticles
        :item="connectedUser"
        v-if="connectedUser.userRole !== 'reader'"
      />
    </div>
  </div>
</template>

<script>
import UserArticles from './user_articles.vue'
import UserCourses from './user_courses.vue'
export default {
  components: { UserArticles, UserCourses },
  computed: {
    connectedUser() {
      return this.$store.state.connectedUser
    }
  },
  methods: {
    disconnect() {
      this.$store.commit('disconnectUser')
    }
  }
}
</script>

<style></style>
