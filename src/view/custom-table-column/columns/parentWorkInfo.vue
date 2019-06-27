<template>
  <el-table-column
    align="center"
    prop="parentWorkInfo"
    label="工作单位及职务"
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
