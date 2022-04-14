import Vuex from 'vuex';
import Vue from "vue";
import Counter from "@/store/counter";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter: Counter
  }
});

export default store;
