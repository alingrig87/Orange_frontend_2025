# Exerciții CSS - Recapitulare

## 1. Modalități de includere CSS

### Exercițiul 1.1 - CSS Inline
Creează o pagină HTML cu:
- Un titlu H1 stilizat inline (culoare albastră, fundal galben)
- Un paragraf cu text roșu și font Arial
- O imagine cu bordură de 3px neagră

### Exercițiul 1.2 - CSS Internal
Creează o pagină cu CSS internal care să conțină:
- Stiluri pentru toate titlurile H1, H2, H3
- Stiluri pentru paragrafe (font-family, line-height, color)
- Stiluri pentru link-uri (toate stările: link, visited, hover, active)

### Exercițiul 1.3 - CSS External
Creează:
- Un fișier HTML simplu
- Un fișier CSS extern cu stiluri pentru întreaga pagină
- Testează includerea corectă a fișierului CSS

## 2. Selectori de bază

### Exercițiul 2.1 - Selectori de element
```css
/* Aplică aceste stiluri folosind selectori de element */
- Toate paragrafele să aibă culoarea #333 și font-size 16px
- Toate titlurile H1 să fie centrate și albastre
- Toate link-urile să fie verzi și fără subliniere
```

### Exercițiul 2.2 - Selectori de clasă
Creează clase CSS pentru:
- `.text-center` - text centrat
- `.text-large` - font-size 24px
- `.bg-highlight` - fundal galben
- `.border-red` - bordură roșie de 2px
- Aplică aceste clase pe diferite elemente HTML

### Exercițiul 2.3 - Selectori de ID
Creează ID-uri pentru:
- `#header` - antetul paginii cu fundal albastru
- `#main-content` - conținutul principal cu padding 20px
- `#footer` - subsolul cu text centrat și fundal gri

### Exercițiul 2.4 - Combinarea selectorilor
Creează o pagină cu:
- Un element cu ID și clasă
- Un element cu multiple clase
- Testează prioritatea selectorilor

## 3. Selectori de atribute

### Exercițiul 3.1 - Atribute de input
Stilizează diferit:
```css
- input[type="text"] - bordură albastră
- input[type="email"] - bordură verde
- input[type="password"] - bordură roșie
- input[required] - fundal galben deschis
```

### Exercițiul 3.2 - Atribute de link
Creează stiluri pentru:
```css
- a[href^="http"] - link-uri externe (iconiță sau culoare specială)
- a[href^="mailto"] - link-uri email (culoare diferită)
- a[href^="tel"] - link-uri telefon (stil diferit)
```

## 4. Pseudo-clase

### Exercițiul 4.1 - Pseudo-clase pentru stări
Creează un meniu de navigare cu:
- Link-uri normale (albastru)
- Link-uri vizitate (mov)
- Link-uri la hover (roșu cu subliniere)
- Link-uri active (portocaliu)

### Exercițiul 4.2 - Pseudo-clase structurale
Creează un tabel cu:
- Prima linie să fie bold
- Liniile pare să aibă fundal gri deschis
- Liniile impare să aibă fundal alb
- Ultima linie să aibă bordură groasă

### Exercițiul 4.3 - Formulare interactive
Stilizează un formular cu:
- Input-uri la focus (bordură albastră și shadow)
- Butoane la hover (schimbă culoarea)
- Input-uri invalid (bordură roșie)
- Input-uri valid (bordură verde)

## 5. Combinatori

### Exercițiul 5.1 - Combinator descendant
```html
<div class="article">
    <h2>Titlu articol</h2>
    <p>Primul paragraf</p>
    <section>
        <p>Paragraf în secțiune</p>
    </section>
</div>
```
Stilizează toate paragrafele din `.article` să fie italice.

### Exercițiul 5.2 - Combinator copil direct
Folosind același HTML, stilizează doar paragrafele care sunt copii direcți ai `.article`.

### Exercițiul 5.3 - Combinator sibling
```html
<h2>Titlu</h2>
<p>Primul paragraf după titlu</p>
<p>Al doilea paragraf</p>
<h3>Subtitlu</h3>
<p>Primul paragraf după subtitlu</p>
```
- Primul paragraf după H2 să fie bold
- Toate paragrafele după H2 să aibă margin-top mai mare

## 6. Proprietăți CSS de bază

### Exercițiul 6.1 - Stilizarea textului
Creează clase pentru:
- Text mare (24px, bold, centrat)
- Text mic (12px, gri, italic)
- Text evidențiat (galben fundal, text negru, padding)
- Text cu umbre (text-shadow)

### Exercițiul 6.2 - Culori și fundal
Creează o pagină cu:
- Fundal gradient (folosind CSS linear-gradient)
- Secțiuni cu fundal de culori diferite
- Text cu culori contrastante
- Elemente cu transparență (rgba)

### Exercițiul 6.3 - Spațiere și borduri
Creează carduri cu:
- Padding intern de 20px
- Margin extern de 15px
- Bordură rotunjită (border-radius)
- Umbră (box-shadow)

## 7. Specificitatea

### Exercițiul 7.1 - Testarea priorității
```html
<p id="special" class="highlight" style="color: green;">
    Care va fi culoarea acestui text?
</p>
```

Adaugă în CSS:
```css
p { color: black; }
.highlight { color: red; }
#special { color: blue; }
```

### Exercițiul 7.2 - Calcularea specificității
Calculează specificitatea pentru:
- `div p`
- `.container .card h2`
- `#main .sidebar ul li a:hover`
- `body #wrapper .content p.intro`

## 8. Exerciții combinate

### Exercițiul 8.1 - Card component
Creează un card cu:
```html
<div class="card">
    <img src="image.jpg" alt="Card image" class="card-image">
    <div class="card-content">
        <h3 class="card-title">Titlul cardului</h3>
        <p class="card-description">Descrierea cardului...</p>
        <a href="#" class="card-link">Citește mai mult</a>
    </div>
</div>
```

Stilizează cu:
- Bordură și umbră pentru card
- Imagine responsive
- Stiluri pentru titlu și descriere
- Button stilizat pentru link
- Efecte hover

### Exercițiul 8.2 - Meniu de navigare
Creează un meniu orizontal cu:
- Lista de link-uri
- Stiluri pentru stări diferite
- Submeniu dropdown (cu CSS)
- Efecte de tranziție

### Exercițiul 8.3 - Formular stilizat
Creează un formular de contact cu:
- Input-uri stilizate
- Label-uri poziționate frumos
- Butoane cu efecte hover
- Validare vizuală (culori pentru valid/invalid)
- Layout organizat

## 9. Debugging și optimizare

### Exercițiul 9.1 - Găsește problema
```css
/* Ce este greșit în acest cod? */
.my-class {
    color: red
    background-color: yellow;
    font-size: 16px
}

#my-id {
    color: blue !important
    margin: 10px 20px 30px;
}
```

### Exercițiul 9.2 - Optimizare
Optimizează acest cod:
```css
div ul li a {
    color: red;
}

div ul li a:hover {
    color: blue;
}

div ul li a:visited {
    color: purple;
}
```

## 10. Proiect final - Pagină de profil

### Cerințe
Creează o pagină de profil personal cu:

**HTML Structure:**
- Header cu nume și navigare
- Secțiune hero cu poză de profil
- Secțiune despre cu text și liste
- Secțiune skills cu progress bars (div-uri stilizate)
- Secțiune contact cu formular
- Footer

**CSS Requirements:**
- Folosește toate tipurile de selectori învățați
- Aplică proprietăți pentru text, culori, spațiere
- Creează efecte hover interactive
- Folosește pseudo-clase și pseudo-elemente
- Organizează codul cu comentarii
- Validează CSS-ul

**Stiluri specifice:**
- Paleta de culori consistentă
- Typography ierarhică (H1, H2, H3)
- Carduri pentru secțiuni
- Butoane stilizate
- Input-uri de formular personalizate
- Efecte de hover și focus

## Tips pentru rezolvare

1. **Începe simplu** - adaugă stilurile pas cu pas
2. **Testează în browser** - folosește Developer Tools (F12)
3. **Validează codul** - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
4. **Organizează CSS-ul** - grupează stilurile logic
5. **Folosește comentarii** - explică secțiunile complexe
6. **Testează specificitatea** - înțelege de ce unele stiluri nu se aplică
7. **Experimentează** - încearcă valori diferite pentru proprietăți

## Resurse utile

- [CSS Tricks](https://css-tricks.com/)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Color Palette Generator](https://coolors.co/)
- [CSS Selectors Game](https://flukeout.github.io/)
