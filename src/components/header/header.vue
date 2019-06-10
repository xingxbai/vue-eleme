<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="content-avatar">
                <img v-bind:src="this.seller.avatar" alt="" width="64px" height="64px">
            </div>
            <div class="content">
                <div class="content-brand">
                    <span class="content-brand-icon"></span>
                    <span class="content-brand-name">
                        {{this.seller.name}}
                    </span>
                </div>
                <div class="content-desc">
                        {{this.seller.description}}
                    /
                        {{this.seller.deliveryTime}}分钟到达
                </div>
                <div class="content-supports" v-if="seller.supports">
                    <span v-bind:class="['content-supports-icon',this.iconArray[this.seller.supports[0].type]]">
                    </span>
                    <span class="content-supports-description">
                        {{this.seller.supports[0].description}}
                    </span>
                </div>
            </div>
            <div class="count" @click="toggleDetail">{{this.seller.supports.length}}个 > </div>
        </div>
        <div class="bulletin-wrapper" @click="toggleDetail">
            <span class="bulletin-icon"></span>
            <span class="bulletin-text">
                {{this.seller.bulletin}}
            </span>
            <div class="bulletin-right">
                >
            </div>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%">
        </div>
        <transition name="fade">
        <div  v-if="showDetail" class="detail">
            <div class="detail-wrapper clear-fixed">
                <div class="detail-main">
                    <h1>{{seller.name}}</h1>
                    <div class="detail-star">
                        <star :size='36' :score="seller.score"></star>
                    </div>
                    <div class="detail-info">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul v-if="seller.supports" class="supports-info">
                            <li v-for="item in seller.supports" :key="item.description">
                                <span  :class="[iconArray[item.type],'supports-info-icon']"></span>
                                <span class="supports-info-text">{{item.description}}</span>
                            </li>
                    </ul>
                    <div class="detail-info">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <p class="bulletin">
                        {{this.seller.bulletin}}
                    </p>
                </div>
            </div>
            <div class="close" @click="toggleDetail">
                <i class="iconfont">&#xe605;</i>
            </div>
        </div>
        </transition >
    </div>
</template>

<script>
import { setTimeout } from 'timers';
import star from '../star/star'
export default {
    components:{
        star
    },
    props:['seller'],
    data(){
        return {
            iconArray:['decrease_1','discount_1','guarantee_1','invoice_1','special_1'],
            showDetail:false
        }
    },
    methods:{
        toggleDetail(){
            this.showDetail=!this.showDetail
        }
    }
    }
</script>

<style lang='stylus'>
@import '../../common/styles/mixin.styl'
.header
    .fade-enter-active, .fade-leave-active
        transition: opacity .5s
        opacity 1
        background rgba(7,17,27,0.8)
    .fade-enter, .fade-leave-to
        opacity :0
        background rgba(7,17,27,0)
    position relative
    padding:24px 0 0 0px
    color:#fff
    background rgba(7,17,27,0.5)
    overflow hidden
    .content-wrapper
        position relative
        font-size:0
        padding-left 24px
        .content-avatar
            display inline-block
            vertical-align top
            &>img
                border-radius 2px
    .content
        display inline-block
        margin:2px 0 0 16px
        font-size 0
        .content-brand
            .content-brand-icon
                display inline-block
                width 30px
                height 18px
                bgImg('./brand')
                background-size 30px 18px
                vertical-align top
                margin 2px 6px 8px 0
            .content-brand-name
                font-size 16px
                font-weight bold
                line-height 18px
        .content-desc
            font-size 12px
            font-weight 100
            line-height 12px
            margin-bottom:10px
        .content-supports
            .content-supports-icon
                display inline-block
                vertical-align top
                width 12px
                height 12px
                margin:0 4px 2px 0
                background-size 12px 12px
                background-repeat no-repeat
                background-position:top;
                &.decrease_1
                    bgImg('./decrease_1')
                &.discount_1
                    bgImg('./discount_1')
                &.guarantee_1
                    bgImg('./guarantee_1')
                &.invoice_1
                    bgImg('./invoice_1')
                &.special_1
                    bgImg('./special_1')
            .content-supports-description
                display inline-block
                font-size 10px
                font-weight 100
                line-height 12px
    .count
        position absolute
        height 24px
        padding 0 8px 0 11px
        line-height 23px
        right 12px
        bottom 0
        font-size 10px
        background-color rgba(0,0,0,.2)
        font-weight 100
        border-radius 46%
    .bulletin-wrapper
        position relative
        margin-top 18px
        padding 0 55px 0 12px
        font-size 10px
        font-weight 100
        height 28px
        line-height 28px
        background-color rgba(0,0,0,.2)
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        .bulletin-icon
            display inline-block
            width 22px
            height 12px
            vertical-align top
            bgImg('bulletin')
            background-size 22px 12px
            background-repeat no-repeat
            margin 8px 4px 0 0
        .bulletin-text
            display inline-block
            paddign-right 16px
        .bulletin-right
            position absolute
            right 14px
            bottom 0
            line-height 30px
    .background
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        z-index -1
        filter blur(10px)
    .detail
        position fixed
        top 0
        left 0
        width 100%
        height 100%
        background-color rgba(7,17,27,0.8)
        font-size 0
        z-index 99
        overflow auto
        transition all 0.5s
        .detail-wrapper
            min-height 100%
            width 100%
            .detail-main
                margin-top 64px
                padding-bottom 64px
                text-align center
                h1
                    font-size 16px
                    font-weight 700
                    line-height 16px
                    color rgb(255,255,255)
                .detail-star
                    margin-top 16px
                .detail-info
                    display flex
                    width 85%
                    margin 28px auto 0 auto
                    line-height 15px
                    .line
                        flex 1
                        position relative
                        top -6px
                        border-bottom:1px solid rgba(255,255,255,.2)
                    .text
                        padding 0 12px
                        font-size 15px
                        font-weight 700
                .supports-info
                    margin-top 24px
                    li
                        list-style none
                        margin-bottom 12px
                        text-align left
                        font-size 12px
                        font-weight 200
                        color rgb(255,255,255)
                        .supports-info-icon
                            display inline-block
                            width 16px
                            height 16px
                            background-size 16px 16px
                            background-repeat no-repeat
                            &.decrease_1
                                bgImg('./decrease_1')
                            &.discount_1
                                bgImg('./discount_1')
                            &.guarantee_1
                                bgImg('./guarantee_1')
                            &.invoice_1
                                bgImg('./invoice_1')
                            &.special_1
                                bgImg('./special_1')
                        .supports-info-text
                            display inline-block
                            vertical-align top
                            line-height 16px
                .bulletin
                    width 80%
                    margin 24px auto
                    text-align left
                    font-size 12px
                    font-weight 200
                    line-height 24px


        .clear-fixed
            display inline-block
            &:after
                display block
                content ""
                height 0
                overflow hidden
                visiblity hidden
        .close
            width 32px
            height 32px
            margin -64px auto 0 auto
            line-height 32px
            font-size 32px
            color rgba(255,255,255,0.5)
</style>
