<template>
  <div class="logo">
    <router-link :to="{ name: 'dashboard' }">
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logo",
  title: {
    type: String,
    default: "Ant Design Pro",
    required: false,
  },
  showTitle: {
    type: Boolean,
    default: true,
    required: false,
  },
});
</script>
