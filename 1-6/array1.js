/**
 * Created by bluexu on 16/1/11.
 */
Array.prototype.indexOf = function (item, index) {
    var n = this.length, i = ~~index;
    if (i < 0) {
        i += n;
    }
    for (; i < n; i++) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
};

Array.prototype.lastIndexOf = function (item, index) {
    var n = this.length,
        i = index == null ? n - 1 : index;
    if (i < 0) {
        i = Math.max(0, n + i);
    }
    for (; i >= 0; i--) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
};