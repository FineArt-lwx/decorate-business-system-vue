<template>
  <div class="p20">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-message"></i> 订单列表
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
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
        <el-button type="primary" size="small" slot="toolbar" @click="deleteConfirmVisible = true">新增订单</el-button>
      </table-with-page>
    </div>
    <el-dialog
      title="新增"
      :visible.sync="deleteConfirmVisible"
      width="35%"
      :modal="false"
      :before-close="handleClose">
      <div>
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            size="mini"
            class="demo-ruleForm"
          >
            <el-form-item label="工程" prop="stuName" style="width: 70%">
              <el-input v-model="ruleForm.stuName" @focus="toOpenClientList"></el-input>
            </el-form-item>
            <el-form-item label="订单结束时间" prop="stuPhone" style="width: 70%">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.stuPhone" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <!-- <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">新增</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item> -->
          </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="pan-btn light-ccc-btn" @click="deleteConfirmVisible = false">取消</el-button>
        <el-button class="pan-btn light-blue-btn" type="primary" @click="clickOk('ruleForm')" >确定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="工程列表"
      :visible.sync="dialogVisible"
      width="50%"
      :modal="false"
      :before-close="handleDialogClose">
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
    return {
      deleteConfirmVisible: false,
      dialogVisible: false,
      tableForm: {
        teacherNum: '',
        teacherSex: ''
      },
      tableData: [],
      rowHeader: [
        // 未做任何格式化处理的数据
        {
          prop: 'teacherNum',
          label: '工程名称',
          // fixed: true,
          width: '200'
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '订单生成时间',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        {
          prop: 'teacherNum',
          label: '订单结束时间',
          // fixed: true,
          width: '200'
        },
        {
          prop: '',
          label: '操作',
          // fixed: 'right',
          render: (h, params) => {
            // const test = () => {
            //   console.log(params.row)
            //   this.$router.push('/tab/Tabs')
            // }
            // return (<el-button type='text' onClick={test}>删除</el-button>)
            return h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  this.ruleForm.stuName = params.row.id
                  this.dialogVisible = false
                }
              }
            }, '选择')
          }
        }
      ],
      totalAmount: 0,
      pageSize: 2,
      ruleForm: {
        stuName: '',
        stuPhone: ''
      },
      rules: {
        stuName: [
          { required: true, message: '请输入您的姓名', trigger: 'change' }
        ],
        stuPhone: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
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
    },
    to: function(path) {
      this.$router.push({ path: path })
    },
    clickOk: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
          // 调用删除的接口
          this.deleteConfirmVisible = false
          // 如果删除成功 弹出信息提示
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
      // this.$message({
      //     message: '警告哦，这是一条警告消息',
      //     type: 'warning'
      //   });

      // this.$message.error('错了哦，这是一条错误消息');

      // this.$message('这是一条消息提示');
    },
    handleClose(done) {
      this.deleteConfirmVisible = false
    },
    handleDialogClose(done) {
      this.dialogVisible = false
    },
    // 弹出员工列表
    toOpenClientList: function() {
      this.dialogVisible = true
    }
  },
  created() {
    this.toGetList()
  }
}
</script>