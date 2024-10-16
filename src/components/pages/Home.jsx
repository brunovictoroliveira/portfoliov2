import styles from "./Home.module.css";

import { Link } from "react-router-dom";

import "../../i18n";
import { useTranslation } from "react-i18next";

import Photo from "../../assets/imgs/avatar_photo.png";
import Button from "../layout/Button";

const Home = () => {
  const { t, i18n } = useTranslation(); // Hook para acessar as traduções

  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.homeText}>
          <h1 className={styles.title}>
            {t("home.firstsentence")}
            <br></br>
            {t("home.secondsentence")}
            <span className={styles.blue}>{t("home.thirdsentence")},</span>
            <br></br>
            {t("home.fourthsentence")}
            <span className={styles.pink}>{t("home.fifthsentence")}</span>
            <br></br>
          </h1>
          <p className={styles.summary}>{t("home.summaryp1")}</p>
          <br></br>
          <p className={styles.summary}>{t("home.summaryp2")}</p>
        </div>
        <Link to="/skills">
          <Button title={t("home.navigationbutton")} />
        </Link>
      </div>
      <div className={styles.box2}>
        <div className={styles.photo}>
          <img src={Photo} alt={t("home.alttext")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
