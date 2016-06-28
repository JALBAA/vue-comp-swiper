<script>
    "use strict"
    import base from './swiper.base.vue'
    export default ({
        mixins: [base],
        props: ['list','options'],
        data: function(){
            return {
                frameCnt: 0,
                lastDeltaList: [],
                listWidth: 0,
                scrolling: false,
            }
        },
        computed: {
            transform: function(){
                return {
                    'transform': 'translate3d('+this.translateX+'px, 0,0)',
                    '-webkit-transform': 'translate3d('+this.translateX+'px,0,0)',
                    '-moz-transform': 'translate3d('+this.translateX+'px,0,0)',
                }
            },
            transition: function(){
                if(this.easing){
                    return {
                        'transition': 'transform .5s ',
                        '-webkit-transition': '-webkit-transform .5s',
                        '-moz-transition': '-moz-transform .5s'
                    }
                }else{
                    return {
                        'transition': 'transform 0s',
                        '-webkit-transition': '-webkit-transform 0s',
                        '-moz-transition': '-moz-transform 0s'
                    }
                }
            },
        },
        methods: {
            computeTransLimit: function(){
                let children = this.$el.querySelector('.swiper').children
                this.listWidth = 0
                for(let i = 0; i < children.length; i++){
                    this.listWidth += children[i].offsetWidth
                }
                this.listWidth -= this.wrapperWidth
            },
        },
        events: {
            touchStart: function(e){
                this.computeTransLimit()
            },
            touchMove: function(e){
                //easing buffer
                if(this.lastDeltaList.length==5)
                    this.lastDeltaList.shift()
                this.lastDeltaList.push(this.deltaX)
            },
            touchEnd: function(e){
                let sum = 0
                this.lastDeltaList.forEach(function(delta){
                    sum += delta
                })
                //average speed of the last 5 frames
                let average = sum / this.lastDeltaList.length
                //ease out
                if(average && Math.abs(average)>5)
                    this.translateX += average * 20
                if(this.translateX > 0)
                    this.translateX = 0
                if(this.translateX < -1*this.listWidth)
                    this.translateX = -1*this.listWidth
                this.lastDeltaList = []
            },
        }
    })
</script>
