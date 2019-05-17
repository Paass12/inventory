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
                    <el-row>
                      <el-col><el-input v-model="keyProduct" placeholder="请输入产品代码......"></el-input></el-col>
                      <!-- <el-col :span="8"><el-button type="primary" @click="searchProductInfo(keyProduct)">搜索</el-button></el-col> -->
                    </el-row>
                  </el-form-item>
                </el-form>
              </div>
              <div class="table">
                <el-table :data="searchProductInfo (keyProduct)" border style="width: 100%">
                  <el-table-column type="index" label="序号" align="center" width="60"></el-table-column>
                  <el-table-column label="产品代码" align="center" width="220">
                    <template slot-scope="scope">
                      <span>{{ scope.row.productId}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="库存量" align="center" width="220">
                    <template slot-scope="scope">
                      <span>{{ scope.row.stock }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column label="产品详情" align="center" width="" fixed="right">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="hanldeShow(scope.row.productId)"
                        type="success"
                      >查看</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-col>
          </el-row>
          <div>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[1, 3, 5, 8]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalNum">
            </el-pagination>
          </div>
          <ShowOutProduct :dialogOutShow="dialogOutShow" :productInformation="this.productInformation"></ShowOutProduct>          
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
import ShowOutProduct from './ShowStockDetail.vue'
import api from '@/api/api'
import { isError } from 'util';
export default {
  name: 'stockList',
  data () {
    return {
      total:'0',
      currentPage: 1,//默认显示第一页
      pageSize:5,//默认每页显示10条
      totalNum: Number, //总页数
      needid: '',
      dialogOutShow: false,
      productInformation: null,
      name:'',
      unit:'',
      scale:'',
      cost:'',
      resale:'',
      maxCount:'',
      minCount:'',
      dialogVisible: false,
      show: false,
      tableData: null,
      tableDataNow:null,
      tableNew:Array,
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
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;    //动态改变
        this.tableDataNow = this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;    //动态改变
        this.tableDataNow = this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
      },
    hanldeShow (id) {
      // console.log(id)
      this.needid = id
      api.getStock ({
        productId: this.needid
      }).then(res => {
          console.log(res)
          console.log(res.stock.product)
          this.productInformation = res.stock.product
          console.log(this.productInformation)
        })

      // console.log(this.needid)
      this.dialogOutShow.show = true
    },
    getStockList () {
      api.getStockList().then(res => {
        this.tableData = res.stocks
        this.totalNum=this.tableData.length;
        this.tableDataNow = this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
      })
    },

    searchProductInfo (keyProduct) {
      return this.tableDataNow.filter(item => {
        if (String(item.productId).includes(keyProduct)) {
          return item
          // this.tableNew.add(item)
          // vue.set(tableNew,'',item)
        }
        // console.log(this.tableNew)
      })
    }
  },
  created () {
    this.getStockList()
    // this.tableDataNow = this.tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)
  },
  components: {  
    ShowOutProduct
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
