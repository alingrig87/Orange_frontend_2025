# Tema HTML - Mini-proiecte

## Proiect 1: Site personal complet 🌟

### Descriere
Creează un site personal complet cu multiple pagini interconectate.

### Cerințe tehnice
- **5 pagini HTML** separate și interconectate
- **Navigare funcțională** între toate paginile
- **Structură semantică** completă
- **Formular funcțional** de contact
- **Galerie de imagini** organizată
- **Tabel cu informații** relevante

### Structura site-ului

#### 1. index.html - Pagina principală
```
- Header cu numele tău și meniul de navigare
- Secțiune hero cu poză și motto personal
- Secțiune "Pe scurt despre mine" (3-4 paragrafe)
- Secțiune "Ce fac acum" cu liste
- Footer cu link-uri sociale (chiar dacă sunt placeholder-uri)
```

#### 2. despre.html - Despre mine
```
- Biografia detaliată (minimum 5 paragrafe)
- Timeline cu evenimente importante (listă ordonată)
- Secțiune hobby-uri cu imagini și descrieri
- Citate favorite (folosind <blockquote>)
```

#### 3. experienta.html - Experiență și educație
```
- Tabel cu experiența profesională/școlară
- Lista competențelor (cu sub-categorii)
- Certificări sau cursuri (listă cu link-uri)
- Proiecte realizate (cu descrieri scurte)
```

#### 4. galerie.html - Galerie foto
```
- Minimum 12 imagini organizate în categorii
- Descrieri pentru fiecare imagine
- Link-uri către imagini mai mari
- Navigare între categorii
```

#### 5. contact.html - Contact
```
- Formular complet de contact
- Informații de contact (adresă, telefon, email)
- Hartă (poate fi un placeholder)
- Link-uri sociale
```

### Specificații detaliate

#### Formular de contact (contact.html)
```html
- Nume complet (obligatoriu)
- Email (obligatoriu, validare email)
- Telefon (opțional)
- Subiect (dropdown cu opțiuni: Colaborare, Întrebare, Feedback, Altele)
- Tipul mesajului (radio buttons: Personal, Profesional, Comercial)
- Mesaj (textarea, minimum 10 caractere)
- Cum ai aflat de mine? (checkbox multiple: Google, Recomandare, Social Media, Altele)
- Acordul pentru procesarea datelor (checkbox obligatoriu)
- Butonul de trimitere și resetare
```

#### Tabel experiență (experienta.html)
```
Coloane: Perioada | Instituția/Compania | Rolul | Descrierea | Link
Minimum 5 intrări
Folosește colspan pentru gruparea pe ani
Adaugă culori alternate pentru rânduri
```

#### Navigare și structură
- Meniu consistent pe toate paginile
- Breadcrumbs pe paginile secundare
- Link "Înapoi sus" pe paginile lungi
- Footer identic pe toate paginile

### Criterii de evaluare
- ✅ **Structură semantică** (25 puncte)
- ✅ **Navigare funcțională** (20 puncte)
- ✅ **Formular complet** (20 puncte)
- ✅ **Conținut relevant și organizat** (15 puncte)
- ✅ **Validare HTML** (10 puncte)
- ✅ **Creativitate și atenție la detalii** (10 puncte)

---

## Proiect 2: Portal de știri local 📰

### Descriere
Creează un portal de știri pentru orașul tău cu articole, categorii și funcționalități interactive.

### Cerințe tehnice
- **4 pagini principale** + **6 pagini de articole**
- **Sistema de categorii** pentru organizarea conținutului
- **Formulare interactive** pentru comentarii și newsletter
- **Tabel cu evenimente** locale
- **Galerie foto** pentru fiecare articol

### Structura site-ului

#### 1. index.html - Prima pagină
```
- Header cu logo și meniu principal
- Știrea zilei (articol principal cu imagine mare)
- Ultimele 6 știri (cu preview și link către articol)
- Sidebar cu:
  - Evenimente săptămâna aceasta (tabel)
  - Newsletter signup
  - Vremea (placeholder)
  - Reclame locale (placeholder)
```

#### 2. categorii.html - Toate categoriile
```
- Sport (3 articole)
- Cultură (3 articole)
- Economie local (3 articole)
- Evenimente (3 articole)
- Fiecare categorie cu descriere și numărul de articole
```

#### 3. evenimente.html - Calendar evenimente
```
- Tabel cu evenimente pe următoarele 2 săptămâni
- Formular pentru propunerea de evenimente
- Arhiva evenimentelor trecute (liste cu link-uri)
```

#### 4. contact.html - Contact și echipa
```
- Informații despre redacție
- Echipa (cu poze și roluri)
- Formular pentru tips și sugestii
- Informații de contact
```

#### Pagini articole (6 la număr)
```
Fiecare articol să conțină:
- Titlu și subtitlu
- Data și autorul
- Imagini relevante (2-3 per articol)
- Text structurat cu paragrafe și subtitluri
- Secțiune comentarii cu formular
- Link-uri către articole similare
- Butoane de share (placeholder)
```

### Specificații detaliate

#### Formular comentarii (pe fiecare articol)
```html
- Nume (obligatoriu)
- Email (obligatoriu, nu va fi afișat)
- Website (opțional)
- Comentariul (textarea)
- Rating pentru articol (radio buttons 1-5 stele)
- Notificări pentru răspunsuri (checkbox)
```

#### Tabel evenimente (evenimente.html)
```
Coloane: Data | Ora | Evenimentul | Locația | Prețul | Detalii
Minimum 10 evenimente
Grupează pe săptămâni folosind colspan
Evidențiază evenimentele gratuite
```

#### Formular newsletter (index.html)
```html
- Email (obligatoriu)
- Nume (opțional)
- Categorii de interes (checkbox multiple)
- Frecvența emailurilor (radio: zilnic, săptămânal, lunar)
```

### Criterii de evaluare
- ✅ **Organizarea conținutului** (25 puncte)
- ✅ **Funcționalitatea formularelor** (25 puncte)
- ✅ **Structura articolelor** (20 puncte)
- ✅ **Navigarea și link-urile** (15 puncte)
- ✅ **Validare HTML** (10 puncte)
- ✅ **Creativitate** (5 puncte)

---

## Proiect 3: Site pentru un restaurant 🍽️

### Descriere
Creează un site complet pentru un restaurant cu meniu, rezervări și informații despre locație.

### Cerințe tehnice
- **5 pagini** interconectate
- **Meniu detaliat** cu prețuri în tabele
- **Sistem de rezervări** cu formular complex
- **Galerie foto** cu preparatele
- **Informații complete** despre restaurant

### Structura site-ului

#### 1. index.html - Pagina principală
```
- Header cu logo și meniu de navigare
- Secțiune hero cu imagine și mesaj de bun venit
- "Despre restaurantul nostru" (3 paragrafe)
- Specialitățile casei (listă cu 6 preparate)
- Orarul și informații rapide de contact
- Testimoniale clienți (3 citate cu <blockquote>)
```

#### 2. meniu.html - Meniu complet
```
- 4 categorii principale:
  - Aperitive (6 preparate)
  - Feluri principale (10 preparate)
  - Deserturi (6 preparate)
  - Băuturi (8 opțiuni)
- Fiecare preparat cu: nume, ingrediente, preț, informații alergeni
- Meniu special pentru copii (tabel separat)
- Meniu vegetarian/vegan (listă separată)
```

#### 3. galerie.html - Galerie foto
```
- Imagini cu preparatele (minimum 16)
- Imagini cu interiorul restaurantului (6)
- Imagini cu echipa (4)
- Organizate în categorii cu navigare
```

#### 4. rezervari.html - Rezervări
```
- Formular detaliat de rezervare
- Informații despre politica de rezervări
- Planul salii (poate fi o imagine cu explicații)
- Contact pentru evenimente private
```

#### 5. contact.html - Contact și locație
```
- Adresa completă și indicații
- Orarul detaliat (tabel)
- Număr de telefon și email
- Formular pentru întrebări generale
- Link-uri sociale
- "Cum să ne găsești" (listă cu instrucțiuni)
```

### Specificații detaliate

#### Formular rezervare (rezervari.html)
```html
- Numele persoanei (obligatoriu)
- Telefon (obligatoriu)
- Email (obligatoriu)
- Data rezervării (date picker)
- Ora rezervării (dropdown cu intervale de 30 min)
- Numărul de persoane (dropdown 1-12)
- Tipul mesei (radio: interior, terasă, salon privat)
- Ocazia specială (dropdown: zi de naștere, aniversare, business, etc.)
- Cerințe speciale (textarea)
- Confirmare prin telefon (checkbox)
```

#### Tabel meniu (meniu.html)
```
Pentru fiecare categorie:
Coloane: Preparatul | Ingrediente | Preț | Alergeni | Vegetarian
Minimum 6 preparate per categorie
Evidențiază preparatele recomandate
Folosește simboluri pentru alergeni
```

#### Tabel orar (contact.html)
```
Coloane: Ziua | Orar bucătărie | Orar bar | Observații
Pentru fiecare zi din săptămână
Evidențiază zilele cu program special
```

### Criterii de evaluare
- ✅ **Completitudinea informațiilor** (25 puncte)
- ✅ **Organizarea meniului** (25 puncte)
- ✅ **Funcționalitatea rezervărilor** (20 puncte)
- ✅ **Prezentarea vizuală** (15 puncte)
- ✅ **Validare HTML** (10 puncte)
- ✅ **Atenția la detalii** (5 puncte)

---

## Instrucțiuni generale pentru toate proiectele

### Cerințe obligatorii
1. ✅ **Validare HTML** - toate paginile să treacă validatorul W3C
2. ✅ **Structură semantică** - folosește elementele corecte
3. ✅ **Accesibilitate** - alt text pentru imagini, label-uri pentru input-uri
4. ✅ **Link-uri funcționale** - toate să ducă undeva
5. ✅ **Formularele să fie complete** - cu toate atributele necesare

### Resurse recomandate
- Imagini: [Unsplash](https://unsplash.com/), [Pexels](https://pexels.com/)
- Icoane: [Font Awesome](https://fontawesome.com/) (pentru proiecte viitoare)
- Validare: [W3C Validator](https://validator.w3.org/)
- Inspirație: [Awwwards](https://awwwards.com/), [Dribbble](https://dribbble.com/)

### Criterii de notare generale
- **90-100%**: Proiect excepțional, toate cerințele îndeplinite plus creativitate
- **80-89%**: Proiect foarte bun, majoritatea cerințelor îndeplinite
- **70-79%**: Proiect bun, cerințele de bază îndeplinite
- **60-69%**: Proiect acceptabil, lipsesc unele elemente importante
- **Sub 60%**: Proiect incomplet, necesită relucrare

### Timeline recomandat
- **Săptămâna 1**: Planificare și structura de bază
- **Săptămâna 2**: Conținut și formulare
- **Săptămâna 3**: Finalizare și testare

### Livrabile
1. **Folder cu toate fișierele HTML**
2. **Folder cu imaginile folosite**
3. **Document README** cu explicații despre proiect
4. **Screenshot-uri** cu paginile principale

**Succes la proiecte! 🚀**
