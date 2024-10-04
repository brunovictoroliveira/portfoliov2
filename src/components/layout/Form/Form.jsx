import styles from "./Form.module.css";

import { useState } from "react";

import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || company === "" || email === "" || message === "") {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const templateParams = {
      from_name: name,
      company: company,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    };

    emailjs
      .send(
        "service_v6hdm0f",
        "template_r3c30yc",
        templateParams,
        "tE4irlkir5OHSVQdP"
      )
      .then(
        (response) => {
          alert("Mensagem enviada com sucesso!");
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setCompany("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={sendEmail}>
        <div className={styles.topSection}>
          <div className={styles.leftSection}>
            <label htmlFor="name">Nome*:</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label htmlFor="company">Empresa*:</label>
            <input
              type="text"
              placeholder="Digite o nome da sua empresa"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
            <label htmlFor="email">E-mail*:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="phoneNumber">Telefone:</label>
            <input
              type="tel"
              placeholder="+00 99 123456789"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className={styles.rightSection}>
            <label htmlFor="message">Mensagem*:</label>
            <textarea
              placeholder="Digite sua mensagem aqui"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <button type="submit">ENVIAR</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
