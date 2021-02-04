function drop(arr, size) {
	return arr.filter((_, index) => index >= size);
}

function dropRight(arr, size) {
	return arr.filter((_, index) => index < arr.length - size);
}
