// 操作日志
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
    <!-- 第一列：id -->
      <el-table-column align="center" label="请求ip" width="210">
        <template slot-scope="scope">
          {{ scope.row.requestIp }}
        </template>
      </el-table-column>
      <!-- 第二列：requestController -->
      <el-table-column label="requestController" width="320">
        <template slot-scope="scope">
          {{ scope.row.requestController }}
        </template>
      </el-table-column>
      <!-- 第三列: requestMethod -->
      <el-table-column label="requestMethod" width="220" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.requestMethod }}</span>
        </template>
      </el-table-column>
     <!-- 第四列：methodDescription -->
      <el-table-column label="methodDescription" width="255" align="center">
        <template slot-scope="scope">
          {{ scope.row.methodDescription }}
        </template>
      </el-table-column>
      <!-- 第五列：requestTime -->
      <el-table-column align="center" prop="created_at" label="requestTime" width="280">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.requestTime }}</span>
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
    // 获取操作日志
    fetchData () {
      this.listLoading = true
        api.getLogList().then(res => {
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
