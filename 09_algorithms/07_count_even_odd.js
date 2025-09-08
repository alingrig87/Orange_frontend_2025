// numara si printeaza numerele pare si impare

function countEvenOdd(arr) {
	var noOfEvenNumbers = 0;
	var noOfOddNumbers = 0;

	for (var i = 0; i <= arr.length - 1; i++) {
		if (arr[i] % 2 == 0) {
			noOfEvenNumbers++;
		} else {
			noOfOddNumbers++;
		}
	}

	console.log(
		'Array-ul contine ' +
			noOfEvenNumbers +
			' numere pare si ' +
			noOfOddNumbers +
			' numere impare.'
	);
}

countEvenOdd([1, 3, 4, 2, 4, 6]);
