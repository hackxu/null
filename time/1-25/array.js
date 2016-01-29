/**
 * Created by bluexu on 16/1/26.
 */
//对两个数组取交集
function intersect(target,array){
    "use strict";
    return target.filter(function (n) {
        return ~array.indexOf(n);
    })
}

//diff方法,对两个数组取差集

function diff(target,array){
	var result = target.slice();
	for (var i = 0;i<result.length;i++){
		for(var j = 0;j<array.length;i++){
			if(result[i] === array[j]){
				result.splice(i,1);
				i--;
				break;
			}
		}
	}
	return result;
}

//返回数组中的最小值，用于数字数组
function min(target) {
	return Math.min.apply(0, target);
}

//返回数组中的最大值，用于数字数组
function max(target) {
	return Math.max.apply(0, target);
}


