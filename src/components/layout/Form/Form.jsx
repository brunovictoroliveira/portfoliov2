import styles from "./Form.module.css";

import { useState } from "react";

import emailjs from "@emailjs/browser";

import "../../../i18n";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
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
            <label htmlFor="name">{t("contact.formlabel1")}*:</label>
            <input
              type="text"
              placeholder={t("contact.placeholder1")}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label htmlFor="company">{t("contact.formlabel2")}*:</label>
            <input
              type="text"
              placeholder={t("contact.placeholder2")}
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
            <label htmlFor="email">{t("contact.formlabel3")}*:</label>
            <input
              type="email"
              placeholder={t("contact.placeholder3")}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="phoneNumber">{t("contact.formlabel4")}:</label>
            <input
              type="tel"
              placeholder={t("contact.placeholder4")}
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className={styles.rightSection}>
            <label htmlFor="message">{t("contact.formlabel5")}*:</label>
            <textarea
              placeholder={t("contact.placeholder5")}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <button type="submit">{t("contact.formsubmit")}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
