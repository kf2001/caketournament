// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware per gestire le richieste JSON
app.use(express.json());

// Percorso al file JSON nella cartella public
const filePath = path.join(__dirname, 'public', 'giocatori.json');

// Endpoint per ottenere i dati
app.get('/api/nominativi', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Errore nella lettura del file' });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint per salvare i dati
app.post('/api/nominativi', (req, res) => {
  const nuoviDati = JSON.stringify(req.body, null, 2);

  // Scrive i dati nel file data.json
  fs.writeFile(filePath, nuoviDati, 'utf8', (err) => {
    if (err) {
      return res.status(500).json({ error: 'Errore nella scrittura del file' });
    }
    res.json({ message: 'Dati salvati con successo!' });
  });
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
