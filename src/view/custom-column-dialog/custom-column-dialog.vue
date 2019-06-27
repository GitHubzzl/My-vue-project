<template>
  <div>
    <el-button @click="openDialog">打开自定义列对话框</el-button>
    <el-dialog
      title="自定义显示列"
      :visible.sync="dialogVisible"
      width="800px"
      :before-close="handleClose">
      <el-row :gutter="8">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="9">
          <div class="clearfix">
            <p>勾选显示列（最多勾选10项）</p>
            <ul class="select-list list-wrap">
              <li v-for="select in selectList">
                <el-checkbox v-model="select.flag" @change="selectChange(select)">{{select.name}}</el-checkbox>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="9">
          <div class="clearfix">
            <p>拖动调整显示顺序</p>
            <draggable v-model="selectedList" :move="getdata" @update="datadragEnd" style="height: 100%">
              <transition-group class="list-wrap selected-list draggable" tag="ul">
                <li v-for="item in selectedList" class="clearfix" :key="item.id">
                  <i class="fa fa-bars"></i>
                  <span >{{item.name}}</span>
                </li>
              </transition-group>
            </draggable>
          </div>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitSelected">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  import cloneDeep from 'lodash/cloneDeep'
  export default {
    components: {
      draggable
    },
    data() {
      return {
        dialogVisible: false,
        selectList:[
          {name:'1',id:'1',flag:true},
          {name:'2',id:'2',flag:true},
          {name:'3',id:'3',flag:false},
          {name:'4',id:'4',flag:false},
          {name:'5',id:'5',flag:false},
          {name:'6',id:'6',flag:false},
          {name:'7',id:'7',flag:false},
          {name:'8',id:'8',flag:false},
          {name:'9',id:'9',flag:false},
          {name:'10',id:'10',flag:false},
          {name:'10',id:'11',flag:false},
          {name:'10',id:'12',flag:false}
        ],
        selectedList:[
          {name:'1',id:'1',flag:true},
          {name:'2',id:'2',flag:true},
        ]
      };
    },
    mounted(){
      //this.selectChange();
    },
    methods: {
      openDialog(){
        this.dialogVisible = true;
      },
      handleClose(done) {
        this.dialogVisible = false;
      },
      selectChange(param){
        let list = cloneDeep(this.selectList);
        //
        let arr = list.filter(item=>{
          return item.flag === true;
        })
        if(arr && arr.length >10){
          list.forEach(item=>{
            if(item.id === param.id){
              item.flag = false;
            }
            return item
          })
          this.selectList = list
          // toast提示 不能大于10条
          return
        }
        //
        let selectedArr = cloneDeep(this.selectedList);
        if(param.flag == true){
          //添加一条
          selectedArr.push(param);
          this.selectedList = selectedArr;
        }else{
          //删除一条
          let delArr = selectedArr.filter(item=>{
            return item.id !== param.id;
          })
          this.selectedList = delArr;
        }

        //
      },
      submitSelected(){
        //console.log(JSON.stringify(this.selectedList))
        // this.dialogVisible = false;
      },
      getdata(){
        //
      },
      datadragEnd(){
        //
      }

    }
  };
</script>
<style lang="less">
  .list-wrap{
    width: 100%;
    border: 1px solid #e6e6e6;
    padding-left: 5%;
    margin-top: 20px;
    height: 380px;
    max-height: 422px;
    overflow-y: scroll;
    li{
      display: block;
      padding: 10px 10px;
      border-bottom: 1px solid #e6e6e6;
    }
  }
  .select-list{
    li{
      &:last-child{
        border-bottom: none;
      }
    }
  }
  .selected-list{
    li{
      &:nth-of-type(10){
        border-bottom: none;
      }
    }
  }
</style>
