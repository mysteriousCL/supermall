<template>
  <div v-if="Object.keys(shop).length !== 0" class="detail_shop_style">
    <div class="detail_shop_base">
      <img :src="shop.logo" alt="" />
      <span>{{shop.name}}</span>
    </div>

    <div class="shop_info">
      <div class="shop_info_one">
        <span><b>{{sells}}</b><span>总销量</span></span>
        <span><b>{{shop.goodsCount}}</b><span>全部宝贝</span></span>
      </div>

      <div class="shop_info_two">
        <div v-for="(item,index) in shop.score">
          <span>{{item.name}}</span>
          <span :class="{score1_active:item.isBetter,score_num:true}">{{item.score}}</span>
          <span :class="{score2_active:item.isBetter,base_bg:true}">{{item.isBetter ? "高" : "低"}}</span>
        </div>
      </div>
    </div>
    <p class="into_shop">进店逛逛</p>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    sells(){
      let sell = this.shop.sells;
      if(sell>9999){
        return (sell/10000).toFixed(1) + '万'
      }

    }
  },

}
</script>

<style scoped>
.detail_shop_style{
  border-bottom: 2px solid  hsla(207,66%,44%,.5);
  margin-bottom: 2rem;
}
.detail_shop_base{
  height: 5rem;
  display: flex;

}
.detail_shop_base img{
  height: 100%;
  margin-left: 10px;

}
.detail_shop_base span{
  font-size: 1.5rem;
  font-weight: 600;
  align-self: center;
  padding-left: 10px;
}
.shop_info{
  display: flex;
  width: 100%;
}
.shop_info_one span span{
  display: block;
  font-size: 0.8rem;
}
.shop_info_one>span{
  align-self: center;
}
.shop_info_one b{
  display: block;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
}
.shop_info_one{
  flex: 1;
  display:flex;
  justify-content: space-evenly;
  border-right: 1px solid rgba(55,55,55);
}

.shop_info_two{
  flex: 1;
}
.shop_info_two div{
  display: flex;
  margin-bottom: 10px;
  justify-content: space-evenly;
}
.shop_info_two span{
  display: inline-block;
}
.base_bg{
  background-color: #42b983;
  color: white;
}
.score_num{
  width: 2rem;
  color: #42b983;
}
.score1_active{
  color: #ff5777;
}
.score2_active{
  background-color: #ff5777;
}
.into_shop{
  margin: 1rem auto;
  width: 7rem;
  text-align: center;
  border-radius: 10px;
  background-color: hsla(135,43%,69%,.5);

}
</style>
