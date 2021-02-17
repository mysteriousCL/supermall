<template>
  <div v-if="goodsList.length !== 0" class="goods">
    <goods-list-item v-for="item in goodsList" :goods-item="item" :key="item.acm"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
.goods{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,45%);
  gap:10px 10px;
  justify-content: center;

}
</style>
