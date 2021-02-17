<template>
  <div id="home">
    <top-banner title="购物街" class="nav-bar" />
    <better-scrool class="wrapper" ref="scrool" @scroll="scrolling" @pullingUp="pullUpMore">
      <home-swiper :image-list="banner" @imageCompleted="imageLoadfn"/>
      <home-recommend :list="recommendList" />
      <feature-view />
      <bar-control :titles="tabList" @tabClick="receiveType" ref="tabControl1" />
      <goods-list :goods-list="goodsList"/>
    </better-scrool>
    <bar-control :titles="tabList" @tabClick="receiveType2" ref="tabControl2" class="tab_control2" v-show="controlShow"/>
    <move-top @click.native="moveTop" v-show="showTop"/>
  </div>
</template>

<script>

import topBanner from "components/content/topbanner/topBanner";
import BarControl from "components/content/barControl/BarControl";
import GoodsList from "components/content/goods/GoodsList";
import BetterScrool from "components/common/scroll/BetterScrool";
import MoveTop from "components/content/moveTop/MoveTop";

import HomeSwiper from "./components/HomeSwiper";
import HomeRecommend from "./components/HomeRecommend";
import FeatureView from "./components/FeatureView";

import {homeRequestMultidata,homeRequestData} from "network/homeRequest";

import {debounce} from "common/utils";

export default {
  name: "Home",
  data(){
    return {
      banner:[],
      recommendList:[],
      tabList:[{name:"pop",title:"流行"},{name:"new",title:"新款"},{name:"sell",title:"精选"}],
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      type:"pop",//默认pop
      showTop:false,
      controlHeight:0,
      controlShow:false,
    }
  },
  created(){
    // 请求多条数据
    this.getHomeRequestMultidata()
    // 初始化goods数据
    this.getTypeGoods("pop");
    this.getTypeGoods("new");
    this.getTypeGoods("sell");

  },
  mounted() {
    const refresh = debounce(this.$refs.scrool.refresh,300)
    // refresh 不会销毁，闭包引用
    this.$bus.$on("image_load",()=>{
      refresh()
    })
  },
  computed:{
    goodsList(){
      // 向goodslist传入list数据
      return this.goods[this.type].list
    },
  },
  methods:{
    //网络请求相关方法
    getHomeRequestMultidata(){
      homeRequestMultidata().then(res=>{
        // 得到轮播图数据与推进数据
        this.banner = res.data.banner.list;
        this.recommendList = res.data.recommend.list;
      });
    },
    getTypeGoods(type){
      //请求goods数据封装
      let goods = this.goods[type];
      let page = goods.page + 1
      homeRequestData(type,page).then(res=>{
        goods.page = page;
        goods.list.push(...res.data.list)

        this.$refs.scrool.bs && this.$refs.scrool.bs.finishPullUp()
      })
    },
    // 获取tabControl内部的当前类型
    receiveType(type,index){
      this.type = type;
      this.$refs.tabControl2.currentIndex = index
    },
    receiveType2(type,index){
      this.type = type;
      this.$refs.tabControl1.currentIndex = index
    },
    //返回顶部
    moveTop(){
      this.$refs.scrool.bs.scrollTo(0,0,300)
    },
    //滚动中
    scrolling(position){
      //是否展示返回顶部按钮
      this.showTop = position.y < -1000
      //吸顶
      let atachPositon = -position.y + 44
      if(atachPositon >= this.controlHeight && !this.controlShow){
        this.controlShow = true
      }else if(atachPositon < this.controlHeight && this.controlShow){
        this.controlShow = false
      }
    },
    // 下拉加载更多
    pullUpMore(){
      this.getTypeGoods(this.type)
    },
    //swiper图片加载完毕
    imageLoadfn(){
      // 获取tabControl的高度
      this.controlHeight = this.$refs.tabControl1.$el.offsetTop
    }
  },
  components:{
    topBanner,HomeSwiper,HomeRecommend,FeatureView,BarControl,GoodsList,BetterScrool,MoveTop
  }
}
</script>

<style scoped>
#home{
  height: 100Vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: white;
}
.wrapper{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.tab_control2{
  position: fixed;
  width: 100%;
  top:44px;
  left:0;
}
</style>
