<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "BetterScrool",
  props:{
    options:{
     type:Object,
      default(){
       return {
         probeType: 3,
         pullUpLoad: true,
         click:true
       }
      }
    }
  },
  data(){
    return {
      bs:null
    }
  },
  mounted() {
    this.bs = new BScroll(this.$refs.wrapper,this.options)
    if(this.options.probeType === 3 || this.options.probeType === 2){
      this.bs.on('scroll', (position) => {
        this.$emit("scroll",position)
      })
    }
    if(this.options.pullUpLoad){
      this.bs.on('pullingUp', () => {
        this.$emit("pullingUp")
      })
    }

  },
  methods:{
    refresh(){
      console.log("refresh");
      this.bs && this.bs.refresh()
    },
  }
}
</script>

<style scoped>

</style>
