import { Options, Vue } from 'vue-class-component'
import { HomeOutlined } from '@ant-design/icons-vue'
import MenuSidebar from './menu/MenuSidebar.vue'
import { MenuModel } from '@/model/menu.model'
import { MENU } from '@/shared/config/menu.conf'

@Options({
  components: {
    HomeOutlined,
    'menu-sidebar': MenuSidebar as any
  },
  props: {
    sidebarCollapsed: {
      type: Boolean,
      default: false
    },

    // Main sidebar color.
    sidebarColor: {
      type: String,
      default: 'primary'
    },

    // Main sidebar theme : light, white, dark.
    sidebarTheme: {
      type: String,
      default: 'light'
    }
  }
})
export default class DashboardSidebarComponent extends Vue {
  menus: MenuModel[] = MENU

  selectedKeys = ['1']
  openKeys: string[] = []

  inlineCollapsed = true

  created () {
    this.selectedKeys = [this.$router.currentRoute.value.fullPath]
    this.openKeys = this.menus.map(menu => this.getParentKey(menu, [])).find(e => e.length) || []
  }

  getParentKey (currentMenu: MenuModel, keys: string[]): string[] {
    const parentKey = currentMenu.component?.parentKey
    if (parentKey) {
      keys.push(parentKey)
    }
    if (currentMenu.path === this.selectedKeys[0]) {
      return keys
    }
    if (currentMenu.children?.length) {
      return currentMenu.children.map(menu => this.getParentKey(menu, [])).find(e => e.length) || []
    }
    return []
  }
}
