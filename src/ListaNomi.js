import React from 'react';

const ListaNomi = ({ nominativo,idx }) => {
  return (
    <div className="card" >
        <span>{idx}</span>
      <span>{nominativo.nome}</span>
      <span> {nominativo.livello}</span>
      <span>{nominativo.sesso}</span>
      <span>{nominativo.squadra}</span>
     
     
    
    
  
    </div>
  );
};

export default ListaNomi;
