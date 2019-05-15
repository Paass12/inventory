<template>
  <div class="hello">
    <el-dialog title="查看入库信息" :visible.sync="dialogShow.show">
      <el-form :model="form" ref="formEdit" label-width="100px">
        <el-form-item label="日期" prop="inboundTime">
            <el-date-picker
              v-model="form.inboundTime"
              type="date"
              style="width:100%" :disabled="true">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="单位" prop="productUnit">
          <el-input v-model="form.productUnit" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="产品代码" prop="productId">
          <el-input v-model="form.productId" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="产品名称" prop="productName">
          <el-input v-model="form.productName" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="产品规格" prop="productScale">
          <el-input v-model="form.productScale" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="生产数量" prop="count">
          <el-input v-model="form.count" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="生产车间" prop="workshop">
          <el-input v-model="form.workshop" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="填制人" prop="principal">
          <el-input v-model="form.principal" :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogShow.show = false" type="primary">确 定</el-button>
        <!-- <el-button type="primary" @click="dialogFormEdit('formEdit')">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    dialogShow: Object,
    form: Object
  },
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
