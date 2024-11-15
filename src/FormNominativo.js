import React from 'react';

const FormNominativo = ({ nominativo, onUpdateField }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Invia l'aggiornamento al componente genitore
    onUpdateField(nominativo.id, name, value);
  };

  return (
    <div>
      <h2>Modifica Nominativo</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={nominativo.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={nominativo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Telefono:</label>
          <input
            type="text"
            name="telefono"
            value={nominativo.telefono}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default FormNominativo;
