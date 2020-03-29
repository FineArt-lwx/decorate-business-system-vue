<template>
  <div class="p20">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-message"></i> 工程列表
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
        <el-button type="primary" size="small" slot="toolbar" @click="to('/engineeringTwoStep')">新增</el-button>
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
    <el-dialog
      title="提交装修状态"
      :visible.sync="statusVisible"
      width="30%"
      :modal="false"
      :before-close="handleClose">
      <div>
        <span>{{statusVisibleText}}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="pan-btn light-ccc-btn" @click="statusVisible = false">取消</el-button>
        <el-button class="pan-btn light-blue-btn" type="primary" @click="operationClick" >确定</el-button>
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
      statusVisible: false,
      status: '0',
      statusVisibleText: '您确定要更改装修状态为 ** 准备 ** 吗',
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
          label: '房屋地址',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        {
          prop: 'teacherNum',
          label: '房屋归属者',
          // fixed: true,
          width: '200'
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '装修方案',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '负责人',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '工程周期',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '工程开始时间',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '工程预计结束时间',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '浮动时间',
          width: '200'
          // render: (h, params) => {
          //   return h('span', params.row.teacherSex === '0' ? '男' : '女')
          // }
        },
        // 格式化为字符串
        {
          prop: 'teacherSex',
          label: '装修状态',
          width: '200',
          render: (h, params) => {
            return h('span', '未开始')
          }
        },
        {
          prop: '',
          label: '操作',
          width: '300',
          // fixed: 'right',
          render: (h, params) => {
            const deleteNode = h('el-button', {
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
            }, '删除')
            const editNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  // this.test(params.row)
                  this.$router.push({ path: '/engineeringTwoStep' })
                }
              }
            }, '编辑')
            const detailNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  // this.test(params.row)
                  this.$router.push({ path: '/clientDetail' })
                }
              }
            }, '详情')
            const noStartNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  // this.test(params.row)
                  this.statusVisible = true
                }
              }
            }, '未开始')
            const startNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  this.statusVisible = true
                  this.statusVisibleText = '您确定要更改装修状态为 ** 拆改 ** 吗'
                }
              }
            }, '准备')
            const changeNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  this.statusVisible = true
                  this.statusVisibleText = '您确定要更改装修状态为 ** 水电 ** 吗'
                }
              }
            }, '拆改')
            const waterNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  this.statusVisible = true
                  this.statusVisibleText = '您确定要更改装修状态为 ** 防水和基层处理 ** 吗'
                }
              }
            }, '水电')
            const waterproofNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  this.statusVisible = true
                  this.statusVisibleText = '您确定要更改装修状态为 ** 油漆 ** 吗'
                }
              }
            }, '防水和基层处理')
            const oilNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  this.statusVisible = true
                  this.statusVisibleText = '您确定要更改装修状态为 ** 竣工 ** 吗'
                }
              }
            }, '油漆')
            const completeNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  this.statusVisible = true
                  this.statusVisibleText = '您确定要更改装修状态为 ** 软装 ** 吗'
                }
              }
            }, '竣工')
            const softDesignNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                  this.statusVisible = true
                  this.statusVisibleText = '您确定要更改装修状态为 ** 入住 ** 吗'
                }
              }
            }, '软装')
            const checkInNode = h('el-button', {
              attrs: {
                type: 'text',
                icon: 'el-icon-edit'
              },
              on: {
                click: () => {
                }
              }
            }, '入住')
            // switch params.row.装修状态
            if (this.status === '0') {
              return h('div', [deleteNode, editNode, detailNode, noStartNode])
            } else if (this.status === '1') {
              return h('div', [deleteNode, editNode, detailNode, startNode])
            } else if (this.status === '2') {
              return h('div', [deleteNode, editNode, detailNode, changeNode])
            } else if (this.status === '3') {
              return h('div', [deleteNode, editNode, detailNode, waterNode])
            } else if (this.status === '4') {
              return h('div', [deleteNode, editNode, detailNode, waterproofNode])
            } else if (this.status === '5') {
              return h('div', [deleteNode, editNode, detailNode, oilNode])
            } else if (this.status === '6') {
              return h('div', [deleteNode, editNode, detailNode, completeNode])
            } else if (this.status === '7') {
              return h('div', [deleteNode, editNode, detailNode, softDesignNode])
            } else if (this.status === '8') {
              return h('div', [deleteNode, editNode, detailNode, checkInNode])
            }
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
    operationClick: function() {
      this.statusVisible = false
      this.status = parseInt(this.status) + 1
      // 如果删除成功 弹出信息提示
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
      this.toGetList()
      this.status = parseInt(this.status) + 1
    },
    handleClose(done) {
      this.deleteConfirmVisible = false
      this.statusVisible = false
    }
  },
  created() {
    this.toGetList()
  }
}
</script>