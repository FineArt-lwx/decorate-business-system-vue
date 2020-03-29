<template>
  <div class="login-container p20">
    <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-message"></i> 新增角色</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    <div class="container">
      <div class="login-container-main">
        <el-form
          :model="roleForm"
          :rules="rules"
          ref="roleForm"
          label-width="80px"
          size="mini"
          class="demo-roleForm"
        >
          <el-form-item label="角色名称" prop="roleName" style="width: 50%">
            <el-input v-model="roleForm.roleName"></el-input>
          </el-form-item>
          <el-form-item label="角色编号" prop="roleNum" style="width: 50%">
            <el-input v-model="roleForm.roleNum"></el-input>
          </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('roleForm')">新增</el-button>
              <el-button @click="resetForm('roleForm')">重置</el-button>
            </el-form-item>
          </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roleForm: {
        roleName: '',
        roleNum: ''
      },
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ],
        roleNum: [
          { required: true, message: '请输入角色编号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    to(path) {
      this.$router.push({ path: path })
    },
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
    }
  }
}
</script>
<style scoped>
</style>