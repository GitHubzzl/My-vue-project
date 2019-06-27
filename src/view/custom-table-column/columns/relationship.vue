<template>
  <el-table-column
    align="center"
    prop="relationship"
    label="成员关系"
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
