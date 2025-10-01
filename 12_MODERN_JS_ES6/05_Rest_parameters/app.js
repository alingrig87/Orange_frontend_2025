function sum(a, b, ...nums) {
	var suma = a + b;
	for (let i = 0; i <= nums.length - 1; i++) {
		suma = suma + nums[i];
	}
	return suma;
}

// console.log(sum([1, 4, 5]));
console.log(sum(1, 4, 20, 1, 11, 11));
console.log(sum(1, 4, 5, 20, 21));
