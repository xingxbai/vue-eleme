<template>
  <div id="app">
    <headers/>
    <div class="nav">
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
    <router-view><div class="content">
      内容区
      
    </div></router-view>
    
  </div>
</template>

<script>
import api from './axios/api'
import Headers from './components/header/header'
export default {
  name: 'App',
  components:{
    Headers
  }
}
</script>

<style lang='stylus'>
#app
  .nav
    display flex
    height 40px
    line-height 40px
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
