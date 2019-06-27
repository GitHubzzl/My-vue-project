<template>
  <el-table-column
    align="center"
    prop="applyNumber"
    label="报名号"
    ref="applyNumber"
    sortable='custom'
    width="150">
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
