<template>
  <el-table-column
    v-if="column.filters.length"
    align="center"
    prop="school"
    label="毕业学校"
    :filters="column.filters"
    width="100">
  </el-table-column>
  <el-table-column
    v-else
    align="center"
    prop="school"
    label="毕业学校"
    sortable="custom"
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
