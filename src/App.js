import React, { useState } from 'react';
import FormNominativo from './FormNominativo';
import Card from './Card';

const App = () => {
  const [nominativi, setNominativi] = useState([
    { id: 1, nome: 'Mario Rossi', email: 'mario.rossi@example.com', telefono: '1234567890' },
    { id: 2, nome: 'Luigi Verdi', email: 'luigi.verdi@example.com', telefono: '0987654321' },
    { id: 3, nome: 'Anna Bianchi', email: 'anna.bianchi@example.com', telefono: '1122334455' },
  ]);

  const [nominativoSelezionato, setNominativoSelezionato] = useState(null);

  const handleSelect = (id) => {
    const nominativo = nominativi.find((item) => item.id === id);
    setNominativoSelezionato(nominativo);
  };

  const handleUpdateField = (id, fieldName, value) => {
    const nuoviNominativi = nominativi.map((item) =>
      item.id === id ? { ...item, [fieldName]: value } : item
    );
    setNominativi(nuoviNominativi);
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
      {nominativoSelezionato && (
        <FormNominativo
          nominativo={nominativoSelezionato}
          onUpdateField={handleUpdateField}
        />
      )}
    </div>
  );
};

export default App;
