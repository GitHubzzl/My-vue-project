<template>
  <el-table-column
    align="center"
    prop="email"
    label="电子邮箱"
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
