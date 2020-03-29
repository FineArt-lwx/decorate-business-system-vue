<template>
  <div class="login-container">
    <div class="login-container-main">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="co_fff f48 pb5 cursor-point" @click="to('/login')">装修业务管理平台员工注册</div>
            <div
              class="co_fff f22 mt10 cursor-point"
              @click="to('/login')"
            >Decoration business management platform staff registration</div>
          </div>
        </el-col>
        <el-col :span="12" class="flex-center-box">
          <div style="width: 500px;height: auto;position: relative;">
            <img class="login-img" src="../../assets/frontImage/geren-copy.png" alt />
            <div class="card" style="margin-top: 8%;">
              <div class="fb f18 mt20 mb20 textAlign">Registration module</div>
              <div>
                <el-form
                  :model="ruleForm"
                  :rules="rules"
                  ref="ruleForm"
                  label-width="18%"
                  size="mini"
                  class="demo-ruleForm"
                >
                  <!-- <el-form-item label="学号" prop="stuNum">
                    <el-input v-model="ruleForm.stuNum"></el-input>
                  </el-form-item>
                  <el-form-item label="班级编号" prop="stuClassNum">
                    <el-input v-model="ruleForm.stuClassNum"></el-input>
                  </el-form-item> -->
                  <el-form-item label="姓名" prop="stuName">
                    <el-input v-model="ruleForm.stuName"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号" prop="stuPhone">
                    <el-input v-model="ruleForm.stuPhone"></el-input>
                  </el-form-item>
                  <el-form-item label="性别" prop="stuSex">
                    <el-radio-group v-model="ruleForm.stuSex">
                      <el-radio label="男"></el-radio>
                      <el-radio label="女"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="密码" prop="stuPassword">
                    <el-input type="password" v-model="ruleForm.stuPassword" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="身份证号" prop="employeeIdNum">
                    <el-input v-model="ruleForm.employeeIdNum"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.stuPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var validateStuPhone = (rule, value, callback) => {
      if (!(/^1[3456789]\d{9}$/.test(value))) {
        callback(new Error('手机号格式错误，请重新填写！'))
      } else {
        callback()
      }
    }
    var validateIdNum = (rule, value, callback) => {
      if (!(/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value))) {
        callback(new Error('身份证号格式不正确，请重新填写'))
      }
    }

    return {
      ruleForm: {
        stuPassword: '',
        checkPass: '',
        stuName: '',
        stuPhone: '',
        stuSex: '',
        employeeIdNum: '',
        email: ''
      },
      rules: {
        stuPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
        stuName: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' }
        ],
        stuPhone: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' },
          { validator: validateStuPhone, trigger: 'blur' }
        ],
        stuSex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        employeeIdNum: [
          { required: true, message: '请填写身份证号', trigger: 'blur' },
          { validator: validateIdNum, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    to(path) {
      this.$router.push({ path: path })
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