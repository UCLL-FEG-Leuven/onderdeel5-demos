In de package.json bestanden in /, /client en /server kan je terugvinden welke afhankelijkheden er zijn.  
De afhankelijkheid ```concurrently``` in / wordt gebruikt om npm scripts in parallel uit te voeren.  
De afhankelijkheid ```cross-env``` in /server wordt gebruikt om een PORT environment variabele 'cross platform' te kunnen instellen (dus dit zou moeten werken op Windows en Unix/Linux systemen).

Dit project bestaat uit een oplossing zonder webpack (```client/public/index.nowebpack.html```) en een deeloplossing met webpack (```client/public/index.webpack.html```).

# Uitvoeren

Automatisch:
1. Open een terminal in ```Domain.JavaScript.Geavanceerd.Web```.
2. ```npm run start```

Manueel:
1. Open een terminal in ```Domain.JavaScript.Geavanceerd.Web```
2. ```cd client```
3. ```npm install```
4. ```npx webpack --watch```
5. Open een 2e terminal in ```Domain.JavaScript.Geavanceerd.Web```
6. ```cd server```
7. ```npm install```
9. ```node app.js```

Ga vervolgens naar http://localhost:3000.