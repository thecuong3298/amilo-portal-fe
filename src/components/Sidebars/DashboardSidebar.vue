<template>

  <!-- Main Sidebar -->
  <a-layout-sider
    collapsible
    class="sider-primary"
    breakpoint="lg"
    collapsed-width="0"
    width="250px"
    :collapsed="sidebarCollapsed"
    @collapse="$emit('toggleSidebar', ! sidebarCollapsed)"
    :trigger="null"
    :class="['ant-layout-sider-' + sidebarColor, 'ant-layout-sider-' + sidebarTheme]"
    theme="light"
    :style="{ backgroundColor: 'transparent',}">
    <div class="brand"><img src="images/logo-ct-black.png" alt=""> <span>Muse Dashboard</span></div>
    <hr>

    <!-- Sidebar Navigation Menu -->
    <a-menu theme="light" mode="inline" v-model:open-keys="openKeys" v-model:selected-keys="selectedKeys">
        <menu-sidebar :menu="menu" :key="menu.path" v-for="menu in menus" />
    </a-menu>

  </a-layout-sider>
  <!-- / Main Sidebar -->

</template>

<script lang="ts" src="./dashboard-sidebar.component.ts">
</script>
