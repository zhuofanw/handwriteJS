function flatten(arr) {
	let result = [];
	arr.forEach((item) => {
		Array.isArray(item)
			? (result = result.concat(flatten(item)))
			: (result = result.concat(item));
	});
	return result;
}
