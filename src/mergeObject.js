function mergeObject(...objs) {
	console.log(objs);
	const result = {};
	objs.forEach((obj) => {
		console.log("Object.keys(obj)::", Object.keys(obj));

		Object.keys(obj).forEach((key) => {
			if (result.hasOwnProperty(key)) {
				result[key] = [].concat(result[key], obj[key]);
			} else {
				result[key] = obj[key];
			}
		});
	});
	return result;
}
