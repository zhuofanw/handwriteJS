function debounce(fn, wait) {
	let timeout;
	return function () {
		let context = this; //this input
		let args = arguments; //arguments onkeydown-event
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn.apply(context, args);
		}, wait);
	};
}
