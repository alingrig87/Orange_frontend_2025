// afiseaza maximul din array
function printMax(arr) {
	var max = arr[0];
	for (var i = 1; i <= arr.length - 1; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	console.log(max);
}

printMax([1, 4, 4212, 23, 122, 33, 1, 651, 1]);
