import axios from 'axios'

export default {
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, info) {
      state.products = info
    }
  },
  actions: {
    async GET_PRODUCTS({rootState, commit}) {
      try {
        const {data} = await axios.get(`${rootState.defaultUrl}api/products/`)
        commit('SET_PRODUCTS', data)
        return data
      } catch (e) {
        commit('setError', e)
      }
    }
  },
  getters: {}
}
