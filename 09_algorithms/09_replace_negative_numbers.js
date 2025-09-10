// se da un array cu numere pozitive si negative sa se modifice array astfel incat numerele negative sa fie modulul lor
function replaceNegatives(arr) {
	for (var i = 0; i <= arr.length - 1; i++) {
		if (arr[i] < 0) {
			arr[i] = arr[i] * -1;
		}
	}
}

var arr = [2, -3, 8, 9, -10];
replaceNegatives(arr);
console.log(arr);
