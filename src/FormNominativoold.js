// src/FormNominativo.js
import React, { useState } from 'react';

const FormNominativo = ({ nominativo, onUpdate,onSelect }) => {
  const [formData, setFormData] = useState(nominativo);

  // Gestisce il cambiamento dei campi del form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  


  // Gestisce l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div>
      <h2>Form Nominativo</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Telefono:</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salva</button>
      </form>
    </div>
  );
};

export default FormNominativo;
