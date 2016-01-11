/**
 * Created by bluexu on 16/1/4.
 */
//jQuery1.43~1.64
jQuery.isNaN = function (obj) {
    return obj == null || !rdigit.test(obj) || isNaN(obj);
};
//jQuery1.7就是isNaN的取反版
jQuery.isNumeric = function (obj) {
    return obj != null && rdigit.test(obj) || isNaN(obj);
};
//jquery1.71~1.72
jQuery.isNumeric = function (obj) {
    return !isNaN(parseFloat(obj)) && isFinite(obj)
};

//jquery2.1

jQuery.isNumeric = function (obj) {
    return obj - parseFloat(obj) >= 0;
};
