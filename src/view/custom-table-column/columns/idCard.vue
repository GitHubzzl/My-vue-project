<template>
  <el-table-column
    align="center"
    prop="idCard"
    label="身份证号"
    width="140">
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
