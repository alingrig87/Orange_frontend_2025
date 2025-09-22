# Exerciții JavaScript DOM - Recapitulare

## 1. Window Object - Explorare

### Exercițiul 1.1 - Proprietăți Window
Creează o pagină care afișează:
- Dimensiunile ferestrei (innerWidth, innerHeight)
- Dimensiunile ecranului (screen.width, screen.height)
- Informații despre locația curentă (URL, hostname, pathname)
- Actualizează informațiile când fereastra se redimensionează

```html
<div id="window-info">
    <h2>Informații despre fereastră</h2>
    <div id="dimensions"></div>
    <div id="screen-info"></div>
    <div id="location-info"></div>
</div>
```

### Exercițiul 1.2 - Dialog Boxes
Creează butoane pentru:
- Alert cu mesaj personalizat
- Prompt pentru introducerea numelui utilizatorului
- Confirm pentru o acțiune de ștergere
- Afișează rezultatele în pagină

## 2. Document Object - Manipulare

### Exercițiul 2.1 - Proprietăți Document
Afișează în pagină:
- Titlul documentului (cu posibilitatea de modificare)
- URL-ul complet
- Numărul total de elemente din fiecare tip (div, p, img, etc.)

### Exercițiul 2.2 - Modificarea Documentului
Creează o interfață pentru:
- Schimbarea titlului paginii
- Schimbarea culorii de fundal a body-ului
- Adăugarea de stiluri CSS dinamice

## 3. Selectarea Elementelor Simple

### Exercițiul 3.1 - getElementById
```html
<div id="main-container">
    <h1 id="page-title">Titlul Paginii</h1>
    <p id="description">Descrierea paginii</p>
    <button id="change-btn">Schimbă Conținutul</button>
</div>
```

Sarcini:
- Selectează elementul cu id="page-title" și schimbă textul
- Modifică culoarea elementului cu id="description"
- Adaugă event listener pentru butonul cu id="change-btn"

### Exercițiul 3.2 - querySelector Advanced
Creează selectori pentru:
- Primul paragraf din orice div
- Ultimul element dintr-o listă
- Toate input-urile de tip text
- Primul link extern (href începe cu "http")

### Exercițiul 3.3 - Modificarea Proprietăților
Pentru fiecare element selectat:
- Schimbă textContent sau innerHTML
- Modifică stiluri CSS (color, backgroundColor, fontSize)
- Adaugă/elimină clase CSS
- Schimbă atribute (src pentru imagini, href pentru link-uri)

## 4. Selectarea Multiplelor Elemente

### Exercițiul 4.1 - querySelectorAll și iterare
```html
<ul class="menu">
    <li class="menu-item">Home</li>
    <li class="menu-item active">About</li>
    <li class="menu-item">Services</li>
    <li class="menu-item">Contact</li>
</ul>
```

Sarcini:
- Selectează toate elementele cu clasa "menu-item"
- Iterează prin ele cu forEach și adaugă numere
- Schimbă culoarea pentru elementele pare
- Adaugă event listener pentru fiecare element

### Exercițiul 4.2 - Manipularea Colecțiilor
Creează funcții pentru:
- Evidențierea tuturor paragrafelor
- Ascunderea tuturor imaginilor
- Schimbarea culorii tuturor link-urilor
- Adăugarea unei clase la toate div-urile

### Exercițiul 4.3 - Filtrarea Elementelor
Din o listă de elemente:
- Găsește doar cele vizibile
- Selectează doar cele cu anumite clase
- Filtrează după conținutul textual
- Grupează după tipul de element

## 5. Crearea și Inserarea Elementelor

### Exercițiul 5.1 - Crearea de Elemente Simple
Creează funcții pentru:
```javascript
function createParagraph(text, className) {
    // Creează un paragraf cu textul și clasa specificată
}

function createImage(src, alt, width) {
    // Creează o imagine cu atributele specificate
}

function createButton(text, clickHandler) {
    // Creează un buton cu text și event handler
}
```

### Exercițiul 5.2 - Lista Dinamică
Creează o aplicație pentru gestionarea unei liste:
- Input pentru adăugarea de elemente noi
- Buton pentru adăugare
- Lista se actualizează dinamic
- Fiecare element are buton de ștergere

### Exercițiul 5.3 - Generator de Carduri
Creează o funcție care generează carduri:
```javascript
function createCard(title, content, imageUrl, buttonText) {
    // Returnează un element card complet
    // Cu imagine, titlu, conținut și buton
}
```

## 6. Eliminarea Elementelor

### Exercițiul 6.1 - Ștergerea Simplă
Creează butoane pentru:
- Ștergerea unui element specific prin ID
- Ștergerea tuturor elementelor cu o anumită clasă
- Curățarea completă a unui container

### Exercițiul 6.2 - Ștergerea cu Confirmarea
Implementează:
- Confirmare înainte de ștergere
- Animație de fade-out înainte de eliminare
- Undo functionality (restaurarea elementelor șterse)

### Exercițiul 6.3 - Cleanup Manager
Creează un sistem pentru:
- Ținerea evidenței elementelor create dinamic
- Ștergerea lor în batch-uri
- Curățarea event listener-ilor asociați

## 7. Traversarea DOM-ului

### Exercițiul 7.1 - Navigarea în Familie
```html
<div class="container">
    <header>Header Content</header>
    <main>
        <section id="target">Target Section</section>
        <aside>Sidebar Content</aside>
    </main>
    <footer>Footer Content</footer>
</div>
```

Pentru elementul cu id="target":
- Găsește și modifică părintele
- Găsește și evidențiază primul frate
- Găsește și modifică ultimul copil al părintelui
- Găsește cel mai apropiat container

### Exercițiul 7.2 - Tree Walker
Creează o funcție care:
- Parcurge recursiv toată structura DOM
- Afișează ierarhia într-o formă vizuală
- Numără elementele de fiecare tip
- Găsește cel mai adânc element

### Exercițiul 7.3 - Element Inspector
Creează un tool care:
- La click pe orice element, afișează informații despre el
- Arată părinții, copiii și frații
- Permite navigarea prin structura DOM
- Evidențiază relațiile vizual

## 8. Event Listeners și Handling

### Exercițiul 8.1 - Event Types
Creează exemple pentru:
- Click events (simple, double-click)
- Mouse events (hover, enter, leave)
- Keyboard events (keydown, keyup, keypress)
- Form events (submit, change, input, focus, blur)

### Exercițiul 8.2 - Event Delegation
```html
<ul id="dynamic-list">
    <li>Item 1 <button class="delete">Delete</button></li>
    <li>Item 2 <button class="delete">Delete</button></li>
</ul>
<button id="add-item">Add New Item</button>
```

Implementează:
- Event delegation pentru butoanele delete
- Adăugarea dinamică de elemente noi
- Handling pentru toate elementele (noi și existente)

### Exercițiul 8.3 - Keyboard Navigation
Creează o interfață navigabilă cu tastatura:
- Arrow keys pentru navigare
- Enter pentru selecție
- Escape pentru anulare
- Tab pentru focus management

## 9. Proiecte Practice Combinate

### Exercițiul 9.1 - Todo List Avansată
Funcționalități:
- Adăugare task-uri noi
- Marcare ca complete/incomplete
- Editare inline a task-urilor
- Ștergere cu confirmarea
- Filtrare (toate, active, complete)
- Salvare în localStorage
- Drag & drop pentru reordonare

### Exercițiul 9.2 - Image Gallery
Creează o galerie cu:
- Grid de thumbnail-uri
- Lightbox pentru vizualizare
- Navigare cu săgeți și tastatură
- Informații despre imagine
- Slideshow automat
- Filtrare după categorii

### Exercițiul 9.3 - Form Builder
Aplicație pentru construirea de formulare:
- Drag & drop pentru adăugarea de câmpuri
- Editarea proprietăților câmpurilor
- Preview în timp real
- Validare dinamică
- Export HTML/JSON
- Import de configurații existente

### Exercițiul 9.4 - Joc X și 0 Avansat
Îmbunătățiri pentru jocul clasic:
- Scoreboard cu istoric
- Joc împotriva AI-ului
- Animații pentru mutări
- Sound effects
- Teme vizuale diferite
- Joc online (simulat cu localStorage)

## 10. Debugging și Best Practices

### Exercițiul 10.1 - Error Handling
Implementează:
- Try-catch pentru operații DOM
- Verificarea existenței elementelor
- Fallback-uri pentru browsere vechi
- Logging pentru debugging

### Exercițiul 10.2 - Performance Optimization
Optimizează:
- Queries repetate (caching)
- Inserări multiple (DocumentFragment)
- Event listener cleanup
- Memory leak prevention

### Exercițiul 10.3 - Accessibility
Adaugă:
- ARIA labels și roles
- Keyboard navigation
- Focus management
- Screen reader support
- Color contrast și font sizes

## Tips pentru Rezolvare

### Debugging
1. **Folosește console.log** pentru a verifica elementele selectate
2. **Browser DevTools** - inspectează DOM-ul în timp real
3. **Breakpoints** în JavaScript pentru debugging pas cu pas

### Performance
1. **Cache selectors** - nu selecta același element de mai multe ori
2. **Event delegation** - pentru liste dinamice
3. **DocumentFragment** - pentru inserări multiple

### Best Practices
1. **Verifică întotdeauna** dacă elementul există înainte de manipulare
2. **Curăță event listeners** când nu mai sunt necesari
3. **Folosește semantic HTML** înainte de JavaScript
4. **Separează logica** în funcții mici și reutilizabile

## Resurse pentru Verificare

- [MDN DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info DOM](https://javascript.info/document)
- [DOM Performance Best Practices](https://developers.google.com/web/fundamentals/performance/rendering/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
