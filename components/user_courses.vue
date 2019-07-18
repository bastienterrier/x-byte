<template>
  <div>
    <div v-if="userCourses.length > 0">
      <h2>Your courses:</h2>
      <ul>
        <li v-for="(course, i) in userCourses" :key="`user-course-${i}`">
          <nuxt-link
            :to="`/courses/${course.courseId}`"
            v-if="received.courseId !== course.courseId"
            >{{ course.courseName }}</nuxt-link
          >
        </li>
      </ul>
    </div>
    <span v-else>You didn't write any course yet</span>
  </div>
</template>

<script>
export default {
  props: ['item', 'received'], // item as Users, received as Courses
  computed: {
    userCourses() {
      return this.$store.getters.getUserCourses(this.item)
    }
  }
}
</script>

<style></style>
