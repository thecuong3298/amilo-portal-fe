import Vue from 'vue';
import Vuex from 'vuex';
import { translationStore } from '@/shared/config/store/translation-store';
import { accountStore } from '@/shared/config/store/account-store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    translationStore,
    accountStore,
  },
});
