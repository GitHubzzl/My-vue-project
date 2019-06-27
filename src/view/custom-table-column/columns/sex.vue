<template>
  <el-table-column
    align="center"
    prop="sex"
    label="性别"
    :filters="[{ text: '男', value: 1 }, { text: '女', value: 2 }]"
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
