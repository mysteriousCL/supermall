<template>
  <div class="checkbox" :class="{actived:is_active}">
    <img src="~assets/image/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    is_active:{
      type:Boolean,
      default:false
    }
  },
}
</script>

<style scoped>
.checkbox{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #aaa;
  display: inline-block;
}
.actived{
  background-color: #ff5777;
  border-color: red;
}
</style>
