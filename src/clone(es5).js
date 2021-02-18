function myClone(target) {
	if (target === "object" && target !== null) {
		const result = Array.isArray(target) ? [] : {};
		for (let key in target) {
			//判断当前对象身上是否包含该属性,而非原型链上
			if (target.hasOwnProperty(key)) {
				//将属性设置到result结果数据中
				result[key] = target[key];
			}
		}
		return result;
	} else {
		return target;
	}
}
