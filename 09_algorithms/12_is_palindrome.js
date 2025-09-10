// verifica daca un string este palindrome, se citeste identic din ambele parti
function isPalindrome(str) {
	var left = 0;
	var right = str.length - 1;
	while (left < right) {
		if (str[left] != str[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}

console.log(isPalindrome('ana'));
console.log(isPalindrome('capace'));
console.log(isPalindrome('radar'));
console.log(isPalindrome('civic'));
