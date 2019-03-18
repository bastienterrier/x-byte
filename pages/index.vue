<template>
  <div>
    <ArticleOverview
      v-for="(article, i) in articles"
      :key="`article-${i}`"
      :item="article"
    />
  </div>
</template>

<script>
import * as axios from 'axios'
import ArticleOverview from '../components/article_overview.vue'

export default {
  components: { ArticleOverview },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  },
  created() {
    const X_BYTE_API = process.env.X_BYTE_API

    axios
      .get(`${X_BYTE_API}/articles`)
      .then(response => {
        this.$store.commit('loadArticles', response.data)
      })
      .catch(err => {
        throw err
      })
  }
}
</script>
