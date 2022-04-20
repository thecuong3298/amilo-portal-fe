import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { setupAxiosInterceptors } from '@/shared/config/axios-interceptor';
import provide from '@/shared/config/provider.conf';
import { i18n } from '@/shared/config/useI18n';
import SignUp from '@/views/sign-up/SignUp.vue';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.component('SignUp', SignUp);

new Vue({
  router,
  store,
  i18n,
  provide,
  render: (h) => h(App),
}).$mount('#app');

setupAxiosInterceptors(
  (error: any) => {
    const url = error.response?.config?.url;
    const status = error.status || error.response.status;
    if (status === 401) {
      // Store logged out state.
      store.commit('logout');
      if (!url.endsWith('api/authenticate')) {
        sessionStorage.setItem('requested-url', router.currentRoute.fullPath);
        return router.push('/sign-in');
      }
    }
    return Promise.reject(error);
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
