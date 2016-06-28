//pagenation.vue
<template>
    <ul class='pagination'>
        <page
        v-for='item in pageCount'
        track-by="$index"
        :index='$index'></page>
    </ul>
</template>
<script>
    "use strict"
    import Page from './page.vue'
    export default ({
        data: function(){
            return {
                pageCount: 0,
            }
        },
        components: {
            page: Page
        },
        created: function(){
            if(this.index == 0)
                this.isActive = true;
        },
        events: {
            resize: function(width,pageCount){
                this.pageCount = pageCount;
            },
            idxChange: function(idx){
                let _idx = idx
                if(idx == this.pageCount)
                    _idx = 0
                else if(idx == -1)
                    _idx = this.pageCount - 1
                this.$broadcast('idxChange', _idx)
            }
        }
    })
</script>
<style lang='less'>
    @point-size: 10px;
    .swiper-container {
        .pagination {
            display: block;
            width: 100%;
            position: absolute;
            z-index: 999;
            bottom: 0;
            height: @point-size * 1.5;
            font-size: 0;
            text-align: center;
            li {
                font-size: @point-size;
                line-height: @point-size * 1.5;
                display: inline-block;
                margin: 0 (@point-size / 2);
                width: @point-size;
                height: @point-size;
                border-radius: 50%;
                background-color: rgba(255,255,255,.6);
                &.active {
                    background-color: #fff;
                }
            }
        }
    }
</style>
