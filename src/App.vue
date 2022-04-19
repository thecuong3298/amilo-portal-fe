<template>
  <div id="app">
    <layout-dashboard v-if="useLayout">
      <router-view />
    </layout-dashboard>
    <router-view v-else />
  </div>
</template>

<script>
import DashboardLayout from './layouts/dashboard.vue';

export default {
  components: {
    'layout-dashboard': DashboardLayout,
  },
  computed: {
    useLayout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style lang="scss"></style>
