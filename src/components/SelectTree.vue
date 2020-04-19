<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="测试名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" prop="tree">
        <el-select ref="select" v-model="form.tree" clearable @clear="clearHandle">
          <el-option :value="valueId" :label="valueTitle">
            <el-tree
              id="tree-option"
              ref="selectTree"
              :data="data"
              :props="defaultProps"
              node-key="id"
              :default-expanded-keys="[1,2]"
              @node-click="handleNodeClick">
            </el-tree>
          </el-option>
        </el-select>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        id: 1,
        label: '一级 2',
        children: [{
          id: 3,
          label: '二级 2-1',
          children: [{
            id: 4,
            label: '三级 3-1-1'
          }, {
            id: 5,
            label: '三级 3-1-2',
          }]
        }, {
          id: 2,
          label: '二级 2-2',
          children: [{
            id: 6,
            label: '三级 3-2-1'
          }, {
            id: 7,
            label: '三级 3-2-2',
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      form: {
        tree: ''
      },
      valueTitle: '',
      valueId: '',
      rules: {
        name: [
          { required: true, trigger: 'blur' }
        ],
        tree: [
          { required: true, trigger: 'change' }
        ],
      }
    }
  },
  methods: {
    handleNodeClick(node) {
      this.valueTitle = node.label;
      this.valueId = node.id;
      this.form.tree = node.id;
      this.$refs.select.blur();
    },
    clearHandle(){
      this.valueTitle = ''
      this.valueId = null
      this.clearSelected()
    },
    /* 清空选中样式 */
    clearSelected(){
      let allNode = document.querySelectorAll('#tree-option .el-tree-node');
      console.log(allNode)
      allNode.forEach((element)=>element.classList.remove('is-current'))
    },
    handleChange () {
      console.log(`change`)
    },
    handleBlur () {
      console.log(1111)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item{
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}
.el-select-dropdown__item.selected{
  font-weight: normal;
}
ul li >>>.el-tree .el-tree-node__content{
  height:auto;
  padding: 0 20px;
}
.el-tree-node__label{
  font-weight: normal;
}
.el-tree >>>.is-current .el-tree-node__label{
  color: #409EFF;
  font-weight: 700;
}
.el-tree >>>.is-current .el-tree-node__children .el-tree-node__label{
  color:#606266;
  font-weight: normal;
}
</style>