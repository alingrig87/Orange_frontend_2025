# CSS Positioning

## Tipuri de poziționare

### Static (default)
```css
position: static; /* Fluxul normal al documentului */
```

### Relative
```css
position: relative;
top: 10px;    /* Deplasare față de poziția originală */
left: 20px;
```

### Absolute
```css
position: absolute;
top: 0;       /* Față de primul părinte pozitionat */
right: 0;
```

### Fixed
```css
position: fixed;
top: 0;       /* Față de viewport */
left: 0;
```

### Sticky
```css
position: sticky;
top: 0;       /* Devine fix când ajunge la top */
```

## Z-index și stacking context

```css
.element {
    position: relative;
    z-index: 10;  /* Controlează ordinea pe axa Z */
}
```

## Exemple practice

### Overlay modal
```css
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
}
```

### Sticky header
```css
.header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
}
```

### Tooltip
```css
.tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
}
```
