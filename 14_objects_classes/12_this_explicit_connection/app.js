// Explicit 'this' binding - starter code
// TODO: Learn about call, apply, and bind methods

// Function to be used with different 'this' contexts:
// function introduce() {
//     return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
// }

// Objects to bind to:
// const person1 = { name: "John", age: 30 };
// const person2 = { name: "Jane", age: 25 };

// Using call():
// console.log(introduce.call(person1)); // 'this' = person1

// Using apply() (same as call but with array of arguments):
// function greetWithTitle(title, greeting) {
//     return `${greeting}, ${title} ${this.name}`;
// }
// console.log(greetWithTitle.apply(person1, ["Mr.", "Hello"]));

// Using bind() (creates new function with bound 'this'):
// const boundIntroduce = introduce.bind(person2);
// console.log(boundIntroduce()); // 'this' = person2

// TODO: Add your explicit binding examples here
