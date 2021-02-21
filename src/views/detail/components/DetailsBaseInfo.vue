<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail_base_info">
    <p class="detail_title_info">{{goods.title}}</p>
    <div class="detail_price_contain">
      <span class="detail_new_price">{{goods.newPrice}}</span>
      <span class="detail_old_price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="detail_discount">{{goods.discount}}</span>
    </div>
    <div class="detail_rol_info">
      <span v-for="index in goods.columns.length-1">{{goods.columns[index-1]}}</span>
      <span>{{goods.services[0].name}}</span>
    </div>
    <div class="detail_rol_service">
      <span class="service_item" v-for="(item,index) in goods.services.slice(1)">
        <img :src="item.icon" alt="" />
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsBaseInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail_base_info{
  padding-top: 10px;
}
.detail_title_info{
  font-weight: 700;

}
.detail_price_contain{
  margin: 10px 0px;
}
.detail_price_contain span{
  margin-left: 5px;
}
.detail_new_price{
  color: #ff5777;
  font-size: 1.5rem;
}
.detail_old_price{
  text-decoration: line-through;
}
.detail_discount{
  background-color: #ff5777;
  color: white;
  border-radius: 25%;
  padding: 2px;
}
.detail_rol_info{
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.detail_rol_info span{
  padding-right: 10px;
  padding-left: 10px;
}
.detail_rol_service{
  display: flex;
  justify-content: space-between;
  padding:15px 0;
  border-bottom: 1px solid rgba(45,45,45,.1);
  border-top: 1px solid rgba(45,45,45,.1);
}
.detail_rol_service img{
  width: 15px;
  height: 15px;
}
.service_item{
  padding-left: 10px;
  padding-right: 10px;
}
</style>
