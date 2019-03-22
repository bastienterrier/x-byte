<template>
  <div>
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">Comments</div>
        </div>
      </v-card-title>
      <v-card-text>
        <div
          v-for="(comment, i) in items"
          :key="`comment-${comment.commentId}`"
        >
          <Comment :item="comment" :even="i % 2 === 0" />
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn>Add comment</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Comment from './comment.vue'
export default {
  components: { Comment },
  props: ['items'] // item as comments
}
</script>
