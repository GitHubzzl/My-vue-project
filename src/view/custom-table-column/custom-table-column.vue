<template>
  <div>
    <el-table
      v-loading="loading"
      ref="applyList"
      :data="list"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @sort-change='tableSortChange'
      @filter-change="handleFilterChange">
      <el-table-column
        type="selection"
        align="center"
        width="60">
      </el-table-column>
      <el-table-column
        align="center"
        label="序号"
        type="index"
        :index="indexMethod"
        width="60">
      </el-table-column>
        <column-item v-for="columnItem in columnsList" :column="columnItem"></column-item>
    </el-table>
  </div>
</template>
<script>
  import ColumnItem from './column-item.vue'
  export default {
    components:{
      ColumnItem
    },
    data() {
      return {
        loading:false,
        list:[],
        columnsList:[],
        component:''
      }
    },
    mounted(){
      this.getList();
      this.getColumns();
    },
    methods:{
      handleSelectionChange(){},
      tableSortChange(){},
      handleFilterChange(){},
      indexMethod(index) {
        // return (this.page - 1) * this.size + index + 1;
        return (1 - 1) * 20 + index + 1;
      },
      getList(){
        let obj1 = {
          applyNumber: "201801",
          applyTime: "2016-09-21 08:50:08",
          id: "510000201305238679",
          idCard: "110011200607070019",
          index: "1",
          isRecruit: true,
          name: "周杰伦",
          school: "清华大学",
          sex: "男",
          status: 1
        }
        this.list.push(obj1);
        this.list.push(obj1);
        this.list.push(obj1);
      },
      getColumns(){
        this.columnsList = [
          {id:'1',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'报名号',itemType:'applyNumber',itemKey:''},
          {id:'2',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'姓名',itemType:'name',itemKey:''},
          {id:'3',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'身份证号',itemType:'idCard',itemKey:''},
          {id:'4',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'性别',itemType:'sex',itemKey:''},
          {id:'5',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'出生日期',itemType:'birthday',itemKey:''},
          {id:'6',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'手机号',itemType:'phone',itemKey:''},
          {id:'7',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'民族',itemType:'nation',itemKey:''},
          {id:'8',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'籍贯',itemType:'birthplace',itemKey:''},
          {id:'9',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'户口所在地',itemType:'registeredPlace',itemKey:''},
          {id:'10',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'家庭住址',itemType:'address',itemKey:''},
          {id:'11',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'毕业学校',itemType:'school',itemKey:''},
          {id:'12',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'电子邮箱',itemType:'email',itemKey:''},
          {id:'13',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'家长姓名',itemType:'parentName',itemKey:''},
          {id:'14',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'成员关系',itemType:'relationship',itemKey:''},
          {id:'15',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'工作单位及职务',itemType:'parentWorkInfo',itemKey:''},
          {id:'16',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'家长手机',itemType:'parentPhone',itemKey:''},
          {id:'17',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'单选',itemType:'radio',itemKey:''},
          {id:'18',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'多选',itemType:'checkbox',itemKey:''},
          {id:'19',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'单行文本框',itemType:'input',itemKey:''},
          {id:'20',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'多行文本框',itemType:'textarea',itemKey:''},
          {id:'21',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'下拉选项',itemType:'select',itemKey:''},
          {id:'22',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'日期选项',itemType:'datePicker',itemKey:''},
          {id:'23',searchId:'',filters:[{text:'1',value:'1'},{text:'2',value:'2'}],valueName:'房产所属小区',itemType:'houseBelongVillage',itemKey:''},
        ]
      }
    }
  }
</script>
