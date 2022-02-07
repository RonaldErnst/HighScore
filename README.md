# HighScore
Eine Web App, mit der man ein Rating von 0-10 festhalten kann.

# Ideen
- tags bei einträgen  
- highscore titel oben rotiert bei tippen zu Höchstem Mal "Dein Highsore: 7.5"  
- Bei Stärke nach 5 mal auf + drücken kann man die Stärke höher als 10 inkrementieren  

# Konzept
- Benutzer mit Accounts
- Unterschiedliche Kategorien (Gras, Shisha, etc.)
- Unterschiedliche Zusammenfassungen & Statistiken ([ChartJS](https://www.chartjs.org/))

# Server starten
`npm start` ausführen oder VSCode so einstellen, dass NodeJS auf server.js zeigt

# TODOs
1. Eigene lokale Branches: dev-ronald, dev-luca, dev-luis
2. Konzept
   1. Allgemeine Funktionalitäten (Später: Details ausarbeiten)
   2. Implementationsdesign erstellen
      1. Front-End Design https://www.figma.com/file/1fLsNXauo0nEMxsShKYgDb/HighScore?node-id=2%3A2
      2. API Schnittstellen: Express
      3. Back-End Design: NodeJS
      4. Datenbank & Tabellenstruktur: Firebase

# Front-End TODOs
**NodeJS**  
1. Seite für Login
2. Seite für Signup
3. Seite für Dashboard, fürs erste mal nur die vom Benutzer angelegten Einträge anzeigen
4. Seite für Ändern der Credentials (Email und passwort bis jetzt nur)

# Routes
/ **\[Dashboard\]**  
/login  
/signup  
/add-entry  

# API TODOs
1. Endpunkte für Routes implementieren  
/api/user/login  
/api/user/add-user  
/api/entry/add-entry  
/api/entry/get-all  
/api/entry/get-all/{user}  

# Back-End TODOs
**NodeJS & Firebase**  
1. Funktion zum anlegen eines Benutzers
2. Funktion zum abmelden eines Benutzers
3. Funktion zum ändern der email & passwort
4. Funktion zum Anlegen eines Eintrags
5. Funktion zum holen aller Einträge
6. Funktion zum holen aller Einträge eines bestimmten Benutzers
