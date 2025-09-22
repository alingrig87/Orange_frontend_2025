# Exerciții CSS FlexBox - Recapitulare

## 1. Activarea FlexBox

### Exercițiul 1.1 - Display Flex
Creează un container cu 5 div-uri colorate și:
- Aplică `display: flex`
- Observă diferența față de layout-ul normal
- Testează `display: inline-flex`

```html
<div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
</div>
```

### Exercițiul 1.2 - Flex vs Block
Compară comportamentul:
- Container normal (fără flex)
- Container cu `display: flex`
- Container cu `display: inline-flex`

## 2. Flex Direction

### Exercițiul 2.1 - Direcții de bază
Pentru același HTML de mai sus, testează:
```css
.container-1 { flex-direction: row; }
.container-2 { flex-direction: row-reverse; }
.container-3 { flex-direction: column; }
.container-4 { flex-direction: column-reverse; }
```

### Exercițiul 2.2 - Navigation Bar
Creează o bară de navigare cu:
- Logo în stânga
- Meniu în dreapta
- Folosește `flex-direction: row-reverse` pentru o variantă

```html
<nav class="navbar">
    <div class="logo">Logo</div>
    <ul class="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

## 3. Justify Content

### Exercițiul 3.1 - Toate variantele
Creează 6 containere identice și aplică:
```css
.container-1 { justify-content: flex-start; }
.container-2 { justify-content: flex-end; }
.container-3 { justify-content: center; }
.container-4 { justify-content: space-between; }
.container-5 { justify-content: space-around; }
.container-6 { justify-content: space-evenly; }
```

### Exercițiul 3.2 - Butoane în footer
Creează un footer cu butoane:
- Un buton în stânga ("Back")
- Un buton în dreapta ("Next")
- Folosește `justify-content: space-between`

### Exercițiul 3.3 - Centrarea perfectă
Centrează un element în mijlocul paginii folosind doar `justify-content`.

## 4. Align Items

### Exercițiul 4.1 - Alinierea verticală
Creează un container cu înălțime fixă (300px) și testează:
```css
.container-1 { align-items: flex-start; }
.container-2 { align-items: flex-end; }
.container-3 { align-items: center; }
.container-4 { align-items: stretch; }
.container-5 { align-items: baseline; }
```

### Exercițiul 4.2 - Card cu imagine și text
Creează un card cu:
- Imagine în stânga
- Text în dreapta
- Aliniază conținutul cu `align-items: center`

```html
<div class="card">
    <img src="profile.jpg" alt="Profile" class="card-image">
    <div class="card-content">
        <h3>John Doe</h3>
        <p>Web Developer</p>
    </div>
</div>
```

### Exercițiul 4.3 - Centrare completă
Combină `justify-content: center` și `align-items: center` pentru centrare perfectă.

## 5. Flex Wrap

### Exercițiul 5.1 - Galerie de imagini
Creează o galerie cu 12 imagini care:
- Se aranjează pe multiple rânduri
- Folosește `flex-wrap: wrap`
- Fiecare imagine are lățime fixă de 200px

### Exercițiul 5.2 - Tag-uri responsive
Creează o secțiune cu tag-uri care:
- Se împachetează pe rânduri noi când e necesar
- Au padding și border-radius
- Folosesc `gap` pentru spațiere

```html
<div class="tags">
    <span class="tag">HTML</span>
    <span class="tag">CSS</span>
    <span class="tag">JavaScript</span>
    <span class="tag">React</span>
    <span class="tag">Node.js</span>
    <span class="tag">MongoDB</span>
</div>
```

### Exercițiul 5.3 - Cards responsive
Creează cards care:
- Au lățime minimă de 250px
- Se împachetează pe rânduri noi
- Mențin aspect ratio consistent

## 6. Proprietăți pentru Flex Items

### Exercițiul 6.1 - Order
Creează o listă de elemente și:
- Schimbă ordinea fără a modifica HTML-ul
- Pune primul element ultimul (order: 1)
- Pune ultimul element primul (order: -1)

### Exercițiul 6.2 - Flex Grow
Creează un layout cu 3 coloane:
- Coloana 1: lățime fixă (200px)
- Coloana 2: ocupă dublu spațiu față de coloana 3
- Coloana 3: ocupă spațiul rămas

```css
.col-1 { flex-grow: 0; width: 200px; }
.col-2 { flex-grow: 2; }
.col-3 { flex-grow: 1; }
```

### Exercițiul 6.3 - Flex Shrink
Testează comportamentul când containerul e prea mic:
- Un element care nu se micșorează niciodată
- Un element care se micșorează normal
- Un element care se micșorează de 2 ori mai mult

### Exercițiul 6.4 - Flex Basis
Creează elemente cu:
```css
.item-1 { flex-basis: 100px; }
.item-2 { flex-basis: 50%; }
.item-3 { flex-basis: auto; }
.item-4 { flex-basis: 0; }
```

### Exercițiul 6.5 - Flex Shorthand
Practică notația scurtă:
```css
.equal { flex: 1; }
.fixed { flex: none; width: 200px; }
.growing { flex: 2 1 100px; }
```

### Exercițiul 6.6 - Align Self
În containerul cu `align-items: center`, fă:
- Un element să fie aliniat sus
- Un element să fie aliniat jos
- Un element să fie întins pe toată înălțimea

## 7. Layouts comune

### Exercițiul 7.1 - Holy Grail Layout
Creează layout-ul clasic:
```html
<div class="page">
    <header class="header">Header</header>
    <main class="main">
        <aside class="sidebar-left">Left Sidebar</aside>
        <section class="content">Main Content</section>
        <aside class="sidebar-right">Right Sidebar</aside>
    </main>
    <footer class="footer">Footer</footer>
</div>
```

Cerințe:
- Header și footer pe toată lățimea
- Main content ocupă spațiul rămas
- Sidebar-urile au lățime fixă
- Layout vertical pentru întreaga pagină

### Exercițiul 7.2 - Media Object
Creează componenta media object:
```html
<div class="media">
    <img src="avatar.jpg" class="media-image">
    <div class="media-content">
        <h4>John Doe</h4>
        <p>This is a media object with an image on the left and content on the right.</p>
    </div>
</div>
```

### Exercițiul 7.3 - Sticky Footer
Creează o pagină cu footer care rămâne jos:
- Când conținutul e puțin, footer-ul rămâne la bottom
- Când conținutul e mult, footer-ul vine după conținut

### Exercițiul 7.4 - Navigation responsive
Creează o navigare care:
- Pe desktop: meniu orizontal
- Pe mobile: meniu vertical (folosind flex-direction)
- Logo rămâne vizibil întotdeauna

## 8. Exerciții avansate

### Exercițiul 8.1 - Dashboard Layout
Creează un dashboard cu:
- Header fix sus
- Sidebar stânga cu navigare
- Main content care se extinde
- Cards în main content (grid flexibil)

### Exercițiul 8.2 - Pricing Table
Creează 3 carduri de pricing care:
- Au aceeași înălțime (align-items: stretch)
- Sunt centrate orizontal
- Cardul din mijloc e evidențiat (order și stiluri)

### Exercițiul 8.3 - Timeline
Creează un timeline vertical cu:
- Elemente alternate stânga-dreapta
- Linie centrală
- Folosește `order` pentru alternarea pozițiilor

### Exercițiul 8.4 - Masonry-like layout
Folosind flexbox, încearcă să creezi un layout tip masonry:
- Coloane verticale
- Elemente cu înălțimi diferite
- Distribuție cât mai echilibrată

## 9. Debugging FlexBox

### Exercițiul 9.1 - Găsește problemele
```css
/* Ce este greșit în acest cod? */
.container {
    display: flex;
    justify-content: center;
    align-content: center; /* Problemă aici */
    height: 300px;
}

.item {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 300px; /* Poate cauza probleme */
}
```

### Exercițiul 9.2 - Text overflow
Rezolvă problema cu textul care nu se împachetează în flex items:
```html
<div class="flex-container">
    <div class="flex-item">
        <p>This is a very long text that should wrap but might not wrap properly in a flex item</p>
    </div>
</div>
```

### Exercițiul 9.3 - Image sizing
Rezolvă problemele cu imaginile în containere flex:
```html
<div class="image-container">
    <img src="large-image.jpg" alt="Large image">
    <div class="content">Content next to image</div>
</div>
```

## 10. Proiect final - Layout complet

### Cerințe
Creează o pagină completă de blog cu:

**Structure:**
```html
<div class="blog-layout">
    <header class="blog-header">
        <div class="logo">My Blog</div>
        <nav class="main-nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </header>
    
    <main class="blog-main">
        <section class="blog-content">
            <article class="post">
                <header class="post-header">
                    <h1>Post Title</h1>
                    <div class="post-meta">
                        <span class="author">Author</span>
                        <span class="date">Date</span>
                    </div>
                </header>
                <div class="post-content">
                    <p>Post content...</p>
                </div>
            </article>
        </section>
        
        <aside class="blog-sidebar">
            <div class="widget">
                <h3>Recent Posts</h3>
                <ul class="recent-posts">
                    <li class="recent-post">
                        <img src="thumb.jpg" class="post-thumb">
                        <div class="post-info">
                            <h4>Post Title</h4>
                            <span class="post-date">Date</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    </main>
    
    <footer class="blog-footer">
        <p>&copy; 2025 My Blog</p>
    </footer>
</div>
```

**Cerințe FlexBox:**
1. Layout vertical pentru întreaga pagină
2. Header cu logo și navigare (space-between)
3. Main content cu flex-grow pentru a ocupa spațiul
4. Content și sidebar în flex row
5. Post meta cu elemente aliniate
6. Recent posts ca media objects
7. Footer sticky la bottom

**Bonus:**
- Responsive behavior (fără media queries, doar cu flexbox)
- Hover effects pentru navigare
- Animații CSS pentru interacțiuni

## Tips pentru rezolvare

1. **Începe cu structura** - definește containerele flex
2. **Testează pas cu pas** - adaugă o proprietate, testează
3. **Folosește DevTools** - inspectează elementele flex
4. **Înțelege axele** - main axis vs cross axis
5. **Practică shorthand-urile** - flex, flex-flow
6. **Testează edge cases** - conținut mult/puțin, ecrane mici/mari
7. **Validează CSS-ul** - verifică sintaxa

## Resurse pentru verificare

- [Flexbox Froggy](https://flexboxfroggy.com/) - Joc interactiv
- [Flexbox Defense](http://www.flexboxdefense.com/) - Alt joc
- [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Flexbox Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
