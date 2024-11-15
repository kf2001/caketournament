import React, { useState, useEffect } from 'react';

const FormNominativo = ({ nominativo, onUpdate }) => {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    email: '',
    telefono: '',
  });

  // Aggiorna il form quando cambia il nominativo selezionato
  useEffect(() => {
    if (nominativo) {
      setFormData(nominativo);
    }
  }, [nominativo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div>
      <h2>Modifica Nominativo</h2>
      <form onSubmit={handleSubmit}>
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
