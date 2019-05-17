<template>
  <div class="hello">
    <el-dialog title="查看产品详情" :visible.sync="dialogOutShow.show">
      <el-form :model="productInformation" ref="form" label-width="100px">
        <el-form-item label="产品代码" prop="id">
          <el-input v-model="productInformation.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="产品名称" prop="name">
          <el-input v-model="productInformation.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="unit">
          <el-input v-model="productInformation.unit" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="型号" prop="scale">
          <el-input v-model="productInformation.scale" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="成本价" prop="cost">
          <el-input v-model="productInformation.cost" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="售价" prop="resale">
          <el-input v-model="productInformation.resale" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="最大存储" prop="maxCount">
          <el-input v-model="productInformation.maxCount" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="最小存储" prop="minCount">
          <el-input v-model="productInformation.minCount" :disabled="true"></el-input>
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
  name: 'ShowStockDetail',
  props: {
    dialogOutShow: Object,
    needid: String,
    productInformation:Object
    // productList: Object,
    
  },
  data() {
      return {
        // allOutProduct: allOutProduct
      }
    },
  methods: {
    getStock(){
        
    },

    created () {
      console.log(this.needid)
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
