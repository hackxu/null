/**
 * Created by bluexu on 16/1/14.
 */
var Vue = require('vue');
Vue.use(require('vue-resource'));

new Vue({
    el: ".one",
    //ready: function () {
    //    this.$http.get("../common/json/test2.json").then(function (response) {
    //        // get status
    //        response.status;
    //        // get all headers
    //        response.headers();
    //        // get 'expires' header
    //        response.headers('expires');
    //        this.$set("todos", response.data);
    //        console.log(response.data);
    //        console.log(response.status)
    //    }, function (response) {
    //
    //        // handle error
    //    });
    //},
    data: {
        todos: [
            {
                "text": "Learn JavaScript"
            },
            {
                "text": "Learn Vue.js"
            },
            {
                "text": "Build Something Awesome"
            }
        ]

    }
});

//});