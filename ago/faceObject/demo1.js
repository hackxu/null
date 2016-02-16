/**
 * Created by bluexu on 16/2/3.
 */
//全局命名空间
var MYAPP = MYAPP || {};

//子命名空间
MYAPP.event = {};

// 给普通方法和属性创建一个叫做MYAPP.commonMethod的容器
MYAPP.commonMethod = {
    regExForName: "",// 定义名字的正则验证
    regExForPhone: "",// 定义电话的正则验证
    validateName: function (name) {
        // 对名字name做些操作，你可以通过使用“this.regExForname”
        // 访问regExForName变量
    },
    validatePhoneNo: function (phoneNo) {
        // 对电话号码做操作
    }
}

MYAPP.event = {
    addListener: function (el, type, fn) {

    },
    removeListener: function (el, type, fn) {

    },
    getEvent: function (e) {

    }
}
function al() {
    console.log(Math.random())
}
MYAPP.event.addListener("yourel", "type", al())

var Person = function (firstName) {
    this.firstName = firstName;
    console.log(firstName)
}

var person1 = new Person('Alice');
var person2 = new Person('Bob');

console.log('person1 is ' + person1.firstName); // alerts "person1 is Alice"
console.log('person2 is ' + person2.firstName); // alerts "person2 is Bob"
console.log(person1)
console.log(person2)
console.log(typeof Person)
console.log(typeof person2)

Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName)
}

person1.sayHello()
var helloFunction = person2.sayHello;
alert(helloFunction === person1.sayHello);          // alerts true
alert(helloFunction === Person.prototype.sayHello); // alerts true

helloFunction.call(person1)
