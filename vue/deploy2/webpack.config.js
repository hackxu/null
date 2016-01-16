/**
 * Created by bluexu on 16/1/14.
 */
module.exports = {
    entry: "./build/one.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.css$/, loader:"style!css"},
            {test:/\.js$/,loader:"babel-loader"}
        ]
    }
};