# Algoritmi JavaScript

## Algoritmi pentru Array-uri

### Parcurgerea array-urilor
```javascript
// Afișarea elementelor
function showArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Afișarea în ordine inversă
function showReversed(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
```

### Căutarea în array-uri
```javascript
// Căutarea liniară
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Căutarea binară (array sortat)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

### Găsirea extremelor
```javascript
// Minimul și maximul
function findMinMax(arr) {
    if (arr.length === 0) return null;
    
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    
    return { min, max };
}
```

## Algoritmi de Sortare

### Bubble Sort
```javascript
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (arr[i-1] > arr[i]) {
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    
    return arr;
}
```

### Quick Sort
```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let middle = arr.filter(x => x === pivot);
    let right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}
```

## Algoritmi pentru Numere

### Verificarea numerelor
```javascript
// Număr prim
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Palindrom
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
```

### Secvența Fibonacci
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// Recursiv
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
```

## Probleme Clasice

### Two Sum Problem
```javascript
function twoSum(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```

### Reversing Arrays/Strings
```javascript
// Reversing în loc
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}
```

## Complexitatea Algoritmilor

### Big O Notation
- **O(1)** - Constant time
- **O(log n)** - Logarithmic time
- **O(n)** - Linear time  
- **O(n log n)** - Linearithmic time
- **O(n²)** - Quadratic time
- **O(2ⁿ)** - Exponential time

### Exemple de complexitate
```javascript
// O(1) - acces direct
arr[0];

// O(n) - parcurgere liniară
arr.forEach(item => console.log(item));

// O(n²) - bucle imbricate
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // operație
    }
}
```
