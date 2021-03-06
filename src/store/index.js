import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from "./mutations";
import actions from "./actions";

const state = {
  cartList:[]
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters:{
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    }
  }
})
