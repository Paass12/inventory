<template>
  <div class="tac">
    <el-row>
      <el-col :span="12">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          default-active="order"
          mode="horizontal"
        >
        <el-menu-item index="logList" @click="goTo('logList')">
            <i class="el-icon-menu"></i>
            <span slot="title">操作日志</span>
          </el-menu-item>
          <el-menu-item index="loginLogList" @click="goTo('loginLogList')">
            <i class="el-icon-location"></i>
            <span slot="title">登陆日志</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <LogList v-show="currentSubRouteName === 'logList'"></LogList>
    <LoginLogList v-show="currentSubRouteName === 'loginLogList'"></LoginLogList>
  </div>
</template>
<script>
import api from '@/api/api'
import LogList from '@/views/public/logList.vue'
import LoginLogList from '@/views/public/loginLogList.vue'

export default {
    data() {
        return {
          tableData:null,
          listLoading:true,
          currentSubRouteName: 'logList'
        }
    },
    components: { LogList,LoginLogList },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        api.getLogList().then(res => {
        this.list = res.LogList
        this.listLoading = false
      })
        
      },
      goTo (name) {
        this.currentSubRouteName = name
      }
    }
}
</script>

<style scoped>
.el-col-12{
  width: 100%;
}
</style>