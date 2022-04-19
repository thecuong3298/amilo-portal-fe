import { Module } from "vuex";

export const translationStore: Module<any, any> = {
  state: {
    currentLanguage: localStorage.getItem("currentLanguage") || "vi",
  },
  getters: {
    currentLanguage: (state) => state.currentLanguage,
  },
  mutations: {
    changeLanguage(state, newLanguage) {
      state.currentLanguage = newLanguage;
      localStorage.setItem("currentLanguage", newLanguage);
    },
  },
  actions: {
    setLanguage(context, newLanguage) {
      context.commit("changeLanguage", newLanguage);
    },
  },
};
