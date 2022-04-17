import { createStore } from 'vuex'
import { translationStore } from '@/shared/config/store/translation-store'
import { accountStore } from '@/shared/config/store/account-store'

export default createStore({
  modules: {
    translationStore,
    accountStore
  }
})
