<template>
 <div>
   <keep-alive>
     <router-view />
   </keep-alive>
   <tab-bar :list="list" v-show="isShow" />
 </div>
</template>

<script>
import tabBar from "components/common/tabBar/tabBar";
export default {
  name: "App",
  data(){
    return{
      list:[
        {id:0,name:"home",title:"首页",img:require("assets/image/tabbar/home.svg"),img_active:require("assets/image/tabbar/home_active.svg")},
        {id:1,name:"category",title:"分类",img:require("assets/image/tabbar/category.svg"),img_active:require("assets/image/tabbar/category_active.svg")},
        {id:2,name:"cart",title:"购物车",img:require("assets/image/tabbar/shopcart.svg"),img_active:require("assets/image/tabbar/shopcart_active.svg")},
        {id:3,name:"profile",title:"我的",img:require("assets/image/tabbar/profile.svg"),img_active:require("assets/image/tabbar/profile_active.svg")},
      ]
    }
  },
  components:{
    tabBar
  },
  computed:{
    isShow(){
      // 当在详情页时，不显示tabBar
      return this.$route.path.indexOf('/detail') === -1
    }
  }
}
</script>

<style scoped>
@import "assets/css/base.css";
</style>
