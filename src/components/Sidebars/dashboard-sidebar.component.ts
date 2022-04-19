import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    // Sidebar collapsed status.
    sidebarCollapsed: {
      type: Boolean,
      default: false,
    },

    // Main sidebar color.
    sidebarColor: {
      type: String,
      default: 'primary',
    },

    // Main sidebar theme : light, white, dark.
    sidebarTheme: {
      type: String,
      default: 'light',
    },
  },
})
export default class DashboardSidebarComponent extends Vue {}
