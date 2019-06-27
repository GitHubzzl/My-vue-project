<template>
  <el-table-column
    align="center"
    label="出生日期"
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
      openDetailsDialog(){

      }
    }
  }
</script>
