<template>
  <el-table-column
    align="center"
    prop="birthplace"
    label="籍贯"
    :filters="column.filters"
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
