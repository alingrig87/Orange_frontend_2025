// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
function twoSum(nums, target) {
	for (var i = 0; i <= nums.length - 2; i++) {
		for (var j = 1; j <= nums.length - 1; j++) {
			if (nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
}

function twoSumWithMap(nums, target) {
	var map = new Map();

	for (var i = 0; i <= nums.length - 1; i++) {
		var complement = target - arr[i];

		if (map.has(complement)) {
			return [map.get(complement), i];
		}

		map.set(nums[i], i);
	}

	return [];
}
