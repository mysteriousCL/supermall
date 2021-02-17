<template>

    <swiper ref="mySwiper" :options="swiperOptions" v-if="imageList.length !== 0">
      <swiper-slide v-for="item in imageList" :key="item.acm">
        <a :href="item.link"><img :src="item.image" alt="" @load="imageLoad"></a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
//所有的滑动样式，包括所有模块的样式(如导航、分页等)

//默认情况下，Vue.js使用Swiper的核心版本(没有任何附加模块)。如果想使用导航、分页和其他模块，则必须首先安装它们。
import SwiperCore, {Pagination, Autoplay} from 'swiper';
SwiperCore.use([ Pagination, Autoplay]);

export default {
  name: "HomeSwiper",
  props:{
    imageList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      count:0,
      swiperOptions: {
        // // Some Swiper option/callback...
        pagination: {
          el: '.swiper-pagination',// 分页器
          clickable:true,//为true时，点击分页器的指示点分页器会控制Swiper切换
        },
        loop:true,// true循环轮播;false不循环轮播
        // //自动播放
        autoplay:{
          delay:1500,//自动切换的时间间隔，单位ms
          stopOnLastSlide:false,//如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
          disableOnInteraction:false//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper && this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper && this.swiper.slideTo(3, 1000, false)
  },
  methods:{
    imageLoad(){
      this.count++;
      this.count === this.imageList.length && this.$emit("imageCompleted")
    }
  },
  components:{
    Swiper,SwiperSlide
  },
}
</script>

<style scoped>

img{
  width: 100%;
  height: 100%;
}
.swiper-container{
  --swiper-pagination-color: #f6f6f6;/* 改变分页器颜色 */
}
</style>
