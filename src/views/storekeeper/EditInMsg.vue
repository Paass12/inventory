<template>
  <div class="hello">
    <el-dialog title="编辑入库信息" :visible.sync="dialogEdit.show">
      <el-form :model="form" ref="formEdit" label-width="100px" :rules="formrules">
        <el-form-item label="日期" prop="inboundTime">
            <el-date-picker
              v-model="form.inboundTime"
              type="date"
              placeholder="选择日期" style="width:100%">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="产品代码" prop="productName">
          <el-input v-model="form.productName"></el-input>
        </el-form-item>
        <el-form-item label="产品规格" prop="productScale">
          <el-input v-model="form.productScale"></el-input>
        </el-form-item>
        <el-form-item label="生产数量" prop="count">
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
        <el-button @click="dialogEdit.show = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormEdit('formEdit')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  props:{
    dialogEdit:Object,
    form:Object
  },
  data () {
    return {
      formrules:{
        date:[{ required: true,message:"日期不能为空",trigger: "blur" }],
        name:[{required:true,message:"用户名不能为空",trigger:"blur"}],
        email:[{required:true,message:"邮箱不能为空",trigger:"blur"}],
      }
    }
  },
  methods:{
    dialogFormEdit(formEdit) {
        this.$refs[formEdit].validate((valid) => {
          if (valid) {
            this.$axios.put(`http://localhost:3000/data/${this.form.id}`,this.form).then(res => {
                this.$message({
                    type:"success",
                    message:"编辑信息成功"
                })
              console.log(res)
                this.dialogEdit.show = false;
                this.$emit('updateEdit')
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
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>