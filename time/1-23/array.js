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
function flatten(target) { //one
    "use strict";
    var result = [];
    target.forEach(function (item) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item))
        } else {
            result.push(item);
        }
    });
    return result;
}

//对数组进行去重操作,返回一个以为的新数组
function unique(target) {
    "use strict";
    var result = [];
    loop: for (var i = 0, n = target.length; i < n; i++) {
        for (var x = i + 1; x < n; x++) {
            if (target[x] === target[i]) {
                continue loop;
            }
        }
    }
}

//过滤数组中的null与undefined,但不影响原数组
function compact(target) {
    "use strict";
    return target.filter(function (el) {
        return el != null;
    })
}

//取得对向数组的每个元素的指定属性,组成数组返回
function pluck(target, name) {
    "use strict";
    var result = [], prop;
    target.forEach(function (item) {
        prop = item[name];
        if (prop != null) {
            result.push(prop);
        }
    });
    return result;
}

//根据指定条件(如回调或对象的某个属性)进行分组,构成对象返回
function groupBy(target, val) {
    "use strict";
    var result = {};
    var iterator = $.isFunction(val) ? val : function (obj) {
        return obj[val];
    };
    target.forEach(function (value, index) {
        var key = iterator(value, index);
        (result[key] || (result[key] = [])).push(value);
    });
    return result;
}

//根据指定条件进行排序,通常用于对象数组
function sortBy(target, fn, scope) {
    "use strict";
    var array = target.map(function (item, index) {
        return {
            el: item,
            re: fn.call(scope, item, index)
        };
    }).sort(function (left, right) {
        var a = left.re, b = right.re;
        return a < b ? -1 : a > b ? 1 : 0;
    });
    return pluck(array, 'el');
}

//对两个数组取并集
function union(target, array) {
    "use strict";
    return unique(target.concat(array))
}