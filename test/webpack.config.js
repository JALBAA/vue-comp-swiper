var autoprefixer = require('autoprefixer');
var webpack = require('webpack')
module.exports = {
    entry: "./test.js",
    output: {
        path: __dirname,
        filename: "./test-build.js",
        library: ['Swiper'],
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: "vue"},
            {test: /\.css$/, loader: 'style-loader!postcss-loader'},
            {test: /\.less$/,loader: "less-loader!postcss-loader"},
            {
              test: /\.js$/, loader: 'babel-loader',
              query: {
                presets: ['es2015'],
                compact: false
              }
            }
        ]
    },
    postcss: function () {
        return {
            defaults: [ autoprefixer],
            cleaner:  [autoprefixer({ browsers: ['Chrome 20','Firefox 20'] })]
        };
    }
};
