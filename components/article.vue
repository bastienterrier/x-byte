<template>
  <div>
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ item.article.articleTitle }}</div>

          <span>
            Written by
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <a
                  v-on="on"
                  :href="`/users/${item.author.userId}`"
                  class="user-link"
                  >{{ item.author.userPseudo }}</a
                >
              </template>
              <span>
                <UserInformations :item="item.author" />
              </span>
            </v-tooltip>
          </span>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="article-preface">{{ item.article.articlePreface }}</div>
        <div class="article-content">{{ item.article.articleContent }}</div>
      </v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>
    <div class="comments">
      <Comments :items="item.comments" />
    </div>
  </div>
</template>

<script>
import UserInformations from './user_informations.vue'
import Comments from './comments'

export default {
  components: { Comments, UserInformations },
  props: ['item'] // item as extendedArticle
}
</script>
