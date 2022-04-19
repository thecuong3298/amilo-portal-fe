<template>
  <div>
    <!-- Dashboard Layout -->
    <a-layout
      class="layout-dashboard"
      id="layout-dashboard"
      :class="[
        navbarFixed ? 'navbar-fixed' : '',
        !sidebarCollapsed ? 'has-sidebar' : '',
        layoutClass,
      ]"
    >
      <!-- Layout Header's Conditionally Fixed Wrapper -->
      <DashboardHeader
        :sidebarCollapsed="sidebarCollapsed"
        :navbarFixed="navbarFixed"
        @toggleSettingsDrawer="toggleSettingsDrawer"
        @toggleSidebar="toggleSidebar"
      ></DashboardHeader>
      <!-- / Layout Header's Conditionally Fixed Wrapper -->

      <!-- Layout Content -->
      <a-layout>
        <!-- Main Sidebar -->
        <DashboardSidebar
          :sidebarCollapsed="sidebarCollapsed"
          :sidebarColor="sidebarColor"
          :sidebarTheme="sidebarTheme"
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
          class="sidebar-overlay"
          @click="sidebarCollapsed = true"
          v-show="!sidebarCollapsed"
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
