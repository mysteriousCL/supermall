<template>
  <section v-if="Object.keys(imageInfo).length !== 0">
    <div class="fix_start"></div>
    <div>{{imageInfo.desc}}</div>
    <div class="fix_end"></div>
    <p>{{imageInfo.detailImage[0].key}}</p>
    <div class="list_image">
      <img v-for="item in imageInfo.detailImage[0].list" :src="item" alt="" @load="imageload">
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props:{
    imageInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      images_length:0,
      count:0
    }
  },
  watch:{
    imageInfo: function (){
      this.images_length = this.imageInfo.detailImage[0].list.length
    }
  },
  methods:{
    imageload(){
      if(++this.count === this.images_length){
        this.$emit('imageload')
      }
    }
  },
}
</script>

<style scoped>
.fix_start,.fix_end{
  width: 5rem;
  height: 2px;
  background-color: #666666;
  position: relative;
}
.fix_start{
  margin-left: 1rem;
}

.fix_start:before{
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #2c3e50;
  position: absolute;
  top:-10px;

}
.fix_end{
  margin-left: auto;
  margin-right: 1.5rem;
}
.fix_end:after{
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #2c3e50;
  position: absolute;
  top:-10px;
  right: 0px;

}
section div{
  margin-top: 1rem;
}
.list_image img{
  width: 100%;
}
</style>

