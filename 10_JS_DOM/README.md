# JavaScript DOM Manipulation - Ghid Complet

## Introducere în DOM

Document Object Model (DOM) este o reprezentare în memorie a structurii unui document HTML. DOM permite JavaScript-ului să acceseze și să modifice conținutul, structura și stilurile unei pagini web.

## 1. Obiectul Window

Obiectul `window` este obiectul global în browser și reprezintă fereastra browserului.

```javascript
// Proprietăți ale obiectului window
console.log(window.innerWidth);  // Lățimea ferestrei
console.log(window.innerHeight); // Înălțimea ferestrei
console.log(window.outerWidth);  // Lățimea totală (cu toolbar)
console.log(window.outerHeight); // Înălțimea totală

// Informații despre screen
console.log(window.screen.width);    // Lățimea ecranului
console.log(window.screen.height);   // Înălțimea ecranului
console.log(window.screen.availWidth); // Lățimea disponibilă

// Locația curentă
console.log(window.location.href);     // URL-ul complet
console.log(window.location.hostname); // Numele hostului
console.log(window.location.pathname); // Calea
console.log(window.location.search);   // Query string
```

### Metode ale obiectului window
```javascript
// Dialog boxes
window.alert("Mesaj de alertă");
let userInput = window.prompt("Introduceți numele:");
let confirmed = window.confirm("Sunteți sigur?");

// Navigare
window.open("https://google.com", "_blank"); // Deschide în tab nou
window.close(); // Închide fereastra (doar pentru ferestre deschise cu JS)
window.location.reload(); // Reîncarcă pagina

// Timers
let timeoutId = window.setTimeout(() => {
    console.log("Executat după 2 secunde");
}, 2000);

let intervalId = window.setInterval(() => {
    console.log("Executat la fiecare secundă");
}, 1000);

// Oprirea timer-elor
window.clearTimeout(timeoutId);
window.clearInterval(intervalId);
```

## 2. Obiectul Document

Obiectul `document` reprezintă documentul HTML încărcat în fereastră.

```javascript
// Proprietăți ale documentului
console.log(document.title);        // Titlul paginii
console.log(document.URL);          // URL-ul documentului
console.log(document.domain);       // Domeniul
console.log(document.documentElement); // Elementul <html>
console.log(document.head);         // Elementul <head>
console.log(document.body);         // Elementul <body>

// Modificarea titlului
document.title = "Noul titlu al paginii";

// Informații despre document
console.log(document.forms);        // Toate formularele
console.log(document.images);       // Toate imaginile
console.log(document.links);        // Toate link-urile
```

## 3. Selectarea Elementelor

### 3.1 Metode clasice (mai puțin recomandate)

```javascript
// Selectarea după ID
let element = document.getElementById("myId");
console.log(element);

// Selectarea după clasă (returnează HTMLCollection)
let elements = document.getElementsByClassName("myClass");
console.log(elements[0]); // Primul element cu clasa respectivă

// Selectarea după tag (returnează HTMLCollection)
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
}

// Selectarea după name (pentru form elements)
let inputs = document.getElementsByName("username");
```

### 3.2 Query Selectors (recomandate)

```javascript
// querySelector - returnează primul element care se potrivește
let firstButton = document.querySelector(".btn");
let specificElement = document.querySelector("#main .card-title");
let firstParagraph = document.querySelector("p");

// querySelectorAll - returnează NodeList cu toate elementele
let allButtons = document.querySelectorAll(".btn");
let allParagraphs = document.querySelectorAll("p");

// Iterarea prin NodeList
allButtons.forEach(button => {
    console.log(button);
});

// Sau cu for...of
for (let button of allButtons) {
    console.log(button);
}
```

### 3.3 Selectori CSS avansați

```javascript
// Selectori de atribute
let emailInputs = document.querySelectorAll('input[type="email"]');
let externalLinks = document.querySelectorAll('a[href^="http"]');

// Pseudo-selectori
let firstChild = document.querySelector("ul li:first-child");
let lastChild = document.querySelector("ul li:last-child");
let evenItems = document.querySelectorAll("li:nth-child(even)");

// Combinatori
let directChildren = document.querySelectorAll("div > p");
let siblings = document.querySelectorAll("h2 + p");
let generalSiblings = document.querySelectorAll("h2 ~ p");
```

## 4. Selectarea Multiplelor Elemente

### 4.1 Diferența între HTMLCollection și NodeList

```javascript
// HTMLCollection (live - se actualizează automat)
let liveCollection = document.getElementsByClassName("item");
console.log(liveCollection.length); // Ex: 3

// Adăugăm un nou element cu clasa "item"
document.body.innerHTML += '<div class="item">New item</div>';
console.log(liveCollection.length); // Acum: 4 (actualizat automat)

// NodeList (static pentru querySelectorAll)
let staticNodeList = document.querySelectorAll(".item");
console.log(staticNodeList.length); // Ex: 4

// Adăugăm încă un element
document.body.innerHTML += '<div class="item">Another item</div>';
console.log(staticNodeList.length); // Tot 4 (nu se actualizează)
```

### 4.2 Iterarea prin colecții

```javascript
let items = document.querySelectorAll(".collection-item");

// Metoda 1: forEach (doar pentru NodeList)
items.forEach((item, index) => {
    console.log(`Item ${index}:`, item.textContent);
});

// Metoda 2: for...of
for (let item of items) {
    console.log(item.textContent);
}

// Metoda 3: for clasic (funcționează pentru ambele)
for (let i = 0; i < items.length; i++) {
    console.log(items[i].textContent);
}

// Convertirea HTMLCollection în array
let htmlCollection = document.getElementsByClassName("item");
let arrayFromCollection = Array.from(htmlCollection);
arrayFromCollection.forEach(item => {
    console.log(item);
});
```

### 4.3 Filtrarea și manipularea colecțiilor

```javascript
let allDivs = document.querySelectorAll("div");

// Filtrarea cu Array.from și filter
let visibleDivs = Array.from(allDivs).filter(div => {
    return window.getComputedStyle(div).display !== "none";
});

// Găsirea elementelor cu anumite proprietăți
let divsWithClass = Array.from(allDivs).filter(div => {
    return div.classList.contains("active");
});

// Maparea pentru extragerea de date
let textContents = Array.from(allDivs).map(div => div.textContent);
```

## 5. Crearea și Inserarea Elementelor

### 5.1 Crearea elementelor

```javascript
// Crearea unui element nou
let newDiv = document.createElement("div");
let newParagraph = document.createElement("p");
let newImage = document.createElement("img");

// Setarea conținutului
newParagraph.textContent = "Acesta este un paragraf nou";
newDiv.innerHTML = "<strong>Text bold în div</strong>";

// Setarea atributelor
newImage.src = "image.jpg";
newImage.alt = "Descrierea imaginii";
newImage.setAttribute("width", "300");

// Adăugarea claselor
newDiv.className = "my-class another-class";
newDiv.classList.add("active");
```

### 5.2 Inserarea în DOM

```javascript
let container = document.getElementById("container");
let newElement = document.createElement("p");
newElement.textContent = "Element nou";

// Adăugarea la sfârșitul containerului
container.appendChild(newElement);

// Inserarea înainte de un element existent
let existingElement = document.getElementById("existing");
container.insertBefore(newElement, existingElement);

// Metode moderne de inserare
let targetElement = document.getElementById("target");

// Inserarea ca primul copil
targetElement.prepend(newElement);

// Inserarea ca ultimul copil
targetElement.append(newElement);

// Inserarea înainte de element
targetElement.before(newElement);

// Inserarea după element
targetElement.after(newElement);
```

### 5.3 Crearea de elemente complexe

```javascript
function createCard(title, content, imageUrl) {
    // Crearea containerului principal
    let card = document.createElement("div");
    card.classList.add("card");
    
    // Crearea imaginii
    if (imageUrl) {
        let img = document.createElement("img");
        img.src = imageUrl;
        img.classList.add("card-image");
        card.appendChild(img);
    }
    
    // Crearea conținutului
    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = title;
    
    let cardText = document.createElement("p");
    cardText.textContent = content;
    
    // Asamblarea
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardText);
    card.appendChild(cardContent);
    
    return card;
}

// Utilizarea
let myCard = createCard("Titlu Card", "Conținutul cardului", "image.jpg");
document.body.appendChild(myCard);
```

## 6. Eliminarea Elementelor

### 6.1 Metode de eliminare

```javascript
let elementToRemove = document.getElementById("unwanted");

// Metoda clasică (prin părinte)
let parent = elementToRemove.parentNode;
parent.removeChild(elementToRemove);

// Metoda modernă (direct)
elementToRemove.remove();

// Eliminarea tuturor copiilor unui element
let container = document.getElementById("container");
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

// Sau mai simplu
container.innerHTML = "";
```

### 6.2 Eliminarea condițională

```javascript
// Eliminarea elementelor după clasă
let elementsToRemove = document.querySelectorAll(".remove-me");
elementsToRemove.forEach(element => element.remove());

// Eliminarea cu confirmarea utilizatorului
function removeWithConfirmation(element) {
    if (confirm("Sigur vreți să ștergeți acest element?")) {
        element.remove();
    }
}

// Eliminarea cu animație
function removeWithAnimation(element) {
    element.style.opacity = "0";
    element.style.transform = "scale(0.8)";
    element.style.transition = "all 0.3s ease";
    
    setTimeout(() => {
        element.remove();
    }, 300);
}
```

## 7. Traversarea DOM-ului

### 7.1 Navigarea în ierarhie

```javascript
let element = document.getElementById("middle-element");

// Părintele
console.log(element.parentNode);        // Nodul părinte (poate fi text)
console.log(element.parentElement);     // Elementul părinte (doar elemente)

// Copiii
console.log(element.childNodes);        // Toate nodurile copil (inclusiv text)
console.log(element.children);          // Doar elementele copil
console.log(element.firstChild);        // Primul nod copil
console.log(element.firstElementChild); // Primul element copil
console.log(element.lastChild);         // Ultimul nod copil
console.log(element.lastElementChild);  // Ultimul element copil

// Frații (siblings)
console.log(element.nextSibling);           // Următorul nod frate
console.log(element.nextElementSibling);    // Următorul element frate
console.log(element.previousSibling);       // Nodul frate anterior
console.log(element.previousElementSibling); // Elementul frate anterior
```

### 7.2 Căutarea în ierarhie

```javascript
let startElement = document.getElementById("start");

// Găsirea celui mai apropiat părinte cu o anumită clasă
let closestCard = startElement.closest(".card");
let closestContainer = startElement.closest("#container");

// Verificarea dacă un element conține altul
let container = document.getElementById("container");
let child = document.getElementById("child");
console.log(container.contains(child)); // true/false

// Găsirea tuturor descendenților cu o anumită clasă
let descendants = container.querySelectorAll(".descendant");
```

### 7.3 Iterarea prin structura DOM

```javascript
// Iterarea prin toți copiii unui element
let parent = document.getElementById("parent");
for (let child of parent.children) {
    console.log(child.tagName, child.textContent);
}

// Iterarea recursivă prin toată structura
function traverseDOM(element, level = 0) {
    let indent = "  ".repeat(level);
    console.log(indent + element.tagName + ": " + element.textContent.trim().substring(0, 20));
    
    for (let child of element.children) {
        traverseDOM(child, level + 1);
    }
}

traverseDOM(document.body);
```

## 8. Event Listeners și Handling

### 8.1 Adăugarea event listeners

```javascript
let button = document.getElementById("myButton");

// Metoda recomandată
button.addEventListener("click", function(event) {
    console.log("Butonul a fost apăsat!");
    console.log("Event object:", event);
});

// Cu arrow function
button.addEventListener("click", (event) => {
    console.log("Click cu arrow function!");
});

// Funcție externă
function handleClick(event) {
    console.log("Handled by external function");
    console.log("Target element:", event.target);
}

button.addEventListener("click", handleClick);
```

### 8.2 Tipuri de evenimente

```javascript
let input = document.getElementById("textInput");
let form = document.getElementById("myForm");

// Evenimente pentru input-uri
input.addEventListener("focus", () => console.log("Input focused"));
input.addEventListener("blur", () => console.log("Input lost focus"));
input.addEventListener("input", (e) => console.log("Input value:", e.target.value));
input.addEventListener("change", (e) => console.log("Input changed:", e.target.value));

// Evenimente pentru forme
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Previne submit-ul default
    console.log("Form submitted");
    
    // Validarea formularului
    let isValid = validateForm();
    if (!isValid) {
        return; // Nu trimite formularul
    }
    
    // Procesarea datelor
    processFormData();
});

// Evenimente pentru mouse
let element = document.getElementById("interactive");
element.addEventListener("mouseenter", () => console.log("Mouse entered"));
element.addEventListener("mouseleave", () => console.log("Mouse left"));
element.addEventListener("mousemove", (e) => {
    console.log(`Mouse at: ${e.clientX}, ${e.clientY}`);
});

// Evenimente pentru tastatură
document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
    console.log("Key code:", event.code);
    
    // Combinații de taste
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        console.log("Ctrl+S pressed - Save action");
    }
});
```

### 8.3 Event delegation

```javascript
// Event delegation - eficient pentru liste dinamice
let todoList = document.getElementById("todoList");

todoList.addEventListener("click", function(event) {
    // Verificăm ce element a fost apăsat
    if (event.target.classList.contains("delete-btn")) {
        // Ștergem task-ul
        let todoItem = event.target.closest(".todo-item");
        todoItem.remove();
    }
    
    if (event.target.classList.contains("complete-btn")) {
        // Marcăm task-ul ca completat
        let todoItem = event.target.closest(".todo-item");
        todoItem.classList.toggle("completed");
    }
});

// Adăugarea dinamică de elemente (vor avea automat event handling)
function addTodoItem(text) {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
        <span class="todo-text">${text}</span>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(todoItem);
}
```

### 8.4 Eliminarea event listeners

```javascript
let button = document.getElementById("button");

function clickHandler(event) {
    console.log("Clicked!");
}

// Adăugarea
button.addEventListener("click", clickHandler);

// Eliminarea (trebuie să fie aceeași funcție)
button.removeEventListener("click", clickHandler);

// Pentru funcții anonime, păstrăm o referință
let anonHandler = function(event) {
    console.log("Anonymous handler");
};

button.addEventListener("click", anonHandler);
button.removeEventListener("click", anonHandler);
```

## 9. Exemple Practice Complete

### 9.1 Todo List Interactivă

```javascript
class TodoApp {
    constructor() {
        this.todos = [];
        this.todoList = document.getElementById("todoList");
        this.todoInput = document.getElementById("todoInput");
        this.addBtn = document.getElementById("addBtn");
        
        this.init();
    }
    
    init() {
        this.addBtn.addEventListener("click", () => this.addTodo());
        this.todoInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") this.addTodo();
        });
        
        this.todoList.addEventListener("click", (e) => this.handleTodoClick(e));
    }
    
    addTodo() {
        let text = this.todoInput.value.trim();
        if (!text) return;
        
        let todo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        this.todos.push(todo);
        this.renderTodo(todo);
        this.todoInput.value = "";
    }
    
    renderTodo(todo) {
        let todoElement = document.createElement("div");
        todoElement.classList.add("todo-item");
        todoElement.dataset.id = todo.id;
        
        todoElement.innerHTML = `
            <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button class="complete-btn">${todo.completed ? 'Undo' : 'Complete'}</button>
            <button class="delete-btn">Delete</button>
        `;
        
        this.todoList.appendChild(todoElement);
    }
    
    handleTodoClick(event) {
        let todoElement = event.target.closest(".todo-item");
        if (!todoElement) return;
        
        let todoId = parseInt(todoElement.dataset.id);
        
        if (event.target.classList.contains("delete-btn")) {
            this.deleteTodo(todoId, todoElement);
        } else if (event.target.classList.contains("complete-btn")) {
            this.toggleComplete(todoId, todoElement);
        }
    }
    
    deleteTodo(id, element) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        element.remove();
    }
    
    toggleComplete(id, element) {
        let todo = this.todos.find(todo => todo.id === id);
        todo.completed = !todo.completed;
        
        let textSpan = element.querySelector(".todo-text");
        let completeBtn = element.querySelector(".complete-btn");
        
        textSpan.classList.toggle("completed");
        completeBtn.textContent = todo.completed ? "Undo" : "Complete";
    }
}

// Inițializarea aplicației
document.addEventListener("DOMContentLoaded", () => {
    new TodoApp();
});
```

### 9.2 Joc X și 0

```javascript
class TicTacToe {
    constructor() {
        this.currentPlayer = 'X';
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.gameActive = true;
        
        this.cells = document.querySelectorAll('.cell');
        this.statusDisplay = document.querySelector('#status');
        this.resetButton = document.querySelector('#reset');
        
        this.winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];
        
        this.init();
    }
    
    init() {
        this.cells.forEach((cell, index) => {
            cell.addEventListener('click', () => this.handleCellClick(index));
        });
        
        this.resetButton.addEventListener('click', () => this.resetGame());
        this.updateStatus(`Player ${this.currentPlayer}'s turn`);
    }
    
    handleCellClick(index) {
        if (this.board[index] !== '' || !this.gameActive) return;
        
        this.board[index] = this.currentPlayer;
        this.cells[index].textContent = this.currentPlayer;
        this.cells[index].classList.add(this.currentPlayer.toLowerCase());
        
        this.checkResult();
    }
    
    checkResult() {
        let roundWon = false;
        
        for (let condition of this.winningConditions) {
            let [a, b, c] = condition;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                roundWon = true;
                break;
            }
        }
        
        if (roundWon) {
            this.updateStatus(`Player ${this.currentPlayer} wins!`);
            this.gameActive = false;
            return;
        }
        
        if (!this.board.includes('')) {
            this.updateStatus('Draw!');
            this.gameActive = false;
            return;
        }
        
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateStatus(`Player ${this.currentPlayer}'s turn`);
    }
    
    updateStatus(message) {
        this.statusDisplay.textContent = message;
    }
    
    resetGame() {
        this.currentPlayer = 'X';
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.gameActive = true;
        
        this.updateStatus(`Player ${this.currentPlayer}'s turn`);
        
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
    }
}

// Inițializarea jocului
document.addEventListener("DOMContentLoaded", () => {
    new TicTacToe();
});
```

## 10. Best Practices și Tips

### 10.1 Performance și optimizare

```javascript
// Evită queries repetate
// Rău
for (let i = 0; i < 100; i++) {
    document.getElementById("container").appendChild(newElement);
}

// Bun
let container = document.getElementById("container");
for (let i = 0; i < 100; i++) {
    container.appendChild(newElement);
}

// Folosește DocumentFragment pentru inserări multiple
let fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    let element = document.createElement("div");
    element.textContent = `Item ${i}`;
    fragment.appendChild(element);
}
document.body.appendChild(fragment);
```

### 10.2 Evitarea memory leaks

```javascript
// Curăță event listeners când nu mai sunt necesari
function cleanup() {
    let element = document.getElementById("temporary");
    if (element) {
        element.removeEventListener("click", handleClick);
        element.remove();
    }
}

// Folosește WeakMap pentru date asociate cu elemente
let elementData = new WeakMap();
elementData.set(element, { clicks: 0, lastClicked: new Date() });
```

### 10.3 Accesibilitate

```javascript
// Adaugă suport pentru tastatură
button.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this.click();
    }
});

// Gestionează focus pentru accesibilitate
function trapFocus(container) {
    let focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    let firstElement = focusableElements[0];
    let lastElement = focusableElements[focusableElements.length - 1];
    
    container.addEventListener("keydown", function(event) {
        if (event.key === "Tab") {
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
}
```

## Resurse utile

- [MDN DOM Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [JavaScript.info DOM](https://javascript.info/document)
- [DOM Manipulation Performance](https://developers.google.com/web/fundamentals/performance/rendering/)
- [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)