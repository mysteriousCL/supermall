import {ADD_CART,ADD_COUNT} from "./const";

export default {
  [ADD_CART](state,payload){
    state.cartList.push(payload)
  },
  [ADD_COUNT](state,payload){
    payload.count++;
  }
}
