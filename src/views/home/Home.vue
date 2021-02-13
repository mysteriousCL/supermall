<template>
  <div id="home">
    <top-banner title="购物街" class="nav-bar" />
    <home-swiper :image-list="banner" />


  </div>
</template>

<script>
//公共代码
import topBanner from "components/content/topbanner/topBanner";
//请求
import {homeRequestMultidata} from "network/homeRequest";
//导入轮播图
import HomeSwiper from "./components/HomeSwiper";

export default {
  name: "Home",
  data(){
    return {
      banner:[]
    }
  },
  methods:{

  },
  mounted() {
    homeRequestMultidata().then(res=>{
      console.log(res)
      console.log(res.data.banner.list)
      this.banner = res.data.banner.list;
    })
  },
  components:{
    topBanner,HomeSwiper
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: white;
}

</style>
