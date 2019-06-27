<template>
  <component :is="component" :column="column" ></component>
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
        component:null,
      }
    },
    mounted(){
      let type = this.column.itemType;
      this.component = require(`./columns/${type}.vue`).default;
    },
    methods:{
      //
    }
  }
</script>
