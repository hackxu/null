/**
 * Created by bluexu on 16/1/11.
 */
function A(){};
A.prototype = {
    aa:1
};
function bridge(){};
bridge.prototype = A.prototype;
function B(){};
B.prototype = new bridge();
B.prototype.constructor = B;
var b = new B;
B.prototype.cc = function () {
    console.log('3')
};

console.log(b.__proto__ == B.prototype);
console.log(b.__proto__.__proto__ === A.prototype);
