<template>
  <div class="p20">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-message"></i> 合作商材料明细列表
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
        <el-button type="primary" size="small" slot="toolbar" @click="to('/userManagement/userAdd')">新增</el-button>
      </table-with-page>
    </div>
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
      tableForm: {
        teacherNum: '',
        teacherSex: ''
      },
      tableData: [],
      rowHeader: [
        // 未做任何格式化处理的数据
        {
          prop: 'teacherNum',
          label: '合作商名称',
          // fixed: true,
          width: '200',
          render: (h, params) => {
            return h('span', '廖合作商')
          }
        },
        {
          prop: 'teacherNum',
          label: '商品名称',
          // fixed: true,
          width: '200'
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '商品品牌',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '商品类型',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '价格',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '尺寸',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '型号',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '用途',
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
            return h('el-button', {
              props: {
                type: 'text',
                icon: 'el-icon-delete'
                // size: 'small'
              },
              on: {
                click: () => {
                  // this.to('')
                }
              }
            }, '详情')
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