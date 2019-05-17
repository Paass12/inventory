// 父组件页面
<template>
  <div id="app">
    <el-container>
      <!-- header -->
      <el-header id="header">Header</el-header>
      <el-container>
        <el-container>
          <el-main id="main" style="height:500px;padding:0">
            <h3>产品入库流水账</h3>
            <el-row>
              <el-col :span="20" :push="2">
                <div>
                  <el-form :inline="true">
                    <el-form-item style="float: left" label="查询信息:">
                      <el-input v-model="keyUser" placeholder="请输入产品代码......"></el-input>
                    </el-form-item>
                    <el-form-item style="float: right">
                      <el-button
                        type="primary"
                        size="small"
                        icon="el-icon-edit-outline"
                        @click="hanldeAdd()"
                      >添加</el-button>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="table">
                  <el-table :data="searchUserinfo(keyUser)" border style="width: 100%">
                    <el-table-column type="index" label="序号" align="center" width="60"></el-table-column>
                    <el-table-column label="日期" align="center" width="120">
                      <template slot-scope="scope">
                        <span>{{ scope.row.date | moment}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="产品代码" align="center" width="120">
                      <template slot-scope="scope">
                        <span>{{ scope.row.date | moment}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="产品名称" align="center" width="100">
                      <template slot-scope="scope">
                        <span>{{ scope.row.name }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="单位" align="center" width="160">
                      <template slot-scope="scope">
                        <span>{{ scope.row.email }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="规格" align="center" width="160">
                      <template slot-scope="scope">
                        <span>{{ scope.row.title }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="入库数量" align="center" width="200">
                      <template slot-scope="scope">
                        <span>{{ scope.row.evaluate }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="备注" align="center" width="160">
                      <template slot-scope="scope">
                        <span>{{ scope.row.state }}</span>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-col>
            </el-row>
            <AddUser :dialogAdd="dialogAdd" @update="getUserInfo"></AddUser>
            <EditUser :dialogEdit="dialogEdit" :form="form" @updateEdit="getUserInfo"></EditUser>
          </el-main>
          <!-- footer -->
          <el-footer id="footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  width: 100%;
}
#app #header {
  background-color: #303133;
}
#aside {
  background-color: rgb(240, 246, 246);
}
#footer {
  background-color: #303133;
}
</style>


<script>
import axios from "axios";

import AddUser from "./AddInMsg.vue";
import EditUser from "./EditInMsg.vue";
export default {
  name: "info",
  data() {
    return {
      tableData: [],
      first_ul:{
        show:false
      },
      dialogEdit: {
        show: false
      },
      dialogAdd: {
        show: false
      },
      keyUser: "",
      form: {
        //编辑信息
        date: "",
        name: "",
        email: "",
        title: "",
        evaluate: "",
        state: ""
      }
    };
  },
  methods: {
    getUserInfo() {
      this.$axios.get("http://localhost:3000/data").then(res => {
        console.log(res);
        this.tableData = res.data;
      });
    },
    hanldeAdd() {
      //添加
      this.dialogAdd.show = true;
    },
    handleEdit(index, row) {
      //编辑
      this.dialogEdit.show = true; //显示弹
      this.form = {
        date: row.date,
        name: row.name,
        email: row.email,
        title: row.title,
        evaluate: row.evaluate,
        state: row.state,
        id: row.id
      };
      console.log(row);
    },
    handleDelete(index, row) {
      // 删除用户信息
      this.$axios.delete(`http://localhost:3000/data/${row.id}`).then(res => {
        this.$message({
          type: "success",
          message: "删除信息成功"
        });
        this.getUserInfo(); //删除数据，更新视图
      });
    },
    searchUserinfo(keyUser) {
      return this.tableData.filter(user => {
        if (user.name.includes(keyUser)) {
          return user;
        }
      });
    },
    clickFirst(){
      this.first_ul.show = true
    }
  },
  created() {
    this.getUserInfo();
  },
  components: {
    AddUser,
    EditUser
  },

  name: "storageKeeper"
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  color: #333;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 5px;
  border-bottom: 2px solid #409eff;
  width: 300px;
}
</style>

