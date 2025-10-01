const name = 'Costel';
const age = 25;

const message = 'Ma numesc ' + name + ' si am ' + age + 'ani';

console.log(message);

const messageWithTemplateLiterals = `
   Ma numesc ${name} si am ${age} ani
`;

let scor = new Map();
scor.set('X', 0);
scor.set('0', 0);
console.log(`
   <div class="container-scor">
      <div class="jucatori">
         <span class="X">Jucatorul X</span> - <span class="O">Jucatorul 0</span>
      </div>
      <div class="scor">
         <span class="X">${scor.get('X')}</span> 
            - 
         <span class="O">${scor.get('0')}</span>
      </div>
   </div>
   `);

console.log(
	'<div class="container-scor">' +
		'<div class="jucatori">' +
		'<span class="X">Jucatorul X</span> - <span class="O">Jucatorul 0</span>' +
		'</div>'
);
