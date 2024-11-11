// src/Card.js
import React from 'react';

const Card = ({ id, nome, email, telefono, onSelect, onEdit }) => {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>Email: {email}</p>
      <p>Telefono: {telefono}</p>
      <button onClick={() => onSelect(id)}>Seleziona</button>
      <button onClick={onEdit}>Modifica</button>
    </div>
  );
};

export default Card;
