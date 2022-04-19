import axios from "axios";
import { Store } from "vuex";
import dayjs from "dayjs";

export default class TranslationService {
  private store: Store<unknown>;

  constructor(store: Store<unknown>) {
    this.store = store;
  }

  public setLocale(lang: string) {
    dayjs.locale(lang);
    this.store.dispatch("setLanguage", lang);
    axios.defaults.headers.common["Accept-Language"] = lang;
    document.querySelector("html")?.setAttribute("lang", lang);
  }
}
