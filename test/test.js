import Vue from 'vue'
import 'vue-lazyload-img'
import carousel from './carousel.vue'
import scroller from './scroller.vue'
Vue.use(Vue.lazyimg)
let loop1 = new Vue({
    mixins: [carousel],
    el: '#loop1',
    data : {
        'list': testData,
        'title': 'loop with 1 slider in viewport',
        'options': {
            'autoPlay': false,
            'loop': true,
            'perSliders': 1,
        }
    }
})
let noloop = new Vue({
    mixins: [carousel],
    el: '#noloop',
    data : {
        'list': testData,
        'title': 'noloop with 1 slider in viewport',
        'options': {
            'autoPlay': false,
            'loop': false,
            'perSliders': 1,
        }
    }
})

let autoplay = new Vue({
    mixins: [carousel],
    el: '#noloop',
    data : {
        'list': testData,
        'title': 'autoplay',
        'options': {
            'autoPlay': true,
            'loop': true,
            'perSliders': 1,
        }
    }
})

let slider15 = new Vue({
    mixins: [carousel],
    el: '#slider1-5',
    data : {
        'list': testData,
        'title': '1.5 slider in viewport(not support loop)',
        'options': {
            'autoPlay': false,
            'time': 1000,
            'loop': false,
            'perSliders': 1.5,
        }
    }
})

let noPagination = new Vue({
    mixins: [carousel],
    el: '#no-pagination',
    data : {
        'list': testData,
        'title': 'no-pagination',
        'options': {
            'autoPlay': false,
            'loop': true,
            'perSliders': 1,
        },
        'noPagenation': true,
    }
})

let scrollerDemo = new Vue({
    mixins: [scroller],
    el: '#scroller',
    data : {
        'list': testData,
        'title': 'scroller',
        'options': {
            'autoPlay': false,
            'loop': true,
            'perSliders': 1,
        },
        'noPagenation': true,
    }
})


/*
let autoPlay = new Vue({
    mixins: [carousel],
    el: '#loop1',
    data : {
        list: testData,
        options: {
            'autoPlay': true,
            'loop': true,
            'perSliders': 1,
            'pagination': true,
        }
    }
})
let autoPlay = new Vue({
    mixins: [carousel],
    el: '#loop1',
    data : {
        list: testData,
        options: {
            'autoPlay': true,
            'loop': true,
            'perSliders': 1,
            'pagination': true,
        }
    }
})*/
