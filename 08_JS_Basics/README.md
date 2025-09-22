# JavaScript Basics

## Variabile și Tipuri de Date

### Declararea variabilelor
```javascript
// var - function scoped (evitați)
var name = "John";

// let - block scoped (recomandat)
let age = 25;

// const - constantă (recomandat pentru valori care nu se schimbă)
const PI = 3.14159;
```

### Tipuri primitive
```javascript
// String
let message = "Hello World";
let template = `Hello ${name}`;

// Number
let integer = 42;
let float = 3.14;

// Boolean
let isActive = true;
let isComplete = false;

// Undefined
let undefinedVar;

// Null
let emptyValue = null;
```

## Operatori

### Operatori aritmetici
```javascript
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (modulo)
console.log(a ** b); // 1000 (putere)
```

### Operatori de comparație
```javascript
// Egalitate
console.log(5 == "5");  // true (conversie automată)
console.log(5 === "5"); // false (strict)

// Inegalitate  
console.log(5 != "5");  // false
console.log(5 !== "5"); // true

// Comparații
console.log(10 > 5);    // true
console.log(10 >= 10);  // true
```

### Operatori logici
```javascript
let x = true, y = false;
console.log(x && y); // false (AND)
console.log(x || y); // true (OR)
console.log(!x);     // false (NOT)
```

## Structuri de Control

### Condiționala if
```javascript
let score = 85;

if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 70) {
    console.log("Good!");
} else {
    console.log("Try harder!");
}
```

### Switch
```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Regular day");
}
```

### Operatorul ternar
```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
```

## Bucle (Loops)

### For loop
```javascript
// Clasic
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...of (pentru array-uri)
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// For...in (pentru obiecte)
let person = {name: "John", age: 30};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

### While loops
```javascript
// While
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do...while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
```

## Funcții

### Declararea funcțiilor
```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function cu body
const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};
```

### Parametri default
```javascript
function greet(name = "World") {
    return `Hello, ${name}!`;
}
```

## Array-uri

### Crearea și manipularea
```javascript
// Crearea
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Accesarea elementelor
console.log(numbers[0]); // 1
console.log(numbers.length); // 5

// Adăugarea elementelor
numbers.push(6);        // Adaugă la sfârșit
numbers.unshift(0);     // Adaugă la început

// Eliminarea elementelor
numbers.pop();          // Elimină ultimul
numbers.shift();        // Elimină primul
```

### Metode utile pentru array-uri
```javascript
let numbers = [1, 2, 3, 4, 5];

// Map - transformă fiecare element
let doubled = numbers.map(n => n * 2);

// Filter - filtrează elementele
let evenNumbers = numbers.filter(n => n % 2 === 0);

// Find - găsește primul element care îndeplinește condiția
let found = numbers.find(n => n > 3);

// Reduce - reduce array-ul la o singură valoare
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

// ForEach - execută o funcție pentru fiecare element
numbers.forEach(n => console.log(n));
```

## Obiecte

### Crearea și manipularea
```javascript
// Object literal
let person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

// Accesarea proprietăților
console.log(person.name);        // Dot notation
console.log(person["age"]);      // Bracket notation

// Adăugarea proprietăților
person.email = "john@email.com";
person["phone"] = "123-456-7890";

// Eliminarea proprietăților
delete person.city;
```

### Destructuring
```javascript
// Array destructuring
let [first, second, third] = [1, 2, 3];

// Object destructuring
let {name, age} = person;
let {name: fullName, age: years} = person; // Renaming
```

## DOM Manipulation

### Selectarea elementelor
```javascript
// Prin ID
let element = document.getElementById("myId");

// Prin clasă
let elements = document.getElementsByClassName("myClass");

// Prin tag
let paragraphs = document.getElementsByTagName("p");

// Query selectors (recomandat)
let element = document.querySelector("#myId");
let elements = document.querySelectorAll(".myClass");
```

### Modificarea conținutului
```javascript
let element = document.querySelector("#myElement");

// Text content
element.textContent = "New text";

// HTML content
element.innerHTML = "<strong>Bold text</strong>";

// Attributes
element.setAttribute("class", "newClass");
element.classList.add("active");
element.classList.remove("inactive");
element.classList.toggle("visible");
```

### Event handling
```javascript
// Adăugarea event listener-ilor
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// Cu parametri
button.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault(); // Previne comportamentul default
    console.log("Button clicked!", event.target);
}
```

## Exemple practice

### Calculator simplu
```javascript
function calculator(operation, a, b) {
    switch(operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "Error: Division by zero";
        default:
            return "Invalid operation";
    }
}
```

### Todo List simplu
```javascript
let todos = [];

function addTodo(text) {
    todos.push({
        id: Date.now(),
        text: text,
        completed: false
    });
}

function toggleTodo(id) {
    let todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
}

function removeTodo(id) {
    todos = todos.filter(t => t.id !== id);
}
```
