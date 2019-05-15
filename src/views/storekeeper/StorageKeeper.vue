// 父组件页面
<template>
  <div id="app">
    <el-container>
      <!-- header -->
      <el-header id="header">Header</el-header>
      <el-container>
        <!-- aside -->
        <!-- <el-aside width="200px" id="aside">
          <aside class="el-aside" style="width: 150px; background-color: rgb(238, 241, 246);">
            <ul
              role="menubar"
              class="el-menu-vertical-demo el-menu"
              style="background-color: rgb(240, 246, 246);"
            >
              <div data-v-9e314674 class="navMenu">
                <label data-v-9e314674>
                  <a data-v-9e314674 href class></a>
                  <li
                    data-v-9e314674
                    role="menuitem"
                    aria-haspopup="true"
                    class="el-submenu is-active"
                    data="[object Object]"
                  >
                    <div
                      class="el-submenu__title"
                      style="padding-left: 20px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                      @click="clickFirst"
                    >
                      <i data-v-9e314674 class="el-icon-message"></i>
                      <span data-v-9e314674>系统管理</span>
                      <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
                    </div>
                    <ul
                      v-bind="first_ul"
                      role="menu"
                      class="el-menu el-menu--inline"
                      data-old-padding-top
                      data-old-padding-bottom
                      data-old-overflow
                      style="background-color: rgb(240, 246, 246); "
                    >
                      <div data-v-9e314674 class="navMenu">
                        <label data-v-9e314674>
                          <a data-v-9e314674 href class>
                            <li
                              data-v-9e314674
                              role="menuitem"
                              tabindex="-1"
                              class="el-menu-item"
                              data="[object Object]"
                              style="padding-left: 40px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                            >
                              <i data-v-9e314674 class="el-icon-loading"></i>
                              <span data-v-9e314674>权限管理</span>
                            </li>
                          </a>
                        </label>
                        <label data-v-9e314674>
                          <a data-v-9e314674 href class>
                            <li
                              data-v-9e314674
                              role="menuitem"
                              tabindex="-1"
                              class="el-menu-item"
                              data="[object Object]"
                              style="padding-left: 40px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                            >
                              <i data-v-9e314674 class="el-icon-bell"></i>
                              <span data-v-9e314674>角色管理</span>
                            </li>
                          </a>
                        </label>
                        <label data-v-9e314674>
                          <a
                            data-v-9e314674
                            href
                            class="router-link-exact-active router-link-active"
                          >
                            <li
                              data-v-9e314674
                              role="menuitem"
                              tabindex="-1"
                              class="el-menu-item is-active"
                              data="[object Object]"
                              style="padding-left: 40px; color: rgb(255, 102, 0); background-color: rgb(240, 246, 246);"
                            >
                              <i data-v-9e314674 class="el-icon-edit"></i>
                              <span data-v-9e314674>菜单管理</span>
                            </li>
                          </a>
                        </label>
                        <label data-v-9e314674>
                          <a data-v-9e314674 href class>
                            <li
                              data-v-9e314674
                              role="menuitem"
                              tabindex="-1"
                              class="el-menu-item"
                              data="[object Object]"
                              style="padding-left: 40px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                            >
                              <i data-v-9e314674 class="el-icon-mobile-phone"></i>
                              <span data-v-9e314674>分组管理</span>
                            </li>
                          </a>
                        </label>
                      </div>
                    </ul>
                  </li>
                </label>
                <label data-v-9e314674>
                  <a data-v-9e314674 href class></a>
                  <li
                    data-v-9e314674
                    role="menuitem"
                    aria-haspopup="true"
                    class="el-submenu"
                    data="[object Object]"
                  >
                    <div
                      class="el-submenu__title"
                      style="padding-left: 20px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                    >
                      <i data-v-9e314674 class="el-icon-news"></i>
                      <span data-v-9e314674>用户管理</span>
                      <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
                    </div>
                    <ul
                      role="menu"
                      class="el-menu el-menu--inline"
                      style="background-color: rgb(240, 246, 246); display: none;"
                      data-old-padding-top
                      data-old-padding-bottom
                      data-old-overflow
                    >
                      <div data-v-9e314674 class="navMenu">
                        <label data-v-9e314674>
                          <a data-v-9e314674 href class></a>
                          <li
                            data-v-9e314674
                            role="menuitem"
                            aria-haspopup="true"
                            class="el-submenu"
                            data="[object Object]"
                          >
                            <div
                              class="el-submenu__title"
                              style="padding-left: 40px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                            >
                              <i data-v-9e314674 class="el-icon-phone-outline"></i>
                              <span data-v-9e314674>帐号管理</span>
                              <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
                            </div>
                            <ul
                              role="menu"
                              class="el-menu el-menu--inline"
                              style="background-color: rgb(240, 246, 246); display: none;"
                            >
                              <div data-v-9e314674 class="navMenu">
                                <label data-v-9e314674>
                                  <a data-v-9e314674 href class>
                                    <li
                                      data-v-9e314674
                                      role="menuitem"
                                      tabindex="-1"
                                      class="el-menu-item"
                                      data="[object Object]"
                                      style="padding-left: 60px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                                    >
                                      <i data-v-9e314674 class="el-icon-sold-out"></i>
                                      <span data-v-9e314674>邮箱管理</span>
                                    </li>
                                  </a>
                                </label>
                                <label data-v-9e314674>
                                  <a
                                    data-v-9e314674
                                    href="#/ele/elc/%E5%AF%86%E7%A0%81%E7%AE%A1%E7%90%86"
                                    class
                                  >
                                    <li
                                      data-v-9e314674
                                      role="menuitem"
                                      tabindex="-1"
                                      class="el-menu-item"
                                      data="[object Object]"
                                      style="padding-left: 60px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                                    >
                                      <i data-v-9e314674 class="el-icon-service"></i>
                                      <span data-v-9e314674>密码管理</span>
                                    </li>
                                  </a>
                                </label>
                              </div>
                            </ul>
                          </li>
                        </label>
                        <label data-v-9e314674>
                          <a
                            data-v-9e314674
                            href="#/ele/elc/%E7%A7%AF%E5%88%86%E7%AE%A1%E7%90%86"
                            class
                          >
                            <li
                              data-v-9e314674
                              role="menuitem"
                              tabindex="-1"
                              class="el-menu-item"
                              data="[object Object]"
                              style="padding-left: 40px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                            >
                              <i data-v-9e314674 class="el-icon-picture"></i>
                              <span data-v-9e314674>积分管理</span>
                            </li>
                          </a>
                        </label>
                      </div>
                    </ul>
                  </li>
                </label>
                <label data-v-9e314674>
                  <a data-v-9e314674 href="#/ele/elc/%E5%86%85%E5%AE%B9%E7%AE%A1%E7%90%86" class></a>
                  <li
                    data-v-9e314674
                    role="menuitem"
                    aria-haspopup="true"
                    class="el-submenu"
                    data="[object Object]"
                  >
                    <div
                      class="el-submenu__title"
                      style="padding-left: 20px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                    >
                      <i data-v-9e314674 class="el-icon-rank"></i>
                      <span data-v-9e314674>内容管理</span>
                      <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
                    </div>
                    <ul
                      role="menu"
                      class="el-menu el-menu--inline"
                      style="background-color: rgb(240, 246, 246); display: none;"
                      data-old-padding-top
                      data-old-padding-bottom
                      data-old-overflow
                    >
                      <div data-v-9e314674 class="navMenu">
                        <label data-v-9e314674>
                          <a
                            data-v-9e314674
                            href="#/ele/elc/%E5%88%86%E7%B1%BB%E7%AE%A1%E7%90%86"
                            class
                          >
                            <li
                              data-v-9e314674
                              role="menuitem"
                              tabindex="-1"
                              class="el-menu-item"
                              data="[object Object]"
                              style="padding-left: 40px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                            >
                              <i data-v-9e314674 class="el-icon-printer"></i>
                              <span data-v-9e314674>分类管理</span>
                            </li>
                          </a>
                        </label>
                        <label data-v-9e314674>
                          <a
                            data-v-9e314674
                            href="#/ele/elc/%E6%96%87%E7%AB%A0%E7%AE%A1%E7%90%86"
                            class
                          >
                            <li
                              data-v-9e314674
                              role="menuitem"
                              tabindex="-1"
                              class="el-menu-item"
                              data="[object Object]"
                              style="padding-left: 40px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                            >
                              <i data-v-9e314674 class="el-icon-star-on"></i>
                              <span data-v-9e314674>文章管理</span>
                            </li>
                          </a>
                        </label>
                        <label data-v-9e314674>
                          <a
                            data-v-9e314674
                            href="#/ele/elc/%E8%AF%84%E8%AE%BA%E7%AE%A1%E7%90%86"
                            class
                          >
                            <li
                              data-v-9e314674
                              role="menuitem"
                              tabindex="-1"
                              class="el-menu-item"
                              data="[object Object]"
                              style="padding-left: 40px; color: rgb(60, 63, 65); background-color: rgb(240, 246, 246);"
                            >
                              <i data-v-9e314674 class="el-icon-share"></i>
                              <span data-v-9e314674>评论管理</span>
                            </li>
                          </a>
                        </label>
                      </div>
                    </ul>
                  </li>
                </label>
              </div>
            </ul>
          </aside>
        </el-aside> -->
        <!-- main -->
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
                    <!-- <el-table-column label="操作" fixed="right">
                      <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                          size="mini"
                          type="danger"
                          @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                      </template>
                    </el-table-column> -->
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
/* #main {
  background-color: #16c550;
} */
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

