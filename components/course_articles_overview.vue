<template>
  <v-card color="blue" class="white--text">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{ item.courseName }}</div>

        <div>
          <flex
            v-for="article in lastCourseArticles"
            :key="`course-article-${article.articleId}}`"
          >
            <ArticleOverview :item="article" />
          </flex>
        </div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import ArticleOverview from './article_overview.vue'

export default {
  components: { ArticleOverview },
  props: ['item'], // item as courses
  computed: {
    courseArticles() {
      return this.$store.state.articles.filter(
        a => a.articleCourse === this.item.courseId
      )
    },
    lastCourseArticles() {
      return this.courseArticles.filter((a, i) => {
        if (i < 3) return a
      })
    }
  }
}
</script>
