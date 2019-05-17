// 父组件页面
<template>
  <div id="app">
    <el-container>
      <!-- main -->
      <el-container>
        <el-main id="main" style="height:500px;padding:0">
          <h3>库存小于最低储备列表或即将大于最高储备</h3>
          <el-row>
            <el-col :span="20" :push="2">
              <div class="table">
                <el-table :data="searchProductInfo()" border style="width: 100%">
                  <el-table-column type="index" label="序号" align="center" width="60"></el-table-column>
                  <el-table-column label="产品代码" align="center" width="220">
                    <template slot-scope="scope">
                      <span>{{ scope.row.productId}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="库存量" align="center" width="220">
                    <template slot-scope="scope">
                      <span style="color:red">{{ scope.row.stock }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="最低储备" align="center" width="220">
                    <template>
                      <span>{{ minCount }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="最高储备" align="center" width="">
                    <template>
                      <span>{{ maxCount }}</span>
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
      minCount: '',
      maxCount: '',
      dialogEdit: {
        show: false
      },

      dialogAdd: {
        show: false
      },
      dialogOutShow: {
        show: false
      },
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
        // this.productInformation = res.stocks.product        
        // console.log(this.productInformation)
      })
    },
    searchProductInfo () {
      return this.tableData.filter(item => {
        if ( (parseInt(item.stock) < parseInt(item.product.minCount)) || (parseInt(item.product.maxCount)-parseInt(item.stock) < 20) ) {
          this.minCount = ''
          this.maxCount = ''
          console.log(item.stock)
          console.log(item.product.minCount)
          this.minCount = item.product.minCount
          this.maxCount = item.product.maxCount
          return item
        }
      })
    }
  },
  created () {
    this.getStockList()
  }

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
