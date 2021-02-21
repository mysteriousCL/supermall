<template>
  <div class="detail_button_bar">

    <span class="item_service">
      <span class="spotimage spotleft"></span>
      客服
    </span>

    <span  class="item_shop">
      <span class="spotimage spotcenter"></span>
      店铺
    </span>

    <span class="item_collect" @click="collect">
      <span class="spotimage spotright" :class="{colect_active:active}"></span>
      收藏
    </span>

    <span class="detail_cart" @click="addCart">加入购物车</span>
    <span class="detail_buy">购买</span>
  </div>
</template>

<script>
export default {
  name: "DetailButtonBar",
  data(){
    return {
      active:false
    }
  },
  methods:{
    collect(){
      this.active = !this.active
    },
    addCart(){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.detail_button_bar{
  display: flex;
  height: 49px;
  width: 100%;
  background-color: white;
  position: relative;
}
.item_service,.item_collect,.item_shop{
  flex:1;
  text-align: center;
}
.spotimage{
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background: url("~assets/image/detail/detail_bottom.png") 0 0 no-repeat;
  background-size: cover;

}
.spotleft{
  background-position: 0 -73px;
}
.spotcenter{
  background-position: 0 -135px;
}
.spotright{
  background-position: 0 0px;
}
.detail_cart{
  flex: 2;
  background-color: hsla(54,91%,51%,0.8);
  text-align: center;
  line-height: 300%;
}

.detail_buy{
  flex: 2;
  text-align: center;
  background-color: hsla(353,91%,63%,0.6);
  line-height: 300%;
}
.colect_active{
  background-position: 0 -35px;
}
</style>

