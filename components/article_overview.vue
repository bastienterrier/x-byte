<template>
  <v-card color="blue-grey darken-2" class="white--text">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{ item.title }}</div>
        <span>{{ firstWords }}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn dark>Read more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['item'], // item as article
  computed: {
    firstWords() {
      return this.item.content.substring(0, 150) + '...'
    }
  },
  methods: {
    updateOptions() {
      this.$store.commit('updateOptions', this.item)
    }
  }
}
</script>
