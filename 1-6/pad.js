/**
 * Created by bluexu on 16/1/10.
 */
//数组法
function pad(target,n){
    var zero = new Array(n).join('0');
    var str = zero + target;
    var result = str.substr(-n);
    return result;
}
//版本1的变种
function pad(target,n) {
    return Array((n+1)-target.toString().split('').length).join('0')+target;
}

//二进制法
function pad(target,n) {
    return (Math.pow(10, n)+""+target).slice(-n);
}

//好的方法
function pad(target,n,filling,right,radix) {
    var num = target.toString(radix || 10);
    filling = filling || "0";
    while (num.length<n) {
        if (!right){
            num = filling + num;
        }else{
            num += filling
        }        
    }
    return  num;
}