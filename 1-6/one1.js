/**
 * Created by bluexu on 16/1/6.
 */
//function f1(){};
//console.log(f1.prototype);
//console.log(typeof f1.prototype);
//console.log(typeof Function.prototype);
//console.log(typeof Object.prototype);
//console.log(typeof Function.prototype.prototype);
var person = function(name){
    this.name = name;
};
person.prototype.getName = function(){
    return this.name
};
var zsh = new person("fuckyou");
zsh.getName();
console.log(zsh.__proto__ === person.prototype);
console.log(person.prototype.__proto__=== Object.prototype);
console.log(Object.prototype.__proto__);