<template>
  <div id="detail">
    <detail-nav-bar class="detail_bar" ref="detail_bar" @topBarClick="skipto"/>
    <better-scrool class="scroll" ref="scroll" @scroll="scroolling">
      <detail-swipper :image-list="topImages" class="detail_wraper" ref="detail_swiper" />
      <details-base-info :goods="goods" />
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :image-info="imageInfo" @imageload="image_complete"/>
      <detail-goods-params  :goods-params="goods_params" ref="detail_params"/>
      <detail-comment-info :comment-info="comment" ref="detail_comment" />
      <goods-list :goods-list="recommends" ref="detail_recomend" />
    </better-scrool>
    <move-top v-show="is_back_show" @click.native="moveTop"/>
    <detail-button-bar @addToCart="addCart"/>
  </div>
</template>

<script>
//公共组件
import BetterScrool from "components/common/scroll/BetterScrool";
import GoodsList from "components/content/goods/GoodsList";
//私有组件
import DetailNavBar from "./components/DetailNavBar";
import DetailSwipper from "./components/DetailSwipper";
import DetailsBaseInfo from "./components/DetailsBaseInfo";
import DetailShopInfo from "./components/DetailShopInfo";
import DetailGoodsInfo from "./components/DetailGoodsInfo";
import DetailGoodsParams from "./components/DetailGoodsParams";
import DetailCommentInfo from "./components/DetailCommentInfo";
import DetailButtonBar from "./components/DetailButtonBar";
//请求数据
import {getDetail,getRecommends,Goods,Shop,GoodsParams} from "network/detailRequest";
import {debounce} from "common/utils";
import {backTop} from "common/mixin";

export default {
  name: "Detail",
  data(){
    return {
      iid:"",
      topImages:[],
      goods:{},
      shop:{},
      imageInfo:{},
      goods_params:{},
      comment:{},
      recommends:[],
      skipPosition:[0,0,0,0],
      currentIndex: 0,
    }
  },
  created() {
    // 保存 iid
    this.iid = this.$route.params.iid;
    // 请求数据
    getDetail(this.iid).then((res)=>{
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 创建商品对象
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      // 创建店铺信息对象
      this.shop = new Shop(data.shopInfo);
      this.imageInfo = data.detailInfo;
      // 创建商品参数对象
      this.goods_params = new GoodsParams(data.itemParams.info,data.itemParams.rule);
      // 获取评论数据
      const list = data.rate.list;
      this.comment = list ? (list[0] ? list[0] : {}) : {};
    });
    getRecommends().then((res)=>{
      this.recommends = res.data.list
    })
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,300)
    this.$bus.$on("detailImageLoad",()=>{
      refresh()
    })
  },
  mixins:[backTop],
  methods:{
    skipto:function (index){
      this.$refs.scroll.bs.scrollTo(0,-this.skipPosition[index],200)
    },
    image_complete(){
      this.$refs.scroll.bs.refresh();
      // 存储各个 导航应该跳转的位置
      this.skipPosition[0] = this.$refs.detail_swiper.$el.offsetTop;
      this.skipPosition[1] = this.$refs.detail_params.$el.offsetTop;
      this.skipPosition[2] = this.$refs.detail_comment.$el.offsetTop;
      this.skipPosition[3] = this.$refs.detail_recomend.$el.offsetTop;
      this.skipPosition.push(Infinity)
    },
    scroolling(position){
      //是否展示返回顶部按钮，该方法是混入的方法
      this.backShow(position.y)

      // 需求是，但滚动到某几个组件位置，改变detail-nav-bar组件的索引，让其发生对于变化
      let y = -position.y;
      let length = this.skipPosition.length;
      // 判断区间范围
      //   [0,7118,7773,7997]
      // [0,7118)    index 0
      // [7118,7773) index 1
      // [7773,7997) index 2

      // [7997,....] index 3
      for(let i=0;i<length-1;i++){
        // 第一种判断
        // if(this.currentIndex !== i && ((y>=this.skipPosition[i] && y<this.skipPosition[i+1]) || (y>=this.skipPosition[length-1] && this.skipPosition[length-1] === this.skipPosition[i]))){
        //   console.log(i,this.currentIndex);
        //   this.currentIndex = i;
        //   break;
        // }
        // this.currentIndex !== i 可以赋值频繁
        // 第二种是分两组情况，即i<length-1,和 i===length-1
        // if(this.currentIndex !== i && ((i<length-1 && y>=this.skipPosition[i] && y<this.skipPosition[i+1]) || (i===length-1 && y >= this.skipPosition[i]))){
        //   console.log(i,this.currentIndex)
        //   this.currentIndex = i;
        //   this.$refs.detail_bar.currentIndex = this.currentIndex;
        //   break;
        // }
        // 若if太长会稍微影响性能
        //第三种方法：在数组中末尾添加一个极值，然后让for循环遍历 0到length-1 范围即可.性能稍微提高
        if(this.currentIndex !== i && (y>=this.skipPosition[i] && y<this.skipPosition[i+1])){
          this.currentIndex = i;
          this.$refs.detail_bar.currentIndex = this.currentIndex;
          break;
        }
      }
    },
    addCart(){
      const product = {};
      product.id = this.iid;
      product.dec = this.goods.dec;
      product.title = this.goods.title;
      product.image = this.topImages[0];
      product.price = this.goods.realPrice;
      product.checked = false

      this.$store.dispatch("addToCart",product).then(res=>{
        this.$toast.show("成功添加至购物车")
      })
    }
  },
  components:{
    DetailNavBar,DetailSwipper,DetailsBaseInfo,DetailShopInfo,DetailGoodsInfo,DetailGoodsParams,DetailCommentInfo,
    GoodsList,BetterScrool,DetailButtonBar
  }
}
</script>

<style scoped>
#detail{
  height: 100vh;

}
.detail_wraper{
  height: 300px;
  width: 100%;
}
.scroll{
  height: calc(100% - 49px - 44px);
}
.detail_content{
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
.detail_bar{
  position: relative;
  z-index: 15;
  background-color: white;
}

</style>
