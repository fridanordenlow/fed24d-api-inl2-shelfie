# Gruppuppgift API-utveckling med säker hantering av användare 📚

Shelfie är ett fullstack-grupprojekt där vi har utvecklat en bokapplikation med fokus på API-utveckling, databasintegration och säker användarhantering.

Applikationen består av en frontend byggd i Vue.js och en backend i Node.js med Express.js, med MongoDB som databas. Shelfie låter användare bläddra bland böcker, läsa och skriva recensioner samt hantera innehåll via en skyddad adminpanel. Projektet syftar till att tillämpa moderna principer för webbutveckling och säkerhet, inklusive autentisering med JSON Web Tokens och rollbaserad åtkomstkontroll.

## Gruppmedlemmar

- Frida Nordenlöw
- Maria Jonasson
- Yuliia Ponomarenko

## Kom igång 🧭

### 1. Klona repo

För att komma igång, klona projektet till din lokala maskin:

```bash
git clone https://github.com/fridanordenlow/fed24d-api-inl2-grupp14.git
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

För att starta utvecklingsservern och börja arbeta på projektet, kan du köra `npm run dev` antingen i `book-client`-mappen för att starta frontend-delen eller i `book-api`-mappen för att starta backend-delen:

```bash
# För att köra frontend:
cd book-client
npm run dev

# För att köra backend:
cd book-api
npm run dev
```

## Mappstruktur

Projektet är organiserat i tre huvuddelar:

- `book-api` – backendapplikationen byggd med Express och TypeScript
- `book-client` – frontendapplikationen byggd med Vue
- `docs` – dokumentation som innehåller gruppens dagbok samt exporterade datatabeller från MongoDB

Denna struktur underlättar en tydlig separation mellan klient och server, samt erbjuder en gemensam plats för dokumentation och databasrelaterat innehåll.

```
book-app/
├── book-api/                 # Backend
│   ├── src/                  # Källkod (Express, API-logik, modeller)
│   │   ├── controllers/      # Hanterar affärslogik för API:et
│   │   ├── middlewares/      # Middleware-funktioner
│   │   ├── models/           # Databasmodeller
│   │   ├── routes/           # API-rutter
│   │   ├── types/            # Typer och gränssnitt
│   │   └── index.ts          # Startfil för servern
│   ├── .env                  # Miljövariabler
│   ├── package.json          # Projektets beroenden
│   ├── tsconfig.json         # TypeScript-konfiguration
│
├── book-client/              # Frontend
│   ├── public/               # Statisk media (bilder, ikoner)
│   ├── src/                  # Källkod för frontend
│   │   ├── assets/
│   │   ├── components/
│   │   ├── models/
│   │   ├── router/
│   │   ├── stores/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.js
│   ├── .env                  # Miljövariabler
│   ├── index.html
│   ├── jsconfig.json         # JavaScript-konfiguration
│   ├── package.json          # Projektets beroenden
│   └── vite.config.json      # Vite-konfiguration
│
├── docs/
│   ├── database-tables/      # Exporterade databastabeller (JSON)
│   └── group-diary.md        # Loggbok för grupparbetet
│
├── .gitignore                # Ignorerade filer för Git
└── README.md                 # Denna dokumentation
```

## Funktionalitet ✅

### 📚 Böcker

- Visa en lista med böcker inklusive bild, titel, författare, år och genre-taggar
- Klicka på en bok för att se detaljerad information och tillhörande recensioner

### ✍️ Recensioner

- Lägg till nya recensioner via formulär kopplat till en bok
- Visa lista av recensioner med betyg (1–5), innehåll, namn och datum
- Admin kan uppdatera eller ta bort recensioner (kräver token)

### 🔐 Användare & autentisering

- Registrera och logga in som användare
- JWT-baserad autentisering för skyddade routes

### ⚙️ Adminpanel

- Skyddad inloggning krävs för att nå adminpanel
- Visa alla böcker i tabellform
- Lägga till nya böcker
- Visa alla användare i tabellform

## Teknologier 🧩

- Vue, Vite
- Express, MongoDB, Mongoose
- RESTful API (GET, POST, PATCH, DELETE)
- Middleware för autentisering
- Pinia, Vue Router
- Insomnia för API-testning
