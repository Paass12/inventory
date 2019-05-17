// 订单管理
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
        <el-menu-item index="order" @click="goTo('order')">
            <i class="el-icon-menu"></i>
            <span slot="title">客户订单</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>入出库管理</span>
            </template>
            <el-menu-item index="inbound" @click="goTo('inbound')">
                <i class="el-icon-location"></i>
                <template slot="title">入库单</template>
            </el-menu-item>
            <el-menu-item index="outbound" @click="goTo('outbound')">
              <i class="el-icon-location"></i>
              <template slot="title">出库单</template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="sold" @click="goTo('sold')">
            <i class="el-icon-location"></i>
            <span slot="title">财务报表</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <Order v-show="currentSubRouteName === 'order'"></Order>
    <InBound v-show="currentSubRouteName === 'inbound'"></InBound>
    <OutBound v-show="currentSubRouteName === 'outbound'"></OutBound>
    <Sold v-show="currentSubRouteName === 'sold'"></Sold>
  </div>
</template>

<script>
import api from '@/api/api'

import Order from '@/views/public/Order.vue'
import InBound from '@/views/public/InBound.vue'
import OutBound from '@/views/public/OutBound.vue'
import Sold from '@/views/public/Sold.vue'

export default {
    data() {
        return {
          tableData:null,
          listLoading:true,
          pagesize:5,
          currentPage:1,
          currentSubRouteName: 'order'
        }
    },
    components: { Order, InBound, OutBound, Sold },
    created () {
      this.fetchData()
    },
    methods: {
        handleSizeChange:function (size){
        this.pagesize = size;
        console.log(this.pagesize)
      },
      handleCurrentChange:function (currentPage){
        this.currentPage = currentPage;
        console.log(this.currentPage)
      },
      fetchData() {
        this.listLoading = true
        api.getInBoundList().then(res => {
          this.tableData = res.inboundLists;
          this.listLoading = false;
          // console.log(res)
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


