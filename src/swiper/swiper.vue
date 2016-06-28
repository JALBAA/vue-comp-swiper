<script>
    "use strict";
    import base from './swiper.base.vue'
    export default ({
        mixins: [base],
        props: ['list','options','cubic'],
        data: function(){
            return {
                //原始列表
                originList: [],
                //当前的索引
                idx:0,
                //经过duplicate后列表的长度
                length:0,
                //translateX的值
                translateX:0,
                frameCnt: 0,
                wrapperWidth: 0
            }
        },
        computed: {
            pageCount: function(){
                let pageCount = this.originList.length/parseInt(this.options.perSliders);
                return Math.ceil(pageCount);
            },
            transform: function(){
                if(window.navigator.userAgent.match(/UCBrowser/)){
                    return {
                        'transform': 'translate('+this.translateX+'px,0)',
                        '-webkit-transform': 'translate('+this.translateX+'px,0)',
                        '-moz-transform': 'translate('+this.translateX+'px,0)',
                    }
                }else{
                    return {
                        'transform': 'translate3d('+this.translateX+'px, 0,0)',
                        '-webkit-transform': 'translate3d('+this.translateX+'px,0,0)',
                        '-moz-transform': 'translate3d('+this.translateX+'px,0,0)',
                    }
                }
            },
            transition: function(){
                if(this.easing){
                    return {
                        'transition': 'transform .3s ',
                        '-webkit-transition': '-webkit-transform .3s',
                        '-moz-transition': '-moz-transform .3s'
                    }
                }else{
                    return {
                        'transition': 'transform 0s',
                        '-webkit-transition': '-webkit-transform 0s',
                        '-moz-transition': '-moz-transform 0s'
                    }
                }
            },
            listWidth: function(){
                return this.wrapperWidth/this.options.perSliders * this.originList.length || 0;
            },
        },
        created: function(){
            //如果是循环，则首尾重复
            if(!!this.options.loop){
                this.originList = this.list.map(function(item,idx){
                    return item
                });
                let redundant = this.originList.length % this.options.perSliders
                for(let i=0; i<redundant; i++){
                    this.originList.push(new Object())
                    this.list.push(new Object())
                }
                this.loopList()
                this.length = this.pageCount
            }else{
				this.originList = this.list
                this.options.perSliders > 0 ? this.originList.length/this.options.perSliders : 1
			}
        },
        compiled: function(){
            //是否自动播放
            if(!!this.options.autoPlay)
                this.autoPlay();

            //检测当前的索引值
            let onIdxChange = function(){
                this.$dispatch('idxChange',idx)
                this.$broadcast('idxChange',idx)
            }.bind(this)
            this.$watch('idx',onIdxChange)
        },
        events: {
            scrollTo: function(idx){
                this.$broadcast('onScrollTo',idx)
                if(idx != this.idx)
                    this.scrollTo(idx)
            },
            touchEnd: function(e){
                if(!this.isCanScroll)return;
                if(Math.abs(this.deltaX) == 0){
                    this.scrollTo(this.idx)
                    return
                }
                //judge the idx to go
                let deltaX = this.endPosX - this.startPosX;
                if(deltaX <-.1*this.wrapperWidth){
                    this.next();
                }
                else if(deltaX >.1*this.wrapperWidth){
                    this.prev();
                }
                else{
                    this.scrollTo(this.idx)
                }
            },
            transitionEnd: function(){
                this.frameCnt = 0

                let fix = function(){
                    this.easing = true
                    this.animating = false
                }.bind(this)

                if(this.idx == this.length){
                    this.easing = false
                    this.idx = 0
                    this.scrollTo(this.idx)
                    //ugli fix
                    setTimeout(fix,50)
                }else if(this.idx == -1){
                    this.easing = false
                    this.idx = this.length-1
                    this.scrollTo(this.idx)
                    //ugli fix
                    setTimeout(fix,50)
                }else{
                    this.animating = false
                }
            }
        },
        methods: {
            loopList: function(){
                let length = this.options.perSliders
                for(let i=0; i < length; i++){
                    this.list.push(this.originList[i])
                }
                for(let i=this.originList.length-1; i>=this.originList.length-length; i--){
                    this.list.unshift(this.originList[i])
                }
            },
            autoPlay: function(time){
                this.frameCnt = 0
                let renderFrame = function(){
                    if(this.easing){
                        this.frameCnt++
                        if(this.frameCnt == 60 * 1){
                            this.frameCnt = 0
                            this.next()
                        }
                    }
                    requestAnimationFrame(renderFrame)
                }.bind(this)
                requestAnimationFrame(renderFrame)
            },
            computeTransLimit: function(){
                let children = this.$el.querySelector('.swiper').children
                this.maxTranslateX = 0
                for(let i=0; i<children.length; i++){
                    this.maxTranslateX += children[i].offsetWidth
                }
                this.maxTranslateX -= this.wrapperWidth
            },
            prev: function(){
                if(!!this.options.loop)
                    this.idx = (this.idx == -1) ? this.length-1 : this.idx-1
                else
                    this.idx = (this.idx == 0) ? this.idx : this.idx-1
                this.scrollTo(this.idx)
            },
            next: function(){
                if(!!this.options.loop)
                   this.idx = (this.idx == this.length) ? 0 : this.idx+1
                else
                   this.idx = (this.idx == this.pageCount-1) ? this.idx : this.idx+1
                this.scrollTo(this.idx)
            },
            scrollTo: function(idx){
                this.animating = true
                this.idx = idx
                let initPos = this.translateX
                let targetPos = -this.wrapperWidth / this.options.perSliders * Math.floor(this.options.perSliders) * idx
                let deltaX = Math.floor((targetPos - initPos))
                if(!this.options.loop && this.idx == this.pageCount-1 && this.pageCount > 1){
                    this.translateX = -this.listWidth + this.wrapperWidth
                }else
                   this.translateX += deltaX
                if(Math.abs(this.translateX - targetPos) <= 5)
                    this.translateX = targetPos
                this.$dispatch('scrollTo',idx)
            }
        }
    })
</script>
