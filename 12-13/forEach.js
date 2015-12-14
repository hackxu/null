/**
 * Created by bluexu on 15/12/13.
 */

var data = [1, 2, 3, 4, 5];
var sum = 0;
data.forEach(function (value) {
    sum += value
});
console.log(sum);
data.forEach(function (v, i, a) {
    a[i] = v + 1;
});
console.log(data);