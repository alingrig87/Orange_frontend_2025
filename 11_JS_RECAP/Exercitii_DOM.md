# Exerciții de DOM Manipulation

## Introducere

Înainte de a începe cu exercițiile de manipulare a DOM-ului, asigură-te că ai un fișier HTML de bază ca acesta:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Exerciții DOM</title>
	</head>
	<body>
		<div id="container">
			<h1>Bun venit!</h1>
			<p id="text">Acesta este un paragraf de test.</p>
			<button id="changeTextBtn">Schimbă textul</button>
		</div>

		<script src="script.js"></script>
	</body>
</html>
```

Apoi, fiecare exercițiu va avea un script JavaScript în care să fie realizată manipularea DOM-ului.

## Exercițiul 1: Schimbă textul unui element

### Descriere

Schimbă textul din elementul `<p>` când se apasă butonul.

---

## Exercițiul 2: Adaugă un nou element într-o listă

### Descriere

Creează un element nou și adaugă-l la o listă neordonată când se apasă un buton.

### HTML Suplimentar

```html
<ul id="myList">
	<li>Element 1</li>
	<li>Element 2</li>
</ul>
<button id="addElementBtn">Adaugă element</button>
```

---

## Exercițiul 3: Schimbă culoarea unui element

### Descriere

Schimbă culoarea textului unui element când treci cu mouse-ul peste el.

---

## Exercițiul 4: Șterge un element

### Descriere

Șterge ultimul element dintr-o listă.

### HTML Suplimentar

```html
<button id="removeElementBtn">Șterge ultimul element</button>
```

---

## Exercițiul 5: Modifică atributele unui element

### Descriere

Modifică atributul `src` al unei imagini.

### HTML Suplimentar

```html
<img id="myImage" src="image1.jpg" alt="Imagine de test" width="200" />
<button id="changeImageBtn">Schimbă imaginea</button>
```

---

## Exercițiul 6: Creează și inserează o div cu text dinamizat

### Descriere

La apăsarea unui buton, creează un `div` cu text dinamic și inserează-l pe pagină.

---

## Exercițiul 7: Alternarea vizibilității unui element

### Descriere

Ascunde și arată un element la apăsarea unui buton.

### HTML Suplimentar

```html
<button id="toggleVisibilityBtn">Arată/Ascunde textul</button>
```

---

## Exercițiul 8: Adaugă clase dinamice

### Descriere

Adaugă o clasă CSS unui element la apăsarea unui buton.

### CSS Suplimentar

```css
.hidden {
	display: none;
}
```

---

## Exercițiul 9: Modificarea conținutului dinamic într-un input

### Descriere

Modifică valoarea unui câmp input dinamic la apăsarea unui buton.

### HTML Suplimentar

```html
<input type="text" id="myInput" value="Valoare inițială" />
<button id="changeInputBtn">Schimbă valoarea inputului</button>
```

---
