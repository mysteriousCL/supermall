<template>
  <div class="topBar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "topBar"
}
</script>

<style scoped>
.topBar{
  display: flex;
  height: 44px;
  justify-content: center;
}
.left{
  width:60px;
  text-align: center;
  align-self: center;
}
.right{
  width:60px;
  text-align: center;
  align-self: center;
}
.center{
  flex: 1;
  align-self: center;
  text-align: center;
  display: flex;
  justify-content: space-around;
}


</style>
