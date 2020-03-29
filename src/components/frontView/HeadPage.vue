<template>
  <div class>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple h60 pd5 pl40">
          <img :src="frontLogo" alt style="width:50px;height:50px;" />
          <span class="font-title font-title-height">我的社团</span>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple h60 login-button">
          <el-button type="primary" icon="el-icon-share" class @click="to('/stuLogin')">学生登录</el-button>
          <el-button type="warning" icon="el-icon-star-off" @click="to('/teaLogin')">教师登录</el-button>
          <el-button type="danger" icon="el-icon-edit" class="w114" @click="registerCheck()">注册</el-button>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      title="注册"
      :visible.sync="dialogVisible"
      width="30%"
      :modal="false"
      :before-close="handleClose">
      <span>请选择您的身份，谢谢！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="toStuRegister">学生</el-button>
        <el-button type="primary" @click="toTeaRegister">教师</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import frontLogo from '@/assets/frontImage/front-logo.png'
export default {
  name: 'HeadPage',
  data() {
    return {
      frontLogo: frontLogo,
      dialogVisible: false
    }
  },
  methods: {
    to(path) {
      this.$router.push({ path: path })
    },
    registerCheck() {
      this.dialogVisible = true
    },
    handleClose(done) {
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
      this.dialogVisible = false
    },
    toStuRegister() {
      this.dialogVisible = false
      this.$router.push({ path: '/stuRegister' })
    },
    toTeaRegister() {
      this.dialogVisible = false
      this.$router.push({ path: '/teaRegister' })
    }
  }
}
</script>
<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple[data-v-1b9511e0] {
  background: none;
}
.font-title-height {
  width: 80px;
  height: 50px;
  display: inline-block;
  line-height: 50px;
  vertical-align: top;
}
.login-button{
  display: flex;
  justify-content: flex-end;
  padding: 12px 50px 12px 12px;
}
</style>