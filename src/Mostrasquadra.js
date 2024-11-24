import React from 'react';


import ListaNomi from './ListaNomi';

const Mostrasquadra = ({ giocatori ,squadra}) => {
  return (
    <div >
      {giocatori.map((dato,idx) => (
        <ListaNomi key={dato.id} nominativo={dato} squadra={squadra} id={idx}/>
      ))}
    </div>
  );
};

export default Mostrasquadra;
