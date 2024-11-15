import React, { useState } from 'react';
import FormNominativo from './FormNominativo';
import Card from './Card';

const App = () => {
  // Stato per l'array di nominativi
  const [nominativi, setNominativi] = useState([
    { id: 1, nome: 'Mario Rossi', email: 'mario.rossi@example.com', telefono: '1234567890' },
    { id: 2, nome: 'Luigi Verdi', email: 'luigi.verdi@example.com', telefono: '0987654321' },
    { id: 3, nome: 'Anna Bianchi', email: 'anna.bianchi@example.com', telefono: '1122334455' },
  ]);

  // Stato per il nominativo selezionato
  const [nominativoSelezionato, setNominativoSelezionato] = useState(null);

  // Funzione per gestire la selezione di una card
  const handleSelect = (id) => {
    const nominativo = nominativi.find((item) => item.id === id);
    setNominativoSelezionato(nominativo);
  };

  // Funzione per aggiornare il nominativo
  const handleUpdateNominativo = (nuovoNominativo) => {
    const nuoviNominativi = nominativi.map((item) =>
      item.id === nuovoNominativo.id ? nuovoNominativo : item
    );
    setNominativi(nuoviNominativi);
    setNominativoSelezionato(null); // Resetta il form dopo l'aggiornamento
  };

  return (
    <div>
      <h1>Gestione Nominativi</h1>
      <div className="card-container">
        {nominativi.map((item) => (
          <Card
            key={item.id}
            nominativo={item}
            onSelect={() => handleSelect(item.id)}
          />
        ))}
      </div>
      {/* Passiamo il nominativo selezionato e la funzione di aggiornamento al form */}
      <FormNominativo
        nominativo={nominativoSelezionato}
        onUpdate={handleUpdateNominativo}
      />
    </div>
  );
};

export default App;
