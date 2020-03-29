<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
      <el-tab-pane label="客户信息配置" name="first">
        <client-add></client-add>
      </el-tab-pane>
      <el-tab-pane label="房屋信息配置" name="second">
        <house-add></house-add>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import clientAdd from './clientAdd'
import houseAdd from './houseAdd'
export default {
  components: {
    clientAdd,
    houseAdd
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick: function() {

    }
  }
}
</script>