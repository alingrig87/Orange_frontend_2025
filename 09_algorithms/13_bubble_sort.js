// se da un array de numere asezate random, la fiecare parcurgere(iteratie) se compara elementele si cele mai mari se muta spre dreapta facand schimb de pozitii

function bubbleSort(arr) {
	for (var i = 0; i <= arr.length - 1; i++) {
		for (var j = 0; j <= arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
}

// var arr = [2, 8, 1, 3, 9, -2, -1];
// bubbleSort(arr);
// console.log(arr);

function bubbleSortOptimized(arr) {
	var swapped;

	for (var i = 0; i <= arr.length - 1; i++) {
		swapped = false;
		for (var j = 0; j <= arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
				swapped = true;
			}
		}
		if (swapped == false) break;
	}
}

var arr = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9];
bubbleSortOptimized(arr);
console.log(arr);
