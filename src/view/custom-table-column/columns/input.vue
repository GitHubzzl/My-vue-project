<template>
  <el-table-column
    align="center"
    prop="input"
    label="单行文本框"
    sortable="custom"
    width="120">
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
