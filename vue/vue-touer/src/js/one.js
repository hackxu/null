/**
 * Created by bluexu on 16/1/15.
 */
var Vue = require('vue');
var VueRouter = require("vue-router");
Vue.use(require("vue-resource"));
Vue.use(VueRouter);

//new Vue({
//    el:"#app",
//    components:{
//        Foo:require('./../../template/Foo.vue'),
//        Bar:require('./../../template/Bar.vue')
//    },
//});
//// 定义组件
//var Foo = Vue.extend({
//    template: '<p>This is foo!</p>'
//})
var Foo = require('./../../template/Foo.vue');
var Bar = require('./../../template/Bar.vue');
var Baz = require('./../../template/Baz.vue');

//var Bar = Vue.extend({
//    template: '<p>This is bar!</p>'
//});

// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({});

var router = new VueRouter();
router.map({
    '/foo': {
        component: Foo,
        // 在/foo下设置一个子路由
        subRoutes: {
            '/': {
                // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
                // 为了简便，这里使用了一个组件的定义
                component: {
                    template: '<p>Default sub view for Foo</p>'
                },
            },
            '/bar': {
                // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
                // 一个Bar组件
                component: Bar
            },
            '/baz': {
                // Baz也是一样，不同之处是匹配的路由会是/foo/baz
                component: Baz
            }
        }
    }
});
router.start(App, '#app');