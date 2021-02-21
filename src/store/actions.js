import {ADD_CART,ADD_COUNT} from "./const";
export default {
  addToCart({commit,state},payload){
    return new Promise((resolve, reject)=>{
      let product = state.cartList.find(item=>item.id === payload.id);
      if(product){
        commit(ADD_COUNT,product);
        resolve("数量添加+1");
      }else {
        payload.count = 1;
        commit(ADD_CART,payload);
        resolve("商品添加")
      }
    })
  }
}
