/**
 * Created by bluexu on 16/1/11.
 */
function A(){
    var count = 0;
    this.aa = 'aa';
    this.method = function(){
        return count
    }
    this.obj = {}
}

A.prototype = {
    aa :"aa",
    method :function(){

    }
};
var a = new A;
var b = new A;
console.log(a.method === b.method);
console.log(a.obj === b.obj);
delete  a.method;
console.log(a.method === b.method);
console.log(a.method === A.prototype.method);
console.log(a.obj === b.obj);
