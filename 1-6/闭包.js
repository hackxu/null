/**
 * Created by bluexu on 16/1/11.
 */
var observable = function(val){
    var cur = val; //一个内部变量
    function field(neo){
        if(arguments.length){ //setter
            if(cur !== neo){
                cur =neo;
            }
        }else { //getter
            return cur;
        }
    }
    field();
    return field;
};
