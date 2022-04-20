import VueI18n from 'vue-i18n';
import en from '@/locales/en';
import vi from '@/locales/vi';
import store from '../../store/index';
import Vue from 'vue';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: store.getters.currentLanguage,
  messages: {
    vi,
    en,
  },
});

const translate = (key: string) => {
  return i18n.t(key);
};
export { i18n, translate };
