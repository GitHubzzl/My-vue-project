<template>
  <el-table-column
    align="center"
    prop="datePicker"
    label="日期选项"
    sortable='custom'
    width="130">
  </el-table-column>
</template>
<script>
  export default {
    props:{
      column:{
        type:Object
      }
    },
    data() {
      return {
        //
      }
    },
    methods:{
      //
    }
  }
</script>
