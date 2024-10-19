import styles from "./Home.module.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../i18n";
import { useTranslation } from "react-i18next";

import Button from "../layout/Button";

const Home = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.box1}>
          <div className={styles.title}>
            <span>{t("home.firstsentence")}</span>
            <br></br>
            <span>{t("home.secondsentence")}</span>
            <span className={styles.blue}>{t("home.thirdsentence")}</span>
            <br></br>
            <span>{t("home.fourthsentence")}</span>
            <span className={styles.pink}>{t("home.fifthsentence")}</span>
            <br></br>
          </div>
          <p className={styles.summary}>{t("home.summaryp1")}</p>
          <br></br>
          <p className={styles.summary}>{t("home.summaryp2")}</p>
          {/* Renderizar o botão apenas para telas desktop */}
          {isDesktop && (
            <Link to="/skills">
              <Button title={t("home.navigationbutton")} />
            </Link>
          )}
        </div>
        <div className={styles.photo}></div>
      </div>
      {/* Renderizar o botão fora dos boxes para tablets e smartphones */}
      {!isDesktop && (
        <div className={styles.buttonOutside}>
          <Link to="/skills">
            <Button title={t("home.navigationbutton")} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
