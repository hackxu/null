/**
 * Created by bluexu on 15/12/13.
 */
var a = [5, 4, 3, 2, 1];
var smallvalues = a.filter(function (x) {
    return x > 3
});
var evertother = a.filter(function (x, i) {
    return i % 2 == 0
});