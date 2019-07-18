<template>
  <div>
    <div v-if="userArticles.length > 0">
      <h2>Your Articles:</h2>
      <ul>
        <li v-for="(article, i) in userArticles" :key="`user-article-${i}`">
          <nuxt-link :to="`/articles/${article.articleId}`">{{
            article.articleTitle
          }}</nuxt-link
          >&nbsp;in
          <nuxt-link
            :to="`/courses/${getCourseById(article.articleCourse).courseId}`"
            >{{ getCourseById(article.articleCourse).courseName }}</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div v-else>You didn't write any article yet</div>
  </div>
</template>

<script>
export default {
  props: ['item'], // item as User
  computed: {
    userArticles() {
      return this.$store.getters.getUserArticles(this.item)
    }
  },
  methods: {
    getCourseById(id) {
      return this.$store.state.courses.find(c => c.courseId === id)
    }
  }
}
</script>

<style></style>
