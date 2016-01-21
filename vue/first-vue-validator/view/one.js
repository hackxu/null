/**
 * Created by bluexu on 16/1/18.
 */
var Vue = require('../../node_modules/vue/dist/vue.min');
Vue.use(require('../../node_modules/vue-resource/dist/vue-resource.min'));
Vue.use(require('../../node_modules/vue-validator/dist/vue-validator.min'));
Vue.config.debug = true;

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}
var euid = GetQueryString("euid");
var client = GetQueryString("client");
console.log(euid);
console.log(client);
var main = new Vue({
    el: "#main",
    ready: function () {
        this.$http.get("http://goods.inj100.com/api/v2/activity/user?euid=" + euid).then(function (response) {
            //this.$set("stuff",response.data);
            this.$set("user.name", response.data.data.UserName);
            //this.$set("user.name",this.stuff.data.UserName);
            this.$set("user.phone", response.data.data.Login);
            console.log(JSON.stringify(this.user));
        })
    },
    data: {
        noMatter: {
            cheac: false,
            chea: false,
            male: true,
            female: false,
            one:client
        },
        error: {},
        user: {
            euid: euid,
            client: client,
            sex: '男'
        },
        //user: {
        //    "euid": "Yic JXXb Ls=",
        //    "client": "ios",
        //    "sex": "女",
        //    "name": "二蛋",
        //    "phone": "13200000002",
        //    "career": "sdfjkahhj",
        //    "QQ": "784729",
        //    "address": "5435423",
        //    "email": "2@qq.com"
        //},
        form: {
            nameShow: false,
        }
    },
    /*computed:{
     nameYan :function(){
     if(this.user.name == ""){
     return true
     }
     }
     },*/
    methods: {
        cheack: function () {
            if (this.noMatter.chea) {
                this.noMatter.chea = false;
            } else {
                this.noMatter.chea = true;
            }
        },
        manClick: function () {
            if (this.noMatter.male && !this.noMatter.female) {
            } else {
                this.noMatter.male = true;
                this.noMatter.female = false;
                this.user.sex = "男";
                console.log(JSON.stringify(this.user))
            }
        },
        womanClick: function () {
            if (this.noMatter.female && !this.noMatter.male) {
            } else {
                this.noMatter.female = true;
                this.noMatter.male = false;
                this.user.sex = "女";
                console.log(this.user);
                console.log(JSON.stringify(this.user))
            }
        },
        postTo: function () {
            this.$resource('http://goods.inj100.com/api/v2/activity').save(this.user).then(function (response) {
            }, function (response) {
                this.$set('error', response.data.message);
                console.log(JSON.stringify(this.error))
            });
        }
    }
});

Vue.validator('userEmail', function (val) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
});
Vue.validator('userPhone', function (val) {
    return /^1[34578]\d{9}$/.test(val);
});
Vue.validator("userCheck", function (val) {
    return this.checked = true;
})