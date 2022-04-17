<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'

export default {
  components: {
    'layout-default': DefaultLayout,
    'layout-dashboard': DashboardLayout
  },
  computed: {
    layout () {
      return 'layout-' + (this.$route.meta.layout || 'default').toLowerCase()
    }
  }
}

</script>

<style lang="scss">
</style>
