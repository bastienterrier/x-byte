import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      articles: [],
      courses: [],
      users: [],
      comments: [],
      currentExtendedArticle: {},
      currentExtendedCourse: {},
      userToDisplay: {},
      layout_drawer: false,
      layout_rightDrawer: false,
      chatMessages: [],
      connectedUser: null
    },
    getters: {
      getUserArticles: state => user => {
        return state.articles.filter(a => a.articleWriter === user.userId)
      },
      getUserCourses: state => user => {
        return state.courses.filter(c => c.courseWriter === user.userId)
      }
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
      setCurrentExtendedArticle(state, articleId) {
        const id = parseInt(articleId)
        const article = state.articles.find(a => a.articleId === id)
        const author = state.users.find(u => u.userId === article.articleWriter)
        const comments = state.comments.filter(c => c.commentArticle === id)
        state.currentExtendedArticle = {
          article: article,
          author: author,
          comments: comments
        }
      },
      setCurrentExtendedCourse(state, courseId) {
        const id = parseInt(courseId)

        const course = state.courses.find(c => c.courseId === id)
        const articles = state.articles.filter(a => a.articleCourse === id)
        const author = state.users.find(u => u.userId === course.courseWriter)
        state.currentExtendedCourse = {
          course: course,
          articles: articles,
          author: author
        }
      },
      updateUserToDisplay(state, userId) {
        state.userToDisplay = state.users.find(u => u.userId === userId)
      },
      setLayout_drawer(state, val) {
        state.layout_drawer = val
      },
      setLayout_rightDrawer(state, val) {
        state.layout_rightDrawer = val
      },
      addMessageToStore(state, payload) {
        state.chatMessages.push(payload)
      },
      setConnectedUser(state, payload) {
        state.connectedUser = payload
      },
      disconnectUser(state) {
        state.connectedUser = null
      }
    }
  })
}

export default createStore
