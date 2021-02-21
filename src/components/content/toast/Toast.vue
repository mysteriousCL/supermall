<template>

  <transition enter-to-class="enter" leave-to-class="leave">
    <p v-show="is_show">{{message}}</p>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return {
      is_show:false,
      message: ""
    }
  },
  methods:{
    show(message){
      this.is_show = !this.is_show;
      this.message = message;
    }
  }
}
</script>

<style scoped>
p{
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  background-color: rgba(0,0,0,.7);
  padding: .5rem 1rem;
  transform: translate(-50%,-50%);
  opacity: 0;
}

.enter{
  animation: toast 2s;
}
.leave{
  animation: toast 2s;
}
@keyframes toast {
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>

