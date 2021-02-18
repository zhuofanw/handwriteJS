function myInstanceOf(obj, Fn) {
	while (obj.__proto__) {
		if (obj.__proto__ === Fn.prototype) {
			return true;
		}
		obj.__proto__ = obj.__proto__.__proto__;
	}
	return false;
}
