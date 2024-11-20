import React, { useState, useEffect } from 'react';
import FormNominativo from './FormNominativo';
import Card from './Card';
import giocatori from "./giocatori"
import faiSquadre from "./faisquadre"

const App = () => {
  
  const [nominativoSelezionato, setNominativoSelezionato] = useState(null);

  const [nominativi, setNominativi] = useState(giocatori);
 /*  useEffect(() => {
    const datiSalvati = localStorage.getItem('nominativ2');
    if (datiSalvati) {
      giocatori.slice(0,18)
     // setNominativi(JSON.parse(datiSalvati).slice(0,18));
    } else {

      
      // Dati iniziali se non ci sono dati salvati
      setNominativi(
        giocatori.slice(0,18)
      );
    }
  }, []);
 */
/*   useEffect(() => {
    localStorage.setItem('nominativ2', JSON.stringify(nominativi.slice(0,18)));
  }, [nominativi]);
 */
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

  
const Squadre=() => {

    faiSquadre(giocatori, {})
  };

  return (
      <div >
      <h1>Gestione Giocatori</h1>
    
      <button onClick={Squadre()}>Squadre</button>
    
      <div className="card-container" >
        {nominativi.map((item) => (
          <Card
            key={item.id}
            nominativo={item}
            onSelect={() => handleSelect(item.id)}
          />
        ))}
      </div >
      <div >
 <FormNominativo
        nominativo={nominativoSelezionato}
        onUpdate={handleUpdateNominativo}
      />

      </div>
      {/* Passiamo il nominativo selezionato e la funzione di aggiornamento al form */}
     
  </div> 
  );
};

export default App;
