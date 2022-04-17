import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './scss/app.scss'
import { i18n } from '@/shared/config/useI18n'
import InitApp from '@/shared/config/init-app.conf'

const app = InitApp
app.use(Antd).use(store).use(router)
app.use(i18n)
app.mount('#app')
