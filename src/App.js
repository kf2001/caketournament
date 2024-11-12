// src/App.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import FormGiocatore from './FormGiocatore';
import giocatori from './giocatori';

const App = () => {
  const [gopcatori, setGiocatori] = useState([]);
  const [giocSelezionato, setgiocSelezionato] = useState(null);


  useEffect(() => {
    
  //  setGiocatori(datiIniziali);
  }, []);

  // Gestisce la selezione di una card
  const handleSelect = (id) => {
    const giocatore= giocatori.find((item) => item.id === id);
    setgiocSelezionato(giocatore);
    console.log('Giocatore selezionato:', giocatore);
  };

  const handleEdit = (giocatore) => {
    setgiocSelezionato(giocatore);
    console.log('Giocatore selezionato:', giocatore);
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
            livello={item.livello}
            gender={item.gender}
            squadra={item.squadra}
            onSelect={handleSelect}
            onEdit={() => handleEdit(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
