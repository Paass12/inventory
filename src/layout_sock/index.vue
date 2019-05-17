<template>
  <div class="app-wrapper">
    <div class="header">
      <div> </div>
      <el-popover placement="bottom" width="200" trigger="click">
        <div @click="bindOut" style="cursor: pointer;text-align: center;">退出登陆</div>
        <div class="user"  slot="reference">
          <div class="name">warehouseAdmin</div>
          <img class="head" src="@/images/stock.jpg" alt="" style="border-radius:50%;width:50px;">
        </div>
      </el-popover>
    </div>
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import api from '@/api/api'

export default {
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  methods: {
    bindOut () {
      api.logout()
        .then(res => {
          this.$router.push({
            name: 'home'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
@import "~@/styles/sidebar.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  box-sizing: border-box;
  width: calc(100% - #{$sideBarWidth});
  height: 50px;
  padding: 0 10px;
  background: #4b5f6e;
}

.user {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.head {
  border-radius: 5px;
  overflow: hidden;
  margin-left: 10px;
}

.fixed-header {
  position: fixed;
  top: 50px;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
</style>
