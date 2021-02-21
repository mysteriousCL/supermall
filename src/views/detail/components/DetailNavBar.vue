<template>
  <top-bar>
    <template v-slot:left>
      <img src="~assets/image/common/back.svg" alt="" class="backiamge" @click="clickimage">
    </template>
    <template v-slot:center>
        <span v-for="(item,index) in bar_list" class="detail_navbar_item"
              :class="{nav_bar_item_active:currentIndex === index}" @click="clickfn(index)">{{item}}</span>
    </template>
  </top-bar>
</template>

<script>
import topBar from "components/common/topBar/topBar";
export default {
  name: "DetailNavBar",
  data(){
    return {
      bar_list:['商品','参数','评论','推荐'],
      is_active:false,
      currentIndex:0,

    }
  },

  methods:{
    clickfn(index){
      this.currentIndex = index;
      this.$emit('topBarClick',index)

    },
    clickimage(){
      this.$router.back()
    }
  },
  components:{
    topBar
  }
}
</script>

<style scoped>

.detail_navbar_item{
  display: inline-block;
  width: 25%;
}

.nav_bar_item_active{
  color: red;
}
</style>

