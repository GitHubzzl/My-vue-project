<template>
  <el-table-column
    align="center"
    prop="parentPhone"
    sortable='custom'
    label="家长手机"
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
