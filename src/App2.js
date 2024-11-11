// src/App.js
import React, { useState, useEffect } from 'react';
import Card from './Card2';
import FormGiocatore from './FormGiocatore';
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
    const nuovoGiocatore = formData.id
      ? giocatori.map((item) => (item.id === formData.id ? formData : item))
      : [...giocatori, { ...formData, id: Date.now() }];

    setGiocatori(nuovoGiocatore);
    console.log("salvo!")
    console.log(JSON.stringify(nuovoGiocatore))
    // Salva i dati sul server
    fetch('/api/salva', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuovoGiocatore),
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


  const handleSelect = (id) => {
    const giocatore = giocatori.find((item) => item.id === id);
    setgiocSelezionato(giocatore);
    console.log('Nominativo selezionato:', giocatore);
  };
  return (
    <div className="app">
      <h1>Gestione Giocatori</h1>
      <FormGiocatore
        giocatoreSelezionato={giocSelezionato}
        onSubmit={(formData) => console.log(formData)}
        onCancel={handleCancel}
      />
      <div className="card-container">
        {giocatori.map((item) => (
          <><Card
            key={item.id}
            id={item.id}
            nome={item.nome}
            email={item.email}
            telefono={item.telefono}

            onSelect={handleSelect}
            onEdit={() => handleEdit(item)} /><button onClick={() => onSelect(id)}>Seleziona</button>
            <button onClick={onEdit}>Modifica</button>
            </>
           
          
        ))}
      </div>
    </div>
  );
};

export default App;
