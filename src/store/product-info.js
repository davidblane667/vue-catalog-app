import axios from 'axios'

export default {
  state: {
    products: [],
    reviews: []
  },
  mutations: {
    SET_PRODUCTS(state, info) {
      state.products = info
    },
    SET_REVIEWS(state, info) {
      state.reviews = info
    },
    ADD_REVIEW(state, info) {
      state.reviews.push(info)
    }
  },
  actions: {
    async GET_PRODUCTS({rootState, commit}) {
      try {
        const {data} = await axios.get(`${rootState.defaultUrl}api/products/`)
        commit('SET_PRODUCTS', data)
        return data
      } catch (e) {
        commit('SET_ERROR', e)
      }
    },
    async GET_REVIEWS({rootState, commit}, id) {
      try {
        const {data} = await axios.get(`${rootState.defaultUrl}api/reviews/${id}`)
        commit('SET_REVIEWS', data)
        return data
      } catch (e) {
        commit('SET_ERROR', e)
      }
    },
    async SEND_FEEDBACK({rootState, commit}, {id, rate, text, date, username, token}) {
      try {
        const {data} = await axios.post(`${rootState.defaultUrl}api/reviews/${id}`, {
          "authorization": token,
          "product": id,
          "rate": rate,
          "text": text
        })
        commit('ADD_REVIEW', {rate, text, id, date, username})
        return data
      } catch (e) {
        commit('SET_ERROR', e)
      }
    }
  },
  getters: {}
}
