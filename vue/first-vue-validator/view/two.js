/**
 * Created by bluexu on 16/1/25.
 */
var Vue = require('../../node_modules/vue/dist/vue.min');
Vue.use(require('../../node_modules/vue-resource/dist/vue-resource.min'));
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}

var snatchID =GetQueryString("snatchId")
console.log(snatchID)
new Vue({
    el: ".main-list",
    ready: function () {
        this.$http.get("http://snatch.inj100.com/api/v2/ladder/?client=1&snatchId="+snatchID).then(function (response) {
            //this.$set("stuff",response.data);
            this.$set("user",response.data.data)
            console.log(JSON.stringify(this.user));
        })
    },
    data: {
        user:{}
    }
})