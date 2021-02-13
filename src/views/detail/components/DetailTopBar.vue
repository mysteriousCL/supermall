<template>
  <top-bar>
    <template v-slot:left>
      <div class="leftstyle">&lt;</div>
    </template>
    <template v-slot:center>
      <span v-for="(item,index) in topList">{{item.name}}</span>
    </template>
  </top-bar>
</template>

<script>
import topBar from "components/common/topBar/topBar";
export default {
  name: "DetailTopBar",
  data(){
    return {
      topList:[{name:"商品"},{name:"参数"},{name:"评论"},{name:"详情"}]
    }
  },
  components:{
    topBar
  }
}
</script>

<style scoped>
.leftstyle{
  font-size: 30px;
}

</style>
