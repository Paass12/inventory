<template>
  <div class="container_table">
    <el-container>
      <el-container>
        <el-main id="main" style="height:900px;padding:0" align="center">
          <h3>销售额</h3>
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
            <el-table-column align="center" label="ID" width="95">
              <template slot-scope="scope">
                {{ scope.row.id }}
              </template>
            </el-table-column>
            <el-table-column align="center" label="warehouse">
              <template slot-scope="scope">
                {{ scope.row.warehouse }}
              </template>
            </el-table-column>
            <el-table-column align="center" label="产品类型">
              <template slot-scope="scope" >
                {{ scope.row['product'].name }}
              </template>
            </el-table-column>
 
            <el-table-column align="center" label="销售日期">
              <template slot-scope="scope">
                {{ scope.row.outboundTime }}
              </template>
            </el-table-column>
         
            <el-table-column label="查看详情">
              <template slot-scope="scope">
                <el-button @click="dialogVisible = true" type="primary" size="small">查看</el-button>
                <el-dialog title="销售详情" :visible.sync="dialogVisible" :before-close="handleClose">
                  <el-form :model="form" >
                    <el-form-item label="规格" >
                      <span> {{ scope.row['product'].scale}} </span>
                    </el-form-item>
                    <el-form-item label="成本">
                      <span> {{ scope.row['product'].cost}} </span>
                    </el-form-item>
                    <el-form-item label="售价">
                      <span> {{ scope.row['product'].resale}} </span>
                    </el-form-item>
                    <el-form-item label="数量">
                      <span> {{ scope.row.outboundNum}} </span>
                    </el-form-item>
                    <el-form-item label="利润">
                      <span> {{ (scope.row['product'].resale - scope.row['product'].cost) * scope.row.outboundNum + '元'}} </span>
                    </el-form-item>
                    <hr style="border:1 dashed #987cb9" width="80%" color=#987cb9 SIZE=1>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
                </el-dialog>
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
          tableData:null,
          listLoading:true,
          dialogVisible: false,
          pagesize:5,
          currentPage:1,
        }
    },
    created() {
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
        this.listLoading = true
        api.getOutboundList().then( res => {
          this.tableData = res.outbounds;
          // this.tableLength = res.outbounds.length;
          // console.log(this.tableLength)
          this.listLoading = false;
        })
      },
      // searchProductInfo(keyProduct){
      //   return this.tableData.filter(item => {
      //     if (item.productName.includes(keyProduct)){
      //       return item
      //     }
      //   })
      // }
        handleClose(done){
          this.$confirm('确定关闭吗').then(() => {
            // function(done)，done 用于关闭 Dialog
            done();
  
            console.info("点击右上角 'X' ，取消按钮或遮罩层时触发");
          }).catch(() => {
  
            console.log("点击确定时触发");
          });
        }
    }
}
</script>

<style>
.container_table{
  box-sizing: border-box;
  padding: 30px;
}
</style>
