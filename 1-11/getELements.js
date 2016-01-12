/**
 * Created by bluexu on 16/1/11.
 */
//亲子选择器
function getChildren(el) {
    if (el.childElementCount) {
        return [].slice.call(el.children)
    }
    var ret = [];
    for (var node = el.firstChild; node; node = node.nextSibling) {
        node.nodeType == 1 && ret.push(node);
    }
    return ret;
}

//相邻选择器:取得当前元素向右的一个元素节点
function getNext(el) {
    if ("nextElementSibling" in el) {
        return el.nextElementSibling;
    }
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el
        }
    }
    return null
}

//兄长选择器:就是取其右边的所有同级元素节点
function getPrev(el){
    if ("previousElementSibling" in el){
        return el.previousElementSibling;
    }
    while (el = el.previousSibling){
        if(el.nodeType === 1){
            return el;
        }
    }
    return null;
}