import { Options, Vue } from 'vue-class-component';
import DashboardSidebar from '@/components/Sidebars/dashboard -sidebar.vue';
import DashboardHeader from '@/components/Headers/dashboard-header.vue';
import DashboardFooter from '@/components/Footers/DashboardFooter.vue';

@Options({
  components: {
    DashboardSidebar,
    DashboardHeader,
    DashboardFooter,
  },
})
export default class DashboardComponent extends Vue {
  private sidebarColor = 'primary';
  private sidebarTheme = 'light';
  private navbarFixed = true;
  private showSettingsDrawer = false;
  private sidebarCollapsed = false;

  get layoutClass() {
    return this.$route.meta.layoutClass;
  }

  toggleSidebar(value: boolean) {
    this.sidebarCollapsed = value;
  }

  toggleSettingsDrawer(value: boolean) {
    this.showSettingsDrawer = value;
  }

  toggleNavbarPosition(value: boolean) {
    this.navbarFixed = value;
  }

  updateSidebarTheme(theme: string) {
    this.sidebarTheme = theme;
  }

  updateSidebarColor(color: string) {
    this.sidebarColor = color;
  }
}
