/**
 * Created by bluexu on 15/12/28.
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
    }
}

var p1 = new Point(0, 0);
var p2 = {x: 0, y: 0};
console.log(p1);
p1.moveTo(1, 1);
console.log(p1);
p1.moveTo.apply(p2, [100, 100]);
console.log(p2);