function fibanacci (num) {
	var value = [0,1];

	for (var i = 1; i < num; i++) {
		value[value.length] = value[value.length-1] + value[value.length-2];

	}
      return value;
}
console.log(fibanacci(10));