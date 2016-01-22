/**
 * Created by bluexu on 16/1/21.
 */
//console.log(foo); // 输出undefined
//(function () {
//    "use strict";
//    let bar = 2;
//    console.log(bar); // 报错ReferenceError
//})()
//var foo = 2;
"use strict"
// SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode

//console.log(bar); //
//
//let bar = 2;

var tmp = 123;

if (true) {
    let tmp;
    tmp = 'abc'; // ReferenceError
    console.log(tmp)  // "abc"
}
console.log(tmp)        //123


//在ES5中运行，会得到“I am inside!”，但是在ES6中运行，会得到“I am outside!”。
// 这是因为ES5存在函数提升，不管会不会进入 if代码块，函数声明都会提升到当前作用域的顶部，得到执行；
// 而ES6支持块级作用域，不管会不会进入if代码块，其内部声明的函数皆不会影响到作用域的外部。
function f() {
    console.log('I am outside!');
}
(function () {
    if (false) {
        // 重复声明一次函数f
        function f() {
            console.log('I am inside!');
        }
    }
    f();
}());


{
    let a = 'secret';

    function f() {
        return a;
    }
}
f() // 报错
//上面代码中，块级作用域外部，无法调用块级作用域内部定义的函数。如果确实需要调用，就要像下面这样处理。

let fa;
{
    let a = 'secret';
    fa = function () {
        return a;
    }
}
fa() // "secret"
console.log(fa())
//需要注意的是，如果在严格模式下，函数只能在顶层作用域和函数内声明，其他情况（比如if代码块、循环代码块）的声明都会报错。

var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1
console.log(window.a);

let b = 1;
window.b // undefined
console.log(window.b);
