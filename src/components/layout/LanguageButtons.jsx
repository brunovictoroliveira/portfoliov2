import styles from "./LanguageButtons.module.css";
import BrazilFlag from "../../assets/icons/brazil-flag.png";
import USAFlag from "../../assets/icons/usa-flag.png";

const LanguageButtons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ptbr}>
        <img src={BrazilFlag} alt="Brazil Flag" />
      </div>
      <div className={styles.english}>
        <img src={USAFlag} alt="USA Flag" />
      </div>
    </div>
  );
};

export default LanguageButtons;
