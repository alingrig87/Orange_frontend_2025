# CSS - Cascading Style Sheets

## Introducere

CSS (Cascading Style Sheets) este limbajul folosit pentru stilizarea paginilor web. CSS controlează aspectul vizual al elementelor HTML: culori, fonturi, dimensiuni, poziționare și layout.

## 1. Modalități de includere CSS

### 1.1 CSS Inline
CSS-ul este scris direct în atributul `style` al elementului HTML.

```html
<h1 style="color: blue; background-color: yellow;">Titlu cu CSS inline</h1>
<p style="font-size: 18px; text-align: center;">Paragraf stilizat</p>
```

**Avantaje:** Prioritate maximă, rapid pentru teste
**Dezavantaje:** Greu de menținut, nu se poate reutiliza

### 1.2 CSS Internal
CSS-ul este scris în tag-ul `<style>` din `<head>`.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: red;
            text-align: center;
        }
        
        p {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>Titlu stilizat</h1>
    <p>Paragraf cu stiluri interne</p>
</body>
</html>
```

### 1.3 CSS External (Recomandat)
CSS-ul este scris într-un fișier separat `.css` și inclus cu `<link>`.

```html
<!-- În HTML -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* În styles.css */
h1 {
    color: navy;
    font-size: 2.5em;
}

p {
    color: #333;
    margin: 1em 0;
}
```

**Avantaje:** Reutilizabil, ușor de menținut, separarea conținutului de prezentare

## 2. Sintaxa CSS

```css
selector {
    proprietate: valoare;
    proprietate: valoare;
}
```

### Exemplu complet:
```css
h1 {
    color: blue;           /* Culoarea textului */
    font-size: 24px;       /* Dimensiunea fontului */
    text-align: center;    /* Alinierea textului */
    margin: 20px 0;        /* Spațierea exterioară */
}
```

## 3. Selectori CSS

### 3.1 Selectori de bază

#### Selector de element
```css
/* Selectează toate elementele <p> */
p {
    color: black;
    font-size: 16px;
}

/* Selectează toate elementele <h1> */
h1 {
    color: blue;
    text-align: center;
}
```

#### Selector de clasă
```css
/* Selectează elementele cu class="highlight" */
.highlight {
    background-color: yellow;
    font-weight: bold;
}

.text-center {
    text-align: center;
}

.large-text {
    font-size: 20px;
}
```

```html
<!-- Folosire în HTML -->
<p class="highlight">Text evidențiat</p>
<div class="text-center large-text">Text mare și centrat</div>
```

#### Selector de ID
```css
/* Selectează elementul cu id="header" */
#header {
    background-color: navy;
    color: white;
    padding: 20px;
}

#footer {
    background-color: gray;
    text-align: center;
}
```

```html
<!-- Folosire în HTML -->
<header id="header">Antetul paginii</header>
<footer id="footer">Subsolul paginii</footer>
```

#### Selector universal
```css
/* Selectează toate elementele */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### 3.2 Selectori de atribute

```css
/* Selectează input-urile de tip text */
input[type="text"] {
    border: 2px solid blue;
    padding: 10px;
}

/* Selectează link-urile care încep cu "https" */
a[href^="https"] {
    color: green;
}

/* Selectează elementele cu titlu care conține "important" */
[title*="important"] {
    font-weight: bold;
}

/* Selectează imagini cu alt care se termină în "logo" */
img[alt$="logo"] {
    width: 100px;
}
```

### 3.3 Pseudo-clase

#### Pseudo-clase pentru stări
```css
/* Stiluri pentru link-uri */
a:link {
    color: blue;           /* Link nevizitat */
}

a:visited {
    color: purple;         /* Link vizitat */
}

a:hover {
    color: red;           /* La trecerea cu mouse-ul */
    text-decoration: underline;
}

a:active {
    color: orange;        /* În timpul click-ului */
}

/* Stiluri pentru input-uri */
input:focus {
    border-color: blue;
    outline: 2px solid lightblue;
}

button:hover {
    background-color: lightblue;
    cursor: pointer;
}
```

#### Pseudo-clase structurale
```css
/* Primul copil */
p:first-child {
    font-weight: bold;
}

/* Ultimul copil */
p:last-child {
    margin-bottom: 0;
}

/* Al n-lea copil */
tr:nth-child(2n) {        /* Rânduri pare */
    background-color: #f0f0f0;
}

tr:nth-child(odd) {       /* Rânduri impare */
    background-color: white;
}

/* Primul de tipul său */
h2:first-of-type {
    color: red;
}
```

### 3.4 Pseudo-elemente
```css
/* Primul rând din paragraf */
p::first-line {
    font-weight: bold;
}

/* Prima literă din paragraf */
p::first-letter {
    font-size: 2em;
    float: left;
}

/* Conținut generat */
.quote::before {
    content: """;
    font-size: 2em;
}

.quote::after {
    content: """;
    font-size: 2em;
}
```

## 4. Combinatori CSS

### 4.1 Combinator descendant (spațiu)
```css
/* Selectează toate <p> din interiorul <div> */
div p {
    color: red;
}
```

```html
<div>
    <p>Acest paragraf va fi roșu</p>
    <section>
        <p>Și acest paragraf va fi roșu</p>
    </section>
</div>
```

### 4.2 Combinator copil direct (>)
```css
/* Selectează doar <p> care sunt copii direcți ai <div> */
div > p {
    color: blue;
}
```

```html
<div>
    <p>Acest paragraf va fi albastru</p>
    <section>
        <p>Acest paragraf NU va fi albastru</p>
    </section>
</div>
```

### 4.3 Combinator sibling adiacent (+)
```css
/* Selectează primul <p> care urmează imediat după <h2> */
h2 + p {
    color: green;
    font-weight: bold;
}
```

```html
<h2>Titlu</h2>
<p>Acest paragraf va fi verde și bold</p>
<p>Acest paragraf va fi normal</p>
```

### 4.4 Combinator sibling general (~)
```css
/* Selectează toate <p> care urmează după <h2> la același nivel */
h2 ~ p {
    color: purple;
}
```

```html
<h2>Titlu</h2>
<p>Acest paragraf va fi mov</p>
<div>Altceva</div>
<p>Și acest paragraf va fi mov</p>
```

## 5. Specificitatea CSS

Ordinea de prioritate (de la cea mai mare la cea mai mică):

1. **CSS Inline** (style="...") - 1000 puncte
2. **ID-uri** (#myId) - 100 puncte  
3. **Clase, atribute, pseudo-clase** (.myClass, [type="text"], :hover) - 10 puncte
4. **Elemente și pseudo-elemente** (div, p, ::before) - 1 punct

### Exemple de calcul:
```css
/* Specificitate: 1 (un element) */
p { color: black; }

/* Specificitate: 10 (o clasă) */
.highlight { color: red; }

/* Specificitate: 100 (un ID) */
#main { color: blue; }

/* Specificitate: 111 (un ID + o clasă + un element) */
#main .highlight p { color: green; }

/* Specificitate: 1000 (inline style) */
<p style="color: purple;">Text</p>
```

### Forțarea priorității cu !important
```css
p {
    color: red !important;  /* Va avea prioritate peste alte reguli */
}
```

**Atenție:** Folosește `!important` doar când este absolut necesar!

## 6. Proprietăți CSS de bază

### 6.1 Proprietăți pentru text
```css
.text-styling {
    color: #333;                    /* Culoarea textului */
    font-family: Arial, sans-serif; /* Familia de fonturi */
    font-size: 18px;               /* Dimensiunea fontului */
    font-weight: bold;             /* Grosimea fontului */
    font-style: italic;            /* Stilul fontului */
    text-align: center;            /* Alinierea textului */
    text-decoration: underline;    /* Decorarea textului */
    line-height: 1.6;             /* Înălțimea liniei */
    letter-spacing: 2px;          /* Spațierea între litere */
    text-transform: uppercase;     /* Transformarea textului */
}
```

### 6.2 Proprietăți pentru culori și fundal
```css
.background-styling {
    color: rgb(255, 0, 0);                    /* Text roșu */
    background-color: #f0f0f0;                /* Fundal gri */
    background-image: url('pattern.png');     /* Imagine de fundal */
    background-repeat: no-repeat;             /* Nu repeta imaginea */
    background-position: center;              /* Poziția imaginii */
    background-size: cover;                   /* Dimensiunea imaginii */
}
```

### 6.3 Proprietăți pentru spațiere
```css
.spacing {
    margin: 20px;           /* Spațiu exterior pe toate laturile */
    margin-top: 10px;       /* Spațiu exterior sus */
    margin-right: 15px;     /* Spațiu exterior dreapta */
    margin-bottom: 10px;    /* Spațiu exterior jos */
    margin-left: 15px;      /* Spațiu exterior stânga */
    
    padding: 10px;          /* Spațiu interior pe toate laturile */
    padding: 10px 20px;     /* Sus/jos: 10px, Stânga/dreapta: 20px */
    padding: 5px 10px 15px 20px; /* Sus, Dreapta, Jos, Stânga */
}
```

### 6.4 Proprietăți pentru borduri
```css
.border-styling {
    border: 2px solid red;           /* Bordură completă */
    border-width: 3px;               /* Grosimea bordurii */
    border-style: dashed;            /* Stilul bordurii */
    border-color: blue;              /* Culoarea bordurii */
    border-radius: 10px;             /* Colțuri rotunjite */
    
    /* Borduri individuale */
    border-top: 1px solid black;
    border-right: 2px dotted red;
    border-bottom: 3px double blue;
    border-left: 4px groove green;
}
```

## 7. Unități de măsură în CSS

### 7.1 Unități absolute
```css
.absolute-units {
    width: 300px;      /* Pixeli */
    height: 2in;       /* Inci */
    margin: 1cm;       /* Centimetri */
    padding: 10mm;     /* Milimetri */
    font-size: 12pt;   /* Puncte tipografice */
}
```

### 7.2 Unități relative
```css
.relative-units {
    width: 50%;           /* Procente din elementul părinte */
    font-size: 1.2em;     /* Relativ la fontul părinte */
    line-height: 1.6;     /* Multiplicator (fără unitate) */
    margin: 2rem;         /* Relativ la fontul root */
    width: 50vw;          /* 50% din lățimea viewport-ului */
    height: 100vh;        /* 100% din înălțimea viewport-ului */
}
```

## 8. Comentarii în CSS

```css
/* Acesta este un comentariu pe o linie */

/* 
   Acesta este un comentariu
   pe mai multe linii
   foarte util pentru explicații detaliate
*/

.my-class {
    color: red;        /* Comentariu inline */
    /* font-size: 18px; */  /* Cod comentat temporar */
}
```

## 9. Bune practici CSS

### 9.1 Organizarea codului
```css
/* ===== RESET ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== TYPOGRAPHY ===== */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* ===== LAYOUT ===== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== COMPONENTS ===== */
.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: blue;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}
```

### 9.2 Convenții de denumire
```css
/* BEM Methodology */
.card { }                    /* Block */
.card__title { }            /* Element */
.card--featured { }         /* Modifier */

/* Clase descriptive */
.text-center { text-align: center; }
.margin-bottom-large { margin-bottom: 2rem; }
.color-primary { color: #007bff; }
```

### 9.3 Performanță și optimizare
```css
/* Evită selectors prea complecși */
/* Rău */
div > ul > li > a:hover { }

/* Bun */
.nav-link:hover { }

/* Grupează proprietăți similare */
.element {
    /* Positioning */
    position: relative;
    top: 10px;
    left: 20px;
    
    /* Box model */
    width: 100px;
    height: 50px;
    margin: 10px;
    padding: 5px;
    
    /* Typography */
    font-size: 16px;
    color: black;
    
    /* Visual */
    background-color: white;
    border: 1px solid gray;
}
```

## 10. Debugging CSS

### 10.1 Instrumente pentru debugging
```css
/* Evidențiază toate elementele pentru debugging */
* {
    outline: 1px solid red !important;
}

/* Evidențiază un element specific */
.debug {
    background-color: rgba(255, 0, 0, 0.2) !important;
    border: 2px solid red !important;
}
```

### 10.2 Tehnici comune de debugging
1. **Folosește Developer Tools** (F12 în browser)
2. **Verifică specificitatea** selectorilor
3. **Testează cu `!important`** temporar
4. **Comentează secțiuni** de cod pentru izolare
5. **Validează CSS-ul** cu W3C CSS Validator

## Resurse utile

- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Can I Use](https://caniuse.com/) - compatibilitate CSS
- [CSS Selectors Cheat Sheet](https://www.w3schools.com/cssref/css_selectors.asp)
