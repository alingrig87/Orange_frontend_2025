# Mobile Responsive Design

## Media Queries

### Sintaxa de bază
```css
@media screen and (max-width: 768px) {
    .container {
        width: 100%;
        padding: 10px;
    }
}
```

### Breakpoints comune
```css
/* Mobile first approach */
/* Mobile styles (default) */
.container { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
    .container { width: 750px; }
}

/* Desktop */
@media (min-width: 1024px) {
    .container { width: 1200px; }
}

/* Large desktop */
@media (min-width: 1200px) {
    .container { max-width: 1400px; }
}
```

## Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## CSS Grid Responsive
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}
```

## Responsive Images
```css
img {
    max-width: 100%;
    height: auto;
}

/* Art direction */
@media (max-width: 768px) {
    .hero-image {
        object-position: center top;
    }
}
```

## Responsive Typography
```css
/* Fluid typography */
h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Media query approach */
h1 { font-size: 2rem; }

@media (min-width: 768px) {
    h1 { font-size: 2.5rem; }
}

@media (min-width: 1024px) {
    h1 { font-size: 3rem; }
}
```

## Mobile Navigation
```css
/* Hamburger menu */
.mobile-menu {
    display: none;
}

@media (max-width: 768px) {
    .desktop-menu { display: none; }
    .mobile-menu { display: block; }
}
```
