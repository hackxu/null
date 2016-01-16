/**
 * Created by bluexu on 16/1/14.
 */

var Vue = require("vue");
Vue.use(require("vue-resource"));
Vue.config.debug = true;
var one = new Vue({
    el: ".one",
    components:{
        "index":require('./../template/index.vue')
    }
});
