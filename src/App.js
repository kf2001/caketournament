// src/App.js
import React, { useState } from 'react';
import FormNominativo from './FormNominativo';
import giocatori from './giocatori';
import Card from './Card';
const App = () => {
  const [nominativoSelezionato, setNominativoSelezionato] = useState({
    id: 1,
    nome: 'Mario Rossi',
    email: 'mario.rossi@example.com',
    telefono: '1234567890',
  });

  // Funzione per aggiornare il nominativo
  const handleUpdateNominativo = (nuovoNominativo) => {
    setNominativoSelezionato(nuovoNominativo);
    console.log('Nominativo aggiornato:', nuovoNominativo);
  };

  return (
    <div>
      <h1>Gestione Nominativi</h1>
      <FormNominativo
        nominativo={nominativoSelezionato}
        onUpdate={handleUpdateNominativo}
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
          //  onSelect={handleSelect}
          //  onEdit={() => handleEdit(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
