// 父组件页面
<template>
  <div id="app">
    <el-container>
      <!-- main -->
      <el-container>
        <el-main id="main" style="height:500px;padding:0">
          <h3>盘存信息表</h3>
          <el-row>
            <el-col :span="20" :push="2">
              <div>
                <el-form :inline="true">
                  <el-form-item style="float: left" label="查询信息:">
                    <el-input v-model="keyProduct" placeholder="请输入产品代码......"></el-input>
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
                  <el-table-column label="产品代码" align="center" width="200">
                    <template slot-scope="scope">
                      <span>{{ scope.row.productId}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="盘存时间" align="center" width="230">
                    <template slot-scope="scope">
                      <span>{{ scope.row.inventoryTime }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="毁坏数" align="center" width="200">
                    <template slot-scope="scope">
                      <span>{{ scope.row.lossNum }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="备注" align="center" width="">
                    <template slot-scope="scope">
                      <span>{{ scope.row.intro }}</span>
                    </template>
                  </el-table-column>
                  
                  <!-- <el-table-column label="操作" align="center" fixed="right">
                    <template slot-scope="scope">
                      <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                    </template>
                  </el-table-column> -->
                </el-table>
              </div>
            </el-col>
          </el-row>
          <AddInventory :dialogAdd="dialogAdd" @update="getInventorys"></AddInventory>
          <!-- <EditProduct :dialogEdit="dialogEdit" :form="form" @updateEdit="getProductInfo"></EditProduct>
          <ShowProduct :dialogShow="dialogShow" :form="form" @updateEdit="getProductInfo"></ShowProduct> -->
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
import AddInventory from './AddInventory.vue'
import api from '@/api/api'
import { parse } from 'path';
export default {
  name: 'storageKeeper',
  data () {
    return {
      dialogVisible: false,
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
    getInventorys () {
      api.getInventorys().then(res => {
        this.tableData = res.inventory
        console.log(res)
      })
    },
    hanldeAdd () {
      // 添加
      this.dialogAdd.show = true
    },
    handleDelete (id) {
      console.log(id)
      api.deleteInbound ({
        inboundId: parseInt(id)
      }).then(res => {
          console.log(res)
          this.getInventorys(); //删除数据，更新视图
        })
    },
    searchProductInfo (keyProduct) {
      return this.tableData.filter(item => {
        if (String(item.productId).includes(keyProduct)) {
          return item
        }
      })
    }
  },
  created () {
    this.getInventorys()
    // this.getAllProducts()
  },
  components: {
    AddInventory,
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
