 export default {
	getLocal(key){
		var val = window.localStorage.getItem(key);
		if(val === 'undefined'){
		  return '';
		}
		return window.localStorage.getItem(key);
	 },
	 setLocal(key,val){
		window.localStorage.setItem(key,val);
		return true;
	},
	getSession(key){
		var val = window.sessionStorage.getItem(key);
		if(val === 'undefined'){
		  return '';
		}
		return window.sessionStorage.getItem(key);
	},
	setSession(key,val){
		window.sessionStorage.setItem(key,val);
		return true;
	},
	  /**对象深拷贝 */
	OParse(obj) {
		try {
			return JSON.parse(JSON.stringify(obj))
		} catch (e) {
			return {}
		}
	},
	deepCopy(obj) {
		// 只拷贝对象
		if (typeof obj !== 'object') return;
		// 根据obj的类型判断是新建一个数组还是一个对象
		var newObj = obj instanceof Array ? [] : {};
		for (var key in obj) {
		  // 遍历obj,并且判断是obj的属性才拷贝
		  if (obj.hasOwnProperty(key)) {
			// 判断属性值的类型，如果是对象递归调用深拷贝
			newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
		  }
		}
		return newObj;
	},
	objAssi(obj1, obj2) {
		for (var key in obj1) {
		  for (var key2 in obj2) {
			key2 === key && (obj1[key] = obj2[key])
		  }
		}
		return obj1
	}
  }