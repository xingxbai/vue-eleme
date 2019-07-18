<template>
  <div id="app">
    <headers v-bind:seller='sellers'/>
    <div class="nav border-1px">
      <div class="nav-item">
        <router-link to="/eleme/goods">商品</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/eleme/rating">评价</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/eleme/seller">商家</router-link>
      </div>
    </div>
    <router-view><div class="content"></div></router-view>
  </div>
</template>

<script>
import axios from './axios/config'
import Headers from './components/header/header'
export default {
  name: 'App',
  components:{
    Headers
  },
  data(){
    return {
      sellers:{}
    }
  },
mounted () {
    alert("爱吃外卖的王来娇，做个软件给你过过嘴瘾。。。😋😛")
    axios.get('/seller').then(res=>{
      this.sellers=res
    })
  }
}
</script>

<style lang='stylus'>

@import './common/styles/mixin.styl'
#app
  .nav
    position relative
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,0.1))
    .nav-item
      flex:1
      text-align center
      font-size 14px
      &>a
        display block
        text-decoration none
        color:rgb(77,85,93)
        &.active
          color:rgb(240,20,20)
</style>
