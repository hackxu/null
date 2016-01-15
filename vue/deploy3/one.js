/**
 * Created by bluexu on 16/1/15.
 */
import vue from '../common/js/vue';
Vue.use(require("vue-resource"));


new Vue({
    el:"#app",
    ready:function(){

    },
    data:{
        items:""
    },
    components:{
        "index":require('./index.vue')
    }
})