<template>
  <div>
    <p>vuex-demo1</p>
    <p>term:{{term}}</p>
    <p>friendsLen:{{friendsLen}}</p>
    <p>school:{{school}}</p>
    <p @click="addCount">{{count}}</p>
  </div>
</template>
<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  export default {
    name:'vuexDemo1',
    computed:{
      ...mapState({
        term: state => state.user.term,
        count: state => state.user.count
      }),
      school(){
        return this.$store.state.user.school
      },
      friendsLen(){
        return this.$store.getters['user/friendsLen']
      }
    },
    data () {
      return {
        'ser':123 //成绩
      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      getData(){
        console.log(this.$store.state.user.term)
        console.log(this.$store.state.app.term)
        this.$axios.get('/user/getTerm').then(data=>{
          let res = data.data
          if(res.data.type === 1){
            this.$store.commit('user/updateTerm',"修改user-term")
          }else if(res.data.type === 2){
            this.$store.commit('app/updateTerm',"修改app-term")
          }
          console.log(this.$store.state.user.term)
          console.log(this.$store.state.app.term)
        })
      },
      addCount(){
        this.$store.dispatch('user/actionA')
      }
    }
  }

</script>
