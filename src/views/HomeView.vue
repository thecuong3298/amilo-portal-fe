<template>
  <div>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import AlertService from '@/shared/alert/alert.service';
// import Button from "element-ui";

@Component
export default class HomeView extends Vue {
  @Inject('alertService') private alertService: () => AlertService;

  mounted() {
    this.alertService().showError('hi', 'Lỗi gòy');
  }
}
</script>
