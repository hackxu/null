/**
 * Created by bluexu on 16/1/14.
 */
var  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index :"./src/js/one.js"
    },
    output: {
        path: "./build/js",
        filename: "[name]bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, loader: 'vue-loader'
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('style','css!sass')
            }
        ]
    },
    plugins:[
    new ExtractTextPlugin('./build/css/style.css')
]
};