<template>
  <top-bar>
    <template v-slot:center>
      <div>{{title}}</div>
    </template>
  </top-bar>
</template>

<script>
import topBar from "components/common/topBar/topBar";

export default {
  name: "topBanner",
  props:["title"],
  components:{
    topBar
  }
}
</script>

<style scoped>

</style>
