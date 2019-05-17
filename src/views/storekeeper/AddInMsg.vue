<template>
  <div id="app">
    <el-dialog title="添加产品入库信息" :visible.sync="dialogAdd.show">
      <el-form :model="form" ref="formdong" label-width="100px" :rules="formrules">
        <el-form-item label="日期" prop="inboundTime">
            <el-date-picker
              v-model="form.inboundTime"
              type="date"
              placeholder="选择日期"  style="width:100%">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="产品代码" prop="productId">
          <el-select v-model="form.productId" placeholder="请选择产品代码" style="width:100%">
            <el-option
              v-for="item in typeList"
              :key="item.id"
              :label="item.id"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入库数量" prop="count">
          <el-input v-model="form.count"></el-input>
        </el-form-item>
        <el-form-item label="生产车间" prop="workshop">
          <el-input v-model="form.workshop"></el-input>
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
        productScale: '',
        inboundTime: '',
        count: '',
        workshop: '',
        principal: '',
        state: ''
      },
      formrules: {
        inboundTime: [ { required: true, message: '日期不能为空', trigger: 'blur' } ],
        productId: [
          { required: true, message: '产品代码不能为空', trigger: 'change' }
        ],
        productScale: [{ required: true, message: '产品规格不能为空', trigger: 'change' }],
        count: [{ required: true, message: '数量不能为空', trigger: 'blur' }],
        workshop: [ { required: true, message: '生产车间不能为空', trigger: 'blur' } ],
        principal: [
          { required: true, message: '填制人不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created(){
    
  },
  methods: {
    dialogFormAdd(formdong) {
        this.$refs[formdong].validate((valid) => {
          if (valid) {
              api.addInbound({
                productId: this.form.productId,
                inboundTime: this.form.inboundTime,
                count: this.form.count,
                workshop: this.form.workshop,
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
