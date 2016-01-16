/**
 * Created by bluexu on 16/1/14.
 */
var vue = require('vue-loader');
module.exports = {
    entry: "./build/one.js",
    output: {
        path: __dirname,
        filename: "onebundle.js"
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue-loader'},
        ]
    }
};