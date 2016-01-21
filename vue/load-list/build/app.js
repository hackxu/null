/**
 * Created by bluexu on 16/1/21.
 */
var Vue = require('vue');
Vue.use(require('vue-resource'));
Vue.config.debug = true;
new Vue({
   el:'.one',
    components:({
        list : require('../template/list.vue')
    })
});