<template >
    <div class="carousel-demo">
        <h1 class="title">{{title}}</h1>
        <carousel v-bind:options="options" :list="list">
            <slider v-for="item in list" track-by="$index" :options="options" slot="slider">
                <a :href="item.href">
                    <img v-lazyload="item.imgSrc" :src="'http://geekie.online/static/image/vue-swiper-demo/default.jpg'" >
                </a>
            </slider>
            <pagination v-if="!noPagenation" slot="pagination"></pagination>
        </carousel>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {slider,carousel,pagination} from '../src/main.js'
    export default {
        components:{
            'carousel': carousel,
            'slider': slider,
            'pagination': pagination
        },
    }
</script>
