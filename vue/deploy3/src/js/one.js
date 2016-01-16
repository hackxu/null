/**
 * Created by bluexu on 16/1/15.
 */
var Vue= require('vue');
var VueRouter =require("vue-router");
Vue.use(require("vue-resource"));
Vue.use(VueRouter);

//new Vue({
//    el:"#app",
    //components:{
    //    "Foo":require('./../../template/Foo.vue'),
    //    "Bar":require('./../../template/Bar.vue')
    //}
    //extend:{
    //        "Foo":require('./../../template/Foo.vue'),
    //        "Bar":require('./../../template/Bar.vue')
    //}
//});
//// 定义组件
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({});

var router = new VueRouter();
router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
});
router.start(App, '#app');