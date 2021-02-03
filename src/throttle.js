function throttle(fn, wait) {
	//定义开始时间
	let start = 0;
	//返回结果是一个函数
	return function () {
		let context = this;
		let args = arguments;
		//获取当前时间戳
		let now = Date.now();
		if (now - start >= wait) {
			//若满足条件，则执行回调函数
			fn.apply(context, args);
			//修改开始时间
			start = now;
		}
	};
}
