<template>
  <div v-if="titles.length !== 0">
    <span v-for="(item,index) in titles" :class="{active:currentIndex === index}" @click="tabitemkfn(index,item.name)">{{item.title}}</span>
  </div>
</template>

<script>
export default {
  name: "BarControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0,
    }
  },
  methods:{
    tabitemkfn(index,item_name){
      this.currentIndex = index;
      this.$emit("tabClick",item_name,index)
    }
  }
}
</script>

<style scoped>
div{
  display: flex;
  justify-content: space-around;
  background-color: white;
  margin-bottom: 5px;
  height: 44px;
}
.active{
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
span{
  padding:5px;
  align-self: center;
}
</style>
