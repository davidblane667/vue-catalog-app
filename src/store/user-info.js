import axios from 'axios'
export default {
  state: {
    info: {
      success: false
    }
  },
  mutations: {
    SET_USER_INFO(state, info) {
      state.info = info
    }
  },
  actions: {
    async REGISTER_USER({rootState, commit}, {username, password}) {
      try {
        const {data} = await axios.post(`${rootState.defaultUrl}api/register/`, {username, password})
        commit('SET_USER_INFO', data)
        return data
      } catch (e) {
        commit('setError', e)
      }
    },
    async LOGIN_USER({rootState, commit}, {username, password}) {
      try {
        const {data} = await axios.post(`${rootState.defaultUrl}api/login/`, {username, password})
        commit('SET_USER_INFO', data)
        return data
      } catch (e) {
        commit('setError', e)
      }
    }
  },
  getters: {}
}
