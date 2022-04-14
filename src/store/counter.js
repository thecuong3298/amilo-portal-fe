export default {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
    count(state) {
      return state.count;
    }
  },
  mutations: {
    increment (state) {
      state.count++;
    }
  },
  actions: {
    increase(context, payload) {
      context.commit('increment', payload);
    }
  }
}
