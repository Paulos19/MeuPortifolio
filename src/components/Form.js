import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Seu Nome</label>
            <input type="text"></input>

            <label>Email</label>
            <input type="email"></input>

            <label>Assunto</label>
            <input type="assunto"></input>

            <label>Mensagem</label>
            <textarea rows="6"
             placeholder="Escreva Sua Mensagem Aqui" />
             <button className="btn"><a href="mailto:paulohenrique.012araujo@gmail.com">Enviar</a></button>
        </form>
    </div>
  );
};

export default Form
