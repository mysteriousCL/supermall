<template>
  <section v-if="Object.keys(commentInfo).length !== 0">
    <div class="avate">
      <span>用户评价</span>
      <span class="more">更多</span></div>
    <div class="user">
      <img :src="commentInfo.user.avatar" alt=""><span>{{commentInfo.user.uname}}</span>
    </div>
    <p>{{commentInfo.content}}</p>
    <p class="data_block">
      <span>{{data_created}}</span>
      <span>{{commentInfo.style}}</span></p>
    <div>
      <span v-for="img in commentInfo.images" class="avator_img">
        <a :href="img"><img :src="img" alt=""></a>
      </span>
    </div>
  </section>
</template>

<script>
import {dataFormat} from "common/utils";

export default {
  name: "DetailCommentInfo",
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    data_created(){
      return dataFormat(new Date(this.commentInfo.created *1000),'YYYY/MM/DD hh:mm')
    }
  }
}
</script>

<style scoped>

.avate{
  display: flex;
  border-bottom: 1px solid rgba(66,66,66,.3);
  border-top: 1px solid rgba(66,66,66,.3);
  padding: 1rem 1rem;
}
.more{
  margin-left: auto;
  margin-right: 1rem;
}
.user{
  display: flex;
  margin-bottom: 1rem;
}
.user img{
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
}
.user span{
  align-self: center;
  margin-left: 1rem;
}
p{
  margin: .5rem 1rem;
}
.avator_img{
  display: inline-block;
  width: 5rem;
  height: 5rem;
}
.avator_img img{
  width: 100%;
  height: 100%;
}
.data_block span{
  margin-right: 1rem;
  font-size: 0.9rem;
  color: #666666;
}
</style>
