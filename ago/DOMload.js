/**
 * Created by bluexu on 16/1/4.
 */
function IEContentLoaded(w, fn) {
    var d = w.document, done = false,
        init = function () {
            if (!done) {
                done = true;
                fn();
            }
        };
    (function () {
        try {//在DOM未建完前调用元素doSroll抛出错误
            d.documentElement.doScroll('left');
        } catch (e) {//延迟再试
            setTimeout(arguments.callee, 50);
            return;
        }
        init();//没有错误执行用户回调
    })();
    //如果用户是在domReady之后绑定函数
    d.onreadystatechange = function () {
        if (d.readyState == 'complete') {
            d.onreadystatechange = null;
            init()
        }
    }

}
