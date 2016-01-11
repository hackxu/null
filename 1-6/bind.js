/**
 * Created by bluexu on 16/1/11.
 */
  //实现
var bind = function(bind){
    return {
        bind:bind.bind(bind),
        call:bind.bind(bind.call),
        apply:bind.bind(bind.apply)
    }
}(Function.prototype.bind);

//示例
var concat = bind.apply([].concat);
var a = [1,[2,3],4];
var b = [1,3];
console.log(concat(b,a));