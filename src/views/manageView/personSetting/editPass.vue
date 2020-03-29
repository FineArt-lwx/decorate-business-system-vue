<template>
  <div class="p20">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-message"></i> 重置密码
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div>
        <el-steps :active="active" simple finish-status="success" >
          <el-step title="验证身份" icon="el-icon-edit"></el-step>
          <el-step title="验证原密码" icon="el-icon-upload"></el-step>
          <el-step title="输入新密码" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
      <div class="box animated bounceInLeft">
        <div v-if="activeContainer" class="m80200 ">
          <el-form :model="identityForm" label-width="80px" :rules="identityRule" ref="identityForm">
              <el-form-item label="手机号" prop="phone">
                <el-input  v-model="identityForm.phone" placeholder="请输入" size="small"></el-input>
              </el-form-item>
              <el-form-item label="身份证号" prop="identityCardNum">
                <el-input  v-model="identityForm.identityCardNum" placeholder="请输入" size="small"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submit('identityForm')" size="small">验证</el-button>
                <el-button @click="resetForm('identityForm')" size="small">重置</el-button>
              </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- </div> -->
      <!-- 验证原密码 -->
      <div v-if="oldPasswordContainer" class="box animated bounceInUp">
        <div  class="m80200" :key="2">
          <el-form :model="oldPasswordForm" label-width="80px" :rules="oldPasswordRule" ref="oldPasswordForm">
              <el-form-item label="原密码" prop="oldPassword">
                <el-input  v-model="oldPasswordForm.oldPassword" placeholder="请输入" size="small"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="oldPasswordSubmit('oldPasswordForm')" size="small">验证</el-button>
                <el-button @click="resetForm('oldPasswordForm')" size="small">重置</el-button>
              </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- </div> -->
      <!-- 验证原密码 -->
      <div v-if="newPasswordContainer" class="box animated bounceInRight">
        <div  class="m80200" :key="3">
          <el-form :model="newPasswordForm" label-width="80px" :rules="newPasswordRule" ref="newPasswordForm">
              <el-form-item label="新密码" prop="newPassword">
                <el-input  v-model="newPasswordForm.newPassword" placehnewer="请输入" size="small"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="newPasswordSubmit('newPasswordForm')" size="small">验证</el-button>
                <el-button @click="resetForm('newPasswordForm')" size="small">重置</el-button>
              </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
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
      } else {
        callback()
      }
    }
    return {
      active: 0,
      // 验证身份
      activeContainer: true,
      identityForm: {
        phone: '',
        identityCardNum: ''
      },
      identityRule: {
        phone: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' },
          { validator: validateStuPhone, trigger: 'blur' }
        ],
        identityCardNum: [
          { required: true, message: '请填写身份证号', trigger: 'blur' },
          { validator: validateIdNum, trigger: 'blur' }
        ]
      },
      // 验证原密码
      oldPasswordContainer: false,
      oldPasswordForm: {
        oldPassword: ''
      },
      oldPasswordRule: {
        oldPassword: [
          { required: true, message: '请输入您的原密码', trigger: 'blur' }
        ]
      },
      // 输入新密码
      newPasswordContainer: false,
      newPasswordForm: {
        newPassword: ''
      },
      newPasswordRule: {
        newPassword: [
          { required: true, message: '请输入您的原密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit: function(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid)
        if (valid) {
          alert('身份验证通过!下一步，验证原密码')
          this.activeContainer = false
          this.oldPasswordContainer = true
          this.active = 1
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    oldPasswordSubmit: function(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid)
        if (valid) {
          alert('原密码验证通过!下一步，输入新密码')
          this.activeContainer = false
          this.oldPasswordContainer = false
          this.newPasswordContainer = true
          this.active = 2
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    newPasswordSubmit: function(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid)
        if (valid) {
          alert('新密码已修改完成!')
          // this.activeContainer = false
          // this.oldPasswordContainer = false
          // this.newPasswordContainer = true
          this.active = 3
          this.$router.push({ path: '/login' })
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    resetForm: function(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>