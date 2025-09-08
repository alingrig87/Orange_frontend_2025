// calculate sum of elements
function sumArray(arr) {
	var sum = 0;
	for (var i = 0; i <= arr.length - 1; i++) {
		// sum = sum + arr[i];
		sum += arr[i];
	}
	console.log(sum);
}

sumArray([2, 4, 9, 12, 5, 19]);
