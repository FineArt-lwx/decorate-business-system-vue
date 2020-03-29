
<template>
    <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
    <el-menu
    mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF"
    >
      <!-- ****************************************************************************** -->
      <div class="to-front-img" @click="toFrontView">
        <img :src="logo" alt="" class=" veralign ml10">
        <span class="logo-title-top veralign">装修公司业务管理系统</span>
      </div>
      <!-- ****************************************************************************** -->
      <div class="mt10">
        <sidebar-item v-for="route in permission_routers" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
      </div>
    </el-menu>
    <!-- </el-scrollbar> -->
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import logo from '@/assets/decorateAdministration/kujialeqiyezhan_zhuangxiugongsi.png'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  data() {
    return {
      logo
    }
  },
  methods: {
    toFrontView: function() {
      this.$router.push({ path: '/front' })
    }
  }
}
</script>
<style scoped>
.to-front-img {
  height: 50px;
  background-color: #2b2f3a;
}
.logo-title-top {
  line-height: 50px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
}
.scrollbar-wrapper {
  overflow-x: hidden !important;
}
</style>