import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      articles: [],
      courses: [],
      users: [],
      comments: [],
      currentArticle: {}
    },
    mutations: {
      loadArticles(state, articles) {
        state.articles = articles
      },
      loadCourses(state, courses) {
        state.courses = courses
      },
      loadUsers(state, users) {
        state.users = users
      },
      loadComments(state, comments) {
        state.comments = comments
      },
      setCurrentArticle(state, articleId) {
        const id = parseInt(articleId)
        state.currentArticle = state.articles.find(a => a.articleId === id)
      }
    }
  })
}

export default createStore
