import React from 'react';


import ListaNomi from './ListaNomi';

const Mostrasquadra = ({ giocatori ,squadra}) => {
  return (
    <div >
      {giocatori.map((dato) => (
        <ListaNomi key={dato.id} nominativo={dato} squadra={squadra}/>
      ))}
    </div>
  );
};

export default Mostrasquadra;
