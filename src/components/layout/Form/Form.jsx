import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <div className="left-section">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Empresa" />
        <input type="email" placeholder="E-mail" />
        <input type="tel" placeholder="Telefone" />
      </div>
      <div className="right-section">
        <textarea placeholder="Mensagem" />
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </div>
  );
};

export default Form;
