import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import vi from '@/locales/vi'
import store from '../../store/index'

const i18n = createI18n({
  locale: store.getters.currentLanguage,
  legacy: false,
  globalInjection: true,
  messages: {
    vi,
    en
  }
})

const translate = (key: string) => {
  return i18n.global.t(key)
}
export { i18n, translate }
