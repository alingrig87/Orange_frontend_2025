# Tema CSS FlexBox - Mini-proiecte

## Proiect 1: E-commerce Product Grid 🛒

### Descriere
Creează o pagină de produse pentru un magazin online cu layout complet flexibil, fără folosirea Grid CSS.

### Cerințe tehnice
- **Layout complet cu FlexBox** (fără Grid, fără float, fără position absolute)
- **Responsive design** doar cu FlexBox properties
- **Componente interactive** cu hover effects
- **Filtering și sorting** visual (fără JavaScript)
- **Shopping cart** component în header

### Structura paginii

#### 1. Header E-commerce
```html
<header class="ecommerce-header">
    <div class="header-container">
        <div class="logo-section">
            <div class="logo">ShopFlex</div>
        </div>
        
        <div class="search-section">
            <form class="search-form">
                <input type="search" placeholder="Caută produse...">
                <button type="submit">🔍</button>
            </form>
        </div>
        
        <div class="user-section">
            <div class="user-actions">
                <a href="#" class="user-link">👤 Cont</a>
                <a href="#" class="cart-link">
                    🛒 Coș
                    <span class="cart-count">3</span>
                </a>
            </div>
        </div>
    </div>
    
    <nav class="main-navigation">
        <ul class="nav-list">
            <li><a href="#">Toate produsele</a></li>
            <li><a href="#">Electronice</a></li>
            <li><a href="#">Îmbrăcăminte</a></li>
            <li><a href="#">Casă & Grădină</a></li>
            <li><a href="#">Sport</a></li>
        </ul>
    </nav>
</header>
```

#### 2. Main Content Layout
```html
<main class="main-content">
    <aside class="sidebar-filters">
        <div class="filter-section">
            <h3>Filtrează după</h3>
            
            <div class="filter-group">
                <h4>Preț</h4>
                <div class="price-filters">
                    <label><input type="checkbox"> Sub 100 lei</label>
                    <label><input type="checkbox"> 100-500 lei</label>
                    <label><input type="checkbox"> Peste 500 lei</label>
                </div>
            </div>
            
            <div class="filter-group">
                <h4>Rating</h4>
                <div class="rating-filters">
                    <label><input type="checkbox"> ⭐⭐⭐⭐⭐ (5 stele)</label>
                    <label><input type="checkbox"> ⭐⭐⭐⭐ (4+ stele)</label>
                    <label><input type="checkbox"> ⭐⭐⭐ (3+ stele)</label>
                </div>
            </div>
        </div>
    </aside>
    
    <section class="products-section">
        <div class="products-header">
            <div class="results-info">
                <span>Găsite 24 produse</span>
            </div>
            <div class="sort-options">
                <select class="sort-select">
                    <option>Sortează după</option>
                    <option>Preț crescător</option>
                    <option>Preț descrescător</option>
                    <option>Popularitate</option>
                    <option>Rating</option>
                </select>
            </div>
        </div>
        
        <div class="products-grid">
            <!-- 12 product cards -->
        </div>
        
        <div class="pagination">
            <button class="page-btn">« Anterior</button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <button class="page-btn">Următor »</button>
        </div>
    </section>
</main>
```

#### 3. Product Card Component
```html
<div class="product-card">
    <div class="product-image-container">
        <img src="product.jpg" alt="Product" class="product-image">
        <div class="product-badge">-20%</div>
        <div class="product-actions">
            <button class="quick-view">👁️</button>
            <button class="add-to-wishlist">❤️</button>
        </div>
    </div>
    
    <div class="product-info">
        <h3 class="product-title">Numele produsului</h3>
        <div class="product-rating">
            <span class="stars">⭐⭐⭐⭐⭐</span>
            <span class="review-count">(24 reviews)</span>
        </div>
        <div class="product-price">
            <span class="current-price">299 lei</span>
            <span class="old-price">399 lei</span>
        </div>
        <button class="add-to-cart-btn">Adaugă în coș</button>
    </div>
</div>
```

### Specificații FlexBox

#### Layout Principal
```css
.ecommerce-header {
    display: flex;
    flex-direction: column;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main-content {
    display: flex;
    gap: 2rem;
    min-height: calc(100vh - header-height);
}

.sidebar-filters {
    flex: 0 0 250px;  /* Sidebar fix */
}

.products-section {
    flex: 1;  /* Ocupă restul spațiului */
    display: flex;
    flex-direction: column;
}
```

#### Products Grid
```css
.products-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    flex: 1;  /* Crește pentru a ocupa spațiul */
}

.product-card {
    flex: 1 1 280px;  /* Minimum 280px, apoi wrap */
    max-width: 320px;  /* Maximum pentru a nu fi prea late */
    display: flex;
    flex-direction: column;
}
```

#### Product Card FlexBox
```css
.product-card {
    display: flex;
    flex-direction: column;
    height: 100%;  /* Equal height cards */
}

.product-info {
    display: flex;
    flex-direction: column;
    flex: 1;  /* Ocupă spațiul rămas */
    padding: 1rem;
}

.product-price {
    margin-top: auto;  /* Push la bottom */
}

.add-to-cart-btn {
    margin-top: 1rem;
}
```

### Cerințe specifice

#### 1. Responsive Behavior (fără media queries)
- Cards să se rearanjeze automat
- Sidebar să se comporte flexibil
- Header să rămână functional pe toate dimensiunile

#### 2. Hover Effects și Animații
- Product cards cu lift effect
- Image hover cu overlay
- Button hover states
- Smooth transitions (0.3s)

#### 3. FlexBox Advanced Features
- Folosește `order` pentru rearanjarea elementelor
- Implementează `align-self` pentru elemente speciale
- Folosește `flex-grow` și `flex-shrink` strategic
- Implementează `gap` pentru spațiere consistentă

### Criterii de evaluare
- ✅ **Layout FlexBox corect** (30 puncte)
- ✅ **Responsive fără media queries** (25 puncte)
- ✅ **Componente interactive** (20 puncte)
- ✅ **Consistența design-ului** (15 puncte)
- ✅ **Code quality** (10 puncte)

---

## Proiect 2: Social Media Dashboard 📱

### Descriere
Creează un dashboard pentru social media management cu timeline, statistici și postări, totul construit cu FlexBox.

### Cerințe tehnice
- **Multi-column layout** cu FlexBox
- **Timeline vertical** cu postări
- **Statistics cards** cu animații
- **Notification system** visual
- **Mobile-first approach** doar cu FlexBox

### Structura Dashboard-ului

#### 1. App Layout
```html
<div class="dashboard-app">
    <header class="app-header">
        <div class="header-left">
            <div class="app-logo">📱 SocialDash</div>
            <nav class="main-nav">
                <a href="#" class="nav-item active">Dashboard</a>
                <a href="#" class="nav-item">Posts</a>
                <a href="#" class="nav-item">Analytics</a>
                <a href="#" class="nav-item">Settings</a>
            </nav>
        </div>
        
        <div class="header-right">
            <div class="notifications">
                <button class="notification-btn">
                    🔔
                    <span class="notification-badge">5</span>
                </button>
            </div>
            <div class="user-profile">
                <img src="avatar.jpg" alt="User" class="avatar">
                <span class="user-name">John Doe</span>
            </div>
        </div>
    </header>
    
    <main class="dashboard-main">
        <section class="stats-section">
            <!-- Statistics cards -->
        </section>
        
        <section class="content-section">
            <div class="timeline-column">
                <!-- Timeline posts -->
            </div>
            <div class="activity-column">
                <!-- Recent activity -->
            </div>
        </section>
    </main>
</div>
```

#### 2. Statistics Cards
```html
<div class="stats-grid">
    <div class="stat-card followers">
        <div class="stat-icon">👥</div>
        <div class="stat-content">
            <div class="stat-number">12.5K</div>
            <div class="stat-label">Followers</div>
            <div class="stat-trend positive">
                <span class="trend-arrow">↗️</span>
                <span class="trend-value">+12%</span>
            </div>
        </div>
    </div>
    
    <div class="stat-card engagement">
        <div class="stat-icon">💬</div>
        <div class="stat-content">
            <div class="stat-number">3.2K</div>
            <div class="stat-label">Engagement</div>
            <div class="stat-trend positive">
                <span class="trend-arrow">↗️</span>
                <span class="trend-value">+8%</span>
            </div>
        </div>
    </div>
    
    <div class="stat-card posts">
        <div class="stat-icon">📝</div>
        <div class="stat-content">
            <div class="stat-number">156</div>
            <div class="stat-label">Posts</div>
            <div class="stat-trend neutral">
                <span class="trend-arrow">➡️</span>
                <span class="trend-value">0%</span>
            </div>
        </div>
    </div>
    
    <div class="stat-card reach">
        <div class="stat-icon">📊</div>
        <div class="stat-content">
            <div class="stat-number">45.2K</div>
            <div class="stat-label">Reach</div>
            <div class="stat-trend negative">
                <span class="trend-arrow">↘️</span>
                <span class="trend-value">-3%</span>
            </div>
        </div>
    </div>
</div>
```

#### 3. Timeline Component
```html
<div class="timeline">
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <div class="post-card">
                <div class="post-header">
                    <div class="post-user">
                        <img src="user.jpg" class="post-avatar">
                        <div class="post-info">
                            <span class="post-name">Maria Popescu</span>
                            <span class="post-time">2 ore în urmă</span>
                        </div>
                    </div>
                    <div class="post-platform">📘 Facebook</div>
                </div>
                
                <div class="post-content">
                    <p>Just launched our new product! Excited to share this with everyone.</p>
                    <img src="post-image.jpg" class="post-image">
                </div>
                
                <div class="post-stats">
                    <div class="stat-item">
                        <span class="stat-icon">❤️</span>
                        <span class="stat-count">24</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">💬</span>
                        <span class="stat-count">8</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">🔄</span>
                        <span class="stat-count">3</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Repeat for more timeline items -->
</div>
```

### Specificații FlexBox Advanced

#### Dashboard Layout
```css
.dashboard-app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;  /* Header nu se micșorează */
}

.dashboard-main {
    display: flex;
    flex-direction: column;
    flex: 1;  /* Ocupă spațiul rămas */
    gap: 2rem;
}
```

#### Statistics Grid
```css
.stats-grid {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.stat-card {
    flex: 1 1 250px;  /* Minimum 250px */
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-4px);
}

.stat-content {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.stat-trend {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
}
```

#### Timeline Layout
```css
.content-section {
    display: flex;
    gap: 2rem;
    flex: 1;
}

.timeline-column {
    flex: 2;  /* Mai larg */
}

.activity-column {
    flex: 1;  /* Mai îngust */
}

.timeline {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.timeline-item {
    display: flex;
    gap: 1rem;
}

.timeline-content {
    flex: 1;
}
```

#### Post Card FlexBox
```css
.post-card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.post-user {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.post-info {
    display: flex;
    flex-direction: column;
}

.post-stats {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    border-top: 1px solid #eee;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
```

### Cerințe avansate

#### 1. Responsive Stacking
- Stats cards să se stack pe mobile
- Timeline să devină single column
- Header să se adapteze (fără hamburger menu)

#### 2. Interactive Elements
- Hover effects pentru toate cardurile
- Active states pentru navigation
- Loading states pentru statistics

#### 3. Advanced FlexBox Usage
- `align-self` pentru elemente speciale
- `order` pentru rearanjarea pe mobile
- `flex-basis` pentru dimensiuni precise
- `gap` pentru spațiere consistentă

### Criterii de evaluare
- ✅ **Layout complex cu FlexBox** (30 puncte)
- ✅ **Timeline și componente** (25 puncte)
- ✅ **Responsive behavior** (20 puncte)
- ✅ **Interactive elements** (15 puncte)
- ✅ **Code organization** (10 puncte)

---

## Proiect 3: Portfolio Photographer 📸

### Descriere
Creează un portfolio pentru un fotograf cu galerie masonry-style, folosind doar FlexBox (fără CSS Grid).

### Cerințe tehnice
- **Masonry layout** cu FlexBox
- **Lightbox effect** doar cu CSS
- **Category filtering** visual
- **Image lazy loading** styling
- **Print-ready** layout

### Structura Portfolio

#### 1. Hero Section
```html
<section class="hero">
    <div class="hero-background">
        <img src="hero-bg.jpg" alt="Photography" class="hero-image">
    </div>
    <div class="hero-content">
        <h1 class="hero-title">John Smith</h1>
        <p class="hero-subtitle">Professional Photographer</p>
        <div class="hero-specialties">
            <span class="specialty">Weddings</span>
            <span class="specialty">Portraits</span>
            <span class="specialty">Nature</span>
        </div>
        <a href="#gallery" class="cta-button">View Portfolio</a>
    </div>
</section>
```

#### 2. Gallery Section
```html
<section id="gallery" class="gallery-section">
    <div class="gallery-header">
        <h2>Portfolio</h2>
        <div class="gallery-filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="wedding">Weddings</button>
            <button class="filter-btn" data-filter="portrait">Portraits</button>
            <button class="filter-btn" data-filter="nature">Nature</button>
            <button class="filter-btn" data-filter="event">Events</button>
        </div>
    </div>
    
    <div class="masonry-gallery">
        <div class="masonry-column">
            <div class="gallery-item wedding">
                <img src="wedding-1.jpg" alt="Wedding photo">
                <div class="item-overlay">
                    <div class="item-info">
                        <h3>Sarah & Mike Wedding</h3>
                        <p>June 2024</p>
                    </div>
                    <button class="view-btn">👁️ View</button>
                </div>
            </div>
            
            <div class="gallery-item portrait">
                <img src="portrait-1.jpg" alt="Portrait photo">
                <div class="item-overlay">
                    <div class="item-info">
                        <h3>Corporate Portrait</h3>
                        <p>Business Photography</p>
                    </div>
                    <button class="view-btn">👁️ View</button>
                </div>
            </div>
        </div>
        
        <div class="masonry-column">
            <!-- More gallery items -->
        </div>
        
        <div class="masonry-column">
            <!-- More gallery items -->
        </div>
    </div>
</section>
```

#### 3. Services Section
```html
<section class="services">
    <h2>Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <div class="service-icon">💒</div>
            <h3>Wedding Photography</h3>
            <p>Capturing your special day with artistic vision and attention to detail.</p>
            <div class="service-features">
                <span class="feature">✓ Full day coverage</span>
                <span class="feature">✓ 500+ edited photos</span>
                <span class="feature">✓ Online gallery</span>
            </div>
            <div class="service-price">Starting at €1,200</div>
        </div>
        
        <!-- More service cards -->
    </div>
</section>
```

### Implementarea Masonry cu FlexBox

#### Layout Principal
```css
.masonry-gallery {
    display: flex;
    gap: 1rem;
    align-items: flex-start;  /* Important pentru masonry */
}

.masonry-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Responsive columns */
@media (max-width: 768px) {
    .masonry-gallery {
        flex-direction: column;
    }
    
    .masonry-column {
        flex: none;
    }
}
```

#### Gallery Items
```css
.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    background-color: #f5f5f5;
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: scale(1.02);
}

.gallery-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.item-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        to bottom,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0.8) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.gallery-item:hover .item-overlay {
    opacity: 1;
}
```

#### Lightbox Effect (CSS Only)
```html
<!-- Checkbox hack pentru lightbox -->
<input type="checkbox" id="lightbox-1" class="lightbox-toggle">
<div class="gallery-item">
    <img src="photo.jpg" alt="Photo">
    <label for="lightbox-1" class="lightbox-trigger">
        <span class="view-btn">👁️ View</span>
    </label>
</div>

<div class="lightbox">
    <label for="lightbox-1" class="lightbox-close">✕</label>
    <img src="photo-large.jpg" alt="Photo large">
</div>
```

```css
.lightbox-toggle {
    display: none;
}

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.lightbox-toggle:checked + .gallery-item + .lightbox,
.lightbox-toggle:checked ~ .lightbox {
    opacity: 1;
    visibility: visible;
}

.lightbox img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
}
```

#### Services Grid
```css
.services-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.service-card {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    text-align: center;
}

.service-features {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1.5rem 0;
    flex: 1;  /* Ocupă spațiul disponibil */
}

.service-price {
    margin-top: auto;  /* Push la bottom */
    font-size: 1.25rem;
    font-weight: bold;
    color: #007bff;
}
```

### Cerințe speciale

#### 1. Print Styles
```css
@media print {
    .masonry-gallery {
        flex-direction: column;
    }
    
    .gallery-item {
        break-inside: avoid;
        margin-bottom: 1rem;
    }
    
    .item-overlay {
        display: none;
    }
}
```

#### 2. Loading States
```css
.gallery-item.loading {
    background: linear-gradient(
        90deg,
        #f0f0f0 25%,
        #e0e0e0 50%,
        #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
```

#### 3. Advanced FlexBox Features
- `align-content` pentru distribuția coloanelor
- `flex-basis` pentru dimensiuni inițiale
- `order` pentru rearanjarea pe mobile
- `align-self` pentru elemente speciale

### Criterii de evaluare
- ✅ **Masonry layout cu FlexBox** (35 puncte)
- ✅ **Lightbox și interactivitate** (25 puncte)
- ✅ **Responsive design** (20 punkte)
- ✅ **Performance și optimizare** (15 puncte)
- ✅ **Creativitate și polish** (5 puncte)

---

## Instrucțiuni generale

### Cerințe obligatorii
1. ✅ **Doar FlexBox** - fără Grid, float, position absolute pentru layout
2. ✅ **CSS valid** - verificat cu W3C Validator
3. ✅ **Semantic HTML** - structură corectă
4. ✅ **Responsive** - funcționează pe toate dimensiunile
5. ✅ **Cross-browser** - testat în Chrome, Firefox, Safari

### FlexBox Properties obligatorii de folosit
- `display: flex` / `inline-flex`
- `flex-direction` (toate variantele)
- `justify-content` (minimum 3 variante)
- `align-items` (minimum 3 variante)
- `flex-wrap`
- `flex-grow`, `flex-shrink`, `flex-basis`
- `flex` (shorthand)
- `order`
- `align-self`
- `gap` (unde e suportat)

### Criterii de notare generale
- **95-100%**: Implementare perfectă, toate cerințele + inovație
- **85-94%**: Foarte bun, majoritatea cerințelor + atenție la detalii
- **75-84%**: Bun, cerințele de bază îndeplinite corect
- **65-74%**: Acceptabil, unele cerințe lipsesc
- **Sub 65%**: Incomplet, necesită relucrare

### Timeline recomandat
- **Săptămâna 1**: HTML structure și FlexBox layout de bază
- **Săptămâna 2**: Stilizare și componente
- **Săptămâna 3**: Responsive și animații
- **Săptămâna 4**: Testing, optimizări, polish

### Livrabile
1. **Folder complet** cu toate fișierele
2. **CSS organizat** și comentat
3. **README.md** cu explicații despre FlexBox usage
4. **Screenshots** cu layout-ul pe diferite dimensiuni
5. **Demo live** (opțional: GitHub Pages)

**Succes cu proiectele FlexBox! 💪📦**
