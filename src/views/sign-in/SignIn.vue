<template>
  <div class="login-container">
    <sign-up :msg="'hihi'" />
    <el-row>
      <el-col :md="16" :lg="16">
        <img :src="ImageLogin" style="height: 100vh" />
      </el-col>
      <el-col :md="8" :sm="24" style="padding: 1rem; padding-top: 3rem">
        <img :src="logo2" />
        <el-form
          :model="formState"
          name="basic"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }"
          label-align="left"
          autocomplete="off"
        >
          <el-form-item
            label="Username"
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <el-input v-model:value="formState.username" />
          </el-form-item>

          <el-form-item
            label="Password"
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <el-input v-model:value="formState.password" />
          </el-form-item>

          <el-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <el-checkbox v-model:checked="formState.rememberMe">
              Remember me
            </el-checkbox>
          </el-form-item>

          <el-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <el-button type="primary" @click="onFinish">Submit</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" src="./sign-in.component.ts" />

<style lang="scss">
body {
  background-color: #ffffff;
}
</style>
