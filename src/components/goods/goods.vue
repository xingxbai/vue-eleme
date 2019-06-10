<template>
    <div class="goods">
        <div class="goods-nav" ref="menu" >
            <ul>
                <li class="nav-item" v-for="item in goods" :key="item.name">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="goods-content"  ref= "food">
            <ul>
                <li class="goods-item" v-for="item in goods" :key="item.name">
                    <h2>{{item.name}}</h2>
                    <ul>
                        <li class="goods-item-good" v-for="value in item.foods" :key="value.name">
                            <div class="goods-item-img">
                                <img width="57" height="57" :src="value.image">
                            </div>
                            <div class="goods-item-desc">
                                <div class="goods-item-name">{{value.name}}</div>
                                <p class="goods-item-description">{{value.description}}</p>
                                <div class="goods-item-sell">
                                    <span class="sellcount">月售{{value.sellCount}}份</span>
                                    <span class="rate">好评率{{value.rating}}%</span>
                                </div>
                                <p class="price">￥{{value.price}}
                                    <span class="oldprice" v-if="value.oldPrice">
                                    ￥{{value.oldPrice}}
                                    </span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
const options = {
  scrollY: true // 因为scrollY默认为true，其实可以省略
}
import axios from '../../axios/config'
import Bscroll from 'better-scroll'
export default {
    data(){
        return {
            goods:[]
        }
    },
    mounted(){
    axios.get('/goods').then(res=>{
    this.goods=res
    this.$nextTick(()=>{
        this._initScroll()
    })
    })
},
methods:{
_initScroll(){
    this.menuScroll=new Bscroll(this.$refs.menu,options)
    this.foodScroll=new Bscroll(this.$refs.food,options)
}
}
}
</script>

<style lang='stylus'>
@import '../../common/styles/mixin.styl'
.goods
    position absolute
    display flex
    top 176px
    bottom 58px
    left 0
    right 0
    font-size 12px
    font-weight 200
    line-height 14px
    color black
    ul
        margin 0
        padding 0
        li
            list-style-type none
    .goods-nav
        flex 0 0 70px
        background:#f3f5f7
        overflow hidden
        .nav-item
            display flex
            align-items:center
            justify-content:center
            width 54px
            margin 0 auto
            height 54px
            border-1px(rgba(7,17,27,0.1))
    .goods-content
        flex 1
        overflow hidden
        .goods-item
            h2
                margin 0
                line-height 30px
                height 30px
                font-size 14px
                font-weight 20
                color rgb(7,17,27)
                border-left 2px solid rgba(7,17,27,.1)
                padding-left 15px
                background rgba(7,17,27,.1)
            .goods-item-good
                display flex
                padding 18px 0
                margin 0 18px
                border-1px(rgba(7,17,27,0.1))
                &:last-child
                    border-none()
                .goods-item-img
                    flex 0 0 57px
                    vertical-align top
                .goods-item-desc
                    margin-left 10px
                    margin-top 2px
                    .goods-item-name
                        font-size 14px
                        line-height 14px
                        color rgb(7,17,27)
                    .goods-item-description
                        margin 8px 0
                        font-size 10px
                        color rgb(147,153,159)
                        line-height 10px
                    .goods-item-sell
                        font-size 10px
                        color rgb(147,153,159)
                        line-height 10px
                        .sellcount
                            margin-right 12px
                    .price
                        margin 0
                        font-size 14px
                        color red
                        font-weight 700
                        line-height 24px
                        .oldprice
                            color rgb(147,153,159)
                            text-decoration line-through
                            font-size 10px
                            font-weight 700
                            line-height 24px
</style>
