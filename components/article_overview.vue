<template>
  <v-card color="blue-grey darken-2" class="white--text">
    <v-card-title primary-title>
      <div>
        <div class="headline">
          <nuxt-link :to="`/articles/${item.articleId}`" class="inherit-css">{{
            item.articleTitle
          }}</nuxt-link>
        </div>
        <span>{{ articleOverview }}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn dark>
        <nuxt-link :to="`/articles/${item.articleId}`" class="inherit-css"
          >Read more</nuxt-link
        >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['item'], // item as article
  computed: {
    articleOverview() {
      return this.item.articleContent.substring(0, 150) + '...'
    }
  }
}
</script>
