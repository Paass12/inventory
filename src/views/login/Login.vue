<template>
  <div class="Login">
    <div class="main">
      <h1>系统登录</h1>
      <div class="form">
        <div class="form-item">
          <div class="label">
            <span class="red">*</span>
            用户名
          </div>
          <el-input placeholder="请输入用户名" suffix-icon="el-icon-user-solid" v-model="form.username" @keyup.enter.native="bindLogin"></el-input>
        </div>
        <div class="error-msg" v-show="error.username">{{ error.username }}</div>
        <div class="form-item">
          <div class="label">
            <span class="red">*</span>
            密码
          </div>
          <el-input type="password" placeholder="请输入密码" suffix-icon="el-icon-lock" v-model="form.password"  @keyup.enter.native="bindLogin"></el-input>
        </div>
        <div class="error-msg" v-show="error.password">{{ error.password }}</div>
        <div class="form-item">
          <div class="label"></div>
          <el-input placeholder="请输入验证码" v-model="form.identify"  @keyup.enter.native="bindLogin"></el-input>
        </div>
        <div class="error-msg" v-show="error.identify">{{ error.identify }}</div>
        <div class="form-item identify">
          <div class="label"></div>
          <SIdentify :identifyCode="identify" />
          <span @click="createIdentify">看不清，换一张</span>
        </div>
        <div class="form-item save-password">
          <el-checkbox v-model="isSavePassword">记住密码</el-checkbox>
        </div>
        <div class="form-item btn">
          <div class="label"></div>
          <el-button class="login-btn" type="primary" :loading="isLoading" @click="bindLogin">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SIdentify from '@/components/SIdentify'
import Validator from '@/utils/validator'
import api from '@/api/api'

export default {
  components: {
    SIdentify
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        identify: ''
      },
      identify: '',
      isSavePassword: false,
      isLoading: false,
      error: {
        username: '',
        password: '',
        identify: ''
      }
    }
  },
  watch: {
    'form.username': function () {
      this.error.username = undefined
    },
    'form.password': function () {
      this.error.password = undefined
    },
    'form.identify': function () {
      this.error.identify = undefined
    }
  },
  created () {
    this.createIdentify()
  },
  methods: {
    createIdentify () {
      this.identify = Math.random().toString(36).substr(2).slice(2, 6)
    },
    validator () {
      const validator = new Validator()
      validator.add(this.form.username, [
        {
          strategy: 'isNonEmpty',
          errorMsg: 'username|请先输入用户名'
        }
      ])
      validator.add(this.form.password, [
        {
          strategy: 'isNonEmpty',
          errorMsg: 'password|请先输入密码'
        }
      ])
      validator.add(this.form.identify, [
        {
          strategy: 'isNonEmpty',
          errorMsg: 'identify|请先输入验证码'
        },
        {
          strategy: 'isSame:' + this.identify,
          errorMsg: 'identify|请输入正确的验证码'
        }
      ])
      const errorMsg = validator.start()
      return errorMsg
    },
    bindLogin () {
      if (this.isLoading) return

      const error = this.validator()
      if (error) {
        this.errorMsg = {}
        const [errorKey, errorMsg] = error.split('|')
        this.error[errorKey] = errorMsg
      } else {
        this.login()
      }
    },
    login () {
      this.isLoading = true
      api.login({
        username: this.form.username,
        password: this.form.password,
      })
        .then(res => {
          this.isLoading = false
          if (res.userType === 1) {
            this.$router.push({
              name: 'systemAdmin'
            })
          } else {
            this.$router.push({
              name: '404'
            })
          }
        })
        .catch(e => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style scoped>
.Login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.main {
  width: 320px;
  height: 430px;
  padding: 30px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 15px #888888;
}

h1 {
  font-size: 20px;
}

.form-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.identify {
  align-items: flex-end;
}

.identify span {
  margin-left: 40px;
  color: #409eff;
  cursor: pointer;
  transform: translateY(-10px);
}

.save-password {
  justify-content: center;
}

.btn {
  margin-top: 30px;
}

.label {
  flex: 0 0 70px;
  text-align: left;
}

.red {
  color: red;
}

.login-btn {
  width: 100%;
}

.error-msg {
  font-size: 12px;
  color: red;
  padding-left: 85px;
  margin-top: 5px;
  margin-bottom: -10px;
  text-align: left;
}
</style>
