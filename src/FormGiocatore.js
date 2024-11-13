
import React, { useState, useEffect } from 'react';

const FormGiocatore = ({gioc, onSubmit, onCancel,onChange}) => {
  const [formData, setFormData] = useState({
    id: '',
    livello:'',
    gender: '',
  });

 

  // Riempie il form se un nominativo è selezionato per la modifica
  useEffect(() => {
   
     //setFormData(giocatore);
    
  }, []);

  // Gestione dell'input
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("33333")
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

  const handleSelect = (e) => {
    e.preventDefault();
   console.log(8888)
    // setFormData({ id: giocatore.id, nome:giocatore.nome , livello: giocatore.livello,
    //    squadra: giocatore.squadra , gender: giocatore.gender});
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>{formData.id ? 'Modifica Giocatoreaaa' : 'Aggiungi Giocatoreaaa'}</h2>
      <h2>{} 
         frfff</h2>
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
          value={gioc.nome}
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
