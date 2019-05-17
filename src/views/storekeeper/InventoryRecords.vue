// 父组件页面
<template>
  <div id="app">
    <el-container>
      <!-- main -->
      <el-container>
        <el-main id="main" style="height:500px;padding:0">
          <h3>产品入库流水账</h3>
          <el-row>
            <el-col :span="20" :push="2">
              <div>
                <el-form :inline="true">
                  <el-form-item style="float: left" label="查询信息:">
                    <el-input v-model="keyProduct" placeholder="请输入产品名称......"></el-input>
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
                <el-table :data="searchProductInfo(keyProduct)" border style="width: 100%">
                  <el-table-column type="index" label="序号" align="center" width="60"></el-table-column>
                  <el-table-column label="产品代码" align="center" width="120">
                    <template slot-scope="scope">
                      <span>{{ scope.row.productId}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="产品名称" align="center" width="140">
                    <template slot-scope="scope">
                      <span>{{ scope.row.productName }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="单位" align="center" width="100" v-if="show">
                    <template slot-scope="scope">
                      <span>{{ scope.row.productUnit }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="规格" align="center" width="140">
                    <template slot-scope="scope">
                      <span>{{ scope.row.productScale }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="入库数量" align="center" width="110">
                    <template slot-scope="scope">
                      <span>{{ scope.row.count }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="日期" align="center" width="220">
                    <template slot-scope="scope">
                      <span>{{ scope.row.inboundTime}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="生产车间" align="center" width="160" v-if="show">
                    <template slot-scope="scope">
                      <span>{{ scope.row.workshop }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column label="填制人" align="center" width="100" v-if="show">
                    <template slot-scope="scope">
                      <span>{{ scope.row.principal }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center" width="150" fixed="right">
                    <template slot-scope="scope">
                      <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" type="primary">编辑</el-button> -->
                      <el-button
                        size="mini"
                        @click="hanldeShow(scope.$index, scope.row)"
                        type="success"
                      >查看</el-button>
                      <!-- 这是删除弹出框 -->
                      <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                      <!-- <el-dialog
                        title="提示"
                        :visible.sync="dialogVisible"
                        width="30%"
                        
                      >
                        <span>确认删除</span>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="dialogVisible = false">取 消</el-button>
                          <el-button type="primary" @click="handleDelete(scope.row.productId)">确 定</el-button>
                        </span>
                      </el-dialog> -->
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-col>
          </el-row>
          <AddProduct :dialogAdd="dialogAdd" @update="getProductInfo" :typeList="typeList"></AddProduct>
          <EditProduct :dialogEdit="dialogEdit" :form="form" @updateEdit="getProductInfo"></EditProduct>
          <ShowProduct :dialogShow="dialogShow" :form="form" @updateEdit="getProductInfo"></ShowProduct>
        </el-main>
        <!-- footer -->
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
import AddProduct from './AddInMsg.vue'
import EditProduct from './EditInMsg.vue'
import ShowProduct from './ShowInMsg.vue'
import api from '@/api/api'
import { parse } from 'path';
export default {
  name: 'storageKeeper',
  data () {
    return {
      dialogVisible: false,
      show: false,
      inboundId: '',
      tableData: null,
      typeList: null,
      dialogEdit: {
        show: false
      },
      dialogAdd: {
        show: false
      },
      dialogShow: {
        show: false
      },
      keyProduct: '',
      form: {
        // 编辑和查看信息
        date: '',
        productId: '',
        productName: '',
        productUnit: '',
        productScale: '',
        inboundTime: '',
        count: '',
        workshop: '',
        principal: ''
      }
    }
  },
  methods: {
    getProductInfo () {
      api.getInboundList().then(res => {
        this.tableData = res.inboundLists
      })
    },
    getAllProducts () {
      api.getAllProducts().then(res => {
        this.typeList = res.products
      })
    },
    hanldeAdd () {
      // 添加
      this.dialogAdd.show = true
    },
    handleEdit (index, row) {
      // 编辑
      this.dialogEdit.show = true // 显示弹
      this.form = {
        inboundTime: row.inboundTime,
        productName: row.productName,
        productScale: row.productScale,
        count: row.count,
        workshop: row.workshop,
        state: row.state,
        principal: row.principal,
        id: row.id
      }
      console.log(row)
    },
    hanldeShow (index, row) {
      // 查看
      this.dialogShow.show = true
      this.form = {
        productId: row.productId,
        inboundTime: row.inboundTime,
        productName: row.productName,
        productScale: row.productScale,
        count: row.count,
        workshop: row.workshop,
        state: row.state,
        principal: row.principal,
        productUnit: row.productUnit,
        id: row.id
      }
    },
    handleDelete (id) {
      // this.dialogVisible = false
      console.log(id)
      api.deleteInbound ({
        inboundId: parseInt(id)
      }).then(res => {
          console.log(res)
          this.getProductInfo(); //删除数据，更新视图
        })
    },
    

    searchProductInfo (keyProduct) {
      return this.tableData.filter(item => {
        if (item.productName.includes(keyProduct)) {
          return item
        }
      })
    }
  },
  created () {
    this.getProductInfo()
    this.getAllProducts()
  },
  components: {
    AddProduct,
    EditProduct,
    ShowProduct
  }

  // name: "storageKeeper"
}
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
