/**
 * Created by bluexu on 15/12/28.
 */
var point = {
    x: 0,
    y: 0,
    moveTo: function (x,y) {
        var that = this;
        //内部函数
        var moveX = function (x) {
            that.x = x;
        };

        var moveY = function (y) {
            that.y = y;
        };
        moveX(x);
        moveY(y);
    }
};
point.moveTo(1, 1);
console.log(point.x);
console.log(point.y);
//console.log(x);