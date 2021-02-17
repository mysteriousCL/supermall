<template>
  <div class="recommend" v-if="list.length !== 0">
    <div v-for="item in list">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend_text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 10px solid #eee;
}
img{
 width: 90px;
}
.recommend_text{
  text-align: center;
  margin-top: 10px;
}
</style>
