<template>
  <div v-if="Object.keys(cartItem).length !== 0" class="item_contain">

    <check-button class="slect_box" :is_active="cartItem.checked"  @click.native="select_this"/>

    <div class="cart_item_list">
      <img :src="cartItem.image" alt="">
      <div class="car_item_detail">
        <p class="cart_title">{{cartItem.title}}</p>
        <p class="cart_desc">{{cartItem.dec}}</p>

        <p class="cart_price_count">
          <span class="prod_price">￥{{cartItem.price}}</span>
          <span class="prod_count">{{product_count}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartProItem",
  props:{
    cartItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    product_count:function (){
      return this.cartItem.count ? '×'+this.cartItem.count : ""
    }
  },
  components:{
    CheckButton
  },
  methods:{
    select_this(){
      // 商品的是否selected，应该是商品对象的一部分
      this.cartItem.checked =!this.cartItem.checked
    }
  }
}
</script>

<style scoped>
.item_contain{
  width: 100%;
  display: flex;
  padding: 10px 10px;
  border-bottom: 1px solid hsla(183,54%,3%,0.4);
}

.slect_box{
  align-self: center;
  margin-right:10px;
}
.cart_item_list{
  display: inline-flex;
}
.car_item_detail{
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
}
p{
  width: 270px;
}
.cart_price_count{
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.prod_price{
  color: var(--color-high-text);
}

img{
  width: 80px;
  height: 112px;
  border-radius: 10px;
}

.cart_title,.cart_desc{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

</style>
