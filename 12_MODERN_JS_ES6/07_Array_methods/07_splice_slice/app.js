// slice - returneaza o copie a unei portiuni din array
const numbers = [10, 20, 30, 40, 50];
const partOfNumbers = numbers.slice(1, 4);
console.log(partOfNumbers);

const fruits = ['peach', 'banana', 'orange', 'strawberries'];

const partOfFruits = fruits.slice(2);
console.log(partOfFruits);

const letters = ['a', 'b', 'c', 'd', 'e'];
const part = letters.slice(-3);
console.log(part);

// splice - modifica array-ul original adaugand, stergand sau inlocuint elemente

// delete elements using splice
const colors = ['red', 'green', 'blue', 'yellow'];
const deletedColors = colors.splice(1, 2);
console.log(deletedColors);
console.log(colors);

// add elements using splice
const animale = ['pisica', 'caine', 'papagal'];
animale.splice(1, 0, 'cal', 'iepure');
console.log(animale);

// replace elements
const numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(1, 2, 20, 30, 35);
console.log(numbers2);

// splice with negative index
const sports = ['football', 'tenis', 'voleyball', 'basketball'];
sports.splice(-2, 1, 'handbal');
console.log(sports);
