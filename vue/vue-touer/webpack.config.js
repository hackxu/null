/**
 * Created by bluexu on 16/1/14.
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        index: "./src/js/one.js"
    },
    output: {
        path: "./build/js",
        filename: "[name]bundle.js"
    },
    //externals:{
    //  "vue":"Vue"           //默认不打包
    //},

    module: {
        loaders: [
            {
                test: /\.vue$/, loader: 'vue-loader'
            },
            //{
            //    test: /\.js$/, loader: 'babel-loader'
            //},
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ],
        babel: {
            presets: ['es2015'],
            plugins: ['transform-runtime']
        }
    },
    plugins: [
        new ExtractTextPlugin('./build/css/style.css')
    ]
};