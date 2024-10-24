import styles from "./Contact.module.css";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "../../i18n";
import { useTranslation } from "react-i18next";

import PageTitle from "../layout/PageTitle.jsx";
import Form from "../layout/Form/Form.jsx";
import Button from "../layout/Button";

const Contact = () => {
  const { t } = useTranslation();

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1370);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1370);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className={styles.container}>
      <PageTitle title={t("contact.title")} />
      <div className={styles.mainBox}>
        <Form />
        <div className={styles.rightSection}>
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
          {isDesktop && <div className={styles.bvLogoOutlines}></div>}
        </div>
        {!isDesktop && (
          <Link to="/">
            <Button title={t("contact.navigationbutton")} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Contact;
