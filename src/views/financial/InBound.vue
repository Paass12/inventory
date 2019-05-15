<template>
  <div class="container_table">
    <el-container>
      <el-container>
        <el-main id="main" style="height:900px;padding:0" align="center">
          <h3>入库单</h3>
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
              
              <el-table-column align="center" label="序号" width="95">
                <template slot-scope="scope">
                  {{ scope.row.id }}
                </template>
              </el-table-column>
              <el-table-column align="center" label="产品ID">
                <template slot-scope="scope">
                  {{ scope.row.productId }}
                </template>
              </el-table-column>
              <el-table-column align="center" label="产品类型">
                <template slot-scope="scope">
                  {{ scope.row.productName }}
                </template>
              </el-table-column>
              <el-table-column align="center" label="入库时间">
                <template slot-scope="scope">
                  {{ scope.row.inboundTime }}
                </template>
              </el-table-column>
              <el-table-column align="center" label="入库员">
                <template slot-scope="scope">
                  {{ scope.row.principal }}
                </template>
              </el-table-column>
              <el-table-column align="center" label="入库车间">
                <template slot-scope="scope">
                  {{ scope.row.workshop }}
                </template>
              </el-table-column>
              <el-table-column align="center" label="数量">
                <template slot-scope="scope">
                  {{ scope.row.count}}
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
        this.listLoading = true
        api.getInBoundList().then(res => {
          this.tableData = res.inboundLists;
          this.listLoading = false;
          // console.log(res)
        })
        
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
