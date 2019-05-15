// 父组件页面
<template>
  <div id="app">
    <el-container>
      <!-- main -->
      <el-container>
        <el-main id="main" style="height:500px;padding:0">
          <h3>产品出库流水账</h3>
          <el-row>
            <el-col :span="20" :push="2">
              <div>
                <el-form :inline="true">
                  <el-form-item style="float: left" label="查询信息:">
                    <el-input v-model="keyProduct" placeholder="请输入填制人......"></el-input>
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
                  <!-- <el-table-column label="出库ID" align="center" width="110">
                    <template slot-scope="scope">
                      <span>{{ scope.row.orderId}}</span>
                    </template>
                  </el-table-column> -->
                  <el-table-column label="出库时间" align="center" width="180">
                    <template slot-scope="scope">
                      <span>{{ scope.row.outboundTime }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="产品代码" align="center" width="180" v-if="false">
                    <template slot-scope="scope">
                      <span>{{ scope.row.productId }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="仓库" align="center" width="180">
                    <template slot-scope="scope">
                      <span>{{ scope.row.warehouse }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="填制人" align="center" width="150">
                    <template slot-scope="scope">
                      <span>{{ scope.row.principal }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="备注" align="center" width="110">
                    <template slot-scope="scope">
                      <span>{{ scope.row.intro }}</span>
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
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button>

                      <!-- 这是删除弹出框 -->
                      <!-- <el-button size="mini" type="danger" @click="dialogVisible = true">点击打开 Dialog</el-button>
                      <el-dialog
                        title="提示"
                        :visible.sync="dialogVisible"
                        width="30%"
                      >
                        <span>这是一段信息</span>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="dialogVisible = false">取 消</el-button>
                          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                        </span>
                      </el-dialog> -->
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-col>
          </el-row>
          <AddOutProduct :dialogAdd="dialogAdd" @update="getOutboundList" :typeList="typeList"></AddOutProduct>
          <!-- <EditProduct :dialogEdit="dialogEdit" :form="form" @updateEdit="getProductInfo"></EditProduct> -->
          <ShowOutProduct :dialogOutShow="dialogOutShow" :form="form"  :allOutProduct="this.allOutProduct" @update="getOutboundList"></ShowOutProduct>

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
import AddOutProduct from './AddOutMsg.vue'
// import EditProduct from './EditInMsg.vue'
import ShowOutProduct from './ShowOutMsg.vue'
import api from '@/api/api'
export default {
  name: 'outboundRecords',
  data () {
    return {
      typeList: null,
      productList: null,
      allOutProduct: null,
      dialogVisible: false,
      show: false,
      tableData: null,
      dialogEdit: {
        show: false
      },
      dialogAdd: {
        show: false
      },
      dialogOutShow: {
        show: false
      },
      keyProduct: '',
      form: {
        // 编辑和查看信息
        id: '',
        outboundTime: '',
        warehouse: '',
        principal: '',
        customer: '',
        productId: '',
        outboundNum:''
      }
    }
  },
  methods: {
    getOutboundList () {
      api.getOutboundList().then(res => {
        this.tableData = res.outbounds
        // 传详情进去,第一层
        // this.productList = res.outbounds
        // console.log(this.productList)
        // 传详情进去,第二层
        // this.allOutProduct = res.outbounds[0]['product']
        // console.log(this.allOutProduct)
      })
    },
    getOutboundListDetail () {
      api.getOutboundList().then(res => {
        // 传详情进去
        // this.productList = res.outbounds.order.products
        // console.log(this.productList)
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
        // inboundTime: row.inboundTime,
        // productName: row.productName,
        // productScale: row.productScale,
        // count: row.count,
        // workshop: row.workshop,
        // state: row.state,
        // principal: row.principal,
        // id: row.id
      }
      console.log(row)
    },
    hanldeShow (index, row) {
      console.log(row)
      // 查看
      this.dialogOutShow.show = true
      this.form = {
        id: row.id,
        outboundTime: row.outboundTime,
        warehouse: row.warehouse,
        principal: row.principal,
        customer: row.customer,
        productId: row.productId,
        outboundNum: row.outboundNum,
      }
    },

    handleDelete (index, row) {
        console.log(row.id)
        api.deleteOutbound ({
        outboundId: parseInt(row.id)
      }) 
        .then(res => {
          console.log(res)
          this.getProductInfo(); //删除数据，更新视图
        })
    },

    searchProductInfo (keyProduct) {
      return this.tableData.filter(item => {
        if (item.principal.includes(keyProduct)) {
          return item
        }
      })
    }
  },
  created () {
    this.getOutboundList()
    this.getOutboundListDetail()
    this.getAllProducts()
  },
  components: {
    AddOutProduct,
    // EditProduct,
    ShowOutProduct
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
