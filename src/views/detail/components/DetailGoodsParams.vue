<template>
  <section v-if="Object.keys(goodsParams).length !== 0">
    <table>
      <caption>{{goodsParams.info_title}}</caption>

      <tbody>
      <tr v-for="(arr,index) in goodsParams.size[0]">
        <th>{{arr[0]}}</th>
        <td v-for="item in arr.slice(1)">{{item}}</td>
      </tr>

      </tbody>
    </table>
    <table>
      <tbody>
      <tr v-for="(item,index) in goodsParams.infos">
        <th>{{item.key}}</th>
        <td class="td_coloe">{{item.value}}</td>

      </tr>
      </tbody>
    </table>
    <div v-if="goodsParams.image" class="info_img">
      <img :src="goodsParams.image" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailGoodsParams",
  props:{
    goodsParams:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
section{
  font-size: 0.8rem;
}
table{
  width: 100%;
  border-collapse: collapse;
}
tr{
  width: 100%;
  height: 2rem;

}
th{
  font-weight: normal;
  width: 5rem;
  border-bottom: 1px solid rgba(55,55,55,.3);
  padding-right: 1rem;
}
td{
  border-bottom: 1px solid rgba(55,55,55,.3);
}
.td_coloe{
  color: #ff5777;
}
.info_img{
  width: 100%;
}
</style>

