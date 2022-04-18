import { Options, Vue } from 'vue-class-component'
import {
  BellFilled,
  GlobalOutlined,
  LockOutlined,
  LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons-vue'
import TranslationService from '@/service/translation.service'
import store from '@/store/index'

@Options({
  inject: ['translateService'],
  components: {
    GlobalOutlined,
    LogoutOutlined,
    LockOutlined,
    SettingOutlined,
    BellFilled,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
  },
  props: {
    // Header fixed status.
    navbarFixed: {
      type: Boolean,
      default: false
    },

    // Sidebar collapsed status.
    sidebarCollapsed: {
      type: Boolean,
      default: false
    },

    // Header notifications data.
    notificationsData: {
      type: Array,
      default: () => []
    }
  }
})
export default class DashboardHeaderComponent extends Vue {
  private translateService: TranslationService

  top = 0

  wrapper = document.body

  languages = [
    {
      key: 'en',
      name: 'English'
    },
    {
      key: 'vi',
      name: 'Tiếng Việt'
    }
  ]

  resizeEventHandler () {
    this.top = this.top ? 0 : -0.01
  }

  created () {
    // Registering window resize event listener to fix affix elements size
    // error while resizing.
    console.log(this.$store)
    window.addEventListener('resize', this.resizeEventHandler)
  }

  destroyed () {
    // Removing window resize event listener.
    window.removeEventListener('resize', this.resizeEventHandler)
  }

  setLanguage (lang: string) {
    this.$i18n.locale = lang
    this.translateService.setLocale(lang)
  }

  menuSelect (event: any) {
    switch (event.key) {
      case 'logout':
        this.logout().then()
        break
      case 'login':
        this.$router.push({ name: 'Sign In' }).then()
        break
    }
  }

  logout (): Promise<any> {
    localStorage.removeItem('jhi-authenticationToken')
    sessionStorage.removeItem('jhi-authenticationToken')
    store.commit('logout')
    if (this.$route.path !== '/') {
      return this.$router.push('/')
    }
    return Promise.resolve(this.$router.currentRoute)
  }
}
