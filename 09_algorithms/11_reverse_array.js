// se da un array, sa se inverseze elementele array-ul fara a crea un alt array
function reverseArray(arr) {
	var left = 0;
	var right = arr.length - 1;

	while (left < right) {
		// arr[left], arr[right]
		var tmp = arr[left];
		arr[left] = arr[right];
		arr[right] = tmp;

		left++;
		right--;
	}
}

var arr = [4, 23, 122, 33, 1, 51, 1];
console.log(arr);
reverseArray(arr);
console.log(arr);
