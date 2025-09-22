# Objects și Classes în JavaScript

## 1. Object Literals

### Crearea și manipularea
```javascript
// Object literal basic
const person = {
    name: "John",
    age: 30,
    city: "New York",
    
    // Method
    greet: function() {
        return `Hello, I'm ${this.name}`;
    },
    
    // Method shorthand (ES6)
    introduce() {
        return `I'm ${this.name}, ${this.age} years old`;
    }
};

// Computed property names
const prop = "email";
const user = {
    name: "John",
    [prop]: "john@example.com",
    [`is${prop.charAt(0).toUpperCase() + prop.slice(1)}Valid`]: true
};
```

## 2. Constructor Functions

### Pattern tradițional
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

Person.prototype.getAge = function() {
    return this.age;
};

// Folosirea
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
```

## 3. Prototype Inheritance

### Înțelegerea prototype chain
```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add specific methods
Dog.prototype.speak = function() {
    return `${this.name} barks`;
};

Dog.prototype.wagTail = function() {
    return `${this.name} wags tail happily`;
};
```

## 4. ES6 Classes

### Sintaxa modernă
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    // Getter
    get info() {
        return `${this.name} is ${this.age} years old`;
    }
    
    // Setter
    set age(value) {
        if (value > 0) {
            this._age = value;
        }
    }
    
    get age() {
        return this._age;
    }
    
    // Static method
    static createAdult(name) {
        return new Person(name, 18);
    }
}
```

## 5. Class Inheritance

### Extending classes
```javascript
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    getInfo() {
        return `${this.name} is a ${this.species}`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "dog"); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks loudly`;
    }
    
    wagTail() {
        return `${this.name} wags tail`;
    }
    
    // Override parent method
    getInfo() {
        return `${super.getInfo()} of breed ${this.breed}`;
    }
}
```

## 6. Getters și Setters

### Property access control
```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this._email = email; // Convention for private
    }
    
    get email() {
        return this._email;
    }
    
    set email(value) {
        if (this.validateEmail(value)) {
            this._email = value;
        } else {
            throw new Error("Invalid email format");
        }
    }
    
    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}
```

## 7. Static Methods

### Class-level functionality
```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static PI = 3.14159;
    
    static circleArea(radius) {
        return this.PI * radius * radius;
    }
}

// Usage
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.circleArea(5)); // 78.54
```

## 8. Method Chaining

### Fluent interface
```javascript
class Calculator {
    constructor() {
        this.value = 0;
    }
    
    add(num) {
        this.value += num;
        return this; // Return this for chaining
    }
    
    subtract(num) {
        this.value -= num;
        return this;
    }
    
    multiply(num) {
        this.value *= num;
        return this;
    }
    
    divide(num) {
        if (num !== 0) {
            this.value /= num;
        }
        return this;
    }
    
    result() {
        return this.value;
    }
    
    reset() {
        this.value = 0;
        return this;
    }
}

// Usage
const calc = new Calculator();
const result = calc.add(10).multiply(2).subtract(5).divide(3).result(); // 5
```

## 9. This Context

### Understanding 'this'
```javascript
class Button {
    constructor(element) {
        this.element = element;
        this.clickCount = 0;
        
        // Bind context
        this.handleClick = this.handleClick.bind(this);
        
        // Or use arrow function
        this.handleClickArrow = () => {
            this.clickCount++;
            console.log(`Clicked ${this.clickCount} times`);
        };
    }
    
    handleClick() {
        this.clickCount++;
        console.log(`Clicked ${this.clickCount} times`);
    }
    
    init() {
        this.element.addEventListener('click', this.handleClick);
        // or this.element.addEventListener('click', this.handleClickArrow);
    }
}
```

## 10. JSON și Serialization

### Working with JSON
```javascript
class Person {
    constructor(name, age, hobbies = []) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.createdAt = new Date();
    }
    
    // Custom serialization
    toJSON() {
        return {
            name: this.name,
            age: this.age,
            hobbies: this.hobbies,
            createdAt: this.createdAt.toISOString()
        };
    }
    
    // Static method to create from JSON
    static fromJSON(json) {
        const data = typeof json === 'string' ? JSON.parse(json) : json;
        const person = new Person(data.name, data.age, data.hobbies);
        person.createdAt = new Date(data.createdAt);
        return person;
    }
    
    // Clone method
    clone() {
        return Person.fromJSON(this.toJSON());
    }
}

// Usage
const person = new Person("John", 30, ["reading", "coding"]);
const json = JSON.stringify(person);
const restored = Person.fromJSON(json);
```

## Exemple Practice Complete

### Task Management System
```javascript
class Task {
    constructor(title, description = "", priority = "medium") {
        this.id = Date.now() + Math.random();
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = false;
        this.createdAt = new Date();
        this.completedAt = null;
    }
    
    complete() {
        this.completed = true;
        this.completedAt = new Date();
        return this;
    }
    
    uncomplete() {
        this.completed = false;
        this.completedAt = null;
        return this;
    }
    
    updatePriority(priority) {
        this.priority = priority;
        return this;
    }
    
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            priority: this.priority,
            completed: this.completed,
            createdAt: this.createdAt.toISOString(),
            completedAt: this.completedAt?.toISOString()
        };
    }
    
    static fromJSON(json) {
        const data = typeof json === 'string' ? JSON.parse(json) : json;
        const task = new Task(data.title, data.description, data.priority);
        task.id = data.id;
        task.completed = data.completed;
        task.createdAt = new Date(data.createdAt);
        task.completedAt = data.completedAt ? new Date(data.completedAt) : null;
        return task;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
        this.observers = [];
    }
    
    addTask(title, description, priority) {
        const task = new Task(title, description, priority);
        this.tasks.push(task);
        this.notifyObservers('taskAdded', task);
        return task;
    }
    
    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const task = this.tasks.splice(index, 1)[0];
            this.notifyObservers('taskRemoved', task);
            return task;
        }
        return null;
    }
    
    getTasksByPriority(priority) {
        return this.tasks.filter(task => task.priority === priority);
    }
    
    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }
    
    getPendingTasks() {
        return this.tasks.filter(task => !task.completed);
    }
    
    // Observer pattern
    subscribe(callback) {
        this.observers.push(callback);
    }
    
    unsubscribe(callback) {
        this.observers = this.observers.filter(obs => obs !== callback);
    }
    
    notifyObservers(event, data) {
        this.observers.forEach(callback => callback(event, data));
    }
    
    // Serialization
    toJSON() {
        return {
            tasks: this.tasks.map(task => task.toJSON())
        };
    }
    
    static fromJSON(json) {
        const data = typeof json === 'string' ? JSON.parse(json) : json;
        const manager = new TaskManager();
        manager.tasks = data.tasks.map(taskData => Task.fromJSON(taskData));
        return manager;
    }
    
    save() {
        localStorage.setItem('taskManager', JSON.stringify(this));
    }
    
    static load() {
        const saved = localStorage.getItem('taskManager');
        return saved ? TaskManager.fromJSON(saved) : new TaskManager();
    }
}
```

## Best Practices

1. **Folosește ES6 classes** pentru cod modern
2. **Encapsulation** - păstrează datele private când e posibil
3. **Single Responsibility** - o clasă, o responsabilitate
4. **Method chaining** pentru API-uri fluente
5. **Static methods** pentru utility functions
6. **Proper inheritance** cu super() calls

## Resurse Utile
- [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript OOP Guide](https://javascript.info/classes)
