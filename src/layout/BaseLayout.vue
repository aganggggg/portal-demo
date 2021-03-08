<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header class="header">
      <a-row>
        <a-col :span="3" style="font-size:20px">
          <a-icon class="logo" type="crown" />
          <span class="title">统一门户</span>
        </a-col>
        <a-col :span="6">
          <a-menu
            v-model="currentMenu"
            mode="horizontal"
            theme="light"
            :style="{ lineHeight: '64px' }"
            @click="onSelect"
          >
            <a-menu-item key="quick">快捷访问</a-menu-item>
            <a-menu-item key="application">业务系统</a-menu-item>
          </a-menu>
        </a-col>
        <a-col :span="4" push="11"
          ><a-icon type="smile" style="padding:5px" />
          <a type="link">admin</a>
        </a-col>
      </a-row>
    </a-layout-header>
    <div
      :style="{
        overflow: 'hidden',
        position: 'relative'
      }"
    >
      <a-layout-content :style="{ padding: '0 50px' }">
        <a-drawer
          placement="top"
          :closable="false"
          :visible="showMenu"
          @close="onMenuClose"
          :get-container="false"
          :wrap-style="{ position: 'absolute' }"
          :style="{ 'margin-top': '64px' }"
        >
        </a-drawer>
      
        <div
          :style="{ background: '#fff', padding: '24px', minHeight: '280px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
    </div>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      currentMenu: [""],
      showMenu: false
    };
  },
  methods: {
    onSelect(item) {
      this.showMenu = true;
    },
    onMenuClose() {
      this.showMenu = false;
      this.currentMenu = [""];
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  background-color: white;
  padding: 0;
}
.title {
  margin: 0 20px;
}
</style>
