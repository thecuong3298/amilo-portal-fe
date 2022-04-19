<template>
  <!-- Main Sidebar -->
  <a-layout-sider
    collapsible
    class="sider-primary"
    breakpoint="lg"
    collapsed-width="0"
    width="250px"
    :collapsed="sidebarCollapsed"
    @collapse="$emit('toggleSidebar', !sidebarCollapsed)"
    :trigger="null"
    :class="[
      'ant-layout-sider-' + sidebarColor,
      'ant-layout-sider-' + sidebarTheme,
    ]"
    theme="light"
    :style="{ backgroundColor: 'transparent' }"
  >
    <!--    <hr />-->
    <!-- Sidebar Navigation Menu -->
    <a-menu theme="light" mode="inline">
      <a-menu-item>
        <router-link to="/dashboard">
          <a-icon type="home" class="icon" />
          <span class="label">Dashboard</span>
        </router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/tables">
          <a-icon type="home" class="icon" />
          <span class="label">Tables</span>
        </router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/billing">
          <a-icon type="home" class="icon" />
          <span class="label">Billing</span>
        </router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/rtl">
          <a-icon type="home" class="icon" />
          <span class="label">RTL</span>
        </router-link>
      </a-menu-item>
      <a-menu-item class="menu-item-header"> Account Pages </a-menu-item>
      <a-menu-item>
        <router-link to="/profile">
          <a-icon type="home" class="icon" />
          <span class="label">Profile</span>
        </router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/sign-in">
          <a-icon type="home" class="icon" />
          <span class="label">Sign In</span>
        </router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/sign-up">
          <a-icon type="home" class="icon" />
          <span class="label">Sign Up</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <!-- / Sidebar Navigation Menu -->

    <!-- Sidebar Footer -->
    <div class="aside-footer">
      <div class="footer-box">
        <a-icon type="home" class="icon" />
        <h6>Need Help?</h6>
        <p>Please check our docs</p>
        <a-button
          type="primary"
          href="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/documentation"
          block
          target="_blank"
        >
          DOCUMENTATION
        </a-button>
      </div>
    </div>
    <!-- / Sidebar Footer -->

    <a-button
      type="primary"
      href="https://www.creative-tim.com/product/muse-vue-ant-design-dashboard-pro"
      block
      target="_blank"
    >
      UPGRADE TO PRO
    </a-button>
  </a-layout-sider>
  <!-- / Main Sidebar -->
</template>

<script lang="ts" src="./dashboard-sidebar.component.ts"></script>
