function myClone(target) {
	if (typeof target === "object" && target !== null) {
		return Array.isArray(target) ? [...target] : { ...target };
	} else {
		return target;
	}
}
