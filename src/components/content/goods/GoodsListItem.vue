<template>
  <div v-if="Object.keys(goodsItem).length !== 0" class="goods_item" @click="goDetail">
    <img :src="goodsItem.show.img" alt="" @load="imageComplated">
    <div class="goods_info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imageComplated(){
      this.$bus.$emit("image_load")
    },
    goDetail(){
      this.$router.push("/detail/"+this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  border-radius: 5px;
}
.goods_info{
  text-align: center;
}
.goods_info p{
  margin-bottom: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price{
  color: var(--color-high-text);
  margin-right: 10px;
}
.collect::before{
  content: '';
  width: 14px;
  height: 14px;
  display: inline-block;
  background: url('~assets/image/common/collect.svg') 0 0/14px 14px;
}
</style>
