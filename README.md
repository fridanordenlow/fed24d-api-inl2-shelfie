# Gruppuppgift API-utveckling med säker hantering av användare 📚

Detta är ett fullstack-grupprojekt där vi byggt en bokapplikation med fokus på API-utveckling, databasintegration och säker hantering av användare.

Projektet består av en frontend byggd i Vue.js och en backend i Node.js med Express och MongoDB som databas.

## Gruppmedlemmar

- Frida Nordenlöw
- Maria Jonasson
- Yuliia Ponomarenko

## Kom igång 🧭

### 1. Klona repo

För att komma igång, klona projektet till din lokala maskin:

```bash
git clone https://github.com/ditt-användarnamn/ditt-repo-namn.git
```

### 2. Installera beroenden

Navigera till projektets rotmapp och installera de nödvändiga beroendena genom att köra:

# Backend

cd book-api
npm install

# Frontend

cd ../book-client
npm install

### 3. Kör utvecklingsservern

För att starta utvecklingsservern och börja arbeta på projektet, kan du köra `npm run dev` antingen i `client`-mappen för att starta frontend-delen eller i `server`-mappen för att starta backend-delen:

```bash
# För att köra frontend:
cd client
npm run dev

# För att köra backend:
cd server
npm run dev
```

## Mappstruktur

Projektet är uppdelat i två huvudmappar: `client` och `server`, samt en `docs` för vår gruppdagbok.

```
book-app/
├── book-client/              # Frontend
│   ├── public/               # Publika filer som index.html
│   ├── src/                  # Källkod för frontend
│       ├── main.ts
│       ├── style.css
│   ├── package.json          # Frontend-beroenden (kommer skapas senare)
│
├── book-api/                 # Backend
│   ├── src/                  # Backend-kod (Express, API-logik, modeller)
│   │   ├── controllers/      # Hanterar API-logik
│   │   ├── middlewares/      # Middleware-funktioner (t.ex. autentisering - verifyToken.ts)
│   │   ├── models/           # Databasmodeller
│   │   ├── routes/           # API-rutter
│   │   ├── types/            # Typer och interfaces
│   │   └── index.ts          # Startfil för backend-servern
│   └── .env                  # Miljövariabler (t.ex. DB_URL, PORT)
│   ├── package.json          # Backend-beroenden
│   ├── tsconfig.json         # TypeScript-konfiguration
│
├── docs/
│   ├── group-diary.md        # Loggbok för gruppsamarbetet
│
├── .gitignore                # Global gitignore för projektet
├── README.md                 # Denna fil
```

## Funktionalitet ✅

📖 Visa en lista med böcker (bild, titel, författare, år, genres)

🔍 Klicka på en bok för att se detaljerad information och tillhörande recensioner

✍️ Lägg till nya recensioner via formulär

⭐ Visa lista av recensioner med betyg, innehåll, namn och datum

🔐 Adminpanel med inloggning där man kan:

Se alla böcker i tabellform

Skapa, uppdatera och ta bort böcker

Uppdatera eller ta bort recensioner (med token)

## Teknologier 🧩

Vue, Vite
Express, MongoDB, Mongoose
RESTful API (GET, POST, PATCH, DELETE)
Middleware för autentisering
Pinia, Vue Router
Insomnia för testning

## Grupparbete & ansvar 🧑‍🤝‍🧑

**Frida** har arbetat med Ansvarsområde 1, vilket inkluderade:

Skapandet av users-tabellen i MongoDB med fälten: username, password, is_admin, created_at.

Implementering av CRUD-funktionalitet för användare samt inloggningssystem.

API-endpoints för att registrera, logga in och logga ut användare.

Skyddade routes med token för uppdatering och borttagning av användare.

Byggt sidor för registrering och inloggning med formulär.

Skapade en lösenordsskyddad adminpanel som visar alla användare i tabellform (inklusive username, password, is_admin, created_at).

**Maria** har arbetat med Ansvarsområde 2, vilket omfattade:

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

**Yuliia** har arbetat med Ansvarsområde 3, vilket innefattade:

Skapande av modellen Review med fälten: name, content, rating (1–5), created_at.

Implementering av API-endpoints (CRUD) för reviews.

Middleware för tokenhantering för PATCH och DELETE.

Testning av endpoints via Insomnia.

Implementerat frontend-komponenter för att skapa och visa recensioner kopplade till en bok.
