<template>


  <div :style="backgroundStyle" class="tabbar" v-if="list.length !== 0">
    <tab-bar-item v-for="item in list" :key="item.title" :obj="item" @click.native="tabBarItemFn(item)" />
  </div>
</template>

<script>
import tabBarItem from "./tabBarItem";
export default {
  name: "tabBar",
  props:{
    bacStyle:{
      type:Object,
      default(){
        return {}
      }
    },
    list:{
      type:Array,
      default() {
        return [];
      }
    }
  },
  computed:{
    backgroundStyle(){
      // 用户可以决定背景色
      return Object.keys(this.bacStyle).length ? this.bacStyle : {background:"#f6f6f6"}
    },
  },
  components:{
    tabBarItem
  },
  methods:{
    tabBarItemFn(item){
      this.$router.replace("/"+item.name);
    }
  }
}
</script>

<style scoped>
.tabbar{
  height: 49px;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px -2px 1px rgba(100,100,100,.08);
}
</style>
