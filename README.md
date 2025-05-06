# Gruppuppgift API-utveckling med säker hantering av användare

## Gruppmedlemmar

- Frida Nordenlöw
- Maria Jonasson
- Yuliia Ponomarenko

## Kom igång

### 1. Klona repo

För att komma igång, klona projektet till din lokala maskin:

```bash
git clone https://github.com/ditt-användarnamn/ditt-repo-namn.git
```

### 2. Installera beroenden

Navigera till projektets rotmapp och installera de nödvändiga beroendena genom att köra:

```bash
npm install
```

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
