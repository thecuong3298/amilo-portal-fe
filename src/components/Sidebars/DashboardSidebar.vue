<template>

  <!-- Main Sidebar -->
  <a-layout-sider
    collapsible
    class="sider-primary"
    breakpoint="lg"
    width="260px"
    v-model:collapsed="sidebarCollapsed"
    @collapse="$emit('toggleSidebar', ! sidebarCollapsed)"
    :trigger="null"
    :class="['ant-layout-sider-' + sidebarColor, 'ant-layout-sider-' + sidebarTheme]"
    theme="light"
    :style="{ backgroundColor: 'transparent',}">
    <div class="logo brand"><img src="images/logo-ct-black.png" alt=""> <span>Muse</span>
    </div>
    <hr>

    <!-- Sidebar Navigation Menu -->
    <a-menu theme="white" v-model:open-keys="openKeys" v-model:selected-keys="selectedKeys" mode="inline">
      <menu-sidebar :menu="menu" :key="menu.path" v-for="menu in menus"/>
    </a-menu>

  </a-layout-sider>
  <!-- / Main Sidebar -->

</template>

<script lang="ts" src="./dashboard-sidebar.component.ts">
</script>
