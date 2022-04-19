import axios from 'axios';
import { Store } from 'vuex';
import TranslationService from '@/service/translation.service';
import router from '@/router';

export default class AccountService {
  constructor(
    private store: Store<any>,
    private translationService: TranslationService
  ) {
    this.init();
  }

  public init(): void {
    this.retrieveAccount().then();
  }

  public retrieveProfiles(): Promise<boolean> {
    return new Promise((resolve) => {
      axios
        .get<any>('management/info')
        .then((res) => {
          if (res.data && res.data.activeProfiles) {
            this.store.commit(
              'setRibbonOnProfiles',
              res.data['display-ribbon-on-profiles']
            );
            this.store.commit('setActiveProfiles', res.data.activeProfiles);
          }
          resolve(true);
        })
        .catch(() => resolve(false));
    });
  }

  public retrieveAccount(): Promise<boolean> {
    return new Promise((resolve) => {
      axios
        .get<any>('api/account')
        .then((response) => {
          this.store.commit('authenticate');
          const account = response.data;
          if (account) {
            this.store.commit('authenticated', account);
            if (this.store.getters.currentLanguage !== account.langKey) {
              this.store.dispatch('setLanguage', account.langKey).then();
            }
          } else {
            this.store.commit('logout');
            router.push({ name: 'Sign In' }).then();
          }
          this.translationService.setLocale(this.store.getters.currentLanguage);
          resolve(true);
        })
        .catch(() => {
          this.store.commit('logout');
          resolve(false);
        });
    });
  }

  public hasAnyAuthorityAndCheckAuth(authorities: any): Promise<boolean> {
    if (typeof authorities === 'string') {
      authorities = [authorities];
    }

    if (!this.authenticated || !this.userAuthorities) {
      const token =
        localStorage.getItem('jhi-authenticationToken') ||
        sessionStorage.getItem('jhi-authenticationToken');
      if (!this.store.getters.account && !this.store.getters.logon && token) {
        return this.retrieveAccount().then((resp) => {
          if (resp) {
            return this.checkAuthorities(authorities);
          }
          return Promise.resolve(false);
        });
      }
      return Promise.resolve(false);
    }

    return this.checkAuthorities(authorities);
  }

  public get authenticated(): boolean {
    return this.store.getters.authenticated;
  }

  public get userAuthorities(): any {
    return this.store.getters.account?.authorities;
  }

  private checkAuthorities(authorities: any): Promise<boolean> {
    if (this.userAuthorities) {
      for (const authority of authorities) {
        if (this.userAuthorities.includes(authority)) {
          return Promise.resolve(true);
        }
      }
    }
    return Promise.resolve(false);
  }
}
