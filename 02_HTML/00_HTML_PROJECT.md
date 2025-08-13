# Proiect HTML – Site „Salon de Înfrumusețare” publicat pe GitHub Pages

## Obiectiv

Creează un site HTML complet pentru un salon de înfrumusețare (numele îl alegi tu).  
Site-ul trebuie să conțină **5 pagini**:

1. Home (`index.html`)
2. Prețuri (`preturi.html`)
3. Servicii (`servicii.html`)
4. Galerie foto (`galerie.html`)
5. Contact (`contact.html`)

Se vor folosi **doar taguri HTML** (fără CSS sau JavaScript).

---

## Structura proiectului

```
salon-nume-ales/
│
├── index.html
├── preturi.html
├── servicii.html
├── galerie.html
├── contact.html
│
└── assets/
    └── images/
```

---

## Cerințe

### 1. Crearea și clonarea repository-ului

1. Creează un repository pe GitHub:
   - **Nume:** `salon-nume-ales` (înlocuiește cu numele salonului)
   - Public
   - Cu README
2. Clonează repository-ul:
   ```bash
   git clone https://github.com/<username>/salon-nume-ales.git
   cd salon-nume-ales
   ```

---

### 2. Pagina „Home” (`index.html`)

- **Header**: logo (`<img>` sau `<figure>`), numele salonului (`<h1>`), meniu (`<nav>`).
- **Main**:
  - Prezentare cu `<section>` și `<article>`
  - 2 paragrafe (`<p>`), text evidențiat (`<strong>` și `<em>`)
  - Listă cu puncte forte (`<ul>`)
  - `<aside>` cu promoție
- **Footer**: date contact, copyright.

**Commit #1:**

```bash
git add index.html
git commit -m "Adaug pagina Home"
git push
```

---

### 3. Pagina „Prețuri” (`preturi.html`)

- **Tabel** cu `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `colspan` sau `rowspan`.
- Cel puțin 8 servicii cu durată și preț.
- Footer identic.

**Commit #2:**

```bash
git add preturi.html
git commit -m "Adaug pagina Preturi"
git push
```

---

### 4. Pagina „Servicii” (`servicii.html`)

- Liste ordonate și neordonate.
- Fiecare serviciu într-un `<article>` cu titlu, imagine și descriere.
- `<abbr>` pentru termeni profesionali.
- `<blockquote>` cu recenzie.

**Commit #3:**

```bash
git add servicii.html
git commit -m "Adaug pagina Servicii"
git push
```

---

### 5. Pagina „Galerie” (`galerie.html`)

- Minim 6 imagini în `<figure>` cu `<figcaption>`.
- `<iframe>` pentru video de prezentare.
- `<time>` cu anul deschiderii.

**Commit #4:**

```bash
git add galerie.html
git commit -m "Adaug pagina Galerie"
git push
```

---

### 6. Pagina „Contact” (`contact.html`)

- Formular (`<form>`) cu `<input>`, `<textarea>`, `<select>`, `<button>`.
- Date contact în listă.
- `<iframe>` Google Maps.

**Commit #5:**

```bash
git add contact.html
git commit -m "Adaug pagina Contact"
git push
```

---

### 7. Navigare între pagini

- Meniul `<nav>` identic peste tot.
- Linkuri relative corecte.

**Commit #6:**

```bash
git add .
git commit -m "Adaug navigare între pagini"
git push
```

---

### 8. Comentarii HTML

- `<!-- -->` pentru a marca secțiunile.

**Commit #7:**

```bash
git add .
git commit -m "Adaug comentarii HTML"
git push
```

---

### 9. Verificare finală

- Testează local fiecare pagină.

**Commit #8:**

```bash
git add .
git commit -m "Corectez erorile și pregătesc publicarea"
git push
```

---

### 10. Publicarea pe GitHub Pages

1. Mergi în **Settings → Pages**
2. Selectează branch `main`, folder `/ (root)`
3. Salvează și obține linkul public.

---

# Ghid Taguri HTML

## `<!DOCTYPE html>`

Declară document HTML5.

```html
<!DOCTYPE html>
<!-- Tip document HTML5 -->
```

## `<html>`

Element rădăcină al paginii.

```html
<html lang="ro"></html>
```

## `<head>`

Informații despre pagină.

```html
<head>
	<meta charset="UTF-8" />
	<meta name="description" content="Prezentare salon" />
	<title>Nume salon</title>
</head>
```

## `<body>`

Conținut vizibil.

```html
<body>
	<p>Bun venit!</p>
</body>
```

## `<header>`

Antetul paginii.

```html
<header>
	<h1>Nume salon</h1>
</header>
```

## `<nav>`

Meniu de navigare.

```html
<nav>
	<a href="index.html">Home</a>
</nav>
```

## `<section>`

Secțiune tematică.

```html
<section>
	<h2>Serviciile noastre</h2>
</section>
```

## `<article>`

Conținut independent.

```html
<article>
	<h3>Tuns</h3>
</article>
```

## `<aside>`

Informații secundare.

```html
<aside>
	<p>Promoție specială!</p>
</aside>
```

## `<footer>`

Subsolul paginii.

```html
<footer>
	<p>&copy; 2025 Nume salon</p>
</footer>
```

## `<ul>` și `<li>`

Listă cu bullet points.

```html
<ul>
	<li>Tuns</li>
</ul>
```

## `<ol>` și `<li>`

Listă numerotată.

```html
<ol>
	<li>Pas 1</li>
</ol>
```

## `<table>`

Tabel cu date.

```html
<table border="1">
	<caption>
		Prețuri
	</caption>
	<thead>
		<tr>
			<th>Serviciu</th>
			<th>Preț</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Tuns</td>
			<td>50 RON</td>
		</tr>
	</tbody>
</table>
```

## `<form>`, `<input>`, `<textarea>`, `<button>`

Formular de contact.

```html
<form>
	<label for="nume">Nume</label>
	<input type="text" id="nume" />
	<textarea></textarea>
	<button>Trimite</button>
</form>
```

## `<img>`

Imagine.

```html
<img src="assets/images/logo.png" alt="Logo salon" />
```

## `<a>`

Link.

```html
<a href="https://facebook.com">Facebook</a>
```

## `<figure>` și `<figcaption>`

Imagine cu legendă.

```html
<figure>
	<img src="poza.jpg" alt="" />
	<figcaption>Descriere</figcaption>
</figure>
```

## `<iframe>`

Încorporare conținut extern.

```html
<iframe src="https://maps.google.com"></iframe>
```

## `<abbr>`

Abreviere cu explicație.

```html
<abbr title="Colorare Semi-Permanentă">CSP</abbr>
```

## `<!-- comentariu -->`

Comentariu invizibil.

```html
<!-- Acesta este un comentariu -->
```
