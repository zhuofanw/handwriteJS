function unique(arr) {
	const result = [];
	const obj = {};

	arr.forEach((item) => {
		if (obj[item] === undefined) {
			obj[item] = true;
			result.push(item);
		}
	});
	return result;
}
