// src/App.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import FormNominativo from './FormNominativo';

const App = () => {
  const [nominativi, setNominativi] = useState([]);
  const [nominativoSelezionato, setNominativoSelezionato] = useState(null);

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
    const nominativo = nominativi.find((item) => item.id === id);
    setNominativoSelezionato(nominativo);
    console.log('Nominativo selezionato:', nominativo);
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
        onSubmit={(formData) => console.log(formData)}
        onCancel={handleCancel}
      />
      <div className="card-container">
        {nominativi.map((item) => (
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
