/**
 * Created by bluexu on 16/1/22.
 */
function loadScript(url, callback) {
    "use strict";
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (script.readyState) {
        //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        }
    }else {
        //Others
        script.onload = function(){
            callback();
        }
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
loadScript("the-readt.js",function(){
    "use strict";
    Application.init();
})