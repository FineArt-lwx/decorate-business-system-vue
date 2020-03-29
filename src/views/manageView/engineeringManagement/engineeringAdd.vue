<template>
  <div class="login-container p20">
    <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-message"></i> 新增工程</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    <div class="container">
    <div class="login-container-main">
      <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          size="mini"
          class="demo-ruleForm"
        >
          <el-form-item label="房屋ID" prop="stuName" style="width: 50%">
            <el-input v-model="ruleForm.stuName"></el-input>
          </el-form-item>
          <el-form-item label="客户ID" prop="stuPhone" style="width: 50%">
            <el-input v-model="ruleForm.stuPhone"></el-input>
          </el-form-item>
          <el-form-item label="负责人ID" prop="stuSex" style="width: 50%">
            <el-input v-model="ruleForm.stuPhone"></el-input>
          </el-form-item>
          <el-form-item label="装修方案ID" prop="stuSex" style="width: 50%">
            <el-input v-model="ruleForm.stuPhone"></el-input>
          </el-form-item>
          <el-form-item label="工程周期" prop="employeeIdNum" style="width: 50%">
            <el-input v-model="ruleForm.employeeIdNum"></el-input>
          </el-form-item>
          <el-form-item label="开始时间" prop="email" style="width: 50%">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="预计结束时间" prop="email" style="width: 50%">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="浮动时间" prop="email" style="width: 50%">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <!-- <el-form-item label="装修状态" prop="stuName">
            <el-select v-model="ruleForm.stuName" placeholder="请选择装修状态">
              <el-option label="未开始" value="0"></el-option>
              <el-option label="准备" value="1"></el-option>
              <el-option label="未开始" value="0"></el-option>
              <el-option label="准备" value="1"></el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">新增</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
    </div>
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
/* .login-container {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute; */
  /* z-index: -1; */
  /* background-image: url("../../../assets/frontImage/bg5.jpg"); */
  /* background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
} */
/* .login-container-main,
.el-row,
.el-col-12 {
  height: 100%;
}
.el-col-12 .grid-content {
  height: 100%;
  text-align: center; */
  /* transform: translateY(50%); */
  /* margin-top: 40%;
}
.el-col-12 .grid-card {
  width: 50%;
  margin-top: 28%;
  margin-left: 15%; */
  /* transform: translate(25%, 25%); */
/* } */
/* .login-img {
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
} */
</style>