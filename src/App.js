// src/App.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import FormGiocatore from './FormGiocatore';
import giocatori from './giocatori';

const App = () => {
  const [gopcatori, setNominativi] = useState([]);
  const [giocSelezionato, setgiocSelezionato] = useState(null);

  // Carica i dati iniziali
  useEffect(() => {
    const datiIniziali = [
      { id: 1, nome: 'Mario Rossi', email: 'mario.rossi@example.com', telefono: '1234567890' },
      { id: 2, nome: 'Luigi Verdi', email: 'luigi.verdi@example.com', telefono: '0987654321' },
    ];
    setNominativi(datiIniziali);
  }, []);

  // Gestisce la selezione di una card
  const handleSelect = (id) => {
    const giocatore= giocatori.find((item) => item.id === id);
    setgiocSelezionato(giocatore);
    console.log('Nominativo selezionato:', giocatore);
  };

  const handleEdit = (giocatore) => {
    setgiocSelezionato(giocatore);
  };

  const handleCancel = () => {
    setgiocSelezionato(null);
  };

  return (
    <div className="app">
      <h1>Gestione Giocatori</h1>
      <FormGiocatore
        giocSelezionato={giocSelezionato}
        onSubmit={(formData) => console.log(formData)}
        onCancel={handleCancel}
      />
      <div className="card-container">
        {giocatori.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            nome={item.nome}
            email={item.email}
            telefono={item.telefono}
            onSelect={handleSelect}
            onEdit={() => handleEdit(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
