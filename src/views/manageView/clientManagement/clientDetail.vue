<template>
  <div class="p20">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-message"></i> 详情展示
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="mb20">
        <el-steps :active="active" finish-status="success">
          <el-step title="准备"></el-step>
          <el-step title="拆改"></el-step>
          <el-step title="水电"></el-step>
          <el-step title="防水和基层处理"></el-step>
          <el-step title="油漆"></el-step>
          <el-step title="竣工"></el-step>
          <el-step title="软装"></el-step>
          <el-step title="入住"></el-step>
        </el-steps>
      </div>
      <div>
        <el-alert
          title="客户信息"
          type="warning"
          :closable="false">
        </el-alert>
        <div class="mt20 mb20 pl40 pr40">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">客户姓名:</span>
                <span class="co_b65 fw300 f14 lh40">客户111</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">客户性别:</span>
                <span class="co_b65 fw300 f14 lh40">男</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">电话号码:</span>
                <span class="co_b65 fw300 f14 lh40">15825652356</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">身份证号:</span>
                <span class="co_b65 fw300 f14 lh40">360430189702140025</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">客户地址:</span>
                <span class="co_b65 fw300 f14 lh40">浙江省杭州市滨江区宝龙城</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <el-alert
          title="房屋信息"
          type="warning"
          :closable="false">
        </el-alert>
        <div class="mt20 mb20 pl40 pr40">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">房屋归属人:</span>
                <span class="co_b65 fw300 f14 lh40">归属人1223</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">房屋面积:</span>
                <span class="co_b65 fw300 f14 lh40">100平</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">房屋类型:</span>
                <span class="co_b65 fw300 f14 lh40">二手房</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">房屋户型:</span>
                <span class="co_b65 fw300 f14 lh40">两室一厅一卫一厨房</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">房屋地址:</span>
                <span class="co_b65 fw300 f14 lh40">浙江省杭州市滨江区宝龙城</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">装修状态:</span>
                <span class="co_b65 fw300 f14 lh40">未开工</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <el-alert
          title="对接员工"
          type="warning"
          :closable="false">
        </el-alert>
        <div class="mt20 mb20 pl40 pr40">
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content bg-purple">
                <span class="co_b65 fw300 f14 lh40">对接员工:</span>
                <span class="co_b65 fw300 f14 lh40">员工666</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
    
</template>
<script>
export default {
  data() {
    return {
      active: '0'
    }
  }
}
</script>
<style scoped>
:global(.el-alert .el-alert__title) {
  font-size: 16px !important;
  font-weight: 600;
  line-height: 24px;
}
</style>