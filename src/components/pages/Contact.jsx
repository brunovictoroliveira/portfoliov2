import styles from "./Contact.module.css";

import PageTitle from "../layout/PageTitle.jsx";
import Form from "../layout/Form/Form.jsx";

import GmailIcon from "../../assets/icons/gmail.svg";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <PageTitle title="Entre em contato" />
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
          <div className={styles.linkedin}></div>
          <div className={styles.github}></div>
        </div>
        <div className={styles.bvLogoOutlines}></div>
      </div>
    </div>
  );
};

export default Contact;
