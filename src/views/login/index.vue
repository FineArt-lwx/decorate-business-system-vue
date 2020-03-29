<template>
  <div class="login-container">
    <div class="login-container-main">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="co_fff f48 pb5 cursor-point">装修业务管理平台</div>
            <div class="co_fff f22 mt10 cursor-point">Decoration business management platform</div>
          </div>
        </el-col>
        <el-col :span="12" class="flex-center-box">
          <div  style="width: 400px;height: 400px;position: relative;">
            <img class="login-img" src="../../assets/decorateAdministration/zhuangxiuguwen.png" alt="">
            <div class="card" style="margin-top: 8%;">
              <div class="fb f18 mt20 mb20 textAlign">登录</div>
              <div>
                <!-- <el-form
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  label-width="100px"
                  class="demo-ruleForm"
                > -->
                <el-form
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  class="demo-ruleForm"
                >
                  <el-form-item  prop="stunum">
                    <el-input v-model.number="ruleForm.stunum" placeholder="请输入学号">
                      <svg-icon icon-class="user" slot="prefix" style="width: 20px;height: 100%;"/>
                    </el-input>
                  </el-form-item>
                  <!-- <el-form-item label="" prop="pass"> -->
                  <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码">
                      <svg-icon icon-class="password" slot="prefix" style="width: 20px;"/>
                    </el-input>
                  </el-form-item>
                  <div class="mb15">
                    <el-row :gutter="20">
                      <el-col :span="14" class="align-left font-blue-1 f14 cursor-point"><span @click="toRegister()">还没账号?立即注册</span></el-col>
                      <el-col :span="10" class="align-right font-blue-1 f14 cursor-point"><span @click="toResetPass()">忘记密码</span></el-col>
                    </el-row>
                  </div>
                  <el-form-item class="mb0 textAlign">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
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

export default {
  name: 'login',
  data() {
    var checkStuNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('学号不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          callback()
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        stunum: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        stunum: [{ validator: checkStuNum, trigger: 'blur' }]
      },
      dialogVisible: false
    }
  },
  methods: {
    // 登录
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
          this.to('/person/personCenter')
        } else {
          console.log('error submit!!')
          return false
        }
      })

      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('Login', this.loginForm).then(() => {
      //       this.loading = false
      //       this.$router.push({ path: '/' })
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 路由跳转
    to(path) {
      this.$router.push({ path: path })
    },
    // 以下3个是 dialog
    handleClose(done) {
      this.dialogVisible = false
    },
    toStuRegister() {
      this.dialogVisible = false
      this.$router.push({ path: '/stuRegister' })
    },
    toTeaRegister() {
      this.dialogVisible = false
      this.$router.push({ path: '/teaRegister' })
    },
    // 重置密码
    toResetPass() {
      this.dialogVisible = true
    },
    // 注册
    toRegister() {
      this.to('/register')
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  /* z-index: -1; */
  background-image: url("../../assets/frontImage/bg5.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.login-container-main,
.el-row,
.el-col-12 {
  height: 100%;
}
.el-col-12 .grid-content {
  height: 100%;
  text-align: center;
  /* transform: translateY(50%); */
  margin-top: 40%;
}
.el-col-12 .grid-card {
  width: 50%;
  margin-top: 28%;
  margin-left: 15%;
  /* transform: translate(25%, 25%); */
}
.login-img {
  color: #fff;
  border: 0.15rem solid #3897e6;
  border-radius: 50%;
  padding: 0.8rem;
  background-color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.login-img:hover {
  padding: 1.2rem;
}
</style>