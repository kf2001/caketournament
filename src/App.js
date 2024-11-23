import React, { useState, useEffect } from 'react';
import FormNominativo from './FormNominativo';
import Card from './Card';
import giocatori from "./giocatori"
import faiSquadre from "./faisquadre"
import Mostrasquadra from "./Mostrasquadra"



import 'underscore'

let _ = require('underscore')

const App = () => {
  
  const [nominativoSelezionato, setNominativoSelezionato] = useState(null);

  const [nominativi, setNominativi] = useState(giocatori);
 
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

     
     
      <Mostrasquadra
      giocatori={
      //  giocatori
 giocatori.filter((gg) => gg.sesso==='F')
      }
          
          />
  </div>  </div>
  
  );
};

export default App;
