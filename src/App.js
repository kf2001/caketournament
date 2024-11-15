// src/App.js
import React, { useState } from 'react';
import FormNominativo from './FormNominativo';

const App = () => {
  const [nominativoSelezionato, setNominativoSelezionato] = useState({
    id: 1,
    nome: 'Mario Rossi',
    email: 'mario.rossi@example.com',
    telefono: '1234567890',
  });

  // Funzione per aggiornare il nominativo
  const handleUpdateNominativo = (nuovoNominativo) => {
    nuovoNominativo.nome="Alan"
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
    </div>
  );
};

export default App;
