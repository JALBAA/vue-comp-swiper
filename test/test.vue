<template >
    <swiper v-bind:options="options" :list="list">
        <slider v-for="item in list" track-by="$index" :options="options" slot="slider">
            <a :href="item.href">
                <img v-lazyload="item.imgSrc" :src="'http://geekie.online/static/image/vue-swiper-demo/default.jpg'" >
            </a>
        </slider>
        <pagination slot="pagination"></pagination>
    </swiper>
</template>
<script>
    import Swiper from '../src/main.js'
    export default new Vue({
        el: 'body',
        replace: false,
        data: {
            
        }
    })
</script>
<style lang="less">

</style>
