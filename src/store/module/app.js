import {
  getMenuByRouter,
} from '@/libs/util'
import router from '@/router'
import routers from '@/router/routers'
export default {
  namespaced:true,
  state:{
    breadCrumbList: [],
    tagNavList: [],
    homeRoute: {},
    // local: localRead('local'),
    errorList: [],
    hasReadErrorPage: false,
    term: 'app-term'
  },
  getters:{
    menuList: (state, getters) => getMenuByRouter(routers),
    errorCount: state => state.errorList.length
  },
  mutations:{
    updateTerm(state,value){
      state.term = value
    }
  }
}
