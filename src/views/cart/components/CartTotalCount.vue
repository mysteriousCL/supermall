<template>
  <div class="cart_total" v-if="cartLength">
   <span class="left">
     <check-button class="all_checked" :class="{is_active: is_select_all}" @click.native="selected_all" />
     <span>全选</span>
     <span class="left_item">合计：￥{{total}}</span>
   </span>

    <span class="calculate" @click="calcPrice">去计算({{selected_list.length}})</span>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import {mapGetters} from "vuex"

export default {
  name: "CartTotalCount",
  data(){
    return {
      intoAllSelect:false
    }
  },
  components: {CheckButton},
  computed:{
    ...mapGetters(["cartLength","cartList"]),
    selected_list(){
      return this.cartList.filter((item)=>item.checked);
    },
    total(){
      return this.selected_list.reduce((total,item)=>total+item.count*item.price,0).toFixed(2)
    },
    is_select_all(){
      return this.cartList.every(item=>item.checked)
    }
  },
  methods:{
    selected_all(){
      this.intoAllSelect = !this.intoAllSelect
      this.cartList.forEach(item=>{
        item.checked = this.intoAllSelect
      })
    },
    calcPrice(){
      this.$toast.show("请选择正确的商品")
    }
  }
}
</script>

<style scoped>

.cart_total{
  height: 40px;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 49px;

}
.calculate{
  background-color: hsl(360,100%,62%);
  text-align: center;
  width: 90px;
  line-height: 300%;
  color: white;
}
.left{
  flex: 1;
  background-color: #eee;
  display: inline-flex;
  align-items: center;
  padding-left: 10px;

}
.left_item{
  margin-left: 10px;

}
.all_checked{
  margin-right: 5px;
}
.is_active{
  background-color: red;
}
</style>

