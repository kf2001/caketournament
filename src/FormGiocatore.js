
import React, { useState, useEffect } from 'react';

const FormGiocatore = ({ giocatoreSelezionato, onSubmit, onCancel,onSelect}) => {
  const [formData, setFormData] = useState({
    id: null,
    livello: '',
    squadra: '',
    gender: '',
  });

  // Riempie il form se un nominativo è selezionato per la modifica
  useEffect(() => {
    if (giocatoreSelezionato) {
      setFormData(giocatoreSelezionato);
    }
  }, [giocatoreSelezionato]);

  // Gestione dell'input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ id: null, nome: '', livello: '', squadra: '' , gender: ''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{formData.id ? 'Modifica Giocatore' : 'Aggiungi Giocatore'}</h2>
      <div>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="livello"
          placeholder="livello"
          value={formData.livello}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="squadra"
          placeholder="squadra"
          value={formData.squadra}
          onChange={handleChange}
          required
        />
      </div>
<div>
      <input
          type="text"
          name="gender"
          placeholder="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{formData.id ? 'Salva Modifiche' : 'Aggiungi'}</button>
      {formData.id && <button type="button" onClick={onCancel}>Annulla</button>}
    </form>
  );
};

export default FormGiocatore;
