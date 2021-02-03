function bind(Fn, obj, ...args) {
	//bind返回一个新函数
	return function (...args2) {
		//执行call函数
		return call(Fn, obj, ...args, ...args2);
	};
}
