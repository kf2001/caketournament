// src/App.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import FormNominativo from './FormNominativo';
import giocatori from './giocatori.json';
const App = () => {
  const [nominativi, setNominativi] = useState([]);
  const [nominativoSelezionato, setNominativoSelezionato] = useState(null);

  // Carica i dati dal server
  const caricaDati = () => {
   // fetch('/api/nominativi')
   fetch('/giocatori.json')
      .then((response) => response.json())
      .then((data) => setNominativi(data))
      .catch((error) => console.error('Errore nel caricamento dei dati:', error));
  };

  useEffect(() => {
    caricaDati();
  }, []);

  // Gestisce l'invio del form
  const handleSubmit = (formData) => {
    const nuoviNominativi = formData.id
      ? nominativi.map((item) => (item.id === formData.id ? formData : item))
      : [...nominativi, { ...formData, id: Date.now() }];

    setNominativi(nuoviNominativi);

    // Salva i dati sul server
    fetch('/api/nominativi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuoviNominativi),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Errore nel salvataggio dei dati:', error));
  };

  const handleEdit = (nominativo) => {
    setNominativoSelezionato(nominativo);
  };

  const handleCancel = () => {
    setNominativoSelezionato(null);
  };

  return (
    <div className="app">
      <h1>Gestione Nominativi</h1>
      <FormNominativo
        nominativoSelezionato={nominativoSelezionato}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
      <div className="card-container">
        {nominativi.map((item) => (
          <Card
            key={item.id}
            nome={item.nome}
            livello={item.livello}
            squadra={item.squadra}
            gender={item.gender}
            onEdit={() => handleEdit(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
