### Övning 1: Grundläggande Konfiguration

**Steg 1: Skapa ett Next.js-projekt med TypeScript**
Öppna terminalen och kör kommandot nedan för att skapa ett nytt Next.js-projekt med TypeScript.

```bash
npx create-next-app optima --typescript
cd optima
```

**Steg 2: Skapa en ny fil under mappen `app`**
Sök efter en fil med namnet `page.tsx` i mappen `app`. Detta kommer vara vår startsida.

**Steg 3: Visa ett välkomstmeddelande på sidan**
Skapa en `Home.tsx` component och skriv en enkel React-komponent för att visa ett välkomstmeddelande och några grundläggande detaljer om Optima.

### Övning 2: Dynamisk Ruttning

**Steg 1: Lägg till en dynamisk rutt**
Skapa en ny mapp i mappen `app` med namnet [id], där `id` är det dynamiska värdet vi kommer använda. Skapa en `page.tsx` Använd params från Next.js för att hämta det dynamiska ID från URL:en och visa det på sidan.

**Steg 2: Skapa en lista med studenter i `page.tsx`**
Lägg till en lista med studenter i `/[id]/page.tsx` och använd `Link` från Next.js för att skapa länkar till varje students dynamiska sida.

### Övning 3: Integration av Externt API för Studentdata

**Steg 1: Hämta studentdata från FreeTestAPI**
Skapa en ny fil under mappen `app` med namnet `students.tsx`. Använd `fetch` eller `axios` för att hämta studentdata från https://freetestapi.com/apis/students och visa det på sidan.

### Övning 4: MySQL Databasanvändning med Serverless

**Steg 1: Installera npm-paket för Serverless MySQL**
Öppna terminalen och kör kommandot nedan för att installera `serverless-mysql`.

```bash
npm install serverless-mysql
```

**Steg 2: Konfigurera MySQL och anslut till databasen**
Skapa en ny fil under mappen `app` med namnet `students.tsx`. Använd `serverless-mysql` för att ansluta till en MySQL-databas (t.ex. MySQL Serverless) och spara data från api till databas.

### Övning 5: Autentisering

**Steg 1: Skapa inloggnings- och instrumentpanelssidor**
Skapa två filer under mappen `app`, `login.tsx` och `dashboard.tsx`. Skapa grundläggande formulär för inloggning och en instrumentpanelssida.

**Steg 2: Implementera grundläggande autentisering**
Försök hantera sidnavigering och implementera en grundläggande autentiseringsmekanism med hårdkodade användarnamn och lösenord.

Kom ihåg att anpassa koden efter dina behov och undersök självständigt för att få en djupare förståelse. Lycka till!