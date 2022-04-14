<!--
	This is the main page of the application, the layout component is used here,
	and the router-view is passed to it.
	Layout component is dynamically declared based on the layout for each route,
	specified in routes list router/index.js .
 -->

<template>
  <div id="app">
    <button @click="testStore">Increase</button>
    <br>Value: <span>{{ $store.getters["counter/count"] }}</span>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

export default {
  methods: {
    testStore() {
      this.$store.dispatch('counter/increase', 5);
    }
  },
  computed: {
    // Sets components name based on current route's specified layout, defaults to
    // <layout-default></layout-default> component.
    layout() {
      return "layout-" + (this.$route.meta.layout || "default").toLowerCase();
    }
  },
}

</script>

<style lang="scss">
</style>
