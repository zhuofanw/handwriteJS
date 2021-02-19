// JSON乞丐版本
// function deepClone(target) {
// 	//通过数据创建JSON格式的字符串
// 	let str = JSON.stringify(target);
// 	//将JSON字符串创建为JS数据
// 	let data = JSON.parse(str);
// 	return data;
// }

// 解决function问题，未解决循环引用问题，面试够用版
// function deepClone(target) {
// 	if (typeof target === "object" && target !== null) {
// 		//创建容器
// 		let result = Array.isArray(target) ? [] : {};
// 		//遍历对象
// 		for (let key in target) {
// 			if (target.hasOwnProperty(key)) {
// 				result[key] = deepClone(target[key]);
// 			}
// 		}
// 		return result;
// 	} else {
// 		return target;
// 	}
// }

//解决循环引用问题
function deepClone(target, map = new Map()) {
	//克隆数据之前，进行判断，数据之前是否克隆过
	let cache = map.get(target);
	if (cache) {
		return cache;
	}
	if (typeof target === "object" && target !== null) {
		//创建容器
		let result = Array.isArray(target) ? [] : {};
		//将新的结果存入到容器中
		map.set(target, result);
		//遍历对象
		for (let key in target) {
			if (target.hasOwnProperty(key)) {
				result[key] = deepClone(target[key], map);
			}
		}
		return result;
	} else {
		return target;
	}
}
