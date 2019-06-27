<template>
  <el-table-column
    align="center"
    prop="parentName"
    label="家长姓名"
    sortable='custom'
    width="100">
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
