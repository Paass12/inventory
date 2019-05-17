// 订单表
<template>
  <div class="container_table">
    <el-container>
      <el-container>
        <el-main id="main" style="height:900px;padding:0" align="center">
          <h3>客户订单</h3>
          <div class="table">
            <el-table
              :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              stripe
              border
              v-loading="listLoading"
              element-loading-text="Loading"
              highlight-current-row
              fit
              :default-sort = "{prop: 'data',order:'descending'}"
            >
            <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand" >
                    <!-- <el-form-item label="客户ID">
                      <span>{{ props.row.customer}}</span>
                    </el-form-item> -->
                    <el-form-item label="产品ID">
                      <span>{{ props.row.productId}}</span>
                    </el-form-item>
                    <el-form-item label="产品名">
                      <span>{{ props.row['product'].name}}</span>
                    </el-form-item>
                    <el-form-item label="规格">
                      <span>{{ props.row['product'].scale}}</span>
                    </el-form-item>
                    <el-form-item label="数量">
                      <span>{{ props.row.outboundNum}}</span>
                    </el-form-item>
              
                  </el-form>
                </template>
            </el-table-column>
            <el-table-column label="订单号">
              <template slot-scope="scope">
                <span>{{ scope.row.productId}}</span>
              </template>
            </el-table-column>
            <el-table-column label="日期">
              <template slot-scope="scope">
                <span>{{ scope.row.outboundTime}}</span>
              </template>
            </el-table-column>

       
            </el-table>
            <el-pagination class="fy"
                layout="total,sizes,prev,pager,next,jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5,10,20,40]"
                :page-size="pagesize"
                :total="tableData.length"
                backgruond>
            </el-pagination>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import api from '@/api/api'

export default {
    data() {
        return {
          // tableList:null,
          tableData:null,
          listLodaing:true,
          pagesize:5,
          currentPage:1,
        }
    },
    created () {
      this.fetchData()
    },
    methods: {
      handleSizeChange:function (size){
        this.pagesize = size;
        console.log(this.pagesize)
      },
      handleCurrentChange:function (currentPage){
        this.currentPage = currentPage;
        console.log(this.currentPage)
      },
      fetchData() {
        this.listLodaing = true
        api.getOutboundList().then(res => {
          this.tableData = res.outbounds;
          // this.tableList = res.orders[0]['products'][0].productId;
          this.listLodaing = false;
          // console.log(this.tableList)
        })
      },
  }
}
</script>

<style>
.container_table{
  box-sizing: border-box;
  padding: 30px;

}
.demo-table-expand{
  font-size: 0;
}
.demo-table-expand label{
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-from-item{
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
