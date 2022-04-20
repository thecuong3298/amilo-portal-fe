import axios from 'axios';
import { Store } from 'vuex';

export default class TranslationService {
  private store: Store<unknown>;

  constructor(store: Store<unknown>) {
    this.store = store;
  }

  public setLocale(lang: string) {
    this.store.dispatch('setLanguage', lang);
    axios.defaults.headers.common['Accept-Language'] = lang;
    document.querySelector('html')?.setAttribute('lang', lang);
  }
}
