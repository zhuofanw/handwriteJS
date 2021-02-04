function pull(arr, ...args) {
	console.log(args); //[2,7,3,7]
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (args.includes(arr[i])) {
			result.push(arr[i]);
			arr.splice(i, 1);
			i--;
		}
	}
	return result;
}
