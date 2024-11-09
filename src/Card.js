// src/Card.js
import React from 'react';

const Card = ({ nome, livello,squadra, gender }) => {
  return (
    <div class="card">
      <h2>{nome}</h2>
      <p>Livello: {livello}</p>
      <p>Gender: {gender}</p>
      <p>Squadra: {squadra}</p>
    </div>
  );
};

export default Card;
