/**
 * Created by bluexu on 16/1/11.
 */
function A() {};
A.prototype = {
    aa: 1
}
var a = new A;
console.log(a.aa);
//把整个圆形对象都换掉
A.prototype={
    aa:2
};
console.log(a.aa);
//于是我们想到实例都有一个constructor方法,指向其构造器
//二构造器上正好有我们的原型,Javascript引擎是不是通过该线路回溯属性呢
function B(){};
B.prototype = {
    aa:3
};
a.constructor = B;
console.log(a.aa);