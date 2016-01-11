/**
 * Created by bluexu on 16/1/11.
 */
function A() {};
A.prototype = {
    aa: function () {
        alert('1');
    }
};
function bridge(){};
bridge.prototype = A.prototype;
function B(){};
B.prototype = new bridge();
var a = new A;
var b = new B;
//false,说明成功分开他们的原型
console.log(A.prototype == B.prototype);
//true,字累共享父类的原型方法
console.log(a.aa === b.aa);
//为父类动态添加新的原型方法
A.prototype.bb = function(){
    console.log('2')
};
//true,孩子总会得到父亲的遗产
console.log(a.bb = b.bb );

B.prototype.cc = function(){
    console.log('3')
};

//false,父亲未必有机会看到孩子的新产业
console.log(a.cc == b.cc);
//能通过Javascript自带验证机制——instanceof
console.log(b instanceof A);
console.log(b instanceof B);