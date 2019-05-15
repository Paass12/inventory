<template>
  <div class="hello">
    <el-dialog title="查看出库信息" :visible.sync="dialogOutShow.show">
      <el-form :model="form" ref="form" label-width="100px">
        <el-form-item label="顾客" prop="customer">
          <el-input v-model="form.customer" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="仓库" prop="warehouse">
          <el-input v-model="form.warehouse" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="出库数量" prop="orderTime">
          <el-input v-model="form.outboundNum" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="出库时间" prop="">
            <el-date-picker
              v-model="form.outboundTime"
              type="date"
              style="width:100%" :disabled="true">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="出库产品" prop="">
          <el-input v-model="form.productId" :disabled="true"></el-input>
          <!-- <el-table
            v-model="allOutProduct"
            height="200"
            border
            style="width: 100%">
            <el-table-column
                prop="id"
                label="产品代码"
                align="center"
                width="">
            </el-table-column>
            <el-table-column
                align="center"
                prop="unit"
                label="出库数量"
                width="">
            </el-table-column>
            <el-table-column
                align="center"
                prop="scale"
                label="产品名">
            </el-table-column>
            <el-table-column
                align="center"
                prop="cost"
                label="单位">
            </el-table-column>
            <el-table-column
                align="center"
                prop="resale"
                label="型号">
            </el-table-column>
          </el-table> -->
          <!-- <el-form :model="allOutProduct" ref="allOutProduct" label-width="100px">
            <el-form-item label="产品代码" prop="id" style="margin:0 0 10px 0">
              <el-input v-model="allOutProduct.id" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="产品名称" prop="name" style="margin:0 0 10px 0">
              <el-input v-model="allOutProduct.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="型号" prop="scale" style="margin:0 0 10px 0">
              <el-input v-model="allOutProduct.scale" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="单位" prop="unit" style="margin:0 0 10px 0">
              <el-input v-model="allOutProduct.unit" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="成本" prop="cost" style="margin:0 0 10px 0">
              <el-input v-model="allOutProduct.cost" :disabled="true"></el-input>
            </el-form-item>
          </el-form> -->

        </el-form-item>

        <el-form-item label="填制人" prop="principal">
          <el-input v-model="form.principal" :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogOutShow.show = false" type="primary">确 定</el-button>
        <!-- <el-button type="primary" @click="dialogFormEdit('formEdit')">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    allOutProduct: Object,
    dialogOutShow: Object,
    form: Object,
    // productList: Object,
    
  },
  data() {
      return {
        // allOutProduct: allOutProduct
      }
    },
  methods: {
    created () {
      // this.thisallOutProduct = allOutProduct
      console.log(allOutProduct)
    },
    stateFormat (row, column) {
    // console.log(row.orderType)
      if (row.orderType === 0) {
        return '批发'
      } else if (row.orderType === 1) {
        return '零售'
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
