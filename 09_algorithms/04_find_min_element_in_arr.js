// afiseaza min din array
function printMin(arr) {
	var min = arr[0];
	for (var i = 1; i <= arr.length - 1; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
	}
	console.log(min);
}

printMin([1, 4, 4212, 23, 122, 33, -1, 651, 1]);
