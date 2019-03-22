<template>
  <div>
    <Course :item="extendedCourse" />
  </div>
</template>

<script>
import Course from '~/components/course.vue'
export default {
  components: { Course },
  computed: {
    extendedCourse() {
      return this.$store.state.currentExtendedCourse
    }
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  fetch({ store, params }) {
    store.commit('setCurrentExtendedCourse', params.id)
  }
}
</script>
