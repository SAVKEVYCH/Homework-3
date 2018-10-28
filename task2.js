var countdown = function (namber) {
	if (namber>0) {
		console.log(namber);
		return countdown(namber-1)
	}else {
		return namber;
	}
}
countdown(10);