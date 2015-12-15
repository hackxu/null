/**
 * Created by zjh on 2015/12/15.
 */

/*function ba(x) {
    return x + this.y;
}
var o = {y: 1};
var c = ba.bind(o);
console.log(c(2));


var sum = function (x, y) {
    console.log(x);
    console.log(y);
    return x + y;

};
var succ = sum.bind(null, 1);
console.log(succ(3));*/
function f(y, z) {
    console.log(this.x);
    console.log(y);
    console.log(z);
    return this.x + y + z
}
var g = f.bind({x:1},2);
console.log(g(5));