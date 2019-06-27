<template>
  <el-table-column
    align="center"
    prop="houseBelongVillage"
    column-key="houseBelongVillage"
    label="房产所属小区"
    ref="villages"
    :filters="column.filters"
    width="120"
  >
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
