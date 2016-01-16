/**
 * Created by bluexu on 16/1/14.
 */
var Vue = require('../../node_modules/vue/dist/vue.min');
Vue.use(require("vue-resource"));
Vue.config.debug = true;
var one = new Vue({
    el: ".one",
    components:{
        "lia":require('./../template/li.vue')
    }
});
