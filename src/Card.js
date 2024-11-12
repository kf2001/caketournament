// src/Card.js
import React from 'react';

const Card = ({ id, nome, livello, gender, squadra,onSelect, onEdit }) => {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>Livello: {livello}</p>
      <p>Gender: {gender}</p>
      <p>Squadra: {squadra}</p>
      <button onClick={() => onSelect(id)}>Seleziona</button>
      <button onClick={onEdit}>Modifica</button>
    </div>
  );
};

export default Card;
