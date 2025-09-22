// Deserialization - starter code
// TODO: Learn about deserialization (converting strings back to objects)

// Basic deserialization with JSON.parse():
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const person = JSON.parse(jsonString);
// console.log(person);

// Deserialization with reviver function:
// const jsonWithDate = '{"name": "John", "birthDate": "1993-01-01T00:00:00.000Z"}';
// const personWithDate = JSON.parse(jsonWithDate, (key, value) => {
//     if (key === 'birthDate') {
//         return new Date(value);
//     }
//     return value;
// });

// Error handling in deserialization:
// function safeJsonParse(jsonString) {
//     try {
//         return JSON.parse(jsonString);
//     } catch (error) {
//         console.error('Invalid JSON:', error.message);
//         return null;
//     }
// }

// Custom deserialization:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
    
//     static fromJSON(jsonString) {
//         const data = JSON.parse(jsonString);
//         return new Person(data.name, data.age);
//     }
// }

// TODO: Add your deserialization examples here
