// var, let, const
var a;
var b = 10;

console.log(a);
console.log(b);
a = 20;
console.log(a);

console.log(a, b);
console.log('a =', a);
console.log('b =', b);

console.log('c');
var c = 30;
console.log(c);

// Caractere permise - a-z, A-Z, _, $, 0-9
// camelCase
var userName = 'Costel';
var numberOfLikes;
var password;
var user1;
var user2;
var emailAddress;

//nume invalide pentru variabile
// var 1nume;
// var nume-utilizator;
// var function;
// var if;
// var for;
// var while;

// Siruri de caractere
var nume = 'Maria';
var mesaj = 'Salut';
var varsta = 30;
var text1 = 'Ma numesc' + ' ' + nume + ' si am ' + varsta + ' ani';
console.log(text1);
console.log('Ma numesc', nume, 'si am', varsta, 'ani');
console.log(`Ma numeste ${nume} si am ${varsta} ani`);

var text2 = 20 + 40 + 40 + '20' + 40 + 40;
console.log(text2);
console.log(Number(text2));

// Number
var intreg = 20;
var zecimal = 3.14;
var notatieExponentiala = 2.14e4;
console.log(notatieExponentiala);

var hexaNumber = 0xff;
console.log(hexaNumber);
var binaryNumber = 0b1010;
console.log(binaryNumber);

// valori speciale
console.log(1 / 0);
console.log(-1 / 0);
// NaN
var n = 'F';
console.log(Number(n));
console.log(isNaN('x'));
console.log(isNaN(10));

// Boolean
var esteCeata = true;
var amBani = false;
var comparatie = 2 < 3;
console.log(esteCeata, amBani, comparatie);

// Operatori
// Operatori aritmetici -- +,-,*,/,%
var x = 5;
var y = 10;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % 2, y % 2);
var estePar = y % 2 == 0;
console.log(estePar);

x = x + 3;
console.log(x);

// incrementare/decrementare
x++;
console.log(x);
y--;
y--;
console.log(y);

// x++ indentic cu x=x+1 si cu x += 1;
x += 10; // mareste x cu 10;
console.log(x);
x *= 3;
console.log(x);
x %= 2;
console.log(x);

// Operatorii de comparare
// >, <, ==, ===, <=, >=, !=, !==
console.log(x, y);
console.log(x > y);
console.log(x < y);
console.log(x == '1');
console.log(x === '1');

console.log(x != '1'); // doar valoarea este verificata nu si tipul
console.log(x !== '1'); // x = 1, not '1' number not string

// Operatori logici AND(&&) OR(||)
var amRca = true;
var amRovinieta = false;

var potCirculaPeDrumNational = amRca && amRovinieta;

var amCard = true;
var amCash = false;

var potPlati = amCard || amCash;

// Operatorul typeof
console.log(typeof 10);
console.log(typeof '10');
console.log(typeof (2 < 3));
console.log(typeof (10 + '10'));
var numeDeFamilie;
console.log(typeof numeDeFamilie);

// Operatorul ternar
var varsta = 28;
var poateConduce = varsta >= 18 ? 'DA' : 'NU';
console.log(poateConduce);
var formaDeSalut = varsta < 40 ? 'Buna' : 'Buna ziua!';

var ora = 22;
var formaDeSalut2 =
	ora >= 8 && ora < 12
		? 'Buna Dimineata!'
		: ora >= 12 && ora < 19
		? 'Buna ziua!'
		: 'Buna seara!';
console.log(formaDeSalut2);
