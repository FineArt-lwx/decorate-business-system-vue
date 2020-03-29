<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
      <el-tab-pane label="工程信息配置" name="first">
        <engineering-add></engineering-add>
      </el-tab-pane>
      <el-tab-pane label="工程材料信息配置" name="second">
        <engineering-materials></engineering-materials>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import engineeringMaterials from './engineeringMaterials'
import engineeringAdd from './engineeringAdd'
export default {
  components: {
    engineeringMaterials,
    engineeringAdd
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