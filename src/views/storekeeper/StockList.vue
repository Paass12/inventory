// 父组件页面
<template>
  <div id="app">
    <el-container>
      <!-- main -->
      <el-container>
        <el-main id="main" style="height:500px;padding:0">
          <h3>产品库存列表</h3>
          <el-row>
            <el-col :span="20" :push="2">
              <div>
                <el-form :inline="true">
                  <el-form-item style="float: left" label="查询信息:">
                    <el-input v-model="keyProduct" placeholder="请输入产品代码......"></el-input>
                  </el-form-item>
                </el-form>
              </div>
              <div class="table">
                <el-table :data="searchProductInfo(keyProduct)" border style="width: 100%">
                  <el-table-column type="index" label="序号" align="center" width="60"></el-table-column>
                  <el-table-column label="产品代码" align="center" width="180">
                    <template slot-scope="scope">
                      <span>{{ scope.row.productId}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="库存量" align="center" width="180">
                    <template slot-scope="scope">
                      <span>{{ scope.row.stock }}</span>
                    </template>
                  </el-table-column>

                </el-table>
              </div>
            </el-col>
          </el-row>
          <!-- <ShowOutProduct :dialogOutShow="dialogOutShow" :form="form" :productList="productList" :allOutProduct="allOutProduct" @update="getOutboundList"></ShowOutProduct>           -->
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
// import AddOutProduct from './AddOutMsg.vue'
// import EditProduct from './EditInMsg.vue'
// import ShowOutProduct from './ShowOutMsg.vue'
import api from '@/api/api'
export default {
  name: 'stockList',
  data () {
    return {
      productInformation: null,
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
        orderId: '',
        outboundTime: '',
        warehouse: '',
        principal: ''
      }
    }
  },
  methods: {
    getStockList () {
      api.getStockList().then(res => {
        this.tableData = res.stocks
        this.productInformation = res.stocks.product        
        console.log(this.productInformation)
      })
    },
    // getOutboundListDetail () {
    //   api.getOutboundList().then(res => {
    //     // 传详情进去
    //     // this.productList = res.outbounds.order.products
    //     // console.log(this.productList)
    //   })
    // },

    // hanldeShow (index, row) {
    //   // 查看
    //   this.dialogOutShow.show = true
    //   this.form = {
    //     orderId: row.orderId,
    //     outboundTime: row.outboundTime,
    //     warehouse: row.warehouse,
    //     principal: row.principal
    //   }
    // },

    // handleDelete (index, row) {
    // },

    searchProductInfo (keyProduct) {
      return this.tableData.filter(item => {
        if (String(item.productId).includes(keyProduct)) {
          return item
        }
      })
    }
  },
  created () {
    this.getStockList()
    // this.getOutboundList()
    // this.getOutboundListDetail()
    // this.getAllProducts()
  }
//   components: {  
//     // ShowOutProduct
//   }
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
