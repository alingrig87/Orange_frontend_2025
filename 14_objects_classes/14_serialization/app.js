// Serialization - starter code
// TODO: Learn about serialization (converting objects to strings)

// Basic serialization with JSON.stringify():
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     hobbies: ["reading", "gaming"]
// };

// Serialize object to JSON string:
// const serialized = JSON.stringify(person);
// console.log(serialized);

// Serialization with formatting:
// const prettyJson = JSON.stringify(person, null, 2);
// console.log(prettyJson);

// Serialization with replacer function:
// const filteredJson = JSON.stringify(person, (key, value) => {
//     if (key === 'age') return undefined; // Exclude age
//     return value;
// });

// Custom serialization method:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
    
//     toJSON() {
//         return {
//             fullName: this.name,
//             yearsOld: this.age
//         };
//     }
// }

// TODO: Add your serialization examples here
