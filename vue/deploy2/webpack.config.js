/**
 * Created by bluexu on 16/1/14.
 */
var  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        one: "./build/one.js",
        //onemin:"./build/onemin.js"
    },
    output: {
        path: "./src/js",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue-loader'},
            //{test: /\.scss$/, loader: "style!css!sass"},
            //{test: /\.css$/, loader:"style!css"},
            {test:/\.js$/,loader:"babel-loader"},
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('style','css!sass')
            },

            //{
            //    test: /\.(png|jpg)$/,
            //    loader: 'url?limit=8192' // 图片低于 8MB 时转换成 inline base64，非常神奇！
            //}
        ]
    },
    plugins:[
        new ExtractTextPlugin('./css/style.css')
    ]
};