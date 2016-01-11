/**
 * Created by bluexu on 16/1/11.
 */
//Object.preventExtensions,阻止修改本地属性,不过如果本地属性被删除了,再也无法加回来
var a = {
    aa: "aa"
};
Object.preventExtensions(a);
a.bb = 2;                   //添加本地属性失败
console.log(a.bb);
a.aa = 3;                   //允许修改属性
console.log(a.aa);
delete  a.aa;               //允许删除已有属性
Object.prototype.ccc = 4;   //不能阻止添加原型属性
console.log(a.ccc);
a.aa = 5;
console.log(a.bb);

//Object.seal不准删除已有的本地属性,内部实现就是遍历
var b = {
    aa: "aa"
};

Object.seal(b);
b.bb = 2;               //添加本地属性失败
console.log(b.bb);
b.aa = 3;
console.log(b.aa);      //语序修改已有属性
delete b.aa;
console.log(b.aa);      //不允许删除已有属性

//Object.freeze是最专制的
var c = {
    aa: "aa"
};
Object.freeze(c);
c.bb = 2;
console.log(c.bb);          //添加本地属性失败
c.aa = 3;
console.log(c.aa);          //允许修改已有属性
delete  c.aa;
console.log(c.aa);          //不允许删除已有属性