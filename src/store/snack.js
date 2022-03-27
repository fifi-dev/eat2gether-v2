export default {
  namespaced: true,

  state: {
    snack: null,
  },

  getters: {
    snack(state) {
      return state.snack;
    },
  },

  mutators: {
    SET_SNACK(state, text) {
      state.snack = text;
    },
  },

  actions: {
    snack({ commit }, text) {
      commit('SET_SNACK', text);
    },
  },
};
