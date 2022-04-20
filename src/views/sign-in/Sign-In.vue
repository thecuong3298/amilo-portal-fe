<template>
  <div class="login-container">
    <a-row>
      <a-col :span="0" :md="16">
        <img :src="ImageLogin" style="height: 100vh" />
      </a-col>
      <a-col :span="24" :md="8" style="padding: 1rem; padding-top: 3rem">
        <img :src="logo2" />
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }"
          label-align="left"
          autocomplete="off"
        >
          <a-form-item
            label="Username"
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.rememberMe">
              Remember me
            </a-checkbox>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" @click="onFinish">Submit</a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" src="./sign-in.component.ts" />

<style lang="scss">
body {
  background-color: #ffffff;
}
</style>
