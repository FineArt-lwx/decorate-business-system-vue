<template>
  <div class="login-container p20">
    <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-message"></i> 新增客户信息</el-breadcrumb-item>
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
            <el-form-item label="客户姓名" prop="stuName" style="width: 50%">
              <el-input v-model="ruleForm.stuName"></el-input>
            </el-form-item>
            <el-form-item label="客户手机号" prop="stuPhone" style="width: 50%">
              <el-input v-model="ruleForm.stuPhone"></el-input>
            </el-form-item>
            <el-form-item label="客户性别" prop="stuSex" style="width: 50%">
              <el-radio-group v-model="ruleForm.stuSex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="客户身份证号" prop="employeeIdNum" style="width: 50%">
              <el-input v-model="ruleForm.employeeIdNum"></el-input>
            </el-form-item>
            <el-form-item label="客户地址" prop="stuName" style="width: 50%">
              <el-input type="textarea" :rows="3" v-model="ruleForm.stuName"></el-input>
            </el-form-item>
            <el-form-item label="对接员工" prop="stuName" style="width: 50%">
              <el-input v-model="ruleForm.stuName" @focus="toOpenClientList"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">新增</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
      </div>
    </div>
    <el-dialog
      title="员工列表"
      :visible.sync="dialogVisible"
      width="50%"
      :modal="false"
      :before-close="handleClose">
      <div>
        <el-form :model="tableForm" ref="tableForm" inline>
            <el-form-item prop="teacherNum">
              <el-input v-model="tableForm.teacherNum" placeholder="请输入" size="small"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit" size="small">查询</el-button>
            </el-form-item>
          </el-form>
          <table-with-page
            ref="child"
            :bindForm="tableForm"
            :data="tableData"
            :rowHeader="rowHeader"
            :totalAmount="totalAmount"
            :pageSize="pageSize"
          >
          </table-with-page>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import tableWithPage from '@/components/TableWithPage/tableWithPage'
import { teacherList } from '@/api/teacher'
export default {
  components: {
    tableWithPage
  },
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
      dialogVisible: false,
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
          { required: true, message: '请输入您的姓名', trigger: 'change' }
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
      },
      tableForm: {
        teacherNum: '',
        teacherSex: ''
      },
      tableData: [],
      rowHeader: [
        // 未做任何格式化处理的数据
        {
          prop: 'teacherNum',
          label: '姓名',
          // fixed: true,
          width: '200'
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '性别',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        {
          prop: 'teacherNum',
          label: '手机号',
          // fixed: true,
          width: '200'
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '身份证号',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '邮箱',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        {
          prop: '',
          label: '操作',
          // fixed: 'right',
          render: (h, params) => {
            console.log(params)
            return h('el-button', {
              props: {
                type: 'text',
                icon: 'el-icon-delete'
                // size: 'small'
              },
              on: {
                click: () => {
                  this.dialogVisible = false
                  this.ruleForm.stuName = params.row.id
                }
              }
            }, '选择')
            // const test = () => {
            //   console.log(params.row)
            //   this.$router.push('/tab/Tabs')
            // }
            // return (<el-button type='text' onClick={test}>删除</el-button>)
            // return h('div', [h('el-button', {
            //   props: {
            //     type: 'text',
            //     icon: 'el-icon-delete'
            //     // size: 'small'
            //   },
            //   on: {
            //     click: () => {
            //       // this.$router.push({ path: '/' })
            //       this.deleteConfirmVisible = true
            //     }
            //   }
            // }, '删除'), h('el-button', {
            //   attrs: {
            //     type: 'text',
            //     icon: 'el-icon-edit'
            //   },
            //   on: {
            //     click: () => {
            //       // this.test(params.row)
            //       this.$router.push({ path: '/userManagement/userAdd' })
            //     }
            //   }
            // }, '编辑')
            // ])
          }
        }
      ],
      totalAmount: 0,
      pageSize: 2
    }
  },
  methods: {
    submitForm: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm: function(formName) {
      this.$refs[formName].resetFields()
    },
    submit: function(formName) {
      console.log(formName, this.$refs[formName], this.tableForm)
      // this.$refs.datagrid.handleCurrentChange(1)
      // this.$refs.tableForm.validate(async valid => {
      //   if (!valid) {
      //     return
      //   }
      //   this.$refs.datagrid.handleCurrentChange(2)
      // })
      // if () {

      // }
      // this.tableData={}
    },
    to: function(path) {
      this.$router.push({ path: path })
    },
    // 弹出员工列表
    toOpenClientList: function() {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.dialogVisible = false
    },
    toGetList: function() {
      // console.log('1')
      teacherList().then(response => {
        const pageList = response.data
        // console.log('pageList', pageList, pageList.length)
        pageList.map((item, index) => {
          this.tableData.push(pageList[index])
        })
        this.totalAmount = pageList.length
        // console.log(this.tableData)
        // const limit = 10
        // const pageList = response.data.filter((item, index) => index < limit * this.page && index >= limit * (this.page - 1))
        // console.log(pageList)
        // this.total = response.data.length
        // this.tableList = pageList
        // this.listLoading = false
      })
    }
  },
  created() {
    this.toGetList()
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