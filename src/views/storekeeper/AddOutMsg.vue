<template>
  <div id="app">
    <el-dialog title="添加产品出库信息" :visible.sync="dialogAdd.show">
      <el-form :model="form" ref="formdong" label-width="100px" :rules="formrules">
        <el-form-item label="出库日期" prop="outboundTime">
            <el-date-picker
              v-model="form.outboundTime"
              type="date"
              placeholder="选择日期"  style="width:100%">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="产品代码" prop="productId">
          <el-select v-model="form.productId" placeholder="请选择产品代码" style="width:100%">
            <el-option
              v-for="item in this.typeList"
              :key="item.id"
              :label="item.id"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出库数量" prop="outboundNum">
          <el-input v-model="form.outboundNum"></el-input>
        </el-form-item>
        <el-form-item label="出库车间" prop="warehouse">
          <el-input v-model="form.warehouse"></el-input>
        </el-form-item>
        <el-form-item label="顾客" prop="customer">
          <el-input v-model="form.customer"></el-input>
        </el-form-item>
        <el-form-item label="填制人" prop="principal">
          <el-input v-model="form.principal"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAdd.show = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormAdd('formdong')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import api from '@/api/api'
export default {
  name: 'AddProduct',
  props: {
    dialogAdd: Object,
    typeList: Array
  },
  data () {
    return {
      form: {
        productId: '',
        outboundNum: '',
        outboundTime: '',
        customer: '',
        warehouse: '',
        principal: '',
      },
      formrules: {
        productId: [
          { required: true, message: '产品代码不能为空', trigger: 'change' }
        ],
        outboundNum: [{ required: true, message: '出库数量不能为空', trigger: 'blur' }],
        outboundTime: [{ required: true, message: '出库时间不能为空', trigger: 'blur' }],
        customer: [ { required: true, message: '顾客不能为空', trigger: 'blur' } ],
        warehouse: [
          { required: true, message: '出库车间不能为空', trigger: 'blur' }
        ],
        principal: [
          { required: true, message: '填制人不能为空', trigger: 'blur' }
        ],

      }
    }
  },
  created(){
    
  },
  methods: {
    dialogFormAdd(formdong) {
        this.$refs[formdong].validate((valid) => {
          if (valid) {
              api.addOutbound({
                productId: this.form.productId,
                outboundNum: this.form.outboundNum,
                outboundTime: this.form.outboundTime,
                customer: this.form.customer,
                warehouse: this.form.warehouse,
                principal: this.form.principal
              }) 
              .then(res => {
                console.log(res)
                this.dialogAdd.show = false
                this.form  = ""
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
    }




  }
}
</script>
<style scoped>
</style>
