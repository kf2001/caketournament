import React from 'react';

import Card from './Card';

const Mostrasquadra = ({ giocatori }) => {
  return (
    <div >
      {giocatori.map((dato) => (
        <Card key={dato.id} nominativo={dato} />
      ))}
    </div>
  );
};

export default Mostrasquadra;
