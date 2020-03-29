<template>
  <div>
    <div class="h-datagrid-toolbar" v-if="hasToolBar">
      <slot name="toolbar"></slot>
    </div>
    <el-table :data="data.slice((currentPage4-1)*pageSize,currentPage4*pageSize)" border style="width: 100%;" ref="gridContent" id="elTable">
      <el-table-column
        v-for="(col, index) in rowHeader"
        :key="index"
        :prop="col.prop"
        :label="col.label"
        :fixed="col.fixed"
        :width="col.width"
      >
        <template slot-scope="scope">
          <ex-slot
            v-if="col.render"
            :render="col.render"
            :row="scope.row"
            :index="scope.$index"
            :column="col"
          ></ex-slot>
          <span v-else>{{scope.row[col.prop]}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      :current-page="currentPage4"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="pageSize"
      :total="totalAmount"
      layout="total, sizes, prev, pager, next, jumper"
      class="h-page"
    ></el-pagination>
  </div>
</template> 

<script>
// 自定义内容的组件
var exSlot = {
  functional: true,
  props: {
    row: Object,
    render: {
      type: Function
    },
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },

  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index
    }
    if (data.props.column) params.column = data.props.column
    return data.props.render(h, params)
  }
}

export default {
  components: {
    'ex-slot': exSlot
  },
  props: {
    // 表格数据
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 表头数据
    rowHeader: {
      type: Array,
      default: () => {
        return []
      }
    },
    totalAmount: Number,
    pageSize: Number,
    bindForm: Object
  },
  data() {
    return {
      currentPage4: 1,
      hasToolBar: true
    }
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPage4 = val
    }
  },
  watch: {
    gridContent: {
      handler: (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }
    }
  }
}
</script>
<style scope>
/* :global(.el-table td, .el-table th){
  padding: 6px 0 !important;
} */
/* :global(.el-table__body-wrapper td) {
  padding: 0;
}
:global(.el-table__fixed-header-wrapper th:last-child) {
  border: none !important;
} */
.h-datagrid-toolbar {
  width: 100%;
  padding: 10px;
  margin: 0 0 10px;
  display: flex;
  justify-content: flex-end;
  background: #fbfbfb;
}
.h-page {
  margin: 10px 0 10px 10px;
  display: flex;
  justify-content: flex-end;
}
</style>