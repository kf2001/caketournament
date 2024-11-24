import React from 'react';

const ListaNomi = ({ nominativo }) => {
  return (
    <div className="card" >
      <span>{nominativo.nome}</span>
      <span> {nominativo.livello}</span>
      <span>{nominativo.sesso}</span>
      <span>{nominativo.squadra}</span>
     
     
    
    
  
    </div>
  );
};

export default ListaNomi;
