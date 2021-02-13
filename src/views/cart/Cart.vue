<template>
  <div id="cart">
    <top-banner title="购物车" class="nav-bar" />
  </div>
</template>

<script>
import topBanner from "components/content/topbanner/topBanner";
export default {
  name: "Cart",
  components:{
    topBanner
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: white;
}
</style>
