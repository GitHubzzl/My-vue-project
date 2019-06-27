<template>
  <el-table-column
    align="center"
    label="姓名"
    sortable='custom'
    width="100">
    <template slot-scope="{ row }">
      <el-button type="text" size="small" @click="openDetailsDialog(row)"><span class="break-word">{{row.name}}</span></el-button>
    </template>
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
