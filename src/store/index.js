import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './user-info'
import productInfo from './product-info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultUrl: 'http://smktesting.herokuapp.com/',
    error: null
  },
  mutations: {
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {},
  getters: {},
  modules: {
    userInfo,
    productInfo
  }
})
