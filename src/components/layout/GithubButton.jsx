import styles from "./GithubButton.module.css";

import "../../i18n";
import { useTranslation } from "react-i18next";

const GithubButton = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.button}>
      <div className={styles.githubIcon}></div>
      <div className={styles.text}>{t("projects.githubbutton")}</div>
    </div>
  );
};

export default GithubButton;
