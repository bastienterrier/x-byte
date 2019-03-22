<template>
  <div>
    <v-layout row wrap>
      <!-- Course Description -->
      <v-flex xs6 class="course-description">
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline course-description-name">
                {{ item.course.courseName }}
              </div>
              <span class="course-description-content">
                {{ item.course.courseDescription }}
              </span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <!-- Course Author -->
      <v-flex xs3 class="course-autor">
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline course-autor-name">
                {{ item.author.userPseudo }}
              </div>
              <div class="course-description-content">
                See his other courses...
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <!-- Course States -->
      <v-flex xs3 class="course-stats">
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline course-autor-name">Stats</div>
              <span class="course-stats-comments">
                <v-badge right bottom>
                  <template v-slot:badge>
                    <span>{{ numberComments }}</span>
                  </template>
                  <v-icon color="grey lighten-1">comment</v-icon>
                </v-badge>
              </span>
              <span class="course-stats-writers">
                <v-badge right bottom>
                  <template v-slot:badge>
                    <span>{{ numberWriters }}</span>
                  </template>
                  <v-icon color="grey lighten-1">perm_identity</v-icon>
                </v-badge>
              </span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap></v-layout>
  </div>
</template>

<script>
export default {
  props: ['item'], // item as ExtendedCourse
  computed: {
    numberComments() {
      return this.$store.state.comments.filter(c =>
        this.item.articles.some(a => a.articleId === c.commentArticle)
      ).length
    },
    numberWriters() {
      return this.$store.state.users.filter(u =>
        this.item.articles.some(a => a.articleWriter === u.userId)
      ).length
    }
  }
}
</script>
