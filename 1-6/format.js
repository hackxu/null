
// format方法，类似prinf
function format(str,object) {
	var array = Array.prototype.slice.call(arguments, 1);
	return str.replace(/\\?\#{{[^{}]+}\}/gm, function(match,name){
		if (match.charAt(0) == '\\'){
			return match.slice(1);
		}
		var index = Number(name);
		if (index >= 0){
			return array[index];
		}
		if (object && object[name] !== void 0){
			return object[name];
		}
		return '';
	});
}

// quote方法，在字符串的两端添加双引号，内部需要转义的地方都要转义
var escapeable = /["\\\x000-\xlf\x7f-\x9f]/g,
	meta = {
		'\b':'\\b',
		'\t':'\\t',
		'\n':'\\n',
		'\f':'\\f',
		'\r':'\\r',
		'"':'\\"',
		'\\':'\\\\'
	};
	function quote(target) {
		if (target.match(escapeable)){
			return '"' + target.replace(escapeable, function(){
				var c = meta[a];
				if (typeof c === 'string'){
					return c;
				}
				return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
			}) + '"';
		}
		return '"' + target +'"';
	}