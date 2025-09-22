// The 'this' keyword - starter code
// TODO: Learn about 'this' keyword in different contexts

// Global context:
// console.log(this); // Window object in browser

// Object method:
// const person = {
//     name: "John",
//     greet: function() {
//         return `Hello, I'm ${this.name}`;
//     }
// };

// Arrow functions and 'this':
// const person2 = {
//     name: "Jane",
//     greet: function() {
//         // Regular function - 'this' refers to person2
//         const inner = () => {
//             // Arrow function - 'this' inherited from parent scope
//             return `Hello, I'm ${this.name}`;
//         };
//         return inner();
//     }
// };

// Constructor function and 'this':
// function Person(name) {
//     this.name = name;
//     this.greet = function() {
//         return `Hello, I'm ${this.name}`;
//     };
// }

// TODO: Add your 'this' keyword examples here
