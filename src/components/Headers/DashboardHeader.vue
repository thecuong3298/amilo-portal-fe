<template>

  <!-- Main Sidebar -->
  <component :is="navbarFixed ? 'a-affix' : 'div'" :offset-top="top">

    <!-- Layout Header -->
    <a-layout-header>
      <a-row type="flex">

        <!-- Header Breadcrumbs & Title Column -->
        <a-col :span="24" :md="6">

          <!-- Header Breadcrumbs -->
          <a-breadcrumb>
            <a-breadcrumb-item>
              <router-link to="/"> Pages</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>{{ this.$route.name }}</a-breadcrumb-item>
          </a-breadcrumb>
          <!-- / Header Breadcrumbs -->

          <!-- Header Page Title -->
          <div class="ant-page-header-heading">
            <span class="ant-page-header-heading-title">{{ this.$route.name }}</span>
          </div>
          <!-- / Header Page Title -->

        </a-col>
        <!-- / Header Breadcrumbs & Title Column -->

        <!-- Header Control Column -->
        <a-col :span="24" :md="18" class="header-control">

          <!-- Header Control Buttons -->
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" style="margin-left: 1rem" @click.prevent>
              <bell-filled style="font-size: 1.3rem"/>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="0">
                  <a href="http://www.alipay.com/">1st menu item</a>
                </a-menu-item>
                <a-menu-item key="1">
                  <a href="http://www.taobao.com/">2nd menu item</a>
                </a-menu-item>
                <a-menu-divider/>
                <a-menu-item key="3">3rd menu item</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <!--lang-->
          <a-dropdown>
            <GlobalOutlined style="font-size: 1.3rem; margin-left: 1rem"/>
            <template #overlay>
              <a-menu>
                <a-menu-item v-for="language of languages" :key="language.value" @click="setLanguage(language.key)">
                  <a>{{ language.name }}</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar class="avatar" size="small" src="images/avatar2.jpg"/>
          <span class="nickname"> {{ 'admin' }} </span>
        </span>
            <template #overlay>
              <a-menu class="user-dropdown-menu-wrapper" @click="menuSelect">
                <div v-if="$store.getters.authenticate">
                  <a-menu-item key="profile">
                    <a>
                      <UserOutlined/>
                      <span> {{ $t('account.profile') }}</span>
                    </a>
                  </a-menu-item>
                  <a-menu-item key="settings">
                    <SettingOutlined/>
                    <span> {{ $t('account.settings') }}</span>
                  </a-menu-item>
                  <a-menu-divider/>
                  <a-menu-item key="logout">
                    <LogoutOutlined/>
                    <span> {{ $t('account.logout') }}</span>
                  </a-menu-item>
                </div>
              </a-menu>
            </template>
          </a-dropdown>
          <!-- / Header Search Input -->

        </a-col>
        <!-- / Header Control Column -->

      </a-row>
    </a-layout-header>
    <!--  /Layout Header -->

  </component>
  <!-- / Main Sidebar -->

</template>

<script lang="ts" src="./dashboard-header.component.ts">
</script>
