const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT; // Poort wordt als environment variable gezet door het 'serve' script in package.json.

app.use(express.static(path.join(__dirname, '..','client','public'))); // __dirname verwijst naar de directory van dit app.js script.

app.listen(port, () => {
    console.log(`NodeJS-Express listening at http://localhost:${port}`)
});