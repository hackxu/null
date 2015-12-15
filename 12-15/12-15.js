/**
 * Created by zjh on 2015/12/15.
 */

function trace(o,m){
    var original = o[m];
    o[m] = function(){
        console.log(new Date(),"entering:",m);
        var  result = original.apply(this,arguments);
        console.log(new Date(),"exiting:",m);
        return result
    };
}
