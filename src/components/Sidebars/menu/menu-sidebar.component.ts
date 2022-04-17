import { Options, Vue } from 'vue-class-component'
import { MenuModel } from '@/model/menu.model'
import { PropType } from 'vue'
import { SettingOutlined, UserOutlined, ControlOutlined } from '@ant-design/icons-vue'

@Options({
  name: 'MenuSidebar',
  components: {
    SettingOutlined,
    UserOutlined,
    ControlOutlined
  },
  props: {
    menu: {
      type: Object as PropType<MenuModel>,
      required: true
    }
  }
})
export default class MenuSidebarComponent extends Vue {
  menu: MenuModel

  get hasChild () {
    return this.menu?.children?.length
  }

  logMen () {
    console.log(this.menu)
  }
}
