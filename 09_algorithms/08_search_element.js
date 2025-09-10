// se da un element target si sa se verifice daca exista in array

function findElement(arr, target) {
	for (var i = 0; i <= arr.length - 1; i++) {
		if (arr[i] == target) {
			return true;
		} else {
			return false;
		}
	}
}

console.log(findElement([2, 4, 6, 9, 12], 5)); //false
console.log(findElement([2, 4, 6, 9, 12], 9)); //true
