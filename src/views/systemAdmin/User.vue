// 角色管理
<template>
  <div class="wrap">
    <div id="btnuser">
      <el-input
        placeholder="请输入工号"
        v-model="keyUser"
        class="searchinput">
        <i slot="prefix" class="el-input__icon el-icon-search" ></i>
      </el-input>
      <el-button @click="dialogFormVisible = true" class="addbtn" type="success">增加管理员</el-button>
    </div>
  <!-------------------------------- addAdmin----------------------- -->
  <!-- Form -->
      <el-dialog title="增加管理员" :visible.sync="dialogFormVisible" style="width:1000px;margin-left:250px">
        <el-form :model="form">
          <el-form-item label="工号" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off" maxlength="9" style="width:300px;float:left"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off" style="width:300px;float:left"></el-input>
          </el-form-item>
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" style="width:300px;float:left"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="form.phoneNumber" autocomplete="off" style="width:300px;float:left"></el-input>
          </el-form-item>
          <el-form-item label="身份类型" :label-width="formLabelWidth">
            <el-select v-model="form.adminType" placeholder="请选择身份类型" style="width:300px;float:left" >
              <el-option label="系统管理员" value="1"></el-option>
              <el-option label="仓库管理员" value="2"></el-option>
              <el-option label="财务管理员" value="3"></el-option>
            </el-select>
            <!-- <el-input v-model="addAdminForm.adminType" autocomplete="off" style="width:300px;float:left"></el-input> -->
          </el-form-item> 
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addAdmin()">确 定</el-button>
        </div>
      </el-dialog>
    <div>
    <!-- 表单 -->
    <el-table
      v-loading="listLoading"
      :data="userList"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
    <!-- 第一列：id -->
      <el-table-column align="center" label="ID" width="85">
        <template slot-scope="scope">
          {{ scope.row.adminType }}
        </template>
      </el-table-column>
      <!-- 第二列：username -->
      <el-table-column label="工号" width="255">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <!-- 第三列: name -->
      <el-table-column label="用户名" width="220" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
     <!-- 第四列：phonenumber -->
      <el-table-column label="联系方式" width="255" align="center">
        <template slot-scope="scope">
          {{ scope.row.phoneNumber }}
        </template>
      </el-table-column>
      <!-- 第五列：userType -->
      <el-table-column align="center" prop="created_at" label="身份类型" width="255">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.intro }}</span>
        </template>
      </el-table-column>
      <!-- 第六列--操作按钮 -->
      <el-table-column align="center" label=" " width="200">
        <template slot-scope="scope">
          <el-button class="deletebtn" type="danger" @click="handleClickDelete(scope.$index, scope.row)">删除</el-button>          
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        title="警告"
        :visible.sync="showlog"
        width="30%">
        <span>确定删除？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showlog = false">取 消</el-button>
          <el-button type="primary" @click="handleDeleteUser">确 定</el-button>
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
      userList: [],
      deleteRow: {},
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
    searchUsertInfo () {
      const userList = this.list.filter(item => {
        if (item.username.includes(this.keyUser)) {
          return item
        }
      })
      this.userList = userList
    },
    // 获取管理员信息列表
    fetchData () {
      this.listLoading = true
      api.users().then(res => {
        this.list = res.adminList
        this.listLoading = false
        this.searchUsertInfo()
      })
    },
    // 添加管理员
    addAdmin () {
      api.addAdmins ({
        username: this.form.username,
        password: this.form.password,
        name: this.form.name,
        phoneNumber: this.form.phoneNumber,
        adminType: this.form.adminType
      }) 
        .then(res => {
          fetchData()
          console.log(res)
          this.dialogFormVisible = false
        })
    },
    handleClickDelete (index, row) {
      this.deleteRow = { index, row }
      this.showlog = true
    },
    handleDeleteUser () {
      api.deleteAdmins({ username: this.deleteRow.row.username }).then(res => {
        this.showlog = false
        if (res.resultCode === 0 && res.info === '删除成功') {
          // here here here here here
          // here here here here here
          // here here here here here
          // here you can do something else after delete a admin
          // such as alert or console
          this.userList.splice(this.deleteRow.index, 1)
        }
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
