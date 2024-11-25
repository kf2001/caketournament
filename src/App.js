import React, { useState, useEffect } from 'react';
import FormNominativo from './FormNominativo';
import Card from './Card';
import giocatori from "./giocatori"
import faiSquadre from "./faisquadre"
import Mostrasquadra from "./Mostrasquadra"



import 'underscore'

let _ = require('underscore')

const App = () => {


  
var [migliore, setMigliore] = useState(0);

  const [count, setCount] = useState(0);

  const increment = () => {
  setCount(count + 1);
   // if (count >= 1) faiSquadre(giocatori, {})
  
  };
  const handleClick = () => {
    // eslint-disable-next-line no-const-assign
    setMigliore(faiSquadre(giocatori, {}))
   
   // setMigliore(faiSquadre(giocatori, {}));
   };
 

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


  const Squadre = () => {

    // faiSquadre(giocatori, {})

  };

  return (


    <div className="grid-container">
<div>
<h1>Clicca sul pulsante</h1>
      <button onClick={handleClick}>Cliccami</button>
    </div>

      <div>
        <span>{migliore}</span>
        
        <button onClick={increment}>Fai Squadre</button>
      </div>

      <div className="grid-item" >  <h1>Gestione Giocatori</h1>
        <div className="card-container">
          {/* <button onDoubleClick={Squadre()}>Squadre</button> */}
          {nominativi.map((item) => (
            <Card
              key={item.id}
              nominativo={item}
              onSelect={() => handleSelect(item.id)}
            />
          ))}
        </div ></div>
      <div className="grid-item">
        <FormNominativo
          nominativo={nominativoSelezionato}
          partecipanti={giocatori}
          onUpdate={handleUpdateNominativo}
        />
      </div>

      <div className="grid-item">
        <div className="listagioc">
          <Mostrasquadra
            giocatori={
              //  giocatori
              giocatori.filter((gg) => gg.squadra === 0)
            }

          />

        </div>
      </div>
      <div className="grid-item">
        <div className="listagioc">
          <Mostrasquadra
            giocatori={
              //  giocatori
              giocatori.filter((gg) => gg.squadra === 1)
            }

          />
        </div> </div></div>

  );
};


export default App;
