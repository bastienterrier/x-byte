<template>
  <div>
    <Article :item="extendedArticle" />
  </div>
</template>

<script>
import Article from '~/components/article.vue'
export default {
  components: { Article },
  computed: {
    extendedArticle() {
      return this.$store.state.currentExtendedArticle
    }
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  fetch({ store, params }) {
    store.commit('setCurrentExtendedArticle', params.id)
  }
}
</script>
