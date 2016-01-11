/**
 * Created by bluexu on 16/1/4.
 * jQuery的makeArray
 */

var makeArray = function (array) {
    var ret = [];
    if (array != null) {
        var i = array.length;
        //The window,strings(and functions) also have 'length'
        if (i == null || typeof array === "string" || jQuery.isFunction(array) || array.setInterval) {
            ret[0] = array;
        } else {
            while (i) {
                ret[--i] = array[i]
            }
        }
    }
    return ret;
}
