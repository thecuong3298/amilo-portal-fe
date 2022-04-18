import { createApp } from 'vue'
import App from '@/App.vue'
import TranslationService from '@/service/translation.service'
import store from '@/store'
import UserService from '@/service/user.service'
import UserManagementService from '@/service/user-management.service'
import AlertService from '@/shared/alert/alert.service'
import AccountService from '@/service/account.service'
import { setupAxiosInterceptors } from '@/shared/config/axios-interceptor'
import router from '@/router'

const app = createApp(App)

setupAxiosInterceptors(
  (error: any) => {
    const url = error.response?.config?.url
    const status = error.status || error.response.status
    if (status === 401) {
      // Store logged out state.
      store.commit('logout')
      console.log('hu')
      if (!url.endsWith('api/authenticate')) {
        sessionStorage.setItem('requested-url', router.currentRoute.value.fullPath)
        return router.push('/sign-in')
      }
    }
    return Promise.reject(error)
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

const translateService = new TranslationService(store)
const accountService = new AccountService(store, translateService)
app.provide('userService', new UserService())
  .provide('alertService', new AlertService())
  .provide('userManagementService', new UserManagementService())
  .provide('translateService', translateService)
  .provide('accountService', accountService)

export default app
