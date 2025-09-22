# HTML - Limbajul de Marcare HyperText

## Introducere

HTML (HyperText Markup Language) este limbajul standard pentru crearea paginilor web. HTML descrie structura unei pagini web folosind elemente de marcare (tags).

## 1. Structura de bază HTML

```html
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titlul paginii</title>
</head>
<body>
    <h1>Conținutul paginii</h1>
</body>
</html>
```

### Explicații:
- `<!DOCTYPE html>` - declară tipul documentului
- `<html>` - elementul rădăcină
- `<head>` - conține metadate despre document
- `<meta charset="UTF-8">` - setează codificarea caracterelor
- `<meta name="viewport">` - pentru design responsive
- `<title>` - titlul care apare în tab-ul browserului
- `<body>` - conținutul vizibil al paginii

## 2. Titluri (Headings)

```html
<h1>Titlu principal</h1>
<h2>Subtitlu</h2>
<h3>Titlu de nivel 3</h3>
<h4>Titlu de nivel 4</h4>
<h5>Titlu de nivel 5</h5>
<h6>Cel mai mic titlu</h6>
```

**Reguli importante:**
- Folosește doar un `<h1>` per pagină
- Nu sări nivele (nu folosi `<h4>` după `<h1>`)
- Titlurile sunt importante pentru SEO și accesibilitate

## 3. Imagini

```html
<!-- Imagine simplă -->
<img src="imagine.jpg" alt="Descrierea imaginii">

<!-- Imagine cu dimensiuni -->
<img src="imagine.jpg" alt="Descrierea imaginii" width="300" height="200">

<!-- Imagine cu link -->
<a href="https://example.com">
    <img src="imagine.jpg" alt="Descrierea imaginii">
</a>
```

**Atribute importante:**
- `src` - calea către imagine (obligatoriu)
- `alt` - text alternativ pentru accesibilitate (obligatoriu)
- `width`, `height` - dimensiuni (opțional, mai bine în CSS)

## 4. Link-uri (Hyperlinks)

```html
<!-- Link extern -->
<a href="https://www.google.com">Mergi la Google</a>

<!-- Link intern -->
<a href="pagina2.html">Pagina 2</a>

<!-- Link către secțiune din aceeași pagină -->
<a href="#sectiune1">Mergi la secțiunea 1</a>

<!-- Link pentru email -->
<a href="mailto:contact@example.com">Trimite email</a>

<!-- Link pentru telefon -->
<a href="tel:+40123456789">Sună-ne</a>

<!-- Link care se deschide în tab nou -->
<a href="https://example.com" target="_blank">Link extern</a>
```

## 5. Caractere speciale

```html
<!-- Caractere HTML -->
&lt;    <!-- < -->
&gt;    <!-- > -->
&amp;   <!-- & -->
&quot;  <!-- " -->
&apos;  <!-- ' -->
&nbsp;  <!-- spațiu non-breaking -->

<!-- Caractere speciale românești -->
&aacute; <!-- á -->
&acirc;  <!-- â -->
&icirc;  <!-- î -->
&scaron; <!-- š -->
&tcaron; <!-- ť -->
```

## 6. Liste

### Liste neordonate (cu puncte)
```html
<ul>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
</ul>

<!-- Cu tipuri diferite de puncte -->
<ul type="square">
    <li>Pătrat</li>
</ul>

<ul type="circle">
    <li>Cerc</li>
</ul>
```

### Liste ordonate (cu numere)
```html
<ol>
    <li>Primul element</li>
    <li>Al doilea element</li>
    <li>Al treilea element</li>
</ol>

<!-- Cu tipuri diferite de numerotare -->
<ol type="A">
    <li>A, B, C...</li>
</ol>

<ol type="I">
    <li>I, II, III...</li>
</ol>

<ol type="i">
    <li>i, ii, iii...</li>
</ol>
```

### Liste imbricate
```html
<ul>
    <li>Fructe
        <ul>
            <li>Mere</li>
            <li>Banane</li>
        </ul>
    </li>
    <li>Legume
        <ul>
            <li>Roșii</li>
            <li>Castraveți</li>
        </ul>
    </li>
</ul>
```

## 7. Tabele

```html
<table>
    <thead>
        <tr>
            <th>Nume</th>
            <th>Vârsta</th>
            <th>Oraș</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ion Popescu</td>
            <td>25</td>
            <td>București</td>
        </tr>
        <tr>
            <td>Maria Ionescu</td>
            <td>30</td>
            <td>Cluj</td>
        </tr>
    </tbody>
</table>
```

### Tabele cu celule unite
```html
<table>
    <tr>
        <td colspan="2">Celulă unită pe 2 coloane</td>
    </tr>
    <tr>
        <td rowspan="2">Celulă unită pe 2 rânduri</td>
        <td>Celulă normală</td>
    </tr>
    <tr>
        <td>Altă celulă</td>
    </tr>
</table>
```

## 8. Elemente de structură și semantice

```html
<!-- Elemente de structură -->
<div>Element de tip bloc generic</div>
<span>Element inline generic</span>

<!-- Elemente semantice -->
<header>Antetul paginii</header>
<nav>Meniul de navigare</nav>
<main>Conținutul principal</main>
<section>O secțiune din pagină</section>
<article>Un articol independent</article>
<aside>Conținut auxiliar</aside>
<footer>Subsolul paginii</footer>
```

### Exemplu de structură semantică
```html
<!DOCTYPE html>
<html>
<head>
    <title>Blog personal</title>
</head>
<body>
    <header>
        <h1>Blogul meu</h1>
        <nav>
            <ul>
                <li><a href="#home">Acasă</a></li>
                <li><a href="#about">Despre</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>Primul meu articol</h2>
            <p>Conținutul articolului...</p>
        </article>
        
        <aside>
            <h3>Articole recente</h3>
            <ul>
                <li><a href="#">Articol 1</a></li>
                <li><a href="#">Articol 2</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2025 Blogul meu. Toate drepturile rezervate.</p>
    </footer>
</body>
</html>
```

## 9. Formulare

```html
<form action="/submit" method="POST">
    <!-- Input text -->
    <div>
        <label for="nume">Nume:</label>
        <input type="text" id="nume" name="nume" placeholder="Introduceți numele" required>
    </div>
    
    <!-- Input email -->
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <!-- Input parolă -->
    <div>
        <label for="password">Parolă:</label>
        <input type="password" id="password" name="password" required>
    </div>
    
    <!-- Input dată -->
    <div>
        <label for="data">Data nașterii:</label>
        <input type="date" id="data" name="data">
    </div>
    
    <!-- Radio buttons -->
    <div>
        <label>Gen:</label>
        <input type="radio" id="masculin" name="gen" value="masculin">
        <label for="masculin">Masculin</label>
        
        <input type="radio" id="feminin" name="gen" value="feminin">
        <label for="feminin">Feminin</label>
    </div>
    
    <!-- Checkbox -->
    <div>
        <input type="checkbox" id="acord" name="acord" required>
        <label for="acord">Sunt de acord cu termenii și condițiile</label>
    </div>
    
    <!-- Select dropdown -->
    <div>
        <label for="oras">Orașul:</label>
        <select id="oras" name="oras">
            <option value="">Selectează orașul</option>
            <option value="bucuresti">București</option>
            <option value="cluj">Cluj</option>
            <option value="timisoara">Timișoara</option>
        </select>
    </div>
    
    <!-- Textarea -->
    <div>
        <label for="mesaj">Mesaj:</label>
        <textarea id="mesaj" name="mesaj" rows="4" cols="50" placeholder="Scrie mesajul aici..."></textarea>
    </div>
    
    <!-- Submit button -->
    <button type="submit">Trimite formularul</button>
    <button type="reset">Resetează</button>
</form>
```

## 10. Atribute importante

### Atribute globale (pot fi folosite pe orice element)
- `id` - identificator unique
- `class` - clasă CSS pentru stilizare
- `style` - stiluri CSS inline
- `title` - tooltip care apare la hover
- `lang` - limba conținutului

### Exemple
```html
<p id="paragraf1" class="text-important" title="Acest paragraf este important">
    Conținutul paragrafului
</p>

<div class="container main-content" style="background-color: blue;">
    Conținut
</div>
```

## 11. Bune practici HTML

1. **Folosește întotdeauna DOCTYPE**: `<!DOCTYPE html>`
2. **Specifică limba**: `<html lang="ro">`
3. **Folosește meta charset**: `<meta charset="UTF-8">`
4. **Adaugă viewport pentru responsive**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
5. **Folosește elemente semantice** în loc de div-uri generice
6. **Adaugă întotdeauna atributul alt la imagini**
7. **Folosește label-uri pentru input-uri de formular**
8. **Validează HTML-ul** cu validatorul W3C
9. **Indentează codul** pentru lizibilitate
10. **Folosește nume descriptive pentru id-uri și clase**

## Resurse utile

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C HTML Validator](https://validator.w3.org/)
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [Can I Use](https://caniuse.com/) - compatibilitate browsere
