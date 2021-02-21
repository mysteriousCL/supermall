<template>
  <div v-if="Object.keys(goodsItem).length !== 0" class="goods_item" @click="goDetail">
    <img v-lazy="showImage" alt="" @load="imageComplated">
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
  computed:{
    showImage(){
      return  this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
    imageComplated(){
      // 容易忽略的问题
      // 路由判断，若在详情页和首页都使用，当在详情页时，就只发给详情页。若在首页使用，就只发给首页
      if(this.$route.path.indexOf("/home") !== -1){
        this.$bus.$emit("homeImageLoad")
      }else if(this.$route.path.indexOf("/detail") !== -1 ){
        this.$bus.$emit("detailImageLoad")
      }

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
