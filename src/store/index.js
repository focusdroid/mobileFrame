import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: '测试'
  },
  mutations: {
    increment (state, arg) {
      state.test = arg
    }
  },
  actions: {
    change (context, arg) {
      context.commit('increment', arg)
    }
  }
})

export default store
