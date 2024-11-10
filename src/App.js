// src/App.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import FormNominativo from './FormNominativo';
import giocatori from './giocatori.json';
const App = () => {
  const [giocatori, setGiocatori] = useState([]);
  const [giocSelezionato, setgiocSelezionato] = useState(null);

  // Carica i dati dal server
 const caricaDati = () => {
   // fetch('/api/nominativi')
  fetch('/giocatori.json')
      .then((response) => response.json())
      .then((data) =>{setGiocatori(data.slice(0,20));console.log(data.slice(0,20))} )
   
      .catch((error) => console.error('Errore nel caricamento dei dati:', error));
  };

  useEffect(() => {
    caricaDati();
    
  }, []);

  // Gestisce l'invio del form
  const handleSubmit = (formData) => {
    const nuoviNominativi = formData.id
      ? giocatori.map((item) => (item.id === formData.id ? formData : item))
      : [...giocatori, { ...formData, id: Date.now() }];

    setGiocatori(nuoviNominativi);
    console.log("salvo!")
    console.log(JSON.stringify(nuoviNominativi))
    // Salva i dati sul server
    fetch('/api/salva', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuoviNominativi),
    })
      .then((response) => response.json())
      .then((data) =>{console.log(data);console.log(90090)} )
      .catch((error) => console.error('Errore nel salvataggio dei dati:', error));
  };

  const handleEdit = (nominativo) => {
    setgiocSelezionato(nominativo);
  };

  const handleCancel = () => {
    setgiocSelezionato(null);
  };

  return (
    <div className="app">
      <h1>Gestione Nominativi</h1>
      <FormNominativo
        giocSelezionato={giocSelezionato}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
      <div className="card-container">
        {giocatori.map((item) => (
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
