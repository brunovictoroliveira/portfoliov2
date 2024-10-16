import styles from "./Contact.module.css";

import { Link } from "react-router-dom";

import "../../i18n";
import { useTranslation } from "react-i18next";

import PageTitle from "../layout/PageTitle.jsx";
import Form from "../layout/Form/Form.jsx";

import GmailIcon from "../../assets/icons/gmail.svg";

const Contact = () => {
  const { t, i18n } = useTranslation(); // Hook para acessar as traduções

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <PageTitle title={t("contact.title")} />
        <Form />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.email}>
          <div className={styles.gmailLogo}>
            <img src={GmailIcon} alt="Gmail Icon" />
          </div>
          <span>obrunovictor31@gmail.com</span>
        </div>
        <div className={styles.buttons}>
          <Link
            to="https://www.linkedin.com/in/brunovictorlima/"
            target="_blank"
          >
            <div className={styles.linkedin}></div>
          </Link>
          <Link to="https://github.com/brunovictorlima" target="_blank">
            <div className={styles.github}></div>
          </Link>
        </div>
        <div className={styles.bvLogoOutlines}></div>
      </div>
    </div>
  );
};

export default Contact;
