import Toast from "./Toast";

const obj = {}

obj.install = function (Vue){
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 根据组件构造器,new出来一个实例对象
  const toast = new toastConstructor()
  // 将实例，手动挂载到某一个元素上
  toast.$mount(document.createElement("div"))
  // toast.$el对应的就是div，并将其挂载到body上。之后每个页面都将存在，组件内默认display:none
  document.body.appendChild(toast.$el)
  // 将实例对象设置到原型上，这样就可以沿着原型链来找该组件的方法
  Vue.prototype.$toast = toast

}

export default obj
