import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isAdmin: false,
    adminName: ''
  },
  mutations: {
    setAdmin (state) {
      state.isAdmin = true
    },
    setAdminName (state, value) {
      state.adminName = value
    },
    unsetAdmin (state) {
      state.isAdmin = false
    },
    unsetAdminName (state) {
      state.adminName = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
