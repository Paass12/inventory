<template>
  <div class="Home">
    <header>
      <img class="logo" src="@/images/home-logo.png">
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="404">关于我们
          <i class="el-icon-arrow-down dark"></i>
        </router-link>
        <router-link to="/login">登陆</router-link>
        <router-link class="dark" to="404">消息中心</router-link>
        <router-link to="404">更多...</router-link>
      </nav>
    </header>
    <div class="body">
      <div class="main">
        <img class="icon" src="@/images/home-icon.png">
        <div class="title">
          Welcome to Bulb Inventory
        </div>
        <div class="subtitle">
          security efficient convenient
        </div>
        <router-link class="login-btn" to="/login">
          <img class="login-icon" src="@/images/login-icon.png">
          <span>登陆</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  background: #545c64;
}

nav {
  display: flex;
  align-items: center;
}

nav a {
  margin-left: 40px;
  color: #fff;
  text-decoration: none;
}

.body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
  background: url(../../images/home-bg.jpg) center center no-repeat;
  background-size: cover;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 35px;
  border-radius: 10px;
  background: rgba(256, 256, 256, 0.6);
}

.title {
  font-size: 20px;
  margin-top: 10px;
}

.subtitle {
  font-weight: bold;
  margin-top: 15px;
  font-size: 16px;
}

.login-btn {
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: #409eff;
  text-decoration: none;
}

.login-icon {
  margin-right: 10px;
}

.dark {
  color: #667b84;
}
</style>
