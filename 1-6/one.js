/**
 * Created by bluexu on 16/1/6.
 */
function f1() {
};
var f2 = function () {
};
var f3 = new Function('str', 'console.log(str)');

var o3 = new f1();
var o1 = {};
var o2 = new Object();

console.log(typeof Object); //function
console.log(typeof Function); //function
console.log(typeof o1); //object
console.log(typeof o2); //object
console.log(typeof o3); //object
console.log(typeof f1); //function
console.log(typeof f2); //function
console.log(typeof f3); //function