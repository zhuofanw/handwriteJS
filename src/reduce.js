function reduce(arr, fn, initValue) {
	let result = initValue;
	for (let i = 0; i < arr.length; i++) {
		result = fn(result, arr[i]);
	}
	return result;
}
