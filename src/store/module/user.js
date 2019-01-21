export default {
  namespaced:true,
  state:{
    userName:'',
    term:'user-term-2019上',
    school:'华师一附中',
    friends:['zhangsan','lihua','wuyuanyuan'],
    count:0
  },
  getters:{
    friendsLen:(state) => state.friends.length
  },
  mutations:{
    updateTerm(state,value){
      state.term = value
    },
    countAdd:(state) => state.count++
  },
  actions:{
    actionA({commit}) {
      commit('countAdd')
    }
  }
}



