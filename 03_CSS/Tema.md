# Tema CSS - Mini-proiecte

## Proiect 1: Redesign complet site personal 🎨

### Descriere
Ia site-ul personal creat la HTML și transformă-l complet folosind CSS avansat. Site-ul trebuie să arate profesional și modern.

### Cerințe tehnice
- **CSS extern organizat** în multiple fișiere
- **Paleta de culori consistentă** (3-5 culori principale)
- **Typography ierarhică** (3 tipuri de fonturi maximum)
- **Layout responsive** de bază (fără media queries încă)
- **Animații și tranziții** CSS
- **Componente reutilizabile**

### Specificații detaliate

#### 1. Organizarea CSS-ului
Creează fișiere separate:
```
styles/
├── reset.css          (CSS reset/normalize)
├── variables.css      (CSS custom properties)
├── typography.css     (stiluri pentru text)
├── layout.css         (stiluri pentru layout)
├── components.css     (componente reutilizabile)
├── pages.css          (stiluri specifice paginilor)
└── main.css          (importă toate fișierele)
```

#### 2. CSS Custom Properties (Variables)
```css
:root {
    /* Culori principale */
    --primary-color: #your-choice;
    --secondary-color: #your-choice;
    --accent-color: #your-choice;
    --text-color: #your-choice;
    --bg-color: #your-choice;
    
    /* Typography */
    --font-primary: 'Your-Font', sans-serif;
    --font-secondary: 'Your-Font', serif;
    --font-mono: 'Courier New', monospace;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
    
    /* Shadows */
    --shadow-light: 0 2px 4px rgba(0,0,0,0.1);
    --shadow-medium: 0 4px 8px rgba(0,0,0,0.15);
    --shadow-heavy: 0 8px 16px rgba(0,0,0,0.2);
}
```

#### 3. Componente obligatorii

##### Navigation Bar
- Meniu orizontal cu logo
- Efecte hover animate
- Active state pentru pagina curentă
- Dropdown pentru submeniu (CSS only)

##### Hero Section
- Background gradient sau imagine
- Text overlay cu animație
- Call-to-action button stilizat
- Scroll indicator animat

##### Card Components
- Minimum 3 tipuri de carduri diferite
- Hover effects cu transformări
- Box shadows și border radius
- Consistent spacing și typography

##### Form Styling
- Input-uri custom stilizate
- Focus states și animații
- Error states (cu clase CSS)
- Submit button cu loading state

##### Footer
- Multi-coloană layout
- Social media icons (pot fi placeholder)
- Animații hover pentru link-uri

#### 4. Efecte și animații obligatorii

```css
/* Tranziții smooth */
- Toate elementele interactive să aibă tranziții de 0.3s
- Hover effects pentru butoane și link-uri
- Focus effects pentru input-uri

/* Animații CSS */
- Fade in pentru secțiuni
- Slide in pentru carduri
- Pulse pentru call-to-action
- Rotate pentru icoane la hover

/* Transformări */
- Scale pentru imagini la hover
- Translate pentru butoane la click
- Skew pentru efecte creative (opțional)
```

#### 5. Layout requirements

##### Grid System custom
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}

.col-1, .col-2, .col-3, .col-4 {
    padding: 0 15px;
    /* Implementează sistem de coloane */
}
```

##### Spacing System
- Consistent spacing folosind CSS variables
- Rhythm vertical pentru text
- Proper margins și padding

### Criterii de evaluare
- ✅ **Organizarea codului CSS** (25 puncte)
- ✅ **Design și estetică** (25 puncte)  
- ✅ **Animații și interactivitate** (20 puncte)
- ✅ **Componente reutilizabile** (15 puncte)
- ✅ **Consistența stilurilor** (10 puncte)
- ✅ **Validare CSS** (5 puncte)

---

## Proiect 2: Dashboard administrativ 📊

### Descriere
Creează un dashboard pentru o aplicație de management cu sidebar, header, carduri statistici și tabele de date.

### Cerințe tehnice
- **Layout cu sidebar și main content**
- **Carduri pentru statistici** cu icoane și animații
- **Tabele stilizate** cu sorting indicators
- **Formulare complexe** cu validare vizuală
- **Dark/Light theme** (cu CSS classes)
- **Micro-interactions** pentru UX îmbunătățit

### Structura paginii

#### 1. Layout principal
```html
<div class="dashboard">
    <aside class="sidebar">
        <!-- Navigation menu -->
    </aside>
    <main class="main-content">
        <header class="dashboard-header">
            <!-- User info, notifications, theme toggle -->
        </header>
        <div class="content">
            <!-- Dashboard content -->
        </div>
    </main>
</div>
```

#### 2. Sidebar Navigation
- Logo și titlu aplicație
- Meniu vertical cu icoane
- Active states și hover effects
- Collapse/expand functionality (CSS only)
- User profile section jos

#### 3. Dashboard Header
- Breadcrumb navigation
- Search bar stilizat
- Notifications icon cu badge
- User dropdown menu
- Theme toggle button

#### 4. Content Sections

##### Stats Cards (4 carduri)
```html
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-info">
            <h3 class="stat-number">1,234</h3>
            <p class="stat-label">Total Users</p>
            <span class="stat-trend positive">+12%</span>
        </div>
    </div>
    <!-- Repeat for other stats -->
</div>
```

##### Data Table
- Header sticky
- Alternate row colors  
- Sort indicators în header
- Hover effects pe rânduri
- Action buttons în ultima coloană
- Pagination styling

##### Forms Section
- Multi-step form cu progress indicator
- Grouped form fields
- Custom checkboxes și radio buttons
- File upload area stilizată
- Form validation states

#### 5. Theme System
```css
/* Light theme (default) */
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-primary: #333333;
    --text-secondary: #666666;
    --border-color: #e0e0e0;
}

/* Dark theme */
[data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --border-color: #404040;
}
```

#### 6. Animații specifice
- Loading skeletons pentru carduri
- Progress bars animate
- Slide transitions pentru sidebar
- Fade effects pentru content switching
- Micro-animations pentru butoane

### Specificații tehnice

#### CSS Grid pentru layout
```css
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 100vh;
}

.main-content {
    display: grid;
    grid-template-rows: auto 1fr;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
}
```

#### Flexbox pentru componente
```css
.stat-card {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### Criterii de evaluare
- ✅ **Layout și structură** (25 puncte)
- ✅ **Componente interactive** (25 puncte)
- ✅ **Theme system** (20 puncte)
- ✅ **Animații și micro-interactions** (15 puncte)
- ✅ **Consistența design-ului** (10 puncte)
- ✅ **Code quality** (5 puncte)

---

## Proiect 3: Landing page pentru produs 🚀

### Descriere
Creează o landing page modernă pentru un produs fictiv (app, serviciu, etc.) cu focus pe conversie și UX.

### Cerințe tehnice
- **Above the fold** impact maxim
- **Scroll animations** și parallax effects
- **Call-to-action** buttons optimizate
- **Testimonials section** cu carousel CSS
- **Pricing table** interactivă
- **Performance optimizat** (CSS eficient)

### Structura paginii

#### 1. Hero Section
```html
<section class="hero">
    <div class="hero-background">
        <!-- Animated background shapes -->
    </div>
    <div class="hero-content">
        <h1 class="hero-title">Your Amazing Product</h1>
        <p class="hero-subtitle">Transform your workflow with our solution</p>
        <div class="hero-actions">
            <a href="#" class="btn btn-primary">Get Started</a>
            <a href="#" class="btn btn-secondary">Watch Demo</a>
        </div>
    </div>
    <div class="hero-image">
        <!-- Product mockup or illustration -->
    </div>
</section>
```

#### 2. Features Section
- 6 features cu icoane animate
- Layout în grid 3x2
- Hover effects cu reveal animations
- Progressive disclosure pentru detalii

#### 3. How It Works
- 3-4 pași cu timeline vizual
- Animated connectors între pași
- Ilustrații pentru fiecare pas
- Scroll-triggered animations

#### 4. Testimonials
- Carousel făcut doar cu CSS
- Avatar images cu border effects
- Star ratings vizuale
- Automatic sliding animation

#### 5. Pricing Table
- 3 planuri de preț
- Popular plan evidențiat
- Feature comparison
- Hover effects și animații
- Toggle annual/monthly

#### 6. FAQ Section
- Accordion făcut cu CSS (checkbox hack)
- Smooth expand/collapse
- Icoane care rotesc
- Organized în două coloane

#### 7. CTA Section
- Background gradient animat
- Strong visual hierarchy
- Multiple CTA options
- Social proof elements

### Specificații tehnice

#### Animații scroll-triggered (CSS only)
```css
@keyframes slideInFromLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-on-scroll {
    animation: slideInFromLeft 0.6s ease-out;
}
```

#### Parallax effects
```css
.parallax-element {
    transform: translateY(var(--scroll-offset));
    transition: transform 0.1s linear;
}
```

#### Advanced button styles
```css
.btn-primary {
    position: relative;
    overflow: hidden;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    transition: all 0.3s ease;
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
}

.btn-primary:hover::before {
    left: 100%;
}
```

#### Pricing table animations
```css
.pricing-card {
    transform: scale(1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.pricing-card.featured {
    transform: scale(1.1);
    z-index: 2;
}
```

### Efecte vizuale obligatorii

#### Background animations
- Gradient animat pentru hero
- Floating shapes cu CSS animations
- Particle effect cu pseudo-elements

#### Micro-interactions
- Button hover states elaborate
- Input focus animations
- Card tilt effects
- Progress indicators animate

#### Loading states
- Skeleton screens pentru content
- Progressive image loading effects
- Smooth transitions între stări

### Performance requirements
- CSS optimizat (sub 50KB)
- Animații cu `transform` și `opacity`
- Minimal repaints și reflows
- Efficient selectors

### Criterii de evaluare
- ✅ **Impact vizual și design** (30 puncte)
- ✅ **Animații și interactivitate** (25 puncte)
- ✅ **UX și conversie** (20 puncte)
- ✅ **Implementarea tehnică** (15 puncte)
- ✅ **Performance CSS** (10 puncte)

---

## Instrucțiuni generale

### Cerințe obligatorii pentru toate proiectele
1. ✅ **CSS valid** - verificat cu W3C Validator
2. ✅ **Browser compatibility** - testat în Chrome, Firefox, Safari
3. ✅ **Organized code** - comentarii și structură logică
4. ✅ **No CSS frameworks** - doar CSS vanilla
5. ✅ **Semantic HTML** - structură corectă HTML5

### Resurse recomandate
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Colors**: [Coolors](https://coolors.co/), [Adobe Color](https://color.adobe.com/)
- **Icons**: [Heroicons](https://heroicons.com/), [Feather Icons](https://feathericons.com/)
- **Inspiration**: [Dribbble](https://dribbble.com/), [Behance](https://behance.net/)
- **CSS Reference**: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

### Criterii de notare
- **95-100%**: Proiect excepțional, inovativ, toate cerințele + creativitate
- **85-94%**: Proiect foarte bun, majoritatea cerințelor + atenție la detalii
- **75-84%**: Proiect bun, cerințele de bază îndeplinite corect
- **65-74%**: Proiect acceptabil, unele cerințe lipsesc
- **Sub 65%**: Proiect incomplet, necesită relucrare majoră

### Timeline recomandat
- **Săptămâna 1**: Planificare, wireframes, setup CSS
- **Săptămâna 2**: Implementare layout și componente de bază
- **Săptămâna 3**: Animații, efecte, polish final
- **Săptămâna 4**: Testing, optimizări, documentație

### Livrabile
1. **Folder complet** cu toate fișierele
2. **CSS organizat** în fișiere logice
3. **README.md** cu explicații despre proiect
4. **Screenshots** cu diferite stări ale componentelor
5. **Link către proiect** hosted (opțional: GitHub Pages, Netlify)

**Mult succes la proiecte! 🎨✨**
