// Implicit 'this' binding - starter code
// TODO: Learn about implicit 'this' binding

// Implicit binding examples:
// const person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         // 'this' implicitly bound to person object
//         return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
//     },
//     nested: {
//         value: "nested",
//         getValue: function() {
//             // 'this' bound to nested object, not person
//             return this.value;
//         }
//     }
// };

// Method called on object:
// console.log(person.greet()); // 'this' = person

// Losing 'this' context:
// const greetFunction = person.greet;
// console.log(greetFunction()); // 'this' = window/undefined

// TODO: Add your implicit binding examples here
