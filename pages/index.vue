<template>
  <v-layout row wrap>
    <v-flex
      v-for="course in courses"
      :key="`course-${course.courseId}-overview`"
      grid-list-md
      xs4
    >
      <CourseArticlesOverview :item="course" />
    </v-flex>
  </v-layout>
</template>

<script>
import CourseArticlesOverview from '../components/course_articles_overview.vue'

export default {
  components: { CourseArticlesOverview },
  computed: {
    courses() {
      return this.$store.state.courses
    }
  }
}
</script>
