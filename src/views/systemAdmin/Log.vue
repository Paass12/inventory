// 日志管理
<template>
  <div class="wrap">
    <div id="btnuser">
      <el-input
        placeholder="请输入查询ip"
        v-model="keyUser"
        class="searchinput">
        <i slot="prefix" class="el-input__icon el-icon-search" ></i>
      </el-input>
      <el-button @click="dialogFormVisible = true" class="addbtn" type="success">查看登陆日志</el-button>
    </div>
    <!-- 登陆日志 -->
    
    <div>
    <!-- 表单 -->
    <el-table
      v-loading="listLoading"
      :data="searchUsertInfo(keyUser)"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
    <!-- 第一列：id -->
      <el-table-column align="center" label="请求ip" width="220">
        <template slot-scope="scope">
          {{ scope.row.requestIp }}
        </template>
      </el-table-column>
      <!-- 第二列：requestController -->
      <el-table-column label="requestController" width="255">
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
      <el-table-column align="center" prop="created_at" label="requestTime" width="255">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.requestTime }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        title="警告"
        :visible.sync="showlog"
        width="30%"
        :before-close="handleClose">
        <span>确定删除？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showlog = false">取 消</el-button>
          <el-button type="primary" @click="showlog = false">确 定</el-button>
        </span>
      </el-dialog>
    <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
    </div>
  </div>
  </div>
</template>

<script>
// import { getList } from '@/api/mock'
import api from '@/api/api'
export default {
  data () {
    return {
      list: null,
      keyUser:'',
      listLoading: true,
      showlog: false,
      dialogFormVisible: false,
      form: {
          username: '',
          password: '',
          name: '',
          phoneNumber: '',
          adminType: '',
        },
      formLabelWidth: '80px',
    }
  },
  mounted(){
　　this.init() //页面内初始加载就调用这个函数
  },
  created () {
    this.fetchData()
  },
  methods: {
    searchUsertInfo (keyUser) {
      return this.list.filter(item => {
        if (item.requestIp.includes(keyUser)) {
          return item
        }
      })
    },
    // 获取操作日志
    fetchData () {
      this.listLoading = true
      api.getLogList().then(res => {
        this.list = res.logs
        this.listLoading = false
      })
    },
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
