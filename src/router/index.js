import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const Home = ()=>import("views/home/Home")
const Category = ()=>import("views/category/Category")
const Cart = ()=>import("views/cart/Cart")
const Profile = ()=>import("views/profile/Profile")
const Detail = ()=>import("views/detail/Detail")


const routes = [
  {path: '/', redirect:"/home"},
  {path: '/home', name: 'Home', component: Home},
  {path: '/category', name: 'About', component: Category},
  {path: '/cart', name: 'Cart', component: Cart},
  {path: '/profile', name: 'Profile', component: Profile},
  {path: '/detail', name: 'Detail', component: Detail},


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
