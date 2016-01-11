/**
 * Created by bluexu on 16/1/4.
 * jquery2.0
 */

jQuery.isPlainObject = function(obj){
  //首先排除基础类型不为Object的类型,然后是DOM节点与window对象
    if(jQuery.type(obj) !== "Object" || obj.nodeType || jQuery.isWindow(obj)){
        return false
    }
    //然后回溯它的最近原型对象是否有siPrototypeOf
    //旧版本IE的一些原生对象没有暴露constructor prototype,因此会在这里过滤
    try {
        if (obj.constructor && !hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){
            return false;
        }
    }catch (e){
        return false
    }
    return true;
};
