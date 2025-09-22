# Modern JavaScript ES6+ - Ghid Complet

## Introducere
JavaScript ES6+ (ECMAScript 2015 și versiuni ulterioare) a adus multe îmbunătățiri și funcționalități noi care fac codul mai curat, mai eficient și mai ușor de întreținut.

## 1. Arrow Functions

### Sintaxa de bază
```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Cu un singur parametru (parantezele sunt opționale)
const square = x => x * x;

// Fără parametri
const greet = () => "Hello World!";

// Cu body (necesită return explicit)
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
```

### Diferențe importante
```javascript
// Arrow functions nu au propriul 'this'
const person = {
    name: "John",
    
    // Traditional function - 'this' se referă la person
    greetTraditional: function() {
        return `Hello, I'm ${this.name}`;
    },
    
    // Arrow function - 'this' moștenește din context
    greetArrow: () => {
        return `Hello, I'm ${this.name}`; // undefined
    },
    
    // Exemplu corect cu arrow function
    sayHello: function() {
        setTimeout(() => {
            console.log(`Hello from ${this.name}`); // 'this' funcționează
        }, 1000);
    }
};
```

## 2. Template Literals

### Sintaxa de bază
```javascript
const name = "John";
const age = 30;

// Traditional string concatenation
const message1 = "Hello, my name is " + name + " and I'm " + age + " years old.";

// Template literal
const message2 = `Hello, my name is ${name} and I'm ${age} years old.`;

// Expresii complexe
const price = 19.99;
const tax = 0.08;
const total = `Total: $${(price * (1 + tax)).toFixed(2)}`;
```

### Multi-line strings
```javascript
// Traditional (cu escape characters)
const html1 = "<div>\n" +
              "  <h1>Title</h1>\n" +
              "  <p>Content</p>\n" +
              "</div>";

// Template literal
const html2 = `
    <div>
        <h1>Title</h1>
        <p>Content</p>
    </div>
`;
```

### Tagged templates (avansat)
```javascript
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `<mark>${values[i]}</mark>` : '';
        return result + string + value;
    }, '');
}

const name = "John";
const highlighted = highlight`Hello ${name}, welcome!`;
// Output: "Hello <mark>John</mark>, welcome!"
```

## 3. Destructuring

### Array Destructuring
```javascript
// Basic array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first);  // 1
console.log(second); // 2

// Skipping elements
const [a, , c] = numbers;
console.log(a); // 1
console.log(c); // 3

// Rest operator
const [head, ...tail] = numbers;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Default values
const [x, y, z = 10] = [1, 2];
console.log(z); // 10

// Swapping variables
let var1 = "a";
let var2 = "b";
[var1, var2] = [var2, var1];
console.log(var1); // "b"
console.log(var2); // "a"
```

### Object Destructuring
```javascript
// Basic object destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

const { name, age } = person;
console.log(name); // "John"
console.log(age);  // 30

// Renaming variables
const { name: fullName, age: years } = person;
console.log(fullName); // "John"
console.log(years);    // 30

// Default values
const { name, age, profession = "Developer" } = person;
console.log(profession); // "Developer"

// Nested destructuring
const user = {
    id: 1,
    profile: {
        name: "John",
        settings: {
            theme: "dark",
            notifications: true
        }
    }
};

const { 
    profile: { 
        name,
        settings: { theme, notifications }
    }
} = user;

console.log(name);          // "John"
console.log(theme);         // "dark"
console.log(notifications); // true
```

### Function Parameters Destructuring
```javascript
// Object parameters
function createUser({ name, age, email = "not provided" }) {
    return {
        name,
        age,
        email,
        createdAt: new Date()
    };
}

const newUser = createUser({
    name: "John",
    age: 30
});

// Array parameters
function processCoordinates([x, y, z = 0]) {
    return { x, y, z };
}

const coords = processCoordinates([10, 20]);
```

## 4. Spread Operator

### Array Spread
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combining arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Adding elements
const newArray = [...arr1, 4, 5, ...arr2, 7];
console.log(newArray); // [1, 2, 3, 4, 5, 4, 5, 6, 7]

// Copying arrays (shallow copy)
const copy = [...arr1];
console.log(copy); // [1, 2, 3]

// Converting NodeList to Array
const elements = document.querySelectorAll('.item');
const elementsArray = [...elements];
```

### Object Spread
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Combining objects
const combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }

// Overriding properties
const updated = { ...obj1, b: 10, e: 5 };
console.log(updated); // { a: 1, b: 10, e: 5 }

// Copying objects (shallow copy)
const copy = { ...obj1 };

// Common pattern: updating state
const state = { user: "John", loggedIn: false };
const newState = { ...state, loggedIn: true };
```

### Function Arguments
```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Spreading arguments
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5

// Mixed usage
function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}!`;
}

console.log(greet("Hello", "John", "Jane", "Bob")); // "Hello John, Jane, Bob!"
```

## 5. Rest Parameters

```javascript
// Collecting remaining arguments
function processData(first, second, ...remaining) {
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Remaining:", remaining);
}

processData(1, 2, 3, 4, 5);
// First: 1
// Second: 2
// Remaining: [3, 4, 5]

// With destructuring
function handleUser({ name, age, ...otherInfo }) {
    console.log(`Name: ${name}, Age: ${age}`);
    console.log("Other info:", otherInfo);
}

handleUser({
    name: "John",
    age: 30,
    city: "New York",
    profession: "Developer"
});
```

## 6. Default Parameters

```javascript
// Basic default parameters
function greet(name = "World", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());           // "Hello, World!"
console.log(greet("John"));     // "Hello, John!"
console.log(greet("John", "Hi")); // "Hi, John!"

// Default parameters with expressions
function createUser(name, id = generateId(), timestamp = Date.now()) {
    return { name, id, timestamp };
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Default parameters can reference previous parameters
function buildUrl(protocol = "https", domain, path = "/") {
    return `${protocol}://${domain}${path}`;
}

// Default parameters with destructuring
function configureApp({
    theme = "light",
    language = "en",
    notifications = true
} = {}) {
    return { theme, language, notifications };
}

console.log(configureApp()); // Uses all defaults
console.log(configureApp({ theme: "dark" })); // Overrides theme only
```

## 7. Enhanced Array Methods

### Array.from()
```javascript
// Converting array-like objects
const nodeList = document.querySelectorAll('div');
const array = Array.from(nodeList);

// With mapping function
const numbers = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(numbers); // [1, 2, 3, 4, 5]

// Converting strings
const chars = Array.from("Hello");
console.log(chars); // ['H', 'e', 'l', 'l', 'o']
```

### find() and findIndex()
```javascript
const users = [
    { id: 1, name: "John", active: true },
    { id: 2, name: "Jane", active: false },
    { id: 3, name: "Bob", active: true }
];

// Find first matching element
const activeUser = users.find(user => user.active);
console.log(activeUser); // { id: 1, name: "John", active: true }

// Find index of first matching element
const inactiveIndex = users.findIndex(user => !user.active);
console.log(inactiveIndex); // 1
```

### includes()
```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3));    // true
console.log(numbers.includes(6));    // false
console.log(numbers.includes(3, 3)); // false (start search from index 3)

// With strings
const text = "Hello World";
console.log(text.includes("World")); // true
console.log(text.includes("world")); // false (case sensitive)
```

## 8. Classes (Preview)

```javascript
// Basic class syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    get info() {
        return `${this.name} is ${this.age} years old`;
    }
}

const person = new Person("John", 30);
console.log(person.greet()); // "Hello, I'm John"
console.log(person.info);    // "John is 30 years old"
```

## 9. Promises și Async/Await (Preview)

```javascript
// Promise example
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data loaded successfully");
        }, 1000);
    });
};

// Using promises
fetchData()
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Async/await syntax
async function loadData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
```

## 10. Practical Examples

### Modern Todo App
```javascript
class TodoApp {
    constructor() {
        this.todos = [];
        this.filter = 'all';
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.render();
    }
    
    bindEvents() {
        const { addBtn, todoInput, filterBtns } = this.getElements();
        
        addBtn.addEventListener('click', () => this.addTodo());
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filter = e.target.dataset.filter;
                this.render();
            });
        });
    }
    
    getElements() {
        return {
            addBtn: document.querySelector('#add-btn'),
            todoInput: document.querySelector('#todo-input'),
            todoList: document.querySelector('#todo-list'),
            filterBtns: document.querySelectorAll('.filter-btn')
        };
    }
    
    addTodo() {
        const { todoInput } = this.getElements();
        const text = todoInput.value.trim();
        
        if (!text) return;
        
        const todo = {
            id: Date.now(),
            text,
            completed: false,
            createdAt: new Date()
        };
        
        this.todos = [...this.todos, todo];
        todoInput.value = '';
        this.render();
    }
    
    toggleTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        this.render();
    }
    
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.render();
    }
    
    getFilteredTodos() {
        const { filter, todos } = this;
        
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }
    
    render() {
        const { todoList } = this.getElements();
        const filteredTodos = this.getFilteredTodos();
        
        todoList.innerHTML = filteredTodos
            .map(todo => this.renderTodo(todo))
            .join('');
    }
    
    renderTodo({ id, text, completed }) {
        return `
            <div class="todo-item ${completed ? 'completed' : ''}">
                <input 
                    type="checkbox" 
                    ${completed ? 'checked' : ''}
                    onchange="todoApp.toggleTodo(${id})"
                >
                <span class="todo-text">${text}</span>
                <button onclick="todoApp.deleteTodo(${id})" class="delete-btn">
                    Delete
                </button>
            </div>
        `;
    }
}

// Initialize app
const todoApp = new TodoApp();
```

## Best Practices

1. **Folosește const și let** în loc de var
2. **Preferă arrow functions** pentru callback-uri scurte
3. **Folosește template literals** pentru string-uri complexe
4. **Destructuring** face codul mai curat
5. **Spread operator** pentru operații imutabile
6. **Default parameters** reduc verificările null/undefined

## Browser Support

Majoritatea features ES6+ sunt suportate în browsere moderne. Pentru browsere mai vechi, poți folosește transpilere ca Babel.

## Resurse Utile

- [MDN ES6 Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)
- [ES6 Features Overview](http://es6-features.org/)
- [Babel Transpiler](https://babeljs.io/)
- [Can I Use ES6](https://caniuse.com/es6)