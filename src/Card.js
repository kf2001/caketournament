import React from 'react';

const Card = ({ nominativo, onSelect }) => {
  return (
    <div className="card" onClick={onSelect}>
      <h2>{nominativo.nome}</h2>
      <p>livello: {nominativo.livello}</p>
      <p>gender: {nominativo.gender}</p>
      <p>squadra: {nominativo.squadra}</p>
    
      <button>Seleziona</button>
    </div>
  );
};

export default Card;
