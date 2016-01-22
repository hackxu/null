/**
 * Created by bluexu on 16/1/22.
 */
function initUI() {
    "use strict";
    var bd = document.body,
        links = document.getElementsByTagName("a"),
        i = 0,
        len = links.length;
    while (i < len) {
        update(links[i++]);
    }
    document.getElementById('xxx').onclick = function () {
        start();
    }
    bd.className = "active";
}

//用局部变量存储本地范围之外的变量值,如果它们在函数中的使用多于一次