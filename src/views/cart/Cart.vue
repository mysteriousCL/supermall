<template>
  <div id="cart">
    <top-banner :title="length" class="nav-bar" />
    <better-scrool class="scroll" ref="scroll">
      <cart-pro-per-list />
    </better-scrool>
    <cart-total-count />
  </div>
</template>

<script>
import topBanner from "components/content/topbanner/topBanner";
import CartProPerList from "./components/CartProPerList";
import BetterScrool from "components/common/scroll/BetterScrool";

import CartTotalCount from "./components/CartTotalCount";
import {mapGetters} from "vuex"


export default {
  name: "Cart",
  computed:{
    ...mapGetters(['cartLength']),
    length(){
      return this.cartLength ===0 ? "购物车" : "购物车("+this.cartLength+")"
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  components:{
    BetterScrool,topBanner,CartProPerList,CartTotalCount
  }
}
</script>

<style scoped>
#cart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: white;
  position: relative;
  z-index: 1;
}
.scroll{
  height: calc(100% - 49px - 44px);
}
</style>
