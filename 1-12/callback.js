/**
 * Created by bluexu on 16/1/12.
 */
function A(List, callback) {
    setTimeout(function () {
        var task = List.shift();
        task(); //执行函
        if (task.length > 0) {  //递归分解
            setTimeout(arguments.callee, 1000)
        } else {
            callback()
        }
    }, 25)
}

A([function () {
    console.log('a')
}, function () {
    console.log('b')
}], function () {
    console.log('callback')
});


