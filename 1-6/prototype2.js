/**
 * Created by bluexu on 16/1/11.
 */
function A(){};
A.prototype = {
    aaa:1
};
function B(){};
B.prototype = A.prototype;
var b = new B;
var a = new A;
B.prototype.aaa = 3;
console.log(a.aaa);