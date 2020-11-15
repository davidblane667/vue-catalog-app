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
    },
    CLEAR_USER_INFO(state) {
      state.info = {success: false}
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
        commit('SET_USER_INFO', {...data, username})
        return data
      } catch (e) {
        commit('setError', e)
      }
    },
    LOGOUT_USER({commit}) {
      commit('CLEAR_USER_INFO')
    },
    RELOAD_USER_INFO({commit}, info) {
      commit('SET_USER_INFO', info)
    }
  },
  getters: {
    GET_USER_INFO(s) {
      return s.info
    }
  }
}
