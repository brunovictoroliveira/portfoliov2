import styles from "./LanguageButtons.module.css";

const LanguageButtons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ptbr}></div>
      <div className={styles.english}></div>
    </div>
  );
};

export default LanguageButtons;
