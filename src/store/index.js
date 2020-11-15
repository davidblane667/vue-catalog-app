import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './user-info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultUrl: 'http://smktesting.herokuapp.com/',
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    }
  },
  actions: {},
  getters: {
    getDefaultUrl(state) {
      return state.defaultUrl
    }
  },
  modules: {
    userInfo
  }
})
