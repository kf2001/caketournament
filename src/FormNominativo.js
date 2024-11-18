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
          <label>livello:</label>
          <input
            type="number"
            name="livello"
            value={formData.livello}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>sesso:</label>
          <input
            type="text"
            name="sesso"
            value={formData.sesso}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>squadra:</label>
          <input
            type="number"
            name="squadra"
            value={formData.squadra}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>disponibilita:</label>
          <input
            type="number"
            name="disponibilita"
            value={formData.disponibilita}
            onChange={handleChange}
          />
        </div>
       
        <button type="submit">Salva</button>
      </form>
    </div>
  );
};

export default FormNominativo;
