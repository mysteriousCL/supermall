<template>
    <div class="tabBarItem" v-if="Object.keys(obj).length !==0 ">
      <slot>
        <img v-show="isActive" :src="obj.img_active" alt="">
        <img v-show="!isActive" :src="obj.img" alt="">
        <div :style="textStyle">{{obj.title}}</div>
      </slot>
    </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props:{
    obj:{
      type:Object,
      default(){
        return {}
      }
    },
    activeStyle:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    textStyle(){
      // 根据是否活跃，是否传 activeStyle值，来决定文本活跃时style的值
      return this.isActive ? (Object.keys(this.activeStyle).length !==0 ? this.activeStyle : {color:"#ff5777"}) : {}
    },
    isActive(){
      return this.$route.path.indexOf("/"+this.obj.name) !== -1 ? true : false;
    }
  }
}
</script>

<style scoped>
.tabBarItem{
  height: 100%;
  text-align: center;
}
img{
  height: 50%;
}

</style>
