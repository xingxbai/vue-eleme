<template>
    <div class="star" :class="starType">
        <span v-for="item in stars" :key="item" class="star-item" :class="item">33</span>
    </div>
</template>

<script>
export default {
    props:{
        score:Number,
        size:Number
    },
    computed: {
        starType(){
            return 'star-'+this.size
        },
        stars(){
            let result=[]
            let length=5
            let on=Math.floor(this.score*2)/2
            let half=0
                half=on%1==0
            for(let i=0;i<on;i++){
                result.push('on')
            }
            if(!half){
                result.push('half')
            }
            while(result.length<5){
                result.push('off')
            }
            console.log(result)
            return result
        }
    }
}
</script>

<style lang='stylus'>
@import '../../common/styles/mixin.styl'
.star
    font-size 0
    &.star-48
        &.star-item
            display inline-block
            width 20px
            height 20px
            margin-right 22px
            background-size 20px 20px
            &:last-child
                margin-right 0
            &.on
                bgImg('./star48_on')
            &.half
                bgImg('./star48_half')
            &.off
                bgImg('./star48_off')
    &.star-36
        .star-item
            display inline-block
            width 15px
            height 15px
            margin-right 6px
            background-size 15px 15px
            &:last-child
                margin-right 0
            &.on
                bgImg('./star36_on')
            &.half
                bgImg('./star36_half')
            &.off
                bgImg('./star36_off')
    &.star-24
        &.star-item
            display inline-block
            width 10px
            height 10px
            margin-right 3px
            background-size 10px 10px
            &:last-child
                margin-right 0
            &.on
                bgImg('./star24_on')
            &.half
                bgImg('./star24_half')
            &.off
                bgImg('./star24_off')


</style>
