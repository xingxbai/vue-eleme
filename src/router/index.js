import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Seller from '../components/seller/seller.vue'
import Goods from '../components/goods/goods.vue'
import Rating from '../components/rating/rating.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  mode:'history',
  routes: [
    {
      path: '/',
      component: App,
      redirect:'/eleme/goods'
    },
    {
      path:'/eleme/seller',
      component:Seller
    },
    {
      path:'/eleme/goods',
      component:Goods
    },
    {
      path:'/eleme/rating',
      component:Rating
    }
  ]
})
