import React from 'react';

const Card = ({ nominativo, onSelect }) => {
  return (
    <div className="card" onClick={onSelect}>
      <h2>{nominativo.nome}</h2>
      <p>Email: {nominativo.email}</p>
      <p>Telefono: {nominativo.telefono}</p>
    </div>
  );
};

export default Card;
