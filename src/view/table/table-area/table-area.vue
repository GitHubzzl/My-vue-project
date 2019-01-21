<template>
  <div class="tableArea">
    <h3>说明：相比于tableAreaV1.0.5，不render成row表单</h3>
    <Table border :columns="tableColumns" :data="tableData"></Table>
    <p>row0 ： {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;{{actionModel.row0}}</p>
    <p>}</p>
    <p>row1 ： {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;{{actionModel.row1}}</p>
    <p>}</p>
    <p>row2 ： {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;{{actionModel.row2}}</p>
    <p>}</p>
    <p>row3 ： {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;{{actionModel.row3}}</p>
    <p>}</p>
    <p>row4 ： {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;{{actionModel.row4}}</p>
    <p>}</p>
  </div>
</template>
<script>
  import MOCK from './mock.json'
  export default {
    name: 'tableArea',
    props: {
      areaInfo: {
        type: Object,
        default: ()=>{
          return {}
        }
      }
    },
    computed: {
      tableData () {
        return MOCK.data
      }
    },
    data () {
      return {
        tableColumns:[],
        rowList:{
          row1:{
            field1:'',
            field2:''
          }
        },
        rowRules:{
          rules1:{
            field1:''
          }
        },
        actionModel:''
      }
    },
    created () {
      this.computTableColumns()
      this.computActionModel()
    },
    methods: {
      /**
       * 计算table的操作项的数据
       * @returns
       */
      computActionModel(){
        let len = MOCK.data.length
        let row = {};
        for(let i=0; i<len; i++){
          let rowKey = 'row' + i
          row[rowKey] = {}
          for(let j=0; j < MOCK.operation.length; j++){
            let fieldKey = MOCK.operation[j].type + j
            row[rowKey][fieldKey] = ''
          }
        }
        this.actionModel = row
      },
      /**
       * 计算table的每列数据
       * @returns
       */
      computTableColumns () {
        let columns = []
        let arr = MOCK.tableHeader
        arr.forEach(item=>{
          if (item.key === 'action') {
            let actionWidth = MOCK.operation.length * 110
            let obj = {
              title: '操作',
              key: 'action',
              align: 'center',
              width: actionWidth
            }
            columns.push(Object.assign({}, obj, {render: (h, row)=>{
                //需要渲染的操作项 {Array}
                let renderArr = this.renderActionsFun(h, row)
                return h('div', [renderArr])
              }}))
          }
          else {
            columns.push({
              title: item.title,
              key: item.key,
              align: 'center'})
          }
        })
        // return columns
        this.tableColumns = columns
      },
      /**
       * render  渲染每个操作项，得到一个数组
       * @param h {Function} 创建节点函数
       * @param  {Object}
       * @returns renderArr {Array} 返回render每个操作项的数组
       */
      renderActionsFun (h, row){
        let renderArr = []
        let operation = MOCK.operation
        operation.forEach(item=>{
          let renderItem = ''
          if (item.type === 'select') {
            // render select
            renderItem = this.renderSelect(h,row,item)
          }
          else if (item.type === 'button') {
            // render button
            renderItem = this.renderButton(h,row,item)
          }
          else if (item.type === 'input') {
            // render input
            renderItem = this.renderInput(h,row,item)
          }
          else if (item.type === 'radio') {
            // render radio
            renderItem = this.renderRadio(h,row,item)
          }
          else if (item.type === 'checkbox') {
            // render checkbox
            renderItem = this.renderCheckbox(h,row,item)
          }
          renderArr.push(h('div',{
            style: {
              'display': 'inline-block'
            },
          },[renderItem]))
        })
        return renderArr
      },
      /**
       * render select
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderSelect(h,row,item){
        let _this = this
       // let fieldKey = _this.fieldKey(row,item)
        return h('Select', {
          style: {
            'display': 'inline-block',
            'width': '100px',
            'margin-right': '5px'
          },
          on: {
            'on-change' (value) {
              _this.setActionModel(row,item,value)
              //item.value = event
              //_this.actionHandle(item)
            }
          }
        }, item.option.map((optionItem)=>{
          return h('Option', {
            props: {
              value: optionItem.value,
              label: optionItem.name
            }
          })
        }))
      },
      /**
       * render input
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderInput(h,row,item){
        let _this = this
        return h('Input', {
          style: {
            'display': 'inline-block',
            'width': '80px',
            'margin-right': '5px'
          },
          on: {
            'on-blur' (event) {
              let value = event.target.value
              _this.setActionModel(row,item,value)
              //_this.actionHandle(item)
            }
          }
        }, '')
      },
      /**
       * render radio
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderRadio(h,row,item){
        let _this = this
        return h('RadioGroup',{
          on:{
            "on-change":(value)=>{
              _this.setActionModel(row,item,value)
            }
          }
        }, item.label.map((radioOption)=>{
          return h('Radio',{
            props:{
              "label":radioOption
            }
          },radioOption)
        }))
      },
      /**
       * render checkbox
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderCheckbox(h,row,item){
        let _this = this
        return h('CheckboxGroup',{
          style: {
            'display': 'inline-block'
          },
          on:{
            "on-change":(value)=>{
              _this.setActionModel(row,item,value)
            }
          }
        }, item.label.map((checkboxItem)=>{
          return h('Checkbox',{
            props:{
              "label":checkboxItem
            },
            style: {
              'margin-right': '15px'
            },
          },checkboxItem)
        }))
      },
      /**
       * render button
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      renderButton(h,row,item) {
        return h('Button', {
          props: {
            type: 'primary',
            size: 'small'
          },
          style: { 'margin-right': '5px'},
          on: {
            click: () => {
              this.actionHandle(row,item)
            }
          }
        }, item.name)
      },
      /**
       * render 计算每个字段双向绑定的key
       * @param row {Object} 当前行的信息
       * @returns
       */
      fieldKey (row,item){
        let rowKey ='row' + row.index
        let fieldKey = item.type + item.index
        return this.actionModel[rowKey][fieldKey]
      },
      /**
       * render button
       * @param h {Function} 创建节点函数
       * @param params {Object} 当前行的信息
       * @param item {Object} 当前元素的信息
       * @returns
       */
      setActionModel (row,item,value) {
        //需要修改的key
        let rowKey = 'row' + row.index
        let fieldKey = item.type + item.index
        //重新赋值该字段
        this.actionModel[rowKey][fieldKey]= value
        console.log("=================:" + this.actionModel)
      },
      actionHandle (row,item) {
        console.log(item)
        console.log(MOCK)
      }
    }
  }
</script>
<style lang="less" scoped>
  .tableArea{
    width: 1200px;
    padding: 20px;
  }
</style>
