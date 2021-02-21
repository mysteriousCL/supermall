<template>
  <swiper v-if="imageList.length !== 0" :options="swiperOptions">
    <swiper-slide v-for="item in imageList" :key="item">
      <img :src="item" alt="">
    </swiper-slide>

  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay} from 'swiper';
SwiperCore.use([Autoplay]);

export default {
  name: "DetailSwipper",
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
      swiperOptions: {

        loop:true,
        autoplay:{
          delay:2500,//自动切换的时间间隔，单位ms
          stopOnLastSlide:false,//如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
          disableOnInteraction:false//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        },
      }
    }
  },
  components:{
    Swiper,SwiperSlide
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
</style>
