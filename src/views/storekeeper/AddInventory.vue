
<template>
<div id="app">
<el-dialog title="添加盘存信息" :visible.sync="dialogAdd.show">
<el-form ref="formdong" :model="form" label-width="80px" style="width:60%;margin:10px auto" :rules="formrules">
  <el-form-item label="产品代码" prop="productId">
      <el-select v-model="form.productId" placeholder="请选择产品代码" style="width:100%" @change="getStock(form.productId)">
          <el-option
            v-for="item in typeList"
            :key="item.id"
            :label="item.id"
            :value="item.id"
          ></el-option>
      </el-select>
  </el-form-item>
  <el-form-item label="盘存日期" prop="inventoryTime">
       <el-date-picker
        v-model="form.inventoryTime"
        type="date"
        placeholder="选择日期"
        style="width:100%">
     </el-date-picker>
   </el-form-item>
  <el-form-item label="最大存储">
      <el-input :disabled="true" v-model="maxCount"></el-input>
  </el-form-item>
  <el-form-item label="最小存储">
      <el-input :disabled="true" v-model="minCount"></el-input>
  </el-form-item>
  <el-form-item label="电子库存">
      <el-input :disabled="true" v-model="stock"></el-input>
  </el-form-item>
  <el-form-item label="毁坏数量" prop="lossNum">
      <el-input  v-model="form.lossNum"></el-input>
  </el-form-item>
  <el-form-item label="备注" prop="intro">
      <el-input v-model="form.intro"></el-input>
  </el-form-item>
</el-form>
<div slot="footer" class="dialog-footer">
        <el-button @click="clear()">取 消</el-button>
        <el-button type="primary" @click="dialogFormAdd('formdong')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
    
</template>

<script>
import api from '@/api/api'
import { parse } from 'path';
  export default {
    props: {
        dialogAdd: Object,
    },
    data() {
      return {
        maxCount:'',
        minCount:'',
        stock:'',
        typeList:Array,
        form: {
           productId:'',
           lossNum:'',
           inventoryTime:'',
           intro:''
        },
        formrules: {
        productId: [
          { required: true, message: '产品代码不能为空', trigger: 'change' }
        ],
        lossNum: [{ required: true, message: '毁坏数量不能为空', trigger: 'blur' }],
        inventoryTime: [{ required: true, message: '盘存日期不能为空', trigger: 'blur' }]
        
      }
      }
    },
    methods: {
      dialogFormAdd () {
        api.inventory({
          productId: this.form.productId,
          lossNum: parseInt(this.form.lossNum),
          inventoryTime: this.form.inventoryTime,
          intro: this.form.intro
        }) .then(res => {
            console.log(res)
            this.dialogAdd.show = false
          if(res.resultCode == 0){
              alert('盘存成功！')
              this.form.productId = ''
              this.form.lossNum = '',
              this.form.inventoryTime = '',
              this.form.intro = ''
              
          }
          })
      },
      dialogFormAdd(formdong) {
        this.$refs[formdong].validate((valid) => {
          if (valid) {
               api.inventory({
                productId: this.form.productId,
                lossNum: parseInt(this.form.lossNum),
                inventoryTime: this.form.inventoryTime,
                intro: this.form.intro
                }) .then(res => {
                    console.log(res)
                    this.dialogAdd.show = false
                if(res.resultCode == 0){
                    alert('盘存成功！')
                    this.form.productId = ''
                    this.form.lossNum = '',
                    this.form.inventoryTime = '',
                    this.form.intro = ''
                }
                })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
    },

      clear(){
        this.form.productId = ''
        this.form.lossNum = '',
        this.form.inventoryTime = '',
        this.form.intro = ''
        this.dialogAdd.show = false
      },

      getAllProducts () {
        api.getAllProducts().then(res => {
          this.typeList = res.products
          console.log(this.typeList)
        })
      },

      getStock (id) {
        api.getStock({
        productId: parseInt(id),
      }) 
        .then(res => {
          console.log(res.stock.product.maxCount)
          console.log(res.stock.product.minCount)
          console.log(res.stock.stock)
          this.maxCount = res.stock.product.maxCount
          this.minCount = res.stock.product.minCount
          this.stock = res.stock.stock
        })
      }
    },
    created () {
      this.getAllProducts()
    },
  }
</script>