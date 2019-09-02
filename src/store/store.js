import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
  },
  mutations: {
    SwitchToken (state,data) {
      state.token = data
    }
  },
  actions: {
    // 设置token
    async setKey (context,data) {
      await context.commit('SwitchToken',data)
    }
  }
})
