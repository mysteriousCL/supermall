import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import toast from "components/content/toast";

//安装自定义插件
Vue.use(toast)
//安装第三方图片懒加载
Vue.use(VueLazyload,{
  loading: require("./assets/image/common/placeholder.png"),//占位图
})

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//使用fastclick，解决300ms延迟
FastClick.attach(document.body)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

