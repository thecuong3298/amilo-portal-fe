<template>
  <a-sub-menu
    :key="menu.component.key"
    v-if="hasChild"
    :title="$t(menu.meta.title)"
  >
    <template #icon>
      <component :is="menu.meta.icon" class="icon" />
    </template>
    <menu-sidebar
      v-for="child in menu.children"
      :key="child.path"
      :menu="child"
    />
  </a-sub-menu>
  <a-menu-item v-else :key="menu.path">
    <component :is="menu.meta.icon" class="icon" />
    <router-link :to="menu.path">
      <span class="label">
        {{ $t(menu.meta.title) }}
      </span>
    </router-link>
  </a-menu-item>
</template>

<script lang="ts" src="./menu-sidebar.component.ts"></script>
