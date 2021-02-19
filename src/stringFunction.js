function reverseString(str) {
	//将字符串转为数组
	let arr = [...str];
	//翻转数组
	arr.reverse();
	//数组变为字符串
	let s = arr.join("");
	return s;
}

function palindrome(str) {
	return reverseString(str) === str;
}
function truncate(str, size) {
	return str.slice(0, size) + "...";
}
