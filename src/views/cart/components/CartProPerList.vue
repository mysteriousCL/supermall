<template>
  <section v-if="cartLength !== 0">

    <cart-pro-item v-for="item in cartList" :key="item.title" :cart-item="item"/>

  </section>
</template>

<script>
import {mapGetters} from "vuex"

import CartProItem from "./CartProItem";
export default {
  name: "CartProPerList",
  computed:{
    ...mapGetters(["cartList","cartLength"]),
  },
  components:{
    CartProItem
  }
}
</script>

<style scoped>

</style>
