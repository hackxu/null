/**
 * Created by bluexu on 16/1/21.
 */
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./build/app.js",
    output: {
        path: "./src",
        filename: "app.js"
    },
    module: {
        babel: {
            presets: ['es2015'],
            plugins: ['transform-runtime']
        },
        loaders: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css")},
        ]
    },
    plugin: [
        new ExtractTextPlugin('./css/list.css')
    ]
};