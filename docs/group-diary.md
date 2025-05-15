# Loggdagbok

Ansvarsområde 1: Frida Nordenlöw

Ansvarsområde 2: Maria Jonasson

Ansvarsområde 3: Yuliia Ponomarenko

---

## 7/5

Självstudier

## 8/5

Självstudier
**Yuliia** skapade en användare i MongoDB, kopplade projektet till databasen, lade till API-endpoints för recensioner, och gjorde tester i Insomnia.

## 9/5

Daily

**Alla:**
Fortsätta arbete backend
**Yuliia** lade till övriga gruppmedlemmar i databasen och skapade middleware/token för PATCH och DELETE av recensioner.

---

## 12/5

Enskilt arbete

**Frida:**

- Installera vite och vue
- Slutföra backend delområde 1

**Maria:**
Fixa klienten miniatyrer av böcker på HomeView delområde 2

**Yuliia:**
Slutföra backend delområde 3

## 13/5

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
  created connection with DB för backen och frontend. Redigerade struktur for frontend

## 14/5

Daily

**Frida:**

- Färdig med registrering av användare
- Jobbar på inloggning och adminpanel

**Maria:**

- Nästan färdig med adminpanel för att lägga till ny bok
- Jobbar på adminpanel för boklista i tabellform

**Yuliia:**

- Jobbar på boksida för specifika böcker
- Lite strul med att hämta rätt bok med id - förhoppningvis blir detta löst av liggande PR
- Fix - Felet i book.ts var att det stod ref: 'Reviews', men det ska vara ref: 'Review' (utan s).
- Created: file Review with structur in client,
  form för reviews med rating,
  list med reviews för books

**Alla:**

- Felsökning av kod
- Code review av aktuella PRs

---

## Rapport

**Yuliia**
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

## Arbete med backend/API

Att arbeta med backend-delen för att skapa API:er i ett grupprojekt har varit lärorikt och intressant.
Vi har kombinerat frontend och backend och fördjupat oss i hur MongoDB fungerar i jämförelse med t.ex. PHPMyAdmin och SQL.
Att förstå helheten i hur data hanteras, sparas och visas i gränssnittet var en viktig del av uppgiften.
