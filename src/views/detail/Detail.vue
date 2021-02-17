<template>
  <div>
      <detail-top-bar />
  </div>
</template>

<script>
import DetailTopBar from "./components/DetailTopBar";
export default {
  name: "Detail",
  data(){
    return {
      iid:""
    }
  },
  created() {
    this.iid = this.$route.params.iid
  },
  components:{
    DetailTopBar
  }
}
</script>

<style scoped>

</style>
