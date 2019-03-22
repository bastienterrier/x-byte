<template>
  <v-app dark>
    <v-navigation-drawer v-model="layout_drawer" fixed app>
      <Chat />
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-btn @click="layout_drawer = !layout_drawer" icon>
        <v-icon>message</v-icon>
      </v-btn>
      <v-toolbar-title>
        <nuxt-link to="/" class="inherit-css">X-Byte</nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <span v-for="(course, i) in courses" :key="`course-${i}`">
        <nuxt-link :to="`/courses/${course.courseId}`" class="course-link">{{
          course.courseName
        }}</nuxt-link>
        <span v-if="i < courses.length - 1">&nbsp;|&nbsp;</span>
      </span>
      <v-spacer />
      <v-btn @click.stop="layout_rightDrawer = !layout_rightDrawer" icon>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="layout_rightDrawer"
      :right="true"
      temporary
      fixed
    >
      <UserDrawer />
    </v-navigation-drawer>
    <v-footer app>
      <span>&copy; 2019 - Powered by Masterdevil</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as axios from 'axios'
import UserDrawer from '~/components/user_drawer.vue'
import Chat from '~/components/chat.vue'

export default {
  components: { UserDrawer, Chat },
  computed: {
    courses() {
      return this.$store.state.courses
    },
    layout_drawer: {
      get() {
        return this.$store.state.layout_drawer
      },
      set(val) {
        this.$store.commit('setLayout_drawer', val)
      }
    },
    layout_rightDrawer: {
      get() {
        return this.$store.state.layout_rightDrawer
      },
      set(val) {
        this.$store.commit('setLayout_rightDrawer', val)
      }
    }
  },
  created() {
    const X_BYTE_API = process.env.X_BYTE_API

    axios
      .get(`${X_BYTE_API}/courses`)
      .then(response => {
        this.$store.commit('loadCourses', response.data)
      })
      .catch(err => {
        throw err
      })

    axios
      .get(`${X_BYTE_API}/articles`)
      .then(response => {
        this.$store.commit('loadArticles', response.data)
      })
      .catch(err => {
        throw err
      })

    axios
      .get(`${X_BYTE_API}/comments`)
      .then(response => {
        this.$store.commit('loadComments', response.data)
      })
      .catch(err => {
        throw err
      })

    axios
      .get(`${X_BYTE_API}/users`)
      .then(response => {
        this.$store.commit('loadUsers', response.data)
      })
      .catch(err => {
        throw err
      })
  }
}
</script>
