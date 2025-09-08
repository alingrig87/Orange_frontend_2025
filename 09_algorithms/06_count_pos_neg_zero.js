// calculeaza cate elemente negative, positive sau nule exista si printeaza-le
function countNegPosZero(arr) {
	var noOfPositiveValues = 0;
	var noOfNegativeValues = 0;
	var noOfZeroValues = 0;

	for (var i = 0; i <= arr.length - 1; i++) {
		if (arr[i] < 0) {
			noOfNegativeValues++;
		} else if (arr[i] > 0) {
			noOfPositiveValues++;
		} else {
			noOfZeroValues++;
		}
	}
	console.log(
		'Array-ul contine ' +
			noOfNegativeValues +
			' numere negative, ' +
			noOfPositiveValues +
			' numere pozitive si ' +
			noOfZeroValues +
			' zerouri'
	);
}

countNegPosZero([0, 1, 0, 2, -2, -2, 0, 11, 12]);
