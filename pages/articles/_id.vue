<template>
  <div>Article {{ article.articleId }}</div>
</template>

<script>
export default {
  computed: {
    article() {
      return this.$store.state.currentArticle
    }
  },
  validate({ params }) {
    // Doit être un nombre
    return /^\d+$/.test(params.id)
  },
  fetch({ store, params }) {
    store.commit('setCurrentArticle', params.id)
  }
}
</script>
