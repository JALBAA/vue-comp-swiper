<template>
    <div class='swiper-container'
        @touchstart='touchStart'
        @touchmove='touchMove'
        @touchEnd='touchEnd'
        @transitionEnd='transitionEnd'
        >
        <div class='swiper'
            v-bind:style= '[transform,transition]'>
                <slot name='slider'></slot>
        </div>
        <slot name="pagination"></slot>
    </div>
</template>
<script>
    "use strict";
    export default ({
        data: function(){
            return {
                //touch start pos @ horizontal
                startPosX: 0,
                //touch end pos @ horizontal
                endPosX: 0,
                //touch pos @ horizontal & @ last frame
                lastPosX: 0,
                //touch pos @ horizontal & @ this frame
                curPosX: 0,
                //delta of horizontal pos between this & last frame
                deltaX: 0,
                //touch pos @ vertical & @ last frame
                lastPosY: 0,
                //touch pos @ vertical & @ this frame
                curPosY: 0,
                //delta of vertical pos between this & last frame
                deltaY: 0,
                //isEasing
                easing: true,
                //scrolling
                animating: false,
                //the horizontal pos that the swiper should be
                translateX:0,
                //is the frist touchmove since touchstart
                firstFrame: true,
                //possible to scroll
                isCanScroll: false,
                //disableScreenScroll
                disableScreenScroll: false,
                //container's width
                wrapperWidth: 0,
                //scroll dom event, for vue-lazyload-img(https://github.com/JALBAA/vue-lazyload-img)
                scrollEvent: (function(){
                    var event = document.createEvent('HTMLEvents')
                    event.initEvent('scroll')
                    event.eventType = 'message'
                    return event
                })(),
            }
        },
        created: function(){
            this.disableScreenScrollOnManipulating()
            //init options
            let defaultOptions = {
                loop: false,
                direction: 'horizontal',
                perSliders: 1,
                perGroup: 1,
                autoPlay: false,
                pagination: true,
                'height': 'auto'
            }
            this.options = this.options || defaultOptions
            //mixin
            for(let key in defaultOptions){
                if(!this.options[key]){
                    this.options[key] = defaultOptions[key]
                }
            }
        },
        compiled: function(){
            let _renderFrame = function(){
                window.dispatchEvent(this.scrollEvent)
                if(this.animating)
                    window.requestAnimationFrame(_renderFrame)
            }.bind(this)
            this.$watch('animating',function(animating){
                if(!!this.animating)
                    window.requestAnimationFrame(_renderFrame)
            })
            let transEnd = function(){
                this.transitionEnd()
            }.bind(this)
            this.$el.addEventListener('webkitTransitionEnd',transEnd)
            this.$el.addEventListener('mozTransitionEnd',transEnd)
        },
        ready: function(){
            this.wrapperWidth = this.options.wrapperWidth || this.$el.offsetWidth
            this.$broadcast('resize',this.wrapperWidth,this.pageCount,this.options.height)
            let onResize = function(){
                this.$broadcast('resize',this.wrapperWidth,this.pageCount,this.options.height)
            }.bind(this)
            window.addEventListener('resize',onResize)
        },
        methods: {
            disableScreenScrollOnManipulating: function(){
                let preventDefault = function(){
                    if(this.disableScreenScroll)
                        e.preventDefault()
                }.bind(this)
                window.addEventListener('scroll',preventDefault)
                window.addEventListener('touchmove',preventDefault)
            },
            touchStart: function(e){
                //reset status
                if(this.animating)
                    this.transitionEnd()
                this.firstFrame = true
                this.animating = false
                this.deltaX = 0
                this.easing = false

                //set init value
                this.curPosX = e.touches[0].pageX
                this.lastPosX = this.curPosX
                this.startPosX = this.curPosX

                this.curPosY = e.touches[0].pageY
                this.lastPosY = this.curPosY
                this.$emit('touchStart',e)
            },
            touchEnd: function(e){
                this.disableScreenScroll = false
                this.easing = true

                this.$emit('touchEnd',e)
            },
            touchMove: function(e){
                if(this.list.length <= 1)return
                //not animating yet
                this.animating = false
                this.easing = false

                //get deltaX
                this.curPosX = e.touches[0].pageX
                this.deltaX =  this.curPosX - this.lastPosX
                this.lastPosX = this.curPosX

                //get deltaY
                this.curPosY = e.touches[0].pageY
                this.deltaY =  this.curPosY - this.lastPosY
                this.lastPosY = this.curPosY

                //juedge user's manipulation
                //vertical or horizontal
                if(this.firstFrame){
                    if(!this.deltaX || !this.deltaY)
                        e.preventDefault()
                    //用一个对角线做判断
                    if(Math.abs(this.deltaX)*0.5 > Math.abs(this.deltaY)){
                        e.preventDefault()
                        this.isCanScroll = true
                        this.disableScreenScroll = true
                    }else{
                        this.isCanScroll = false
                        this.disableScreenScroll = false
                    }
                }
                //scroll if possible
                if(this.isCanScroll){
                    if(this.translateX > 0)
                        this.translateX += this.deltaX/2
                    else if(this.translateX < -(this.listWidth - this.wrapperWidth))
                        this.translateX += this.deltaX/2
                    else
                        this.translateX += this.deltaX
                    this.endPosX = this.curPosX
                }
                this.$emit('touchMove',e)
                //now it's not the firstFrame
                this.firstFrame = false
            },
            transitionEnd: function(e){
                this.$emit('transitionEnd',e)
                //TODO optimize in future
                var event = document.createEvent('HTMLEvents')
                event.initEvent('scrollEnd')
                event.eventType = 'message'
                window.dispatchEvent(event)
            }
        },
    })
</script>
<style lang="less">
    .swiper-container {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
        .swiper {
            display: flex;
            position: relative;
            .slider {
                flex-shrink: 0;
                position: relative;
            }
        }
    }
</style>
