# JavaScript Recap - Recapitulare și Consolidare

## Introducere
Acest modul consolidează cunoștințele de JavaScript de bază și DOM manipulation prin cheat sheet-uri și exerciții practice.

## 1. JavaScript Basics - Cheat Sheet

### Variabile și Tipuri
```javascript
let name = "John";           // String
const age = 25;              // Number
var isActive = true;         // Boolean
let undefinedVar;            // undefined
let nullValue = null;        // null
```

### Operatori
```javascript
// Aritmetici: +, -, *, /, %, **
// Comparație: >, <, >=, <=, ==, ===, !=, !==
// Logici: &&, ||, !
```

### Funcții
```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

// Parametri default
function greetDefault(name = "World") {
    return `Hello, ${name}!`;
}
```

### Array-uri
```javascript
let numbers = [1, 2, 3, 4, 5];

// Metode utile
numbers.push(6);                    // Adaugă
numbers.pop();                      // Elimină ultimul
let doubled = numbers.map(n => n * 2);   // Transform
let evens = numbers.filter(n => n % 2 === 0); // Filtrează
let sum = numbers.reduce((a, b) => a + b, 0);  // Reduce
```

### Obiecte
```javascript
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

// Accesarea proprietăților
console.log(person.name);
console.log(person["age"]);
```

## 2. DOM Manipulation - Cheat Sheet

### Selectarea Elementelor
```javascript
// Prin ID
let element = document.getElementById("myId");

// Query selectors
let firstButton = document.querySelector(".btn");
let allButtons = document.querySelectorAll(".btn");
```

### Modificarea Conținutului
```javascript
element.textContent = "New text";
element.innerHTML = "<strong>Bold</strong>";
element.setAttribute("class", "newClass");
element.classList.add("active");
element.style.color = "red";
```

### Event Handling
```javascript
button.addEventListener("click", function(event) {
    console.log("Clicked!");
    event.preventDefault();
});
```

## 3. Algoritmi Comuni

### Probleme cu Array-uri
```javascript
// Găsirea min/max
function findMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

// Eliminarea duplicatelor
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
```

### Probleme cu String-uri
```javascript
// Palindrom
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// Inversarea unui string
function reverseString(str) {
    return str.split('').reverse().join('');
}
```

## Resurse Utile
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [FreeCodeCamp](https://www.freecodecamp.org/)