/**
 * Created by bluexu on 16/1/9.
 */
//移除字符串中的script标签
function stripScripts(target) {
    return String(target || "").replace(/<[^>]+>/g, '');
}

//转变为下划线风格
function underscored(target) {
    return target.replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/\-/g, '_').toLocaleLowerCase();
}

//转变为连字符风格,即css变量的风格
function dasherize(target) {
    return underscored(target).replace(/_/g, '_')
}

//首字母大写
function capitalize(target) {
    return target.charAt(0).toUpperCase() + target.substring(1).toLowerCase();
}

//移除字符串中的html标签,但这方法有缺陷如果里面有script标签,会吧这些不该现实的脚本也显示出来
function stripTags(target) {
    return String(target || "").replace(/<[^>]+>/g,'');
}

//替换html里面的符号为页面显示的内容
function escapeHTML(target){
    return target.replace(/&/g,'&amp;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;')
        .replace(/"/g,'&quot;')
        .replace(/'/g,'&#39;')
}

//将字符串中的实体字符还原为对应字符

function unescapeHTML(target){
    return target.replace(/&amp;/g,'&')
        .replace(/&lt;/g,'<')
        .replace(/&gt;/g,'>')
        .replace(/&quot;/g,'"')
        .replace(/&#([\d]+);/g,function($0,$1){
            return String.fromCharCode(parseInt($1,10))
        })
}
// repeat的重写
function repeat(target,n) {
    var s = target,total=[];
    while (n>0) {
        if (n % 2==1){
            total[total.length] = s;//如果是奇数
        }
        if (n==1){
            break;
        }
        s += s;
        n = n>>1;//相当于将n除以2取其商，或说开2二次方
    }
    return total.join('');
}

//将字符串安全格式化为正则表达式的源码
function escapeRegExp(target){
    return target.replace(/([-.*+?^${}()|[\]\/\\])/g,'\\$1')
}