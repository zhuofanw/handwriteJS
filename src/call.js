function call(Fn, obj, ...args) {
	if (obj === undefined || obj === null) {
		obj = globalThis; //globalThis(全局对象)es11新特性
	}
	//为obj添加临时的方法
	obj.temp = Fn;
	//调用temp方法
	const result = obj.temp(...args);
	//删除temp方法
	delete obj.temp;
	return result;
}
