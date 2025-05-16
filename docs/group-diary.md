# Loggdagbok

Ansvarsområde 1: Frida Nordenlöw

Ansvarsområde 2: Maria Jonasson

Ansvarsområde 3: Yuliia Ponomarenko

---
## Reflektion

### Samarbete

Samarbetet i gruppen har gått bra. Vi har haft en del problem med schemakonflikter men har lyckats lösa detta enkelt genom kommunikation över chatten i Teams, och videomöten. 

Arbetet har primärt varit självständigt inom våra ansvarsområden, men vi har hjälpts åt att felsöka när problem har uppstått. 

### Arbete med backend/API

Att arbeta med backend-delen för att skapa API:er i ett grupprojekt har varit lärorikt och intressant.
Vi har kombinerat frontend och backend och fördjupat oss i hur MongoDB fungerar i jämförelse med t.ex. PHPMyAdmin och SQL.
Att förstå helheten i hur data hanteras, sparas och visas i gränssnittet var en viktig del av uppgiften.

### Arbete med frontend
Arbetet med frontend var inte ett lika stort fokus för oss i denna uppgiften, eftersom det viktigaste var att få alla rörliga delar att fungera tillsammans. Det har varit intressant att få jobba med både front- och backend i samma projekt! 


## Dagbok

### 6/5

Första gruppmötet! 

**Frida:**
Skapa repo för uppgiften

### 7/5

Självstudier

**Alla:**
Tid för att ta igen videomaterial från Sibar.

### 8/5

Självstudier

**Alla:**
Påbörja arbete med backend-delen av uppgiften

**Yuliia:** 
- skapade en användare i MongoDB
- kopplade projektet till databasen
- lade till API-endpoints för recensioner
- gjorde tester i Insomnia.

### 9/5

Daily

**Alla:**
Fortsätta arbete backend

**Frida:**
- Skapade tabell för users 
- Lade in interface och mongoose schema för users
- CRUD

**Maria:**
- Skapade tabell för books 
- Lade in interface och mongoose schema för books
- CRUD

**Yuliia:** 
- Lade till övriga gruppmedlemmar i databasen 
- Skapade middleware/token för PATCH och DELETE av recensioner.

---

### 12/5

Enskilt arbete

**Frida:**
- Installera vite och vue
- Lagt in JWT, bcrypt och middleware för accessToken
- Lagt in vue router
- Slutföra backend delområde 1


**Maria:**
- Fixa klienten miniatyrer av böcker på HomeView delområde 2

**Yuliia:**
Slutföra backend delområde 3

### 13/5

Daily

**Frida:**
- Färdig med backend
- Börja arbetet med klienten

**Maria:**
- Fixa lösenordsskyddade anrop
- Lösenordskyddade adminpaneler

**Yuliia:**
- Färdig med backend
- Påbörja arbetet med klienten
- Created connection with DB för backen och frontend. Redigerade struktur for frontend

### 14/5

Daily

**Frida:**
- Färdig med registrering av användare
- Jobbar på inloggning och adminpanel

**Maria:**
- Nästan färdig med adminpanel för att lägga till ny bok
- Lägg till adminpanel för boklista i tabellform

**Yuliia:**
- Jobbar på boksida för specifika böcker
- Lite strul med att hämta rätt bok med id - förhoppningvis blir detta löst av liggande PR
- Fix - Felet i book.ts var att det stod ref: 'Reviews', men det ska vara ref: 'Review' (utan s).
- Created: file Review with structur in client,
- form för reviews med rating,
- list med reviews för books

**Alla:**
- Felsökning av kod
- Code review av aktuella PRs

### 15/5

**Frida:**
- Lägg till tabell för users
- Felsöka auth och Pinia

**Maria:**
- Figma-skiss
- Fixa styling för sidan 
- Fixa bugg med Pinia för auth

**Yuliia:**
- Fixa Get review by ID

---

## Rapport

### Frida
Ansvarsområde 1, vilket inkluderade:

Skapandet av users-tabellen i MongoDB med fälten: username, password, is_admin, created_at.

Implementering av CRUD-funktionalitet för användare samt inloggningssystem.

API-endpoints för att registrera, logga in och logga ut användare.

Skyddade routes med token för uppdatering och borttagning av användare.

Byggt sidor för registrering och inloggning med formulär.

Skapade en lösenordsskyddad adminpanel som visar alla användare i tabellform (inklusive username, password, is_admin, created_at).

### Maria
Ansvarsområde 2, vilket omfattade:

Skapande av books-tabellen i MongoDB med följande fält:

title (String), description (String), author (String), genres (Array), image (String), published_year (Number), reviews (Array med referenser till Review-objekt).

Implementerat fullständig CRUD-funktionalitet för böcker via API-endpoints:

GET /books – hämta alla böcker

GET /books/:id – hämta en specifik bok med relaterade reviews

POST /books – skapa ny bok (kräver token)

PATCH /books/:id – uppdatera befintlig bok (kräver token)

DELETE /books/:id – ta bort bok (kräver token)

Frontend

Skapade en boklista för besökare där varje bok visas med:

mindre bild, titel, författare, utgivningsår och genre-taggar.

länk till den specifika boksidan.

Skapade en lösenordsskyddad adminpanel som visar alla böcker i en tabell med:

title, author, genres och created_at.

Skapade formulär för att kunna lägga till en ny bok med samtliga fält från databasen.

Skapade skiss för hemsidans utseende i Figma och lade in styling

### Yuliia
Ansvarsområde 3 - har arbetat med delområde 3 i projektet och enligt uppgiften har följande skapats:

En MongoDB-tabell för "reviews" med fälten:
name: String, content: String, rating: Number (1–5), created_at: Date.

Fullständig CRUD-funktionalitet har implementerats med dessa endpoints:

GET /reviews – Hämta alla reviews

GET /reviews/:id – Hämta en specifik review

POST /reviews – Skapa en ny review

PATCH /reviews/:id – Uppdatera en review (med token)

DELETE /reviews/:id – Radera en review (med token)

En specifik boksida har skapats med följande innehåll:

Bokinformation: bild, författare, publiceringsår, titel, beskrivning, genres och en länk för att gå tillbaka.

Ett formulär för att skapa en review kopplad till boken.

En lista över alla recensioner för den specifika boken med: content, rating, name, created_at.

Middleware för tokenhantering för PATCH och DELETE.

Testning av endpoints via Insomnia.

Implementerat frontend-komponenter för att skapa och visa recensioner kopplade till en bok.