# CSS FlexBox - Layout Flexibil

## Introducere

CSS Flexbox (Flexible Box Layout) este un sistem de layout unidimensional care oferă un mod eficient de a aranja, distribui și alinia elementele într-un container, chiar și atunci când dimensiunea lor este necunoscută sau dinamică.

## 1. Concepte de bază

### Terminologie FlexBox
- **Flex Container** (părinte) - elementul cu `display: flex`
- **Flex Items** (copii) - elementele directe din flex container
- **Main Axis** - axa principală (implicit orizontală)
- **Cross Axis** - axa perpendiculară (implicit verticală)
- **Main Start/End** - începutul/sfârșitul axei principale
- **Cross Start/End** - începutul/sfârșitul axei perpendiculare

```html
<div class="flex-container">  <!-- Flex Container -->
    <div class="flex-item">1</div>  <!-- Flex Item -->
    <div class="flex-item">2</div>  <!-- Flex Item -->
    <div class="flex-item">3</div>  <!-- Flex Item -->
</div>
```

## 2. Activarea FlexBox

```css
.container {
    display: flex;        /* Activează flexbox */
    /* sau */
    display: inline-flex; /* Flexbox inline */
}
```

### Diferența între flex și inline-flex
```css
/* display: flex - containerul ocupă toată lățimea disponibilă */
.block-flex {
    display: flex;
    background-color: lightblue;
}

/* display: inline-flex - containerul ocupă doar spațiul necesar */
.inline-flex {
    display: inline-flex;
    background-color: lightgreen;
}
```

## 3. Proprietăți pentru Flex Container

### 3.1 flex-direction
Definește direcția axei principale.

```css
.container {
    display: flex;
    flex-direction: row;          /* Default - orizontal, stânga la dreapta */
    flex-direction: row-reverse;  /* Orizontal, dreapta la stânga */
    flex-direction: column;       /* Vertical, sus în jos */
    flex-direction: column-reverse; /* Vertical, jos în sus */
}
```

### Exemple practice:
```css
/* Layout orizontal normal */
.horizontal-layout {
    display: flex;
    flex-direction: row;
}

/* Layout vertical */
.vertical-layout {
    display: flex;
    flex-direction: column;
    height: 400px;
}

/* Navigation inversată */
.reverse-nav {
    display: flex;
    flex-direction: row-reverse;
}
```

### 3.2 justify-content
Aliniază elementele pe axa principală.

```css
.container {
    display: flex;
    justify-content: flex-start;    /* Default - la început */
    justify-content: flex-end;      /* La sfârșit */
    justify-content: center;        /* Centrat */
    justify-content: space-between; /* Spațiu egal între elemente */
    justify-content: space-around;  /* Spațiu egal în jurul elementelor */
    justify-content: space-evenly;  /* Spațiu complet egal */
}
```

### Exemple vizuale:
```css
/* Meniu centrat */
.centered-nav {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}

/* Butoane la extremele paginii */
.button-group {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

/* Cards cu spațiere egală */
.card-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
```

### 3.3 align-items
Aliniază elementele pe axa perpendiculară.

```css
.container {
    display: flex;
    height: 200px; /* Necesară pentru a vedea efectul */
    align-items: stretch;      /* Default - întinde pe înălțime */
    align-items: flex-start;   /* La început (sus) */
    align-items: flex-end;     /* La sfârșit (jos) */
    align-items: center;       /* Centrat vertical */
    align-items: baseline;     /* Aliniat la baseline-ul textului */
}
```

### Exemple practice:
```css
/* Centrare perfectă */
.perfect-center {
    display: flex;
    justify-content: center;  /* Centrat orizontal */
    align-items: center;      /* Centrat vertical */
    height: 100vh;
}

/* Header cu logo și navigare */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 20px;
}

/* Card cu conținut aliniat */
.card {
    display: flex;
    align-items: flex-start;
    padding: 20px;
    border: 1px solid #ddd;
}
```

### 3.4 flex-wrap
Controlează dacă elementele se împachetează pe rânduri noi.

```css
.container {
    display: flex;
    flex-wrap: nowrap;    /* Default - toate pe un rând */
    flex-wrap: wrap;      /* Se împachetează pe rânduri noi */
    flex-wrap: wrap-reverse; /* Se împachetează în ordine inversă */
}
```

### Exemple:
```css
/* Galerie responsive */
.image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.image-gallery img {
    width: 200px;
    height: 150px;
    object-fit: cover;
}

/* Tag-uri care se împachetează */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.tag {
    padding: 5px 10px;
    background-color: #e0e0e0;
    border-radius: 15px;
    white-space: nowrap;
}
```

### 3.5 align-content
Aliniază rândurile când există spațiu extra (doar cu flex-wrap).

```css
.container {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    align-content: stretch;      /* Default */
    align-content: flex-start;   /* Rânduri la început */
    align-content: flex-end;     /* Rânduri la sfârșit */
    align-content: center;       /* Rânduri centrate */
    align-content: space-between; /* Spațiu între rânduri */
    align-content: space-around;  /* Spațiu în jurul rândurilor */
}
```

### 3.6 gap (row-gap, column-gap)
Definește spațiul între elementele flex.

```css
.container {
    display: flex;
    gap: 20px;              /* Spațiu uniform */
    row-gap: 15px;          /* Spațiu între rânduri */
    column-gap: 25px;       /* Spațiu între coloane */
    gap: 15px 25px;         /* row-gap column-gap */
}
```

## 4. Proprietăți pentru Flex Items

### 4.1 order
Schimbă ordinea de afișare (fără a modifica HTML-ul).

```css
.item-1 { order: 3; }  /* Se afișează al treilea */
.item-2 { order: 1; }  /* Se afișează primul */
.item-3 { order: 2; }  /* Se afișează al doilea */
```

### Exemple practice:
```css
/* Responsive reordering */
@media (max-width: 768px) {
    .sidebar { order: 2; }    /* Sidebar după conținut pe mobile */
    .main-content { order: 1; } /* Conținut primul pe mobile */
}

/* Featured item primul */
.featured {
    order: -1; /* Numere negative vin înaintea pozitivelor */
}
```

### 4.2 flex-grow
Definește cât de mult poate crește un element.

```css
.item-1 { flex-grow: 1; }  /* Crește cu 1 unitate */
.item-2 { flex-grow: 2; }  /* Crește cu 2 unități (dublu față de item-1) */
.item-3 { flex-grow: 0; }  /* Nu crește (default) */
```

### Exemple:
```css
/* Layout cu sidebar și main content */
.sidebar {
    flex-grow: 0;  /* Dimensiune fixă */
    width: 250px;
}

.main-content {
    flex-grow: 1;  /* Ocupă spațiul rămas */
}

/* Cards cu lățimi flexibile */
.card {
    flex-grow: 1;
    min-width: 200px;
}

.featured-card {
    flex-grow: 2;  /* Dublu față de cardurile normale */
}
```

### 4.3 flex-shrink
Definește cât de mult poate să se micșoreze un element.

```css
.item-1 { flex-shrink: 1; }  /* Se micșorează normal (default) */
.item-2 { flex-shrink: 0; }  /* Nu se micșorează niciodată */
.item-3 { flex-shrink: 2; }  /* Se micșorează de 2 ori mai mult */
```

### 4.4 flex-basis
Definește dimensiunea inițială înainte de distribuirea spațiului liber.

```css
.item {
    flex-basis: auto;     /* Default - bazat pe conținut */
    flex-basis: 200px;    /* Dimensiune fixă */
    flex-basis: 25%;      /* Procent din container */
    flex-basis: 0;        /* Ignoră dimensiunea conținutului */
}
```

### 4.5 flex (shorthand)
Combină flex-grow, flex-shrink și flex-basis.

```css
/* flex: grow shrink basis */
.item {
    flex: 1;           /* flex: 1 1 0% */
    flex: 1 0 auto;    /* grow=1, shrink=0, basis=auto */
    flex: 200px;       /* flex: 1 1 200px */
    flex: none;        /* flex: 0 0 auto */
}
```

### Valori comune:
```css
/* Elemente flexibile egale */
.equal-items {
    flex: 1; /* Toate elementele au aceeași lățime */
}

/* Element fix */
.fixed-item {
    flex: none; /* Nu se modifică dimensiunea */
    width: 200px;
}

/* Element care ocupă spațiul rămas */
.fill-remaining {
    flex: 1 1 auto;
}
```

### 4.6 align-self
Suprascrie align-items pentru un element specific.

```css
.container {
    display: flex;
    align-items: center;  /* Toate centrate */
}

.special-item {
    align-self: flex-start;  /* Acest element la început */
    align-self: flex-end;    /* Acest element la sfârșit */
    align-self: stretch;     /* Acest element întins */
}
```

## 5. Modele comune de layout

### 5.1 Centrare perfectă
```css
.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### 5.2 Header cu logo și navigare
```css
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

.logo {
    flex-shrink: 0;
}

.nav {
    display: flex;
    list-style: none;
    gap: 2rem;
}
```

### 5.3 Layout cu sidebar
```css
.layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    flex: 0 0 250px;  /* Lățime fixă */
    background-color: #f5f5f5;
}

.main-content {
    flex: 1;  /* Ocupă spațiul rămas */
    padding: 2rem;
}
```

### 5.4 Cards responsive
```css
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px;  /* Minimum 300px, se extinde */
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
}
```

### 5.5 Footer sticky
```css
.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    flex: 1;  /* Ocupă spațiul disponibil */
}

.footer {
    flex-shrink: 0;  /* Nu se micșorează */
}
```

### 5.6 Media object
```css
.media {
    display: flex;
    gap: 1rem;
}

.media-image {
    flex-shrink: 0;  /* Imaginea nu se micșorează */
}

.media-content {
    flex: 1;  /* Textul ocupă spațiul rămas */
}
```

## 6. Flexbox vs Grid

### Când să folosești Flexbox:
- ✅ Layout unidimensional (rând sau coloană)
- ✅ Alinierea elementelor
- ✅ Distribuirea spațiului
- ✅ Componente mici (butoane, navigare)
- ✅ Când nu știi numărul de elemente

### Când să folosești Grid:
- ✅ Layout bidimensional (rânduri și coloane)
- ✅ Layout-uri complexe
- ✅ Când știi structura exactă
- ✅ Suprapunerea elementelor

## 7. Trucuri și tips avansate

### 7.1 Centrarea cu margin auto
```css
.container {
    display: flex;
}

.centered-item {
    margin: auto;  /* Se centrează în toate direcțiile */
}

.push-right {
    margin-left: auto;  /* Se împinge la dreapta */
}
```

### 7.2 Equal height columns
```css
.columns {
    display: flex;
}

.column {
    flex: 1;  /* Toate coloanele au aceeași înălțime automat */
    padding: 1rem;
}
```

### 7.3 Responsive breakpoints cu flex
```css
.responsive-container {
    display: flex;
    flex-wrap: wrap;
}

.item {
    flex: 1 1 300px;  /* Minimum 300px, apoi wrap */
    max-width: 500px; /* Maximum pentru a nu fi prea late */
}
```

### 7.4 Aspect ratio cu flexbox
```css
.aspect-ratio-container {
    display: flex;
}

.aspect-item {
    flex: 1;
    aspect-ratio: 16/9;  /* CSS modern */
    background-color: #f0f0f0;
}
```

## 8. Probleme comune și soluții

### 8.1 Text overflow în flex items
```css
/* Problemă: textul nu se împachetează */
.flex-item {
    flex: 1;
    min-width: 0;  /* Soluția: permite micșorarea sub dimensiunea conținutului */
}

.text-content {
    overflow-wrap: break-word;
}
```

### 8.2 Images în flex containers
```css
.image-container {
    display: flex;
}

.responsive-image {
    max-width: 100%;
    height: auto;
    flex-shrink: 0;  /* Previne micșorarea imaginii */
}
```

### 8.3 Flex items cu înălțimi diferite
```css
.container {
    display: flex;
    align-items: stretch;  /* Default, toate au aceeași înălțime */
}

/* Sau pentru comportament diferit */
.container-different-heights {
    display: flex;
    align-items: flex-start;  /* Fiecare își păstrează înălțimea naturală */
}
```

## 9. Browser support și fallbacks

```css
/* Fallback pentru browsere vechi */
.container {
    /* Fallback pentru IE */
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    
    /* Vendor prefixes pentru proprietăți */
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
}

/* Feature detection cu @supports */
@supports (display: flex) {
    .modern-layout {
        display: flex;
    }
}

@supports not (display: flex) {
    .fallback-layout {
        display: table;
    }
}
```

## Resurse utile

- [MDN Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Joc pentru învățarea Flexbox
- [Flexbox Defense](http://www.flexboxdefense.com/) - Alt joc educativ
- [Can I Use Flexbox](https://caniuse.com/flexbox) - Browser support
