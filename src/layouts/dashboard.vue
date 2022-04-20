<template>
  <div>
    <!-- Dashboard Layout -->
    <a-layout
      id="layout-dashboard"
      class="layout-dashboard"
      :class="[
        navbarFixed ? 'navbar-fixed' : '',
        !sidebarCollapsed ? 'has-sidebar' : '',
        layoutClass,
      ]"
    >
      <!-- Layout Header's Conditionally Fixed Wrapper -->
      <dashboard-header
        :sidebar-collapsed="sidebarCollapsed"
        :navbar-fixed="navbarFixed"
        @toggle-settings-drawer="toggleSettingsDrawer"
        @toggle-sidebar="toggleSidebar"
      ></dashboard-header>
      <!-- / Layout Header's Conditionally Fixed Wrapper -->

      <!-- Layout Content -->
      <a-layout>
        <!-- Main Sidebar -->
        <DashboardSidebar
          :sidebar-collapsed="sidebarCollapsed"
          :sidebar-color="sidebarColor"
          :sidebar-theme="sidebarTheme"
          @toggleSidebar="toggleSidebar"
        ></DashboardSidebar>
        <!-- / Main Sidebar -->

        <!-- Page Content -->
        <a-layout-content>
          <router-view />
        </a-layout-content>
        <!-- / Page Content -->

        <!-- Sidebar Overlay -->
        <div
          v-show="!sidebarCollapsed"
          class="sidebar-overlay"
          @click="sidebarCollapsed = true"
        ></div>
        <!-- / Sidebar Overlay -->
      </a-layout>
      <!-- / Layout Content -->
      <!-- Layout Footer -->
      <DashboardFooter></DashboardFooter>
      <!-- / Layout Footer -->
    </a-layout>
    <!-- / Dashboard Layout -->
  </div>
</template>

<script lang="ts" src="./dashboard.component.ts"></script>
