<template>
  <div>
    <a-table
      :columns="columns"
      :row-key="(record) => record.login.uuid"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template #bodyCell="{ text, record, index, column }">
        <slot
          name="cell"
          :text="text"
          :record="record"
          :index="index"
          :column="column"
        ></slot>
      </template>
      <template #headerCell="{ title, column }">
        <slot name="cell" :title="title" :column="column"></slot>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" src="./table.component.ts"></script>
