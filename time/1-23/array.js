/**
 * Created by bluexu on 16/1/23.
 */
//数组方法实现
//判定数组是否爆版制定目标
function contains(target, item) {
    "use strict";
    return target.indexOf(item) > -1;
}

//移除数组中的指定位置的元素,返回布尔表示成功与否
function removeAt(target, index) {
    "use strict";
    return !!target.splice(index, 1).length
}

//移除数组中第一个匹配传参的那个元素,返回布尔表示成功与否
function remove(target, item) {
    "use strict";
    var index = target.indexOf(item);
    if (~index) {
        return removeAt(target, index);
    }
    return false;
}

//对数组进行洗牌,
function shuffle(target) {
    "use strict";
    var j, x, i = target.length;
    for (; i > 0; j = parseInt(Math.random() * i), x = target[--i], target[i] = target[j], target[j] = x) {
    }
    return target;
}

//随机数
function random(target) {
    "use strict";
    return target[Math.floor(Math.random() * target.length)];
}

//对数组进行平坦化处理,返回一个一维的新数组
function flatten(target){
    "use strict";
    var result = [];
    target.forEach(function(item){
        if(Array.isArray(item)){
            result = result.concat(flatten(item))
        }else {
            result.push(item);
        }
    })
    return result;
}