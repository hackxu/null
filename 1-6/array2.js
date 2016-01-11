/**
 * Created by bluexu on 16/1/11.
 */
//contains方法:判定数组是否包含制定目标
function contaions(target, item) {
    return target.indexOf(item) > -1;
}
//removeAt方法:移除数组中指定位置的元素,返回布尔表示成功与否
function removeAt(target, index) {
    return !!target.splice(index, 1).length;
}
//remove方法:移除数组中第一个匹配传参的那个元素,返回布尔表示成功与否
function remove(target, item) {
    var index = target.indexOf(item);
    if (~index) {
        return removeAt(target, index);
    }
    return false;
}
//shuffle方法:对数组进行洗牌,若不想影响原数组,可以先拷贝一份出来操作.
function shuffle(target) {
    var j, x, i = target.length;
    for (; i > 0; j = parseInt(Math.random() * i), x = target[--i], target[i] = target[j], target[j] = x) {
    }
    return target;
}

//random方法:从数组中随机抽选一个元素出来
function random(target) {
    return target[Math.floor(Math.random() * target.length)];
}

//flatten方法:对数组进行平坦化处理,返回一个一维的新数组
function flatten(target) {
    var result = [];
    target.forEach(function (item) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item)
        }
    });
    return result;
}

//unique方法:对数组进行去重操作,返回一个没有重复元素的新数组

function unique(target) {
    var result = [];
    loop: for (var i = 0, n = target.length; i < n; i++) {
        for (var x = i + 1; x < n; x++) {
            if (target[x] === target[i]) {
                continue loop;
            }
        }
        result.push(target[i]);
    }
    return result;
}

//compact方法:过滤数组中的null和undefined,犯不影响原数组.
function compact(target) {
    return target.filter(function (el) {
        return el != null;
    })
}

//pluck方法:取得对象数组的每个元素的指定属性,组成数组返回
function pluck(target, name) {
    var result = [], prop;
    target.forEach(function (item) {
        prop = item[name];
        if (prop != null) {
            result.push(prop)
        }
    });
    return result;
}

//sortBy方法:根据制定条件进行排序,通常用于对象数组
function sortBy(target, fn, scope) {
    var array = target.map(function (item, index) {
        return {
            el: item,
            re: fn.call(scope, item, index)
        };
    }).sort(function (left, right) {
        var a = left.re, b = right.be;
        return a < b ? -1 : a > b ? 1 : 0;
    });
    return pluck(array, 'el');
}
//union方法:对两个数组取并集
function union(target, array) {
    return unique(target.concat(array));
}

//intersect方法:对两个数组取交集
function intersect(target, array) {
    return target.filter(function (n) {
        return ~array.indexOf(n);
    });
}

//diff方法:对两个数组取差集(补集)
function diff(target, array) {
    var result = target.slice();
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (result[i] === array[i]) {
                result.splice(i, 1);
                i--;
                break;
            }
        }
    }
    return result;
}

//min方法:放回数组中的最小值,用于数字数组
function min(target){
    return Math.min.apply(0,target);
}

//max方法:返回数组中的最大值,用于数字数组
function max(target){
    return Math.max.apply(0,target);
}


