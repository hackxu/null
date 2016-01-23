/**
 * Created by bluexu on 16/1/23.
 */

function f() {
    "use strict";
    var a = 1;
    a++;
    console.log(a);
};
f();
var g = f();
g.next();

//结果报错了