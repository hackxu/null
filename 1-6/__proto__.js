/**
 * Created by bluexu on 16/1/11.
 */
function A(){
    console.log(this.__proto__.aa);
    this.aa = 2;
};
A.prototype = {
    aa:1
};
var a = new A;
console.log(a.aa);
a.__proto__ = {
    aa:3
}
delete  a.aa;
console.log(a.aa);
