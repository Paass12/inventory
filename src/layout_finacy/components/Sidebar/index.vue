<template>
  <div>
    <div class="header">
     财务管理员
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routesData" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from './Logo'
import SidebarItem from './SidebarItem'
// import variables from '@/styles/variables.scss'
export default {
  data(){
      return{
          routesData:[]
      }
  },
  components: { SidebarItem, Logo },
  computed: {
    routes () {
      return this.$router.options.routes
    },

    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo () {
      return this.$store.state.settings.sidebarLogo
    },
    variables () {
      return variables
    }
  },
  created(){
      var path=this.$route.path
      if( path.indexOf('financial') != -1){
          this.$router.options.routes.forEach((item,index)=>{
              if(item.path.indexOf('systemAdmin')!=-1 || item.path.indexOf('sold')!=-1 ||item.path.indexOf('depository')!=-1||
              item.path.indexOf('Monitor')!=-1||item.path.indexOf('storekeeper')!=-1){
                  console.log(index)
              }else{
                  this.routesData.push(item)
              }
          })

      }else {
      }

  }
}
</script>

<style>
.header {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background: #4b5f6e;
  color: #fff;
}
</style>
