// 登陆日志
<template>
  <div class="wrap">
    <div>
    <!-- 表单 -->
    <el-table
      v-loading="listLoading"
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      element-loading-text="Loading"
      stripe
      border
      fit
      highlight-current-row
      :default-sort = "{prop: 'data',order:'descending'}"
    >
    <!-- 第一列：operationType -->
      <el-table-column align="center" label="操作类型" width="200">
        <template slot-scope="scope">
          {{ scope.row.operationType }}
        </template>
      </el-table-column>
      <!-- 第二列：loginIp -->
      <el-table-column label="登陆ip" width="160">
        <template slot-scope="scope">
          {{ scope.row.loginIp }}
        </template>
      </el-table-column>
      <!-- 第三列: username -->
      <el-table-column label="工号" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>
     <!-- 第四列：adminName -->
      <el-table-column label="用户名" width="235" align="center">
        <template slot-scope="scope">
          {{ scope.row.adminName }}
        </template>
      </el-table-column>
      <!-- 第五列：loginTime -->
      <el-table-column align="center" prop="created_at" label="登陆时间" width="245">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.loginTime }}</span>
        </template>
      </el-table-column>
      <!-- 第六列：intro -->
      <el-table-column align="center" prop="created_at" label="操作状态" width="255">
        <template slot-scope="scope">
          <i class="el-icon-location-information" />
          <span>{{ scope.row.intro }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="fy"
      layout="total,sizes,prev,pager,next,jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,10,20,40]"
      :page-size="pagesize"
      :total="tableData.length"
      backgruond>
    </el-pagination>
  </div>
  </div>
</template>

<script>
// import { getList } from '@/api/mock'
import api from '@/api/api'
export default {
  data () {
    return {
      tableLength:null,
      listLoading: true,
      pagesize:8,
      tableData:null,
      currentPage:1,
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    handleSizeChange:function (size){
    this.pagesize = size;
    },
    handleCurrentChange:function (currentPage){
        this.currentPage = currentPage;
        // console.log(this.currentPage)
      },
    // 获取登陆日志
    fetchData () {
      this.listLoading = true
        api.getLoginLog ().then(res => {
        this.tableData = res.logs
        this.listLoading = false
      })
    }
  }
}
</script>

<style scoped>
.wrap {
  box-sizing: border-box;
  padding: 30px;
}
#btnuser{
  width: 100%;
  /* border: 1px solid red; */
}
#btnuser .searchinput{
  width: 300px;
  float: left;
  /* border:1px solid red; */
}
#btnuser .addbtn{
  float: right;
}
</style>
