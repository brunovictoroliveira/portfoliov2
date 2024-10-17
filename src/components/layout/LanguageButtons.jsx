import { useTranslation } from "react-i18next";
import styles from "./LanguageButtons.module.css";
import BrazilFlag from "../../assets/icons/brazil-flag.png";
import USAFlag from "../../assets/icons/usa-flag.png";

const LanguageButtons = () => {
  const { i18n } = useTranslation(); // Hook para acessar o idioma atual

  // Função para alterar o idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.container}>
      {/* Bandeira do Brasil */}
      <div className={styles.ptbr} onClick={() => changeLanguage("pt-BR")}>
        <img
          src={BrazilFlag}
          alt="Brazil Flag"
          className={i18n.language === "pt-BR" ? "" : styles.unselected}
        />
      </div>

      {/* Bandeira dos EUA */}
      <div className={styles.english} onClick={() => changeLanguage("en-US")}>
        <img
          src={USAFlag}
          alt="USA Flag"
          className={i18n.language === "en-US" ? "" : styles.unselected}
        />
      </div>
    </div>
  );
};

export default LanguageButtons;
