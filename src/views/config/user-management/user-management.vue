<template>
  <div>
    <table-custom
      :retrieve-data="userManagementService.retrieve"
      :columns="columns"
    >
      <template #cell="{ column }">
        <template v-if="column.dataIndex === 'custom'">sdfsdsaaaaaaa</template>
      </template>
    </table-custom>
  </div>
</template>

<script lang="ts" src="./user-management.component.ts"></script>
