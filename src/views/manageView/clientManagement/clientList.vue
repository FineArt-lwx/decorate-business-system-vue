<template>
  <div class="p20">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-message"></i> 客户列表
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
        <el-button type="primary" size="small" slot="toolbar" @click="to('/clientTwoStep')">新增</el-button>
      </table-with-page>
    </div>
    <el-dialog
      title="删除"
      :visible.sync="deleteConfirmVisible"
      width="30%"
      :modal="false"
      :before-close="handleClose">
      <div>
        <span>您确认要删除此用户吗！</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="pan-btn light-ccc-btn" @click="deleteConfirmVisible = false">取消</el-button>
        <el-button class="pan-btn light-blue-btn" type="primary" @click="clickOk" >确定</el-button>
      </span>
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
      tableForm: {
        teacherNum: '',
        teacherSex: ''
      },
      tableData: [],
      rowHeader: [
        // 未做任何格式化处理的数据
        {
          prop: 'teacherNum',
          label: '客户姓名',
          // fixed: true,
          width: '200'
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '客户性别',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        {
          prop: 'teacherNum',
          label: '客户手机号',
          // fixed: true,
          width: '200'
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '客户身份证号',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '地址',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        }, // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '对接员工',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        {
          prop: '',
          label: '操作',
          width: '200',
          // fixed: 'right',
          render: (h, params) => {
            // const test = () => {
            //   console.log(params.row)
            //   this.$router.push('/tab/Tabs')
            // }
            // return (<el-button type='text' onClick={test}>删除</el-button>)
            return h('div', [h('el-button', {
              props: {
                type: 'text',
                icon: 'el-icon-delete'
                // size: 'small'
              },
              on: {
                click: () => {
                  // this.$router.push({ path: '/' })
                  this.deleteConfirmVisible = true
                }
              }
            }, '删除'), h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  // this.test(params.row)
                  this.$router.push({ path: '/clientTwoStep' })
                }
              }
            }, '编辑'), h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  this.$router.push({ path: '/clientDetail' })
                }
              }
            }, '详情')
            ])
          }
        }
      ],
      totalAmount: 0,
      pageSize: 2
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
    getInfo: function() {
      console.log('info')
    },
    to: function(path) {
      this.$router.push({ path: path })
    },
    clickOk: function() {
      // 调用删除的接口
      this.deleteConfirmVisible = false
      // 如果删除成功 弹出信息提示
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
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
    }
  },
  created() {
    this.toGetList()
  }
}
</script>