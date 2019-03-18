import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      articles: []
    },
    mutations: {
      loadArticles(state, articles) {
        state.articles = articles
      }
    }
  })
}

export default createStore
