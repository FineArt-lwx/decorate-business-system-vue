<template>
  <div class="p20">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-message"></i> 修改资料
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="重置姓名" name="1">
          <div class="m80200 animated fadeInRight">
            <el-form :model="nameForm" status-icon :rules="nameRules" ref="nameForm" label-width="100px" class="demo-nameForm">
              <el-form-item label="旧姓名" prop="name">
                <el-input type="text" v-model="nameForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="新姓名" prop="newName">
                <el-input type="text" v-model="nameForm.newName" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="nameSubmitForm('nameForm')">提交</el-button>
                <el-button @click="resetForm('nameForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="重置手机号" name="2">
          <div class="m80200 animated fadeInUp">
            <el-form :model="phoneForm" status-icon :rules="phoneRules" ref="phoneForm" label-width="100px" class="demo-phoneForm">
              <el-form-item label="旧手机号" prop="phone">
                <el-input type="text" v-model="phoneForm.phone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="新手机号" prop="newPhone">
                <el-input type="text" v-model="phoneForm.newPhone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="phoneSubmitForm('phoneForm')">提交</el-button>
                <el-button @click="resetForm('phoneForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="重置身份证号" name="3">
          <div class="m80200 animated fadeInLeft">
            <el-form :model="cardNumForm" status-icon :rules="cardNumRules" ref="cardNumForm" label-width="100px" class="demo-cardNumForm">
              <el-form-item label="旧身份证号" prop="cardNum">
                <el-input type="text" v-model="cardNumForm.cardNum" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="新身份证号" prop="newCardNum">
                <el-input type="text" v-model="cardNumForm.newCardNum" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="cardSubmitForm('cardNumForm')">提交</el-button>
                <el-button @click="resetForm('cardNumForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="重置邮箱" name="4">
          <div class="m80200 animated fadeInDown">
            <el-form :model="emailForm" status-icon :rules="emailRules" ref="emailForm" label-width="100px" class="demo-emailForm">
              <el-form-item label="旧邮箱" prop="email">
                <el-input type="text" v-model="emailForm.email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="新邮箱" prop="newEmail">
                <el-input type="text" v-model="emailForm.newEmail" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="emailSubmitForm('emailForm')">提交</el-button>
                <el-button @click="resetForm('emailForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
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
      activeName: '1',
      nameForm: {
        name: '',
        newName: ''
      },
      nameRules: {
        name: [
          { required: true, message: '请输入您原来的姓名', trigger: 'blur' }
        ],
        newName: [
          { required: true, message: '请填写您新的姓名', trigger: 'blur' }
        ]
      },
      phoneForm: {
        phone: '',
        newPhone: ''
      },
      phoneRules: {
        phone: [
          { required: true, message: '请输入您的旧手机号', trigger: 'blur' },
          { validator: validateStuPhone, trigger: 'blur' }
        ],
        newPhone: [
          { required: true, message: '请输入您的新的手机号', trigger: 'blur' },
          { validator: validateStuPhone, trigger: 'blur' }
        ]
      },
      cardNumForm: {
        cardNum: '',
        newCardNum: ''
      },
      cardNumRules: {
        cardNum: [
          { required: true, message: '请填写您新的身份证号', trigger: 'blur' },
          { validator: validateIdNum, trigger: 'blur' }
        ],
        newCardNum: [
          { required: true, message: '请填写您新的身份证号', trigger: 'blur' },
          { validator: validateIdNum, trigger: 'blur' }
        ]
      },
      emailForm: {
        email: '',
        newEmail: ''
      },
      emailRules: {
        email: [
          { required: true, message: '请输入您原来的邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        newEmail: [
          { required: true, message: '请填写您新的邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    resetForm: function(formName) {
      this.$refs[formName].resetFields()
    },
    nameSubmitForm: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '恭喜你，姓名修改成功',
            type: 'success'
          })
          this.resetForm('nameForm')
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    phoneSubmitForm: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '恭喜你，新密码设置成功',
            type: 'success'
          })
          this.resetForm('phoneForm')
          this.$router.push({ path: '/login' })
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    cardSubmitForm: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '恭喜你，身份证号修改成功',
            type: 'success'
          })
          this.resetForm('cardNumForm')
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    emailSubmitForm: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '恭喜你，邮箱号修改成功',
            type: 'success'
          })
          this.resetForm('emailForm')
        } else {
          alert('error submit!!')
          return false
        }
      })
    }
  }
}
</script>